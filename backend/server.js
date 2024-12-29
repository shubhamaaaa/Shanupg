import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import productRoute from './routes/productRoute.js';
import connectCloudinary from './config/cloudinary.js';
import bookingRoutes from "./routes/bookingRoutes.js";







//App Config
const app=express();
const port=process.env.PORT || 3000;
connectDB();
connectCloudinary();
//Middleware
app.use(express.json())
app.use(cors())


//Api endpoint
app.use('/api/product',productRoute)

app.use("/api/bookings", bookingRoutes);


// Serve uploads directory statically
app.use("/uploads", express.static("uploads"));

app.get('/',(req,res)=>{
    res.send("API WORKING")
})


app.listen(port,()=>console.log("Server Started on PORT:"+ port))