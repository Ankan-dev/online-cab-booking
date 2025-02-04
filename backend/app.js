require('dotenv').config();
const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const connectDataBase=require('./database/connDb.js')
const userRouter=require('./routes/user.routes.js');
const captainRouter=require('./routes/captain.routes.js');
const mapRouter=require('./routes/maps.routes.js');
const rideRouter=require('./routes/ride.routes.js');

const app=express();

app.use(cors({origin:process.env.BASE_URL,credentials:true}));
app.use(cookieParser());

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({limit:'16kb',extended:true}))


app.use('/app',userRouter);
app.use('/app',captainRouter);
app.use('/app',mapRouter);
app.use('/app',rideRouter);



const port=process.env.PORT || 3000;



connectDataBase();

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
})