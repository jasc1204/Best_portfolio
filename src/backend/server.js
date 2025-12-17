// server.js
import express from 'express';
import cors from 'cors';
import axios from 'axios';
// import path, {dirname} from 'path';
// import { fileURLToPath } from 'url';
import { client_id, redirect_uri,client_secret } from './API/keys.js'; // shouldnt this be in env file?
import querystring from 'querystring';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js'; 
const app = express();
const PORT = process.env.PORT || 5000;

let spotifyTokens = {}; // key → tokens

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// Routers
app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

app.get('/', (req, res) => { 
  res.json({ message: 'hi' }); 
})

// WHY is this important?
function generateRandomString(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

app.use(cors());
app.use(express.json());

// simple GET endpoint
// we dont really care about req here because there are not any query params. 
// res is for expresisng on the same url.   res.json({ message: 'hi' }); would be send the same url but with a query response of message=hi 

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email ugc-image-upload user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-read-private playlist-modify-private user-library-modify';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', async (req, res) => {

  var code = req.query.code || null;
  var state = req.query.state || null;
  var error = req.query.error || null;

  if (error) {
    console.error('Callback Error: ', error);
    res.send(`Callback Error: `, error);
    return;
  }

  if (state === null) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } 
  else {
  //   second argument of axios.post is the body of the post request
    try {
    const response = await axios.post('https://accounts.spotify.com/api/token',
      querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))   
        }
      }
    );

    const {
      access_token,
      refresh_token,
      scope,
      expires_in,
      token_type,
    } = response.data;

      spotifyTokens['jose'] = response.data;


    // THIS is where we actually answer the browser:
      // res.json(response.data);
            res.redirect('http://localhost:5173?logged_in=true');

    } catch (error) {
      console.error('Error getting Tokens:', error);
      res.send(`Error getting Tokens: ${error}`); 
  }
}
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
