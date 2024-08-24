


import React, { useState } from 'react';

const TodoItem = ({ text, isSuggested, loading, onDelete }) => {
const [isChecked, setIsChecked] = useState(false);

const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
};

return (
    <div
    className={`p-4 mb-2 rounded-md flex items-center justify-between ${
        isSuggested ? 'bg-black text-lime-300 ml-6 font-courier font-bold' : 'bg-white text-gray-800'
    } border ${isSuggested ? 'border-lime-600' : 'border-gray-300'}`}
    >
    <div className="flex items-center">
        <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="mr-3 form-checkbox h-5 w-5 text-blue-600"
        />
        <span className={`${isChecked ? 'line-through' : ''} ${loading ? 'flex items-center' : ''}`}>
        {loading ? (
            <>
            <svg
                className="animate-spin h-5 w-5 mr-3 text-yellow-800"
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
            <span>Loading...</span>
            </>
        ) : (
            text
        )}
        </span>
    </div>
    <button onClick={onDelete} className="text-red-600 hover:text-red-800">
        <i className="fa-solid fa-trash-can"></i>
    </button>
    </div>
);
};

export default TodoItem;
