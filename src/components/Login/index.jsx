import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      const staticEmail = "admin@gmail.com";
      const staticPassword = "Admin@123";

      if (values.email === staticEmail && values.password === staticPassword) {
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    },
  });

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10, 5, 35, 0.25), rgba(10, 5, 35, 0.25)), url('/bg.png')",
      }}
    >
      {/* Login Card */}
      <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-300">Login to your account</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-200">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="h-12 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-white outline-none placeholder:text-gray-400 transition focus:border-purple-400 focus:bg-white/15 focus:ring-2 focus:ring-purple-500/30"
            />

            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-xs text-pink-400">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-200">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="h-12 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-white outline-none placeholder:text-gray-400 transition focus:border-purple-400 focus:bg-white/15 focus:ring-2 focus:ring-purple-500/30"
            />

            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-xs text-pink-400">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-semibold text-white shadow-lg shadow-purple-500/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/30 active:scale-[0.98]"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">Admin Login</p>
      </div>
    </div>
  );
};

export default Login;
    