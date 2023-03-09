import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import userRouter from './routes/user.routes.js'
import propertyRouter from './routes/property.routes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}))

app.get('/',(req,res)=>{
    res.send({message:'Hello World!'})
})

app.use('/api/v1/users',userRouter)
app.use('/api/v1/properties',propertyRouter)
// const MONGODB_URL= `mongodb+srv://Prajyot:Qwerty%40123@cluster0.j43b1bv.mongodb.net/?retryWrites=true&w=majority`

const startServer = async () => {
    try {
        // connectDB(MONGODB_URL)
        connectDB(process.env.MONGODB_URL)
        app.listen(8080,()=>console.log('Server Started on port http://localhost:8080'));
    } catch(error){
        console.log(error);
    }
}
startServer();