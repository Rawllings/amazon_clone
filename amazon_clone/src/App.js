// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={[<Header />, <Home />]} />
        <Route path="/checkout" element={[<Header />, <Checkout />]} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
