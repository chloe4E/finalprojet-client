import "./App.css";
import { Routes, Route } from "react-router-dom";

import CoverLetterPage from "./pages/CoverLetterPage";
import EditCoverLetterPage from "./pages/EditCoverLetterPage";
import EditJobDetailPage from "./pages/EditJobDetailPage";
import NewUserForm from "./pages/NewUserForm";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfileLandingPage from "./pages/ProfileLandingPage";
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar";
import AddNewJobForm from "./pages/AddNewJobForm";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-profile" element={<ProfileLandingPage />} />
        <Route path="/new-user/form" element={<NewUserForm />} />
        <Route path="/user-profile/add-job" element={<AddNewJobForm />} />
        <Route
          path="/job/:coverLetterId/cover-letter"
          element={<CoverLetterPage />}
        />
        <Route
          path="/job/:coverLetterId/cover-letter/edit"
          element={<EditCoverLetterPage />}
        />
        <Route path="/job/details/edit" element={<EditJobDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
