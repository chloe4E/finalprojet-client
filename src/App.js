
import "./App.css";
import { Routes, Route } from "react-router-dom";

import CoverLetterPage from "./pages/CoverLetterPage";
import CreateJobPage from "./pages/CreateJobPage";
import EditCoverLetterPage from "./pages/EditCoverLetterPage";
import EditJobDetailPage from "./pages/EditJobDetailPage";
import EditProfilePage from "./pages/EditProfilePage";
import HomePage from "./pages/HomePage";
import JobDetailsPage from "./pages/JobDetailsPage";
import LoginPage from "./pages/LoginPage";
import ProfileLandingPage from "./pages/ProfileLandingPage";
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar";



function App() {
  return (
    <div className="App">

      <NavBar />
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-profile" element={<ProfileLandingPage />} />
        <Route path="/user-profile/edit" element={<EditProfilePage />} />
        <Route path="/job/create" element={<CreateJobPage />} />
        <Route path="/job/cover-letter" element={<CoverLetterPage />} />
        <Route path="/job/cover-letter/edit" element={<EditCoverLetterPage />} />
        <Route path="job/details" element={<JobDetailsPage />} />
        <Route path="/job/details/edit" element={<EditJobDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
