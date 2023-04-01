const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config( { path: './config.env' } );
require('./db/conn');
const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

// start the server
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
