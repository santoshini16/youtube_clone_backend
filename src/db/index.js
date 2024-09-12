const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to MongoDB without deprecated options
    const connectionInstance = await mongoose.connect(process.env.MONGO_URL);

    // Log the host of the connected database
    console.log(`MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Errors:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
