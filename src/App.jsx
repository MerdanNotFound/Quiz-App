import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Exam from "./shared/components/Exam";
import Dashboard from "./shared/components/Dashboard/Dashboard";
import Auth from "./shared/components/Auth/Auth";
import NotFound from "./shared/layouts/NotFound";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  return element;
};

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Exam />} />
            <Route
              exact
              path="/dash"
              element={<ProtectedRoute element={<Dashboard />} />}
            />
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
