import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Terminal,
  Cpu,
  Globe,
  Zap,
  ChevronRight,
  Code2,
  Layout,
  Shield,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-cyan-600/10 rounded-full blur-[120px]" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size[40px_40px] opacity-30" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl transition-all duration-700 ${
          mounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              Antigravity
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/auth")}
              className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/auth")}
              className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8 transition-all duration-700 delay-100 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            v2.0 is now available
          </div>

          <h1
            className={`text-5xl sm:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 transition-all duration-700 delay-200 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Build faster with <br />
            <span className="text-white">Intelligent AI</span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Empower your development workflow with next-generation AI agents.
            Automate complex tasks, generate code, and deploy in seconds.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <button
              onClick={() => navigate("/auth")}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-bold text-sm hover:bg-zinc-200 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-white/10 flex items-center justify-center group"
            >
              Start Building Free
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-zinc-800 transition-all duration-200 flex items-center justify-center hover:border-white/20">
              View Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Cpu />}
            title="Advanced AI Model"
            description="Powered by the latest large language models for superior code generation and reasoning."
            delay={500}
          />
          <FeatureCard
            icon={<Globe />}
            title="Global Edge Network"
            description="Deploy your applications instantly to over 100+ regions worldwide with zero configuration."
            delay={600}
          />
          <FeatureCard
            icon={<Zap />}
            title="Instant Deployments"
            description="Push to git and your site is live in seconds. Automatic CI/CD built right in."
            delay={700}
          />
          <FeatureCard
            icon={<Shield />}
            title="Enterprise Security"
            description="Bank-grade encryption, SOC2 compliance, and automated vulnerability scanning."
            delay={800}
          />
          <FeatureCard
            icon={<Code2 />}
            title="Clean Code Export"
            description="Export standard, maintainable code that you can take anywhere. No vendor lock-in."
            delay={900}
          />
          <FeatureCard
            icon={<Layout />}
            title="Modern UI Components"
            description="Access a library of pre-built, accessible components to speed up your frontend development."
            delay={1000}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-20 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-zinc-500 text-sm">
            © 2024 Antigravity AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, delay }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Add small random offset to delay for organic feel
    const timeout = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={`p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 hover:bg-zinc-900/60 transition-all duration-500 group cursor-default ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
        {React.cloneElement(icon, { className: "w-6 h-6 stroke-[1.5]" })}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-zinc-400 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default Home;
