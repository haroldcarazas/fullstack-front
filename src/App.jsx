import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { MyProvider } from "./services/context";

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
