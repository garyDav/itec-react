import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./componets/Dashboard";
import { Login } from "./componets/Login";
import { PublicRoute } from "./PublicRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={false}>
              <Login />
            </PublicRoute>
          }
        />

        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
