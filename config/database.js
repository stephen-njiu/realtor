import mongoose from "mongoose";

let connected = false

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // If hte database is already connected, don't connect again

    if(connected){
        console.log('MongoDB is already connected')
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true
    } catch (error) {
        console.log(error)
    }
}

export default connectDB