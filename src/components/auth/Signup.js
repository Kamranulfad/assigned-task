import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import './signup.css';
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });
      alert("Signup successful. Please login.");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
  <h2 className="signup-heading">Signup Page</h2>
  <form onSubmit={handleSignup} className="signup-form">
    <input
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      placeholder="First Name"
      required
      className="signup-input"
    />
    <input
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      placeholder="Last Name"
      required
      className="signup-input"
    />
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="Email"
      required
      className="signup-input"
    />
    <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      placeholder="Password"
      required
      className="signup-input"
    />
    <button type="submit" className="signup-button">Signup</button>
  </form>
</div>
  );
    
   
}
