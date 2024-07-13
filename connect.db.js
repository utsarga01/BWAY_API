import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://regmiutsarga7:Nipani321@cluster0.kpjiesk.mongodb.net/Broadway?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Database connection is established...");
  } catch (error) {
    console.log("Database connection failed....");
    console.log("error.message");
  }
};
export default connectDB;
