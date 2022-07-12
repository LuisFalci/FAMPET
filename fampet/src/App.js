import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
