import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { getSuggestedTodo } from '../services/openaiService';

const TodoApp = () => {
const [todos, setTodos] = useState([]);

const addTodo = async (todo) => {
    const newTodos = [
    ...todos,
    { text: todo, isSuggested: false },
    { text: 'Loading...', isSuggested: true, loading: true }
    ];
    setTodos(newTodos);

    const suggestedTodo = await getSuggestedTodo(todo);

    setTodos((prevTodos) => {
    const updatedTodos = [...prevTodos];
    updatedTodos[updatedTodos.length - 1] = { text: suggestedTodo, isSuggested: true, loading: false };
    return updatedTodos;
    });
};

const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
};

return (
    <div className="w-full max-w-md p-4 bg-white rounded-md shadow-md">
    <h1 className="text-3xl font-bold mb-4 text-center">AI Powered Procrastination</h1>
    <TodoInput addTodo={addTodo} />
    <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
);
};

export default TodoApp;

