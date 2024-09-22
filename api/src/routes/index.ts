import express from 'express';

export const index = express.Router();

/* GET home page. */
index.get('/', function (_, res) {
  res.render('index', { title: 'Express' });
});
