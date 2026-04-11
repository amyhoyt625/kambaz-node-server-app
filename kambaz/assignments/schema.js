import mongoose from "mongoose";
const schema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  points: Number,
  dueDate: String,
  availableFrom: String,
  availableUntil: String,
  course: String,
});
export default schema;