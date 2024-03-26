import NewBlog from "./components/NewBlog";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="flex">
        <NewBlog />
        <Home />
      </div>
    </>
  );
}

export default App;
