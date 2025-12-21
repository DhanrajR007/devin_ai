import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const Login = ({ onSwitch }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Welcome back
        </h2>
        <p className="text-zinc-400 mt-2">
          Enter your credentials to access your account
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-300">
            Email Address
          </label>
          <div className="relative group">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 w-5 h-5 group-focus-within:text-white transition-colors duration-200" />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all duration-200"
              placeholder="name@company.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-zinc-300">
              Password
            </label>
            <a
              href="#"
              className="text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline decoration-2 underline-offset-4 transition-colors"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative group">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 w-5 h-5 group-focus-within:text-white transition-colors duration-200" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all duration-200"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:text-white transition-colors p-1"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black py-3.5 rounded-xl font-bold text-sm hover:bg-zinc-200 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-white/5 flex items-center justify-center group"
        >
          Sign In
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-zinc-400">
          Don't have an account?{" "}
          <button
            onClick={onSwitch}
            className="font-semibold text-white hover:text-blue-400 hover:underline decoration-2 underline-offset-4 ml-1 transition-colors"
          >
            Create account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
