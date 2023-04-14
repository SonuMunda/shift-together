const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

app.use(cookieParser());
dotenv.config( { path: './config.env' } );
require('./db/conn');
const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

// set headers for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// start the server
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
