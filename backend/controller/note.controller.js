import Note from "../models/note.model.js"
import { errorHandler } from "../utils/error.js"



export const addNote = async (req, res, next) => {
  const { title, content, tags } = req.body

  const { id } = req.user

  if (!title) {
    return next(errorHandler(400, "Title is required"))
  }

  if (!content) {
    return next(errorHandler(400, "Content is required"))
  }

  try {
    const note = new Note({
      title,
      content,
      tags: tags || [],
      userId: id,
    })

    await note.save()

    res.status(201).json({
      success: true,
      message: "Note added successfully",
      note,
    })
  } catch (error) {
    next(error)
  }
}

export const editNote = async (req, res, next) => {
  const note = await Note.findById(req.params.noteId)

  if (!note) {
    return next(errorHandler(404, "Note not found"))
  }

  if (req.user.id !== note.userId) {
    return next(errorHandler(401, "You can only update your own note!"))
  }

  const { title, content, tags, isPinned } = req.body

  if (!title && !content && !tags) {
    return next(errorHandler(404, "No changes provided"))
  }

  try {
    if (title) {
      note.title = title
    }

    if (content) {
      note.content = content
    }

    if (tags) {
      note.tags = tags
    }

    if (isPinned) {
      note.isPinned = isPinned
    }

    await note.save()

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      note,
    })
  } catch (error) {
    next(error)
  }
}

export const getAllNotes = async (req, res, next) => {
  const userId = req.user.id;
  const { tag, sortBy } = req.query;

  const filter = { userId };
  if (tag) {
    filter.tags = { $in: [tag] };
  }

  let sortOption = { createdAt: -1 }; // Default: latest

  if (sortBy === "oldest") sortOption = { createdAt: 1 };
  if (sortBy === "az") sortOption = { title: 1 };
  if (sortBy === "za") sortOption = { title: -1 };

  try {
    const notes = await Note.find(filter).sort(sortOption);

    res.status(200).json({
      success: true,
      message: "Filtered notes retrieved successfully",
      notes,
    });
  } catch (error) {
    next(error);
  }
};


export const deleteNote = async (req, res, next) => {
  const noteId = req.params.noteId

  const note = await Note.findOne({ _id: noteId, userId: req.user.id })

  if (!note) {
    return next(errorHandler(404, "Note not found"))
  }

  try {
    await Note.deleteOne({ _id: noteId, userId: req.user.id })

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    })
  } catch (error) {
    next(error)
  }
}

export const updateNotePinned = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.noteId)

    if (!note) {
      return next(errorHandler(404, "Note not found!"))
    }

    if (req.user.id !== note.userId) {
      return next(errorHandler(401, "You can only update your own note!"))
    }

    const { isPinned } = req.body

    note.isPinned = isPinned

    await note.save()

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      note,
    })
  } catch (error) {
    next(error)
  }
}

export const searchNote = async (req, res, next) => {
  const { query } = req.query

  if (!query) {
    return next(errorHandler(400, "Search query is required"))
  }

  try {
    const matchingNotes = await Note.find({
      userId: req.user.id,
      $or: [
        { title: { $regex: new RegExp(query, "i") } },
        { content: { $regex: new RegExp(query, "i") } },
      ],
    })

    res.status(200).json({
      success: true,
      message: "Notes matching the search query retrieved successfully",
      notes: matchingNotes,
    })
  } catch (error) {
    next(error)
  }
}


export const updateNoteTags = async (req, res, next) => {
  const noteId = req.params.noteId;
  const { tags } = req.body;

  if (!tags || !Array.isArray(tags)) {
    return next(errorHandler(400, "Tags must be a valid array"));
  }

  try {
    const note = await Note.findById(noteId);

    if (!note) {
      return next(errorHandler(404, "Note not found"));
    }

    if (req.user.id !== note.userId) {
      return next(errorHandler(401, "You can only update your own note!"));
    }

    note.tags = tags;
    await note.save();

    res.status(200).json({
      success: true,
      message: "Tags updated successfully",
      note,
    });
  } catch (error) {
    next(error);
  }
};

export const updateNoteStarred = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.noteId);

    if (!note) {
      return next(errorHandler(404, "Note not found"));
    }

    if (req.user.id !== note.userId) {
      return next(errorHandler(401, "You can only update your own note!"));
    }

    const { isStarred } = req.body;
    note.isStarred = isStarred;

    await note.save();

    res.status(200).json({
      success: true,
      message: "Note starred status updated successfully",
      note,
    });
  } catch (error) {
    next(error);
  }
};

export const updateNoteFavourite = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.noteId);

    if (!note) {
      return next(errorHandler(404, "Note not found"));
    }

    if (req.user.id !== note.userId) {
      return next(errorHandler(401, "You can only update your own note!"));
    }

    const { isFavourite } = req.body;
    note.isFavourite = isFavourite;

    await note.save();

    res.status(200).json({
      success: true,
      message: "Note favourite status updated successfully",
      note,
    });
  } catch (error) {
    next(error);
  }
};







export const getNoteStats = async (req, res) => {
  try {
    const userId = req.user.id;

    // ✅ 1. Notes per Day
    const notesPerDay = await Note.aggregate([
      { $match: { userId } },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          date: "$_id",
          count: 1,
          _id: 0,
        },
      },
      { $sort: { date: 1 } },
    ]);

    // ✅ 2. Top Tags
    const topTags = await Note.aggregate([
      { $match: { userId } },
      { $unwind: "$tags" },
      {
        $group: {
          _id: "$tags",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          tag: "$_id",
          count: 1,
          _id: 0,
        },
      },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ]);

    // ✅ 3. Average Note Length
    const notes = await Note.find({ userId });
    const averageNoteLength = notes.length
      ? Math.round(
          notes.reduce((sum, note) => sum + note.content.length, 0) /
            notes.length
        )
      : 0;

    // ✅ 4. Recent Notes
    const recentNotes = await Note.find({ userId })
      .sort({ createdAt: -1 })
      .limit(3);

    console.log("📌 recentNotes fetched:", recentNotes.length);

    return res.status(200).json({
      notesPerDay,
      topTags,
      averageNoteLength,
      recentNotes,
    });
  } catch (error) {
    console.error("❌ Stats error:", error.message);
    res.status(500).json({ message: "Failed to fetch dashboard stats" });
  }
};



