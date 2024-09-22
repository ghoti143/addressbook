import express from 'express';
import * as bodyParser from 'body-parser';
import { index } from './routes/index';
import { persons } from './routes/persons';

export const app = express();

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for json body parsing
app.use(bodyParser.json({ limit: '5mb' }));

app.use('/', index);
app.use('/persons', persons);
