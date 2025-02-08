import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useUser();

  const handleLogin = async () => {
    try {
      if (email === "111@111.com" && password === "111") {
        // Simulate an API call response
        const response = {
          data: {
            userId: 1,  // Example userId
            role: "Software Engineer",  // Example role
            assessmentAnswers: {} // Empty object if no answers exist
          }
        };
  
        dispatch({ type: "SET_USER", payload: response.data.userId });
        dispatch({ type: "SET_ROLE", payload: response.data.role });
        dispatch({ type: "SET_ANSWERS", payload: response.data.assessmentAnswers || {} });
  
        navigate("/");
      } else {
        alert("Invalid credentials! Try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      
      <p>Don't have an account?</p>
      <button onClick={() => navigate("/signup")}>Sign Up</button>
    </div>
  );
};

export default Login;
