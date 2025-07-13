import  { useRef, useState } from "react"
import { MdClose, MdFullscreen, MdFullscreenExit } from "react-icons/md"
import TagInput from "../../components/Input/TagInput "
import FormattingToolbar from "../../components/Input/FormattingToolbar"

import axios from "axios"
import { toast } from "react-toastify"

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = SpeechRecognition ? new SpeechRecognition() : null

const AddEditNotes = ({ onClose, noteData, type, getAllNotes }) => {
  const [title, setTitle] = useState(noteData?.title || "")
  const [content, setContent] = useState(noteData?.content || "")
  const [tags, setTags] = useState(noteData?.tags || [])
  const [error, setError] = useState(null)
  const [isListening, setIsListening] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const editorRef = useRef(null)

  const handleContentChange = () => {
    setContent(editorRef.current.innerHTML)
  }

  const handleVoiceInput = () => {
    if (!recognition) {
      toast.error("Speech Recognition is not supported in this browser")
      return
    }

    if (isListening) {
      recognition.stop()
      setIsListening(false)
      return
    }

    recognition.lang = "en-US"
    recognition.continuous = false
    recognition.interimResults = false

    recognition.start()
    setIsListening(true)

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setContent((prev) => prev + " " + transcript)
      setIsListening(false)
    }

    recognition.onerror = (event) => {
      toast.error("Voice input error: " + event.error)
      setIsListening(false)
    }
  }

  const handleAddNote = () => {
    if (!title || !content) {
      setError("Please fill in all required fields")
      return
    }

    setError("")
    type === "edit" ? editNote() : addNewNote()
  }

  const editNote = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/note/edit/${noteData._id}`,
        { title, content, tags },
        { withCredentials: true }
      )
      if (!res.data.success) {
        toast.error(res.data.message)
        return
      }
      toast.success(res.data.message)
      getAllNotes()
      onClose()
    } catch (error) {
      toast.error(error.message)
    }
  }

  const addNewNote = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/note/add",
        { title, content, tags },
        { withCredentials: true }
      )
      if (!res.data.success) {
        toast.error(res.data.message)
        return
      }
      toast.success(res.data.message)
      getAllNotes()
      onClose()
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div
      className={`${
        isFullscreen
          ? "fixed inset-0 z-50 bg-white overflow-auto p-8"
          : "relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl mx-auto"
      } transition-all duration-300`}
    >
      {/* Fullscreen Toggle */}
      <button
        onClick={() => setIsFullscreen(!isFullscreen)}
        className="absolute top-2 right-12 p-2 rounded-full hover:bg-gray-100"
        title="Toggle Fullscreen"
      >
        {isFullscreen ? (
          <MdFullscreenExit className="text-xl text-gray-500" />
        ) : (
          <MdFullscreen className="text-xl text-gray-500" />
        )}
      </button>

      {/* ❌ Close */}
      <button
        className="w-9 h-9 absolute top-2 right-2 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition"
        onClick={onClose}
      >
        <MdClose className="text-gray-500 text-xl" />
      </button>

      {/* 📝 Title */}
      <div className="flex flex-col gap-1 mt-10">
        <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="text-lg border rounded-md px-4 py-2 outline-none focus:ring-2 ring-red-300 transition"
          placeholder="Wake up at 6 a.m."
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      {/* ✍️ Content */}
      <div className="flex flex-col gap-1 mt-4">
        <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          Content <span className="text-red-500">*</span>
        </label>

          <FormattingToolbar editorRef={editorRef} />
          
        <div
          ref={editorRef}
          contentEditable
          onInput={handleContentChange}
          dangerouslySetInnerHTML={{ __html: content }}
          className={`border rounded-md p-3 outline-none focus:ring-2 ring-red-300 transition ${
            isFullscreen ? "min-h-[300px]" : "min-h-[160px]"
          }`}
        ></div>

        {/* 🎙️ Speak Button */}
        <div className="mt-2">
          <button
            type="button"
            onClick={handleVoiceInput}
            className={`px-4 py-1 text-sm rounded border ${
              isListening ? "border-red-400 text-red-500" : "text-gray-700"
            } shadow-sm hover:bg-gray-100 transition`}
          >
            {isListening ? "🎤 Listening..." : "🎙️ Speak"}
          </button>
        </div>
      </div>

      {/* 🏷️ Tags */}
      <div className="mt-4">
        <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          Tags
        </label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {/* ⚠️ Error */}
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

      {/* ✅ Submit */}
      <button
        className="w-full mt-6 bg-gradient-to-br from-violet-900 to-pink-800 hover:opacity-90 text-white font-semibold py-2 rounded-lg transition"
        onClick={handleAddNote}
      >
        {type === "edit" ? "UPDATE NOTE" : "ADD NOTE"}
      </button>
    </div>
  )
}

export default AddEditNotes
