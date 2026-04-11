import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("assignments", schema);
export default model;