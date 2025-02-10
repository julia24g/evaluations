import './app/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./app/context/UserContext";

import Assessment from './app/components/AssessmentPage/Assessment';
import Login from './app/components/Login';
import Signup from './app/components/Signup';
import Home from './app/components/HomePage/Home';


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/assessment/:assessmentId" element={<Assessment />} />
          {/* <Route path="/directory/" element={<EmployeeDirectory />} /> */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
