import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Roadmap from "./pages/Roadmap";
import Resume from "./pages/Resume";
import InterviewPrep from "./pages/InterviewPrep";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;