import mongoose from "mongoose";

const connectDb = async () => {
  if (mongoose.connections[0].readyState) {
    // Already connected
    return;
  }

  console.log("Connecting to MongoDB...");
  await mongoose.connect(process.env.MONGO_DB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: "work_Manager", // Make sure to specify your DB name here
  });
  console.log("MongoDB connected successfully");
};

export default connectDb;