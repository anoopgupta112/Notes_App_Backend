const Notes = require("../model/dashboard.model");
const jwt = require("../middleware/auth");



// add notes
exports.addNotes = async (req, res) => {
    console.log("here")
  try {
    const userId = req.body.NotesData.Userid
console.log(userId, "tis sis ")
    const newNote = new Notes({
      Notes: req.body.NotesData.Notes,
      userId: userId,
    });

    await newNote.save();

    return res.status(200).json({ rc: 0, message: "Note added successfully" });
  } catch (err) {
    return res.status(500).json({ rc: -1, err: err });
  }
};



// Check notes
exports.checkNotes = async (req, res) => {
    try {
        console.log("fst")

      const userId = req.params.id;
      console.log("first")
      const notes = await Notes.find({userId});
      console.log(notes[0])
      const notesArray = notes.map(note => note.Notes);
      console.log(notesArray)
      return res.status(200).json({ rc: 0, Notes: notesArray });
    } catch (err) {
      return res.status(500).json({ rc: -1, err: err });
    }
  };