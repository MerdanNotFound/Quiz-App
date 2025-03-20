import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exam from "./shared/components/Exam";
import Dashboard from "./shared/components/Dashboard/Dashboard";
import Auth from "./shared/components/Auth/Auth";
import NotFound from "./shared/layouts/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Exam />} />
          <Route exact path="dash" element={<Dashboard />} />
          <Route exact path="auth" element={<Auth />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
