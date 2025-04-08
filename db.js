import mongoose from 'mongoose';  
const connectDB = async () => {
    try {
     const connection = await mongoose.connect(
      mongodb+srv //malikaadil1225:17JFzaAv65tZfroh@cluster0.kyvof2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
     );
     console.log("MongoDB connected secuss:",connection.connection.host);    
    
}
catch (error) {
    console.log("MongoDB connection failed:",error);
}
};
export default connectDB; 