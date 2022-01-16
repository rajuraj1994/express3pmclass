const express=require('express')
require('dotenv').config()

const db=require('./database/connection')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const expressValidator=require('express-validator')
const cookieParser=require('cookie-parser')
const cors=require('cors')


const categoryRoute=require('./routes/categoryRoute')
const productRoute=require('./routes/productRoute')
const authRoute=require('./routes/authRoute')
const orderRoute=require('./routes/orderRoute')
const paymentRoute=require('./routes/paymentRoute')


const app=express()


//middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/public/uploads',express.static('public/uploads'))
app.use(expressValidator())
app.use(cookieParser())
app.use(cors())



//routes
app.use('/api',categoryRoute)
app.use('/api',productRoute)
app.use('/api',authRoute)
app.use('/api',orderRoute)
app.use('/api',paymentRoute)



const port=process.env.PORT || 8000

//listen to port
app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})



