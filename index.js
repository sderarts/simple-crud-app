import express from 'express'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';
import Product from './models/product.model.js'
import productRouter from './routes/product.route.js';

dotenv.config();
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(3000, () =>{
    console.log("Server running on port 3000");
    });

//routes
app.get('/', (req,res) => {
    res.send("Hello from Node API Server");
}); 
app.use('/api/products', productRouter)

const db_url = process.env.DB_URL
console.log(db_url);

mongoose.connect(`${db_url}`)
  .then(() => {
    console.log('Connected to the database!')
    })
  .catch((error)=>{
    console.log("Connection failed!", error);
  });