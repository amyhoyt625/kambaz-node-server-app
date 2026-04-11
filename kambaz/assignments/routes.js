import { v4 as uuidv4 } from "uuid";
import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  const findAssignmentsForCourse = async (req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAssignmentsForCourse(cid);
    res.json(assignments);
  };

  const createAssignmentForCourse = async (req, res) => {
    const { cid } = req.params;
    const assignment = { ...req.body, course: cid };
    const newAssignment = await dao.createAssignment(assignment);
    res.json(newAssignment);
  };

  const updateAssignment = async (req, res) => {
    const { aid } = req.params;
    const status = await dao.updateAssignment(aid, req.body);
    res.json(status);
  };

  const deleteAssignment = async (req, res) => {
    const { aid } = req.params;
    await dao.deleteAssignment(aid);
    res.sendStatus(200);
  };

  app.get("/api/courses/:cid/assignments", findAssignmentsForCourse);
  app.post("/api/courses/:cid/assignments", createAssignmentForCourse);
  app.put("/api/assignments/:aid", updateAssignment);
  app.delete("/api/assignments/:aid", deleteAssignment);
}