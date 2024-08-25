// TodoApp.jsx
import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { getSuggestedTodo } from '../services/openaiService';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);  // Add loading state

    const addTodo = (todo) => {
        // Set loading state to true when the API call starts
        setLoading(true);

        // Add the user-entered todo immediately with a loading state
        const newTodos = [
            ...todos,
            {
                text: todo,
                isSuggested: false,
                loading: false, // User's todo is not loading
                estimatedTime: "00:00:00", // Placeholder estimated time until API response
                icon: "clock" // Placeholder icon for the user's todo
            },
            {
                text: "Loading suggestion...",
                isSuggested: true,
                loading: true, // Procrastination suggestion is loading
                estimatedTime: "00:00:00", // Placeholder estimated time until API response
                icon: "clock" // Placeholder icon for the suggestion
            }
        ];

        setTodos(newTodos);

        // Make the API call asynchronously without waiting for the result to update the UI
        getSuggestedTodo(todo).then(suggestedTodo => {
            // Update the todos with the returned data from the API
            setTodos((prevTodos) => {
                const updatedTodos = [...prevTodos];
                updatedTodos[updatedTodos.length - 2] = {
                    ...updatedTodos[updatedTodos.length - 2],
                    estimatedTime: suggestedTodo.todo_time_estimate,
                    icon: suggestedTodo.userIcon
                };
                updatedTodos[updatedTodos.length - 1] = {
                    text: suggestedTodo.procrastination_suggestion,
                    isSuggested: true,
                    loading: false,
                    estimatedTime: suggestedTodo.procrastination_time_estimate,
                    icon: suggestedTodo.procrastinationIcon
                };
                return updatedTodos;
            });
        }).catch(error => {
            console.error("Error fetching suggested todo:", error);
            // Optionally, handle the error state by updating the suggestion item with an error message
            setTodos((prevTodos) => {
                const updatedTodos = [...prevTodos];
                updatedTodos[updatedTodos.length - 1] = {
                    ...updatedTodos[updatedTodos.length - 1],
                    text: "Failed to fetch suggestion",
                    loading: false
                };
                return updatedTodos;
            });
        }).finally(() => {
            // Set loading state to false when the API call is complete
            setLoading(false);
        });
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
            <h1 className="w-full text-4xl font-bold tracking-wider pb-2">Todo App</h1>
            <div>
                Total Estimated Time: {calculateTotalEstimatedTime()}
            </div>
            <TodoInput addTodo={addTodo} loading={loading} />
            <TodoList todos={todos} onDelete={deleteTodo} onEditConfirm={editTodo} />
        </div>
    );
};

export default TodoApp;
