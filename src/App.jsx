import TodoApp from './components/TodoApp';
import './index.css';


const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <TodoApp />
    </div>
  );
};

export default App;