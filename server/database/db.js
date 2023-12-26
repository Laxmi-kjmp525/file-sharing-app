import mongoose from "mongoose";

const DBConnection = async () => {
  const MONODB_URL = `mongodb+srv://laxmi:kumari@file-sharing.n0a5gk4.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONODB_URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting with the database", error.message);
  }
};

export default DBConnection;
