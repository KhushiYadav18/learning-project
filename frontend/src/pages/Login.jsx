import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/apiClient";
import AuthForm from "../components/AuthForm";
import { logFormInteraction } from "../components/ClickLogger";

export default function Login() {
  const [form, setForm] = useState({ 
    username: "", 
    password: "" 
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Log form submission attempt
    await logFormInteraction("Login", "submitted", { username: form.username });
    
    try {
      const res = await apiClient.post("/users/login/", form);
      const { tokens, user } = res.data;
      
      // Store tokens
      localStorage.setItem("access", tokens.access);
      localStorage.setItem("refresh", tokens.refresh);
      
      // Store user info
      localStorage.setItem("user", JSON.stringify(user));
      
      // Log successful login
      await logFormInteraction("Login", "succeeded", { username: user.username });
      
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      // Log failed login
      await logFormInteraction("Login", "failed", { username: form.username, error: error.message });
      // You can add error handling here
    }
  };

  const fields = [
    { name: "username", type: "text", placeholder: "Username", onChange: handleChange },
    { name: "password", type: "password", placeholder: "Password", onChange: handleChange }
  ];

  return <AuthForm title="Log In" fields={fields} onSubmit={handleSubmit} />;
}
