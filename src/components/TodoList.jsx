import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete }) => {
return (
    <div className="w-full max-w-md h-[500px] overflow-y-auto">
    {todos.map((todo, index) => (
        <TodoItem
        key={index}
        text={todo.text}
        isSuggested={todo.isSuggested}
        loading={todo.loading}
        onDelete={() => onDelete(index)}
        />
    ))}
    </div>
);
};

export default TodoList;