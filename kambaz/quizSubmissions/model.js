import mongoose from "mongoose";
import schema from "./schema.js";
// model object; takes schema which defines shape/rules for data; 
// "QuizSubmission thells mongoose which db to use so can use .find, .create etc
const model = mongoose.model("QuizSubmission", schema);
export default model;