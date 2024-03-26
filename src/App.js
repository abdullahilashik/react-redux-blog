import { Link } from "react-router-dom";
import NewBlog from "./components/NewBlog";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <header className="w-full bg-gray-900 sticky top-0 z-10">
        <div className="flex w-full text-gray-400 py-8 px-4 mx-auto max-w-[1240px] justify-between">
          <h1 className="text-3xl font-bold uppercase">Multi Page Blog Posts</h1>
          <ul className="flex items-center">
            <li className="p-4 font-bold text-xl uppercase">Home</li>
            <li className="p-4 font-bold text-xl uppercase">Posts</li>
          </ul>
        </div>
      </header>
      <div className="flex relative">
        <NewBlog />
        <Home />
      </div>
    </>
  );
}

export default App;
