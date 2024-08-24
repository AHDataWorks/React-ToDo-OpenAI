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

const editTodo = (index, newText) => {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, text: newText } : todo));
};

return (
    <div className="px-5 py-2 font-medium border border-b-4 border-r-4 border-black bg-white rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)]">
    <h1 className="text-4xl font-bold tracking-wider border-b-4 pb-2">Todo App</h1>
    <TodoInput addTodo={addTodo} />
    <TodoList todos={todos} onDelete={deleteTodo} onEditConfirm={(index, newText) => editTodo(index, newText)} />
    </div>
);
};

export default TodoApp;
