import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onEditConfirm }) => {
return (
    <div className="space-y-4">
    {todos.map((todo, index) => (
        <TodoItem
        key={index}
        text={todo.text}
        isSuggested={todo.isSuggested}
        loading={todo.loading}
        onDelete={() => onDelete(index)}
        onEditConfirm={(newText) => onEditConfirm(index, newText)}
        />
    ))}
    </div>
);
};

export default TodoList;
