
import { Link, Element } from 'react-scroll';
import TodoApp from './components/TodoApp';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen lg:bg-violet-400 justify-center items-center ">
            <div className="flex-col w-full max-w-5xl rounded-lg border border-b-4 border-r-4 border-black bg-rose-100 rounded-lg">

        {/* Navbar */}
        <nav className="px-5 py-2 font-medium w-full lg:-ml-16 max-w-5xl mb-5 mt-3 border border-b-4 border-r-4 border-black bg-white rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">My App</div>
            <div className="space-x-4">
              <Link to="about" smooth={true} duration={500} className="cursor-pointer">
                About
              </Link>
              <Link to="todo" smooth={true} duration={500} className="cursor-pointer">
                Todo
              </Link>
            </div>
          </div>
        </nav>

        {/* Splash Page */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Todo App</h1>
            <p className="text-lg mb-8">Manage your tasks efficiently and effortlessly.</p>
            <Link
              to="todo"
              smooth={true}
              duration={500}
              className="bg-blue-600 text-white py-2 px-4 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            >
              Try It Now
            </Link>
          </div>
        </section>

        {/* About Section */}
        <Element name="about">
          <section className=" w-full lg:-mr-16 min-h-300 flex items-center justify-center">
            <div className="container max-w-md mx-auto text-center bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] p-4">
              <h2 className="text-4xl font-bold mb-4">About This App</h2>
              <p className="text-lg">
                This is a simple todo app that helps you keep track of your tasks. It's designed to be easy to use and
                highly effective for managing your daily to-do list.
              </p>
            </div>
          </section>
        </Element>

        {/* Todo Section */}
        <Element name="todo">
          <section className="w-full lg:-ml-16 min-h-screen flex items-center justify-center">
            <div className="container mx-auto ">
              <TodoApp />
            </div>
          </section>
        </Element>
      </div>
    </div>
  );
};

export default App;
