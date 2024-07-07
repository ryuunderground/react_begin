import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail" element={<Detail />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
