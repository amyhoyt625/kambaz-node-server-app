import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const findQuizzesForCourse = async (req, res) => {
    const { cid } = req.params;
    const quizzes = await dao.findQuizzesForCourse(cid);
    res.json(quizzes);
  };

  const createQuizForCourse = async (req, res) => {
    const { cid } = req.params;
    const quiz = { ...req.body, course: cid };
    const newQuiz = await dao.createQuiz(quiz);
    res.json(newQuiz);
  };

  const updateQuiz = async (req, res) => {
    const { qid } = req.params;
    const status = await dao.updateQuiz(qid, req.body);
    res.json(status);
  };

  const deleteQuiz = async (req, res) => {
    const { qid } = req.params;
    await dao.deleteQuiz(qid);
    res.sendStatus(200);
  };

  const findQuizById = async (req, res) => {
    const { qid } = req.params;
    const quiz = await dao.findQuizById(qid);
    res.json(quiz);
  };

  const publishQuiz = async (req, res) => {
    const { qid } = req.params;
    await dao.updateQuiz(qid, { published: true });
    res.sendStatus(200);
  };

  const unpublishQuiz = async (req, res) => {
    const { qid } = req.params;
    await dao.updateQuiz(qid, { published: false });
    res.sendStatus(200);
  };

  app.get("/api/courses/:cid/quizzes", findQuizzesForCourse);
  app.post("/api/courses/:cid/quizzes", createQuizForCourse);
  app.get("/api/quizzes/:qid", findQuizById);
  app.put("/api/quizzes/:qid", updateQuiz);
  app.delete("/api/quizzes/:qid", deleteQuiz);
  app.put("/api/quizzes/:qid/publish", publishQuiz);
  app.put("/api/quizzes/:qid/unpublish", unpublishQuiz);
}