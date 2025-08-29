"use client";

import { useState, useEffect } from "react";

export default function ComingSoonPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 animate-gradient-loop"
        style={{
          background: `linear-gradient(-45deg, #a7edd5, #d87f27, #239b6f, #a7edd5)`,
          backgroundSize: "400% 400%",
          animation: "gradientLoop 8s ease-in-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes gradientLoop {
          0% {
            background-position: 0% 50%;
          }
          33% {
            background-position: 100% 50%;
          }
          66% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-2 border-white/30 animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-32 h-32 rounded-full animate-bounce"
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            animationDuration: "3s",
          }}
        />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-ping" />
        <div
          className="absolute top-2/3 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white/40 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/4 right-1/2 w-4 h-4 bg-white/30 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-white/20 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div
          className={`mb-12 ${
            isVisible
              ? "animate-in slide-in-from-bottom-8 duration-1000"
              : "opacity-0"
          }`}
        >
          <h1
            className="text-8xl font-glorify md:text-9xl lg:text-[12rem] font-black tracking-widest leading-none mb-4 transition-all duration-500 hover:scale-105 cursor-default"
            style={{
              color: "#ffffff",
              textShadow:
                "0 4px 20px rgba(0,0,0,0.5), 0 2px 10px rgba(216, 127, 39, 0.3)",
            }}
          >
            PILLARS
          </h1>
        </div>

        <div
          className={`${
            isVisible
              ? "animate-in fade-in duration-1000 delay-500"
              : "opacity-0"
          }`}
        >
          <h2
            className="text-6xl md:text-5xl font-bold mb-6 text-balance animate-pulse"
            style={{
              color: "#ffffff",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Coming Soon
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{
              color: "#ffffff",
              opacity: 0.9,
              textShadow: "0 1px 5px rgba(0,0,0,0.3)",
            }}
          >
            Big things are cooking — stay tuned
          </p>
        </div>

        <div
          className={`mt-16 ${
            isVisible
              ? "animate-in slide-in-from-left duration-1000 delay-1000"
              : "opacity-0"
          }`}
        >
          <div
            className="w-32 h-1 mx-auto rounded-full animate-pulse transition-all duration-1000 hover:w-48"
            style={{ backgroundColor: "#ffffff", opacity: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
}
