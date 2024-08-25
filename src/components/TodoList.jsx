import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onEditConfirm }) => {
    return (
    <div>
        {todos.map((todo, index) => (
        <TodoItem
            key={index}
            text={todo.text}
            isSuggested={todo.isSuggested}
            loading={todo.loading}
            onDelete={() => onDelete(index)}
            onEditConfirm={(newText) => onEditConfirm(index, newText)}
            icon={todo.icon}
            estimatedTime={todo.estimatedTime} // Pass estimated time
        />
        ))}
    </div>
    );
};

export default TodoList;
