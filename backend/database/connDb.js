const mongoose=require('mongoose');

const connectDataBase=async ()=>{
    try {
        const connect=await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
        if(connect){
            console.log("Database is connected")
            
        }
    } catch (error) {
        console.log("Error in connecting the database: ",error.message);
    }
    
}

module.exports=connectDataBase;