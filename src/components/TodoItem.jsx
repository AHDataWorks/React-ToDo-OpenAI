import { useState } from 'react';

const TodoItem = ({ text, isSuggested, loading, onDelete, onEditConfirm, icon, estimatedTime }) => {
const [isChecked, setIsChecked] = useState(false);
const [isEditing, setIsEditing] = useState(false);
const [editText, setEditText] = useState(text);

const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
};

const handleEditClick = () => {
    setIsEditing(true);
};

const handleEditChange = (e) => {
    setEditText(e.target.value);
};

const handleConfirmClick = () => {
    onEditConfirm(editText);
    setIsEditing(false);
};

const handleCancelClick = () => {
    setEditText(text);
    setIsEditing(false);
};

const formatTime = (time) => {
    const [days, hours, minutes] = time.split(':').map(Number);
    let display = '';

    if (days > 0) {
    display += `${days} days `;
    }
    if (hours > 0) {
    display += `${hours} hours `;
    }
    if (minutes > 0) {
    display += `${minutes} minutes`;
    }

    return display.trim();
};

return (
    <div className={`mb-4`}>
    <div className={`p-4 border-4 border-black flex items-center justify-between ${isSuggested ? ' border-lime-400 bg-black text-lime-400 font-courier' : ''}`}>
        <div className="flex items-center">
        <i className={`mr-2 fa ${icon}`}></i>
        <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="mr-3 h-5 w-5 border-4 border-black bg-transparent"
        />
        {isEditing ? (
            <input
            type="text"
            value={editText}
            onChange={handleEditChange}
            className="flex-grow p-2 border-0 outline-none bg-transparent text-black"
            />
        ) : (
            <span className={`${isChecked ? 'line-through' : ''}`}>
            {loading ? (
                <span className="flex items-center">
                <svg
                    className="animate-spin h-5 w-5 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    ></circle>
                    <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8V12H4z"
                    ></path>
                </svg>
                Loading...
                </span>
            ) : (
                text
            )}
            </span>
        )}
        </div>
        <div className="flex items-center">
        {isEditing ? (
            <>
            <button onClick={handleConfirmClick} className="border-4 border-black p-2 hover:bg-green-200 ml-2">
                <i className="fa-solid fa-check"></i>
            </button>
            <button onClick={handleCancelClick} className="border-4 border-black p-2 hover:bg-red-300 ml-2">
                <i className="fa-solid fa-xmark"></i>
            </button>
            </>
        ) : (
            !isSuggested && (
            <button onClick={handleEditClick} className="border-4 border-black p-2 hover:shadow-[3px_2px_0px_rgba(0,0,0,1)] ml-2">
                <i className="fa-solid fa-pencil"></i>
            </button>
            )
        )}
        <button onClick={onDelete} className="border-4 border-black p-2 hover:shadow-[3px_2px_0px_rgba(0,0,0,1)] ml-2">
            <i className="fa-solid fa-trash-can"></i>
        </button>
        </div>
    </div>
    <div className={`ml-8 mt-2 p-2 border-l-4 border-black text-gray-500 bg-white`}>
        Estimated Time: {formatTime(estimatedTime)}
    </div>
    </div>
);
};

export default TodoItem;
