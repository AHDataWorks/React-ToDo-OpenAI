import { useState } from "react";

const TodoInput = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            addTodo(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <div className="mb-4">
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border p-2 rounded-md mr-2"
            placeholder="Enter your todo"
        />
        <button onClick={handleAddTodo} className="bg-blue-500 text-white p-2 rounded-md">
            Add Todo
        </button>
        </div>
    );
    };

    export default TodoInput;
