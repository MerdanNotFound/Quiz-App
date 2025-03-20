import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import "../../../index.css";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
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

          <form className="space-y-6">
            <div>
              <TextField
                id="outlined-email"
                color="success"
                label="Email"
                variant="outlined"
                fullWidth
                className="mb-4"
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
                />
              </motion.div>
            )}

            <Button
              variant="contained"
              color="secondary"
              fullWidth
              className="py-3"
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
