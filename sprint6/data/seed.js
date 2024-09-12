import mongoose from "mongoose";
import Products from "../models/Product.js";
import data from "./mock.js";
import * as dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.DATABASE_URL);

await Products.deleteMany({});
await Products.insertMany(data);

mongoose.connection.close();