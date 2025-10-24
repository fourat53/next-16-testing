import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("Please define the DATABASE_URL environment variable");
}

declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

const cached = global.mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) {
    console.log("Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Establishing new MongoDB connection...");
    cached.promise = mongoose
      .connect(DATABASE_URL as string)
      .then((mongoose) => {
        console.log("MongoDB connection established successfully!");
        return mongoose.connection;
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to MongoDB");
      });
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;
  console.log("MongoDB connection cached.");
  return cached.conn;
}

export default dbConnect;
