const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected ah successfully ${connect.connection.host}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit();
  }
};

module.exports = connectDB;
