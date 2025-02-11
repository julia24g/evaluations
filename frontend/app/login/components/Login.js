"use client"; // Required for client-side React hooks
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUser } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { dispatch } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (email === "111@111.com" && password === "111") {
        const response = {
          data: {
            userId: 1,
            role: "Software Engineer",
            assessmentAnswers: {},
          },
        };

        dispatch({ type: "SET_USER", payload: response.data.userId });
        dispatch({ type: "SET_ROLE", payload: response.data.role });
        dispatch({ type: "SET_ANSWERS", payload: response.data.assessmentAnswers || {} });

        router.push("/dashboard");
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
      <Link href="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default Login;
