import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import Evaluation from './components/EvaluationPage/Evaluation';
import Login from './components/Login';
import Signup from './components/Signup';
import EmployeeDirectory from './components/EmployeeDirectoryPage/EmployeeDirectory';


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/dashboard" element={<Home />} /> */}
          <Route path="/assessment/:assessmentId" element={<Evaluation />} />
          <Route path="/directory/" element={<EmployeeDirectory />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
