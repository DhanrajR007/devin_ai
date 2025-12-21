import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const Register = ({ onSwitch }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Create Account
        </h2>
        <p className="text-zinc-400 mt-2">
          Join us to start your free trial today
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-300">Full Name</label>
          <div className="relative group">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 w-5 h-5 group-focus-within:text-white transition-colors duration-200" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all duration-200"
              placeholder="John Doe"
            />
          </div>
        </div> */}

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-300">Password</label>
          <div className="relative group">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 w-5 h-5 group-focus-within:text-white transition-colors duration-200" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all duration-200"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          Get Started
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-zinc-400">
          Already have an account?{" "}
          <button
            onClick={onSwitch}
            className="font-semibold text-white hover:text-blue-400 hover:underline decoration-2 underline-offset-4 ml-1 transition-colors"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
