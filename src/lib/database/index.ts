import mongoose from "mongoose";

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

/* 
This code snippet exports an asynchronous function called connectToDatabase that connects to a MongoDB database using the mongoose library.
It first checks if a connection is already cached, and if so, it returns the cached connection.
If not, it checks if the MONGODB_URI environment variable is defined, and if not, it logs an error and throws an error. 
Then it connects to the MongoDB database using the mongoose.connect method, caches the connection, and returns it.

*/
export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!MONGODB_URI) {
    console.error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "gaming-event-managment",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
