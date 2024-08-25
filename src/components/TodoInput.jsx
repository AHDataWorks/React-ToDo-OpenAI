// TodoInput.jsx
import { useState } from 'react';

const TodoInput = ({ addTodo, loading }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            addTodo(inputValue.trim());
            setInputValue('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div className="flex border-4 border-black p-2 mb-4 ">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow p-2 border-0 outline-none rounded-md"
                placeholder="Enter your todo"
                disabled={loading} 
            />
            <button
                onClick={handleAddTodo}
                className="border-4 border-black p-2 ml-2 font-bold shadow-[3px_2px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_rgba(0,0,0,1)]"
                disabled={loading} 
            >
                Add Todo
            </button>
            {loading && (
                <div className="flex items-center ml-4">
                    <svg
                        className="animate-spin h-5 w-5 text-black"
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
                </div>
            )}
        </div>
    );
};

export default TodoInput;
