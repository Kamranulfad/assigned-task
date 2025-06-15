import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Login from "./login";
import Signup from "./signup";
import Home from "./home";

function App() {
  // const [toggle, setToggle] = useState(true);

  return (
    <div className="main-container">
      {/* {toggle ? <Signup /> : <Login />} */}
  
      {/* <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Go to Login" : "Go to Signup"}
      </button> */}
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}> </Route>
        <Route path="/home" element={<Home />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
