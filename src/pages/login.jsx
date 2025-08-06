import React, { useState } from "react";
import useApiPost from "../hooks/useApiPost";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const url = "https://dummyjson.com/auth/login";
  const { loading, postData } = useApiPost(url);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (form.username === "" || form.password === "") {
      alert("please enter details");
    } else {
      const response = await postData(form);
      sessionStorage.setItem("userData", JSON.stringify(response));
      if (response.accessToken) {
        navigate("/");
      }
      if (response.message) {
        alert(response.message);
      }
    }
  };

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
      }}
    >
      <h2>Login</h2>
      <form>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            id="username"
            value={form.username}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <button
          type="button"
          style={{
            width: "100%",
            padding: 10,
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 4,
          }}
          onClick={() => handleSubmit()}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
