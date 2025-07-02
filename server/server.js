import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebHook.js';


const app = express();
connectDB()
app.use(cors())
app.use(express.json())

app.use(clerkMiddleware())

// API FOR CLERK WEHBOOK 
app.use('/api/clerk', clerkWebhooks)
app.get('/', (res, req) => res.send("Api is working"))

const PORT = process.env.PORT || 3000

app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})