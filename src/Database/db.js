import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
  await mongoClient.connect();
} catch (error) {
  console.log(error.message);
}
const db = mongoClient.db("sneakerhead-API");
export default db;
