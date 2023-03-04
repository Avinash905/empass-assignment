import "./styles/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route
          path="/empass-assignment"
          element={<Login />}
        />
        <Route
          path="/empass-assignment/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;
