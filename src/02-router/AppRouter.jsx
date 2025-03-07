import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./componets/Dashboard";
import { Login } from "./componets/Login";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>} />

        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </BrowserRouter>
  );
}
