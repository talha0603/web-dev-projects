// const express = require('express')
import 'dotenv/config'
import express from 'express'
import connection from './connection/connection.js'
import router from './routes/auth.js';
import routerList from './routes/list.js'
const app = express();

// we want data in json so that's why
app.use(express.json());

connection();


app.get('/' , (req , res) => {
    res.send('Todo List App')
});
// route to register in rhe app
app.use('/api/v1', router )
app.use('/api/v2', routerList )

const PORT= process.env.PORT || 7000
app.listen( PORT, () => {
    console.log('App Server Is Working On Port: ', PORT);
    
} )