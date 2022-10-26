import express from 'express';
import cors from 'cors';
import router  from './routes/index.js';
import cookieParser from'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

/* middlewares */
app.use(cors({ origin:['http://127.0.0.1:3000','http://localhost:3000'], credentials:true}));
app.use(express.json());
app.use(cookieParser());

app.use('',router)


app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
    
});