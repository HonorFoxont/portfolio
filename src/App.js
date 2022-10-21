import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home/Home";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./page/Portfolio/Portfolio";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
