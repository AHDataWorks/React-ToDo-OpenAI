import { useState } from 'react';

const TodoInput = ({ addTodo }) => {
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
    />
    <button onClick={handleAddTodo} className="border-4 border-black p-2 ml-2 font-bold shadow-[3px_2px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_rgba(0,0,0,1)]">
        Add Todo
    </button>
    </div>
);
};

export default TodoInput;
