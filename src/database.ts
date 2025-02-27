import * as mongoose from "mongoose";
import config from "./config";

class Database {
  public static async connect() {
    try {
      await mongoose.connect(config.MONGODB_URL, {
        dbName: 'checkpoint'
      });
      console.log("Connected to MongoDB");
      return true;
    } catch (error: any) {
      console.error("Error connecting to MongoDB", error?.message || error);
      return false;
    }
  }

  public static async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB");
      return true;
    } catch (error: any) {
      console.error("Error disconnecting from MongoDB", error?.message || error);
      return false;
    }
  }

  public static getInstance() {
    return mongoose;
  }
}

export default Database;