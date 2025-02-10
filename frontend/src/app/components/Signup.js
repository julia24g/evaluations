import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useUser();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, { email: email, password: password, firstName: firstName, lastName: lastName })
    .then((response) => {
      const userId = response.data;
      dispatch({ type: "SET_USER", payload: userId});
      navigate(`/login`);
    })
    .catch((error) => {
      console.error("Error creating user:", error);
      setError(error.response?.data?.message || "An error occurred");
    });

    alert("Signup successful! Please log in.");
    navigate("/");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>First Name:</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>

      <p>Already have an account?</p>
      <button onClick={() => navigate("/")}>Login</button>
    </div>
  );
};

export default Signup;
