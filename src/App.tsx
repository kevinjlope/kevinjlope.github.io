import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Home</h1>
      <Routes>
        <Route path="/" element={<Link to="/about">About Me</Link>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
