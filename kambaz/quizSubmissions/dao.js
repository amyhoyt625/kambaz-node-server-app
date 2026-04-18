import model from "./model.js";

// get the last attempt for a specific student on a specific quiz
export const findSubmission = async (quizId, userId) => {
  return model.findOne({ quizId, userId }).sort({ attemptNumber: -1 });
};

// count how many attempts a student has made on a quiz
export const countAttempts = async (quizId, userId) => {
  return model.countDocuments({ quizId, userId });
};

// save a new submission
export const createSubmission = async (submission) => {
  return model.create(submission);
};