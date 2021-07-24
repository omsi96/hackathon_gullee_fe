import React from "react";
import "./App.css";
import { AuthProvider } from "./firebase/authContext";

// Routes
import Routes from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <div className="wrapper">
        <Routes />
      </div>
    </AuthProvider>
  );
};

export default App;
