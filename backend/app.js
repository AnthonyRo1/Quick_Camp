const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const {environment} = require('./config');
const isProduction = environment === 'production';


const routes = require("./routes");

const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());



// Security Middleware to enable cors only development 
if (!isProduction) {
  app.use(cors());
}

// helmet helps a variety of headers to better secure your app
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
  })
);

// Set the _csrfToken and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true
    }
  })
)


app.use(routes);



module.exports = app;