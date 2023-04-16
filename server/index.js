import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors';
dotenv.config();

import dalleRoutes from './routes/dalle.routes.js'

const app = express();
//to setup cross origin 
app.use(cors());
//to specify weight of the payload that we can send i.e 50mb files only accepted
app.use(express.json({limit:"50mb"}));

//using dalle routes
app.use('/api/v1/dalle',dalleRoutes);


app.get('/',(req,res) => {
    res.status(200).json({message : "Hello from Dall E"});
})

app.listen(8080,() => console.log("Server has started on port 8080"))