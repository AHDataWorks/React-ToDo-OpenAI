import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { getSuggestedTodo } from '../services/openaiService';

const TodoApp = () => {
const [todos, setTodos] = useState([]);

const addTodo = async (todo) => {
    const suggestedTodo = await getSuggestedTodo(todo);
    const newTodos = [
    ...todos,
    {
        text: todo,
        isSuggested: false,
        icon: '📝',
        estimatedTime: suggestedTodo.todo_time_estimate,
    },
    {
        text: suggestedTodo.procrastination_suggestion,
        isSuggested: true,
        loading: false,
        icon: '🕒',
        estimatedTime: suggestedTodo.procrastination_time_estimate,
    },
    ];
    setTodos(newTodos);
};

const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
};

const editTodo = (index, newText) => {
    const newTodos = todos.map((todo, i) => (i === index ? { ...todo, text: newText } : todo));
    setTodos(newTodos);
};

const calculateTotalEstimatedTime = () => {
    let totalMinutes = 0;

    todos.forEach((todo) => {
    const [days, hours, minutes] = todo.estimatedTime.split(':').map(Number);
    totalMinutes += days * 24 * 60 + hours * 60 + minutes;
    });

    const totalDays = Math.floor(totalMinutes / (24 * 60));
    const totalHours = Math.floor((totalMinutes % (24 * 60)) / 60);
    const totalMins = totalMinutes % 60;

    return `${totalDays ? `${totalDays} days ` : ''}${totalHours ? `${totalHours} hours ` : ''}${totalMins} minutes`.trim();
};

return (
    <div className="px-5 py-2 font-medium border border-b-4 border-r-4 border-black bg-white rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)]">
    <h1 className="text-4xl font-bold tracking-wider border-b-4 pb-2">Todo App</h1>
    <div className="text-gray-600 mb-4">
        Total Estimated Time: {calculateTotalEstimatedTime()}
    </div>
    <TodoInput addTodo={addTodo} />
    <TodoList todos={todos} onDelete={deleteTodo} onEditConfirm={editTodo} />
    </div>
);
};

export default TodoApp;
