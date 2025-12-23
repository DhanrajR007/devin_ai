import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8 transition-all duration-700 delay-100 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Real-time Systems Online
        </div>

        <h1
          className={`text-5xl sm:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-linear-to-b from-white via-white/90 to-white/50 transition-all duration-700 delay-200 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Connect instantly with <br />
          <span className="text-white">People & AI</span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Experience seamless communication with our advanced chat platform.
          Mention <span className="text-white font-semibold">@ai</span> to bring
          intelligent assistance directly into your conversation.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-bold text-sm hover:bg-zinc-200 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-white/10 flex items-center justify-center group"
          >
            Start Chatting
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-zinc-800 transition-all duration-200 flex items-center justify-center hover:border-white/20">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
