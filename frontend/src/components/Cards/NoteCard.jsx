
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";
import moment from "moment";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onPinNote,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="rounded-2xl p-5 bg-gradient-to-br from-violet-50 via-white to-violet-100 shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer max-w-full overflow-hidden">
      {/* Header with title & pin */}
      <div className="flex items-start justify-between">
        <div className="max-w-[85%]">
          <h2 className="text-lg font-semibold text-slate-800 truncate">
            {title}
          </h2>
          <p className="text-xs text-blue-500 mt-1">
            {moment(date).format("Do MMM YYYY")}
          </p>
        </div>

        <MdOutlinePushPin
          className={`text-xl transition-colors duration-300 ${
            isPinned ? "text-blue-500" : "text-gray-300 hover:text-blue-400"
          }`}
          onClick={onPinNote}
        />
      </div>

      {/* Content */}
      <p className="text-sm text-slate-600 mt-3 line-clamp-4">
        {content}
      </p>

      {/* Tags & actions */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((item, i) => (
            <span
              key={i}
              className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xl">
          <MdCreate
            className="hover:text-green-500 transition-colors duration-200"
            onClick={onEdit}
          />
          <MdDelete
            className="hover:text-red-500 transition-colors duration-200"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
