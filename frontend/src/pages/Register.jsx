import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/apiClient";
import AuthForm from "../components/AuthForm";
import { logFormInteraction } from "../components/ClickLogger";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone_number: "",
    age_group: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Log form submission attempt
    await logFormInteraction("Register", "submitted", { username: form.username, email: form.email });
    
    try {
      const res = await apiClient.post("/users/register/", form);
      const { tokens, user } = res.data;
      
      // Store tokens
      localStorage.setItem("access", tokens.access);
      localStorage.setItem("refresh", tokens.refresh);
      
      // Store user info
      localStorage.setItem("user", JSON.stringify(user));
      
      // Log successful registration
      await logFormInteraction("Register", "succeeded", { username: user.username, email: user.email });
      
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
      // Log failed registration
      await logFormInteraction("Register", "failed", { username: form.username, email: form.email, error: error.message });
      // You can add error handling here
    }
  };

  const ageGroupOptions = [
    { value: "", label: "Select your age group" },
    { value: "under_18", label: "Under 18" },
    { value: "18_25", label: "18-25" },
    { value: "26_35", label: "26-35" },
    { value: "36_50", label: "36-50" },
    { value: "50_plus", label: "50+" }
  ];
  

  const fields = [
    { name: "username", type: "text", placeholder: "Choose a username", onChange: handleChange },
    { name: "email", type: "email", placeholder: "Enter your email address", onChange: handleChange },
    { name: "phone_number", type: "tel", placeholder: "Enter your phone number", onChange: handleChange },
    { name: "age_group", type: "select", placeholder: "Select your age group", onChange: handleChange, options: ageGroupOptions },
    { name: "password", type: "password", placeholder: "Create a strong password", onChange: handleChange }
  ];

  return <AuthForm title="Join the Revolution" fields={fields} onSubmit={handleSubmit} />;
}
