const express = require("express");
const router =express.Router();
const {
    getALLTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
} = require("../controllers/tasks");

router.get("/", getALLTasks);
router.post("/", createTask);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;