import React from "react";
import Home from './components/Home';
import Form from './components/Form';
import View from "./components/View";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
