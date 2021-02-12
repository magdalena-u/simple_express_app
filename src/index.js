import express from 'express';
import bodyParser from 'body-parser';

import mainRoute from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');

app.use(mainRoute);

app.listen(3000);
