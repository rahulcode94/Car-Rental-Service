import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";



//initialize Exprees app
const app = express()

//connect db
await connectDB()


//Middleware
app.use(cors());
app.use(express.json())

//route
app.get("/",(req,res)=>res.send("Server is running"))

//user Router
app.use('/api/user',userRouter)



//port
const PORT = process.env.PORT || 3000


app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
