import { v4 as uuidv4 } from "uuid";

export default function AssignmentRoutes(app, db) {
  const findAssignmentsForCourse = (req, res) => {
    const { cid } = req.params;
    const courseAssignments = db.assignments.filter(
      (a) => a.course === cid
    );
    res.json(courseAssignments);
  };
  const createAssignmentForCourse = (req, res) => {
    const { cid } = req.params;
    const newAssignment = { ...req.body, _id: uuidv4(), course: cid };
    db.assignments.push(newAssignment);
    res.json(newAssignment);
  };
  const updateAssignment = (req, res) => {
    const { aid } = req.params;
    const index = db.assignments.findIndex((a) => a._id === aid);
    db.assignments[index] = { ...db.assignments[index], ...req.body };
    res.json(db.assignments[index]);
  };
  const deleteAssignment = (req, res) => {
    const { aid } = req.params;
    db.assignments = db.assignments.filter((a) => a._id !== aid);
    res.sendStatus(200);
  };

  app.get("/api/courses/:cid/assignments", findAssignmentsForCourse);
  app.post("/api/courses/:cid/assignments", createAssignmentForCourse);
  app.put("/api/assignments/:aid", updateAssignment);
  app.delete("/api/assignments/:aid", deleteAssignment);
}