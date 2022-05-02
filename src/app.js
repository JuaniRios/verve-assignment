const fs = require('fs');

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const showdown = require('showdown');

showdown.setFlavor('vanilla');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

let README_to_html = '';
const README_to_txt = fs.readFileSync('README.md', 'utf8');


const converter = new showdown.Converter();
README_to_html = converter.makeHtml(README_to_txt);
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(README_to_html);
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
