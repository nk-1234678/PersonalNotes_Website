import React, { useState } from "react"
import { BsJustifyLeft } from "react-icons/bs";
import { BsJustifyRight } from "react-icons/bs";
import { PiTextAlignJustify } from "react-icons/pi";

const FormattingToolbar = ({ editorRef }) => {
  const [color, setColor] = useState("#000000")

  const exec = (command, value = null) => {
    document.execCommand(command, false, value)
    editorRef.current.focus()
  }

  return (
    <div className="flex flex-wrap gap-2 items-center mb-3">
      {/* Text styles */}
      <button onClick={() => exec("bold")} className="px-2 py-1 border rounded font-bold">B</button>
      <button onClick={() => exec("italic")} className="px-2 py-1 border rounded italic">I</button>
      <button onClick={() => exec("underline")} className="px-2 py-1 border rounded underline">U</button>

      {/* Font size */}
      <select
        onChange={(e) => exec("fontSize", e.target.value)}
        className="px-2 py-1 border rounded"
        defaultValue=""
      >
        <option value="" disabled>Font Size</option>
        <option value="1">XS</option>
        <option value="2">S</option>
        <option value="3">M</option>
        <option value="4">L</option>
        <option value="5">XL</option>
        <option value="6">XXL</option>
        <option value="7">Huge</option>
      </select>

      {/* Text alignment */}
      <button onClick={() => exec("justifyLeft")} className="px-2 py-1 border rounded"><BsJustifyLeft /></button>
      <button onClick={() => exec("justifyCenter")} className="px-2 py-1 border rounded"><BsJustifyRight /></button>
      <button onClick={() => exec("justifyRight")} className="px-2 py-1 border rounded"><PiTextAlignJustify /></button>

      {/* Text color picker */}
      <label className="flex items-center gap-1 px-2 py-1 border rounded cursor-pointer">
        🎨
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value)
            exec("foreColor", e.target.value)
          }}
          className="w-6 h-6 p-0 border-0 bg-transparent cursor-pointer"
        />
      </label>

      {/* Clear formatting */}
      <button onClick={() => exec("removeFormat")} className="px-2 py-1 border rounded text-gray-600">
        Clear
      </button>
    </div>
  )
}

export default FormattingToolbar
