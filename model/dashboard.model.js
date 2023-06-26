const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema(
  {
    Notes: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: false }
);

const Notes = mongoose.model('Notes', NotesSchema);

module.exports = Notes;
