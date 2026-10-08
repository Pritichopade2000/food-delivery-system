require('dotenv').config();
const express=require('express');const cors=require('cors');const http=require('http');const {Server}=require('socket.io');const mongoose=require('mongoose');
const app=express();const server=http.createServer(app);const io=new Server(server,{cors:{origin:'*'}});
app.use(cors());app.use(express.json());
app.get('/api/health',(req,res)=>res.json({ok:true,service:'FoodHub API',time:new Date().toISOString()}));
app.set('io',io);
app.use('/api/auth',require('./routes/auth'));
app.use('/api/foods',require('./routes/foods'));
app.use('/api/orders',require('./routes/orders'));
app.use('/api/users',require('./routes/users'));
io.on('connection',socket=>{socket.on('join-order',id=>socket.join(`order:${id}`));});
const PORT=process.env.PORT||5000;
if(process.env.MONGO_URI){mongoose.connect(process.env.MONGO_URI).then(()=>server.listen(PORT,()=>console.log(`FoodHub API running on ${PORT}`))).catch(e=>{console.error(e);process.exit(1);});}else{server.listen(PORT,()=>console.log(`FoodHub API running on ${PORT} (MongoDB not configured)`));}
