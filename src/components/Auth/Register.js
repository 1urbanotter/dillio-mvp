import React from "react";
import AuthForm from "./AuthForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";

const Register = () => {
  const handleRegister = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      alert("Registration successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthForm
      title="Register"
      onSubmit={handleRegister}
      formFields={[
        { label: "Email", name: "email", type: "email", required: true },
        { label: "Password", name: "password", type: "password", required: true },
        { label: "Confirm Password", name: "confirmPassword", type: "password", required: true },
      ]}
    />
  );
};

export default Register;