import React from "react";
import Background from "../components/home/Background";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      <Background />
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
