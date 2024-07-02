import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/saved" Component={Saved}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
