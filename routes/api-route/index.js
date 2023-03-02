const router = require('express').Router();
const {createNewNote, updateDB} = require("../../notes/notes");
const { v4: uuidv4 } = require('uuid');
const {notes} = require("../../db/db.json");

// Shows all notes in JSON data
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
});

router.post("/notes", (req, res) => {
    const params = req.params.id
    updateDB(params, notes);
    res.redirect('');
});

router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    updateDB(params, notes);
    res.redirect('');
});

module.exports = router;