import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import {loginPost} from "../gemini/api.jsx"

export const Login = () => {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async(data) => {
    try {
      
      console.log("Login Data:", data);
      const response=await loginPost(data)
      navigate("/")
      // Your login logic here
    } catch (error) {
      console.error(error.message)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4 relative">
      {/* Back to Homepage Button */}
      <button
        type="button"
        onClick={() => (window.location.href = "/")}
        className="absolute top-4 left-4 text-blue-500 dark:text-blue-400 hover:underline"
      >
        Back to Homepage
      </button>

      {/* Main Container */}
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-gray-100 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 transition-colors"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 transition-colors pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500"
                {...register("rememberMe")}
              />
              <span className="ml-2">Remember me</span>
            </label>
            <button
              type="button"
              onClick={() => alert("Forgot password flow")}
              className="text-sm text-blue-500 dark:text-blue-400 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 mt-2 text-white font-semibold rounded-lg transition-colors duration-300 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 dark:text-gray-300 mt-6">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => alert("Navigate to registration")}
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};
