import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/Home"
import Personaje from "./components/Personaje"


function App() {
  return (
    <div className="App flex-col flex">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/personaje/:id" element={<Personaje/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
