const dotenv = require('dotenv');
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/productModel")

const port = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send("Yes yes again")
})

// GET all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

// Get a single product
app.get("/products/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

app.post("/products", async (req, res) => {  
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);    
    } catch (error) {
      console.log(error.message)
      res.status(500).json({message: error.message});
    }
  })

app.put("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id)
    if(!product) {
      return res.status(400)
    }
    const updatedProduct = await Product 
  } catch (error) {
    
  }
})

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Connected!')    
    app.listen(port, () => console.log(`Listening on port ${port}`))
  }).catch( (error) => {
    console.log(error);
  });

