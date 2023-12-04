const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    res.status(200).json({ success: true, msg: "Show all trainings" });
});
router.get("/:id", (req, res) => {
    res.status(200).json({ success: true, msg: `Get trainings ${req.params.id}` });
});
router.post("/", (req, res) => {
    res.status(200).json({ success: true, msg: "Create new trainings" });
});
router.put("/:id", (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: `Update trainings ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
    res
        .status(200)
        .json({ success: true, msg: `Delete trainings ${req.params.id}` });
});

module.exports = router;
