import "./App.css";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import Reconciliation from "./components/Reconciliation";
import RecordAudit from "./components/RecordAudit";
import UploadMapping from "./components/UploadMapping";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      {/* Hide navbar on home page */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reconciliation" element={<Reconciliation />} />
        <Route path="/record-audit" element={<RecordAudit />} />
        <Route path="/upload-mapping" element={<UploadMapping />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background-light font-display">
              <span className="material-symbols-outlined text-6xl text-slate-300">error</span>
              <h1 className="text-2xl font-bold text-slate-700">404 — Page Not Found</h1>
              <p className="text-slate-500">The page you&apos;re looking for doesn&apos;t exist.</p>
              <a href="/" className="text-primary font-semibold hover:underline">Go back home</a>
            </div>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;