import express from 'express'
import mongoose, { Schema } from 'mongoose';
const app = express()
const port = process.env.PORT
import cors from 'cors'
app.use(cors())
app.use(express.json())
import 'dotenv/config'

app.get('/', async(req, res) => {
    try {
        const foods = await FoodModel.find({})
        res.send(foods)
    } catch (error) {
        res.send(error)
    }
  
})

app.get('/:id', async(req, res) => {
    const {id} = req.params
    try {
        const foods = await FoodModel.findById(id)
        res.send(foods)
    } catch (error) {
        res.send(error)
    }
  })
  
  app.post('/', async(req, res) => {
    const {image,name,ingridient,price} = req.body
    try {
        const foods = new FoodModel({image,name,ingridient,price})
        await foods.save()
        res.send(foods)
    } catch (error) {
        res.send(error)
    }
  })
  
  app.put('/:id', async(req, res) => {
    const {id} = req.params
    const {image,name,ingridient,price} = req.body
    try {
        const foods = await FoodModel.findByIdAndUpdate(id,{image,name,ingridient,price})
        res.send(foods)
    } catch (error) {
        res.send(error)
    }
  })
  
  app.delete('/:id', async(req, res) => {
    const {id} = req.params
    try {
        const foods = await FoodModel.findByIdAndDelete(id)
        res.send(foods)
    } catch (error) {
        res.send(error)
    }
  })

  
const foodSchema = new Schema({
    image: String, 
    name: String,
    ingridient: String,
    price: Number
  })

  const FoodModel = mongoose.model('FoodModel', foodSchema);


  mongoose.connect(process.env.DB_SECRET_KEY)
  .then(() => console.log('Connected!'))
  .catch(() => console.log('Not Connected!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})