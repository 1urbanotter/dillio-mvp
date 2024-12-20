import React from "react";
import AuthForm from "./AuthForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";

const Login = () => {
  const handleLogin = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      alert("Login successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthForm
      title="Login"
      onSubmit={handleLogin}
      formFields={[
        { label: "Email", name: "email", type: "email", required: true },
        { label: "Password", name: "password", type: "password", required: true },
      ]}
    />
  );
};

export default Login;