import mongoose from "mongoose"

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: String,
      required: true,
    },
    isStarred: {
      type: Boolean,
      default: false,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    timeSpent: {
      type: Number,
      default: 0, // in minutes
    },
  },
  {
    timestamps: true, // ✅ This will auto-manage `createdAt` and `updatedAt`
  }
)

const Note = mongoose.model("Note", noteSchema)

export default Note
