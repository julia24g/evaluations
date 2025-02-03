import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import Assessment from './components/AssessmentPage/Assessment';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


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
