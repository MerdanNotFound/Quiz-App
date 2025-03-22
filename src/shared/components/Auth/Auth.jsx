import React, { useState, useRef } from "react";
import { Button, TextField } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import "../../../index.css";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from context

  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
    setError("");
    setSuccessMessage("");
  };

  const sendData = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/${!isSignUp ? "login/" : "signup/"}`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Server response:", response.data);

      setSuccessMessage(`${isSignUp ? "Signup" : "Login"} successful!`);
      login(); // Call the login function from context

      setTimeout(() => {
        navigate("/"); // Redirect to home after 2 seconds
      }, 2000);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      if (error.response && error.response.data) {
        setError(
          error.response.data.message ||
            "Something went wrong. Please try again."
        );
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendData();
  };

  return (
    <div className="w-full min-h-screen flex items-center p-2.5 justify-center bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={isSignUp ? "signup" : "login"}
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            {isSignUp ? "Sign Up" : "Login"}
          </h2>

          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <TextField
                id="outlined-email"
                color="success"
                label="Email"
                variant="outlined"
                fullWidth
                className="mb-4"
                inputRef={emailRef}
              />
            </div>
            <div>
              <TextField
                id="outlined-password"
                color="success"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                className="mb-4"
                inputRef={passwordRef}
              />
            </div>

            {isSignUp && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <TextField
                  id="outlined-confirm-password"
                  color="success"
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  className="mb-4"
                  inputRef={confirmPasswordRef}
                />
              </motion.div>
            )}

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {successMessage && (
              <p className="text-green-500 text-sm text-center">
                {successMessage}
              </p>
            )}

            <Button
              variant="contained"
              color="secondary"
              fullWidth
              className="py-3"
              type="submit" // Use 'submit' for form submission
            >
              {isSignUp ? "Sign Up" : "Login"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <span className="text-sm">
              {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-500 hover:underline cursor-pointer"
                    onClick={handleToggle}
                  >
                    Login
                  </a>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-500 hover:underline cursor-pointer"
                    onClick={handleToggle}
                  >
                    Sign up
                  </a>
                </>
              )}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Auth;
