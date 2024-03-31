import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

mongoose
.connect( process.env.MONGO /* npm i dotenv */)
.then(
  () => {console.log('mongodb is connected..');}
)
.catch(
  (err) => {console.log(err);}
)

const app = express()
app.listen(3000, () => {
  console.log('Server running on port number 3000');
})

