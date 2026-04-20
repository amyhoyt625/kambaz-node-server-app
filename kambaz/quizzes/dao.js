//dao defines backend db functions for quizzes using model
//allowing quizzes to be created , retrieved, updated, and deleted based on course or quiz ID

import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function findQuizzesForCourse(courseId) {
  return model.find({ course: courseId });
}

export function createQuiz(quiz) {
  const newQuiz = { ...quiz, _id: uuidv4() };
  return model.create(newQuiz);
}

export function deleteQuiz(quizId) {
  return model.deleteOne({ _id: quizId });
}

export function updateQuiz(quizId, quizUpdates) {
  return model.updateOne({ _id: quizId }, { $set: quizUpdates });
}

export function findQuizById(quizId) {
  return model.findOne({ _id: quizId });
}