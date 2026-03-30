import { v4 as uuidv4 } from "uuid";

export default function EnrollmentRoutes(app, db) {
  const enrollUserInCourse = (req, res) => {
    const { userId, courseId } = req.body;
    const existing = db.enrollments.find(
      (e) => e.user === userId && e.course === courseId
    );
    if (existing) { res.sendStatus(200); return; }
    const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
    db.enrollments.push(newEnrollment);
    res.json(newEnrollment);
  };
  const unenrollUserFromCourse = (req, res) => {
    const { userId, courseId } = req.params;
    db.enrollments = db.enrollments.filter(
      (e) => !(e.user === userId && e.course === courseId)
    );
    res.sendStatus(200);
  };

  app.post("/api/enrollments", enrollUserInCourse);
  app.delete("/api/enrollments/:userId/:courseId", unenrollUserFromCourse);
}