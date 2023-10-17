//express ka server hoga

import express from 'express';

import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';


import Route from './routes/route.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended : true}));

//when we get different characters in the url the broiwser will replace theses characters with other some random characters for that we need to use the encoded method
app.use(bodyParser.urlencoded({ extended : true}));
app.use('/',Route);

Connection() ;

const PORT = 8000 ;

app.listen(PORT , () => console.log(`server is successfully on port ${PORT}`))