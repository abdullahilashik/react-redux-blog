import { Link, Routes, Route } from "react-router-dom";
import NewBlog from "./components/NewBlog";
import Home from "./pages/Home";
import Blog from './pages/Blog';

function App() {
  return (
    <>
      <header className="w-full bg-gray-900 sticky top-0 z-10">
        <div className="flex w-full text-gray-400 py-8 px-4 mx-auto max-w-[1240px] justify-between">
          <h1 className="text-3xl font-bold uppercase">Multi Page Blog Posts</h1>
          <ul className="flex items-center">
            <Link to={'/'} className="p-4 font-bold text-xl uppercase">Home</Link>
            <Link to={'/posts'} className="p-4 font-bold text-xl uppercase">Posts</Link>
          </ul>
        </div>
      </header>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/posts">          
          <Route path=":id" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
