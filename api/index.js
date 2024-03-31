import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import userRouters from './routes/user.route.js';
import authRouters from './routes/auth.route.js';
dotenv.config();

mongoose
.connect( process.env.MONGO )
.then(
  () => {console.log('mongodb is connected..');}
)
.catch(
  (err) => {console.log(err);}
)

const app = express()
app.use(bodyParser.json());
app.listen(3000, () => {
  console.log('Server running on port number 3000');
})

app.use('/api/user', userRouters);
app.use('/api/auth', authRouters);