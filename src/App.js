import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Chatbot from "./components/Chatbot/Chatbot.js";
import DocumentGenerator from "./components/DocumentGenerator/DocumentGenerator.js";
import { AuthProvider } from "./context/AuthContext.js";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/document-generator" element={<DocumentGenerator />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;