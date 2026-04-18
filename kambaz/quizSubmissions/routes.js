import * as dao from "./dao.js";
import { v4 as uuidv4 } from "uuid";

export default function QuizSubmissionRoutes(app) {
  // get a student's last submission for a quiz
  const getSubmission = async (req, res) => {
    const { qid, uid } = req.params;
    const submission = await dao.findSubmission(qid, uid);
    res.json(submission);
  };

  // save a new submission
  const createSubmission = async (req, res) => {
    const { qid } = req.params;
    const { userId, courseId, answers, score } = req.body;
    const attempts = await dao.countAttempts(qid, userId);
    const submission = {
      _id: uuidv4(),
      quizId: qid,
      userId,
      courseId,
      answers,
      score,
      attemptNumber: attempts + 1,
      submittedAt: new Date(),
    };
    const created = await dao.createSubmission(submission);
    res.json(created);
  };

  app.get("/api/quizzes/:qid/submissions/:uid", getSubmission);
  app.post("/api/quizzes/:qid/submissions", createSubmission);
}