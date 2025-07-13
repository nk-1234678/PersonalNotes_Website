import express from "express"
import { verifyToken } from "../utils/verifyUser.js"
import {
  addNote,
  deleteNote,
  editNote,
  getAllNotes,
  searchNote,
  updateNotePinned,
  updateNoteFavourite,
  updateNoteStarred,
  getNoteStats ,
} from "../controller/note.controller.js"
import Note from "../models/note.model.js"


const router = express.Router()

router.post("/add", verifyToken, addNote)
router.post("/edit/:noteId", verifyToken, editNote)
router.get("/all", verifyToken, getAllNotes)
router.delete("/delete/:noteId", verifyToken, deleteNote)
router.put("/update-note-pinned/:noteId", verifyToken, updateNotePinned)
router.get("/search", verifyToken, searchNote)
router.put("/update-note-starred/:noteId", verifyToken, updateNoteStarred);
router.put("/update-note-favourite/:noteId", verifyToken, updateNoteFavourite);
router.get("/stats", verifyToken, getNoteStats)


// 👇 Add this below your existing routes
router.get("/recent", verifyToken, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id })
      .sort({ createdAt: -1 })
      .limit(3);

    res.status(200).json({ notes });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch recent notes" });
  }
});
// 👇 Example: Fetching time spent grouped by tag
router.get("/time-spent-stats", verifyToken, async (req, res) => {
  try {
    const result = await Note.aggregate([
      { $match: { userId: req.user.id } },
      { $unwind: "$tags" },
      {
        $group: {
          _id: "$tags",
          totalTime: { $sum: "$timeSpent" }, // Make sure 'timeSpent' exists in your model
        },
      },
      {
        $project: {
          tag: "$_id",
          time: "$totalTime",
          _id: 0,
        },
      },
    ]);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch time spent stats" });
  }
});



export default router
