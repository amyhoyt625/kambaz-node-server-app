import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: String,
  quizId: String,
  userId: String,
  courseId: String,
  answers: { type: Object, default: {} },
  score: { type: Number, default: 0 },
  attemptNumber: { type: Number, default: 1 },
  submittedAt: { type: Date, default: Date.now },
});

export default schema;