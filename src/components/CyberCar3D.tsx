import React, { useState, useEffect } from "react";
import { Sliders, Zap, Flame, Gauge, Cpu, RefreshCw, Layers } from "lucide-react";

/**
 * CyberCar3D.tsx
 * Implements two elite 3D Android Car simulations:
 * 1. Speedway3DCar: An isometric 3D-perspective racing vector node with exhaust flame jets.
 * 2. CyberCarShowroom3D: A fully interactive 3D CSS model garage that users can spin, tilt, customize suspension, ignite headlights, and blast nitro boosters.
 */

// Interface for speedway telemetry
interface Speedway3DCarProps {
  scrollPercent: number;
  scrollSpeed: number;
  isNitro: boolean;
}

// 1. High fidelity Speedway 3D Car Node (Driving along the highway hud)
export function Speedway3DCar({ scrollPercent, scrollSpeed, isNitro }: Speedway3DCarProps) {
  return (
    <div 
      className="relative flex items-center h-12 transition-all duration-300"
      style={{ 
        transform: `rotateY(-10deg) rotateX(15deg) translateY(-2px)`,
        transformStyle: "preserve-3d" 
      }}
    >
      {/* 3D Exhaust Fire Trail */}
      {scrollSpeed > 2 && (
        <div className="absolute right-10 flex items-center gap-1.5 opacity-80" style={{ transform: "translateZ(5px)" }}>
          {/* Flame 1 */}
          <div 
            className="h-2 bg-gradient-to-l from-amber-500 via-rose-500 to-transparent rounded-full filter blur-[1px] animate-pulse" 
            style={{ 
              width: `${Math.max(scrollSpeed * 0.8, 12)}px`,
              transform: "rotate(3deg) scaleY(1.2)"
            }}
          />
          {/* Flame 2 (Nitro blue core) */}
          {isNitro && (
            <div 
              className="absolute right-2 h-1 bg-cyan-400 rounded-full filter blur-[0.5px] animate-bounce" 
              style={{ width: `${Math.max(scrollSpeed * 0.5, 8)}px` }}
            />
          )}
        </div>
      )}

      {/* Isometric 3D Car Body Chassis (Constructed of skewed SVG projection layers) */}
      <div 
        className="relative transition-transform duration-150"
        style={{
          transform: `rotateZ(${scrollSpeed * 0.2}deg) scale(${1 + (scrollSpeed * 0.002)})`,
          filter: "drop-shadow(0 4px 12px rgba(255, 0, 60, 0.45))"
        }}
      >
        <svg viewBox="0 0 100 40" className="w-14 h-6 overflow-visible">
          <defs>
            <linearGradient id="bodyGradX" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3d000c" />
              <stop offset="60%" stopColor="#ff003c" />
              <stop offset="100%" stopColor="#ff5279" />
            </linearGradient>
            <linearGradient id="canopyGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0a0203" />
              <stop offset="100%" stopColor="#80d5ff" />
            </linearGradient>
          </defs>

          {/* Glowing underglow */}
          <ellipse cx="50" cy="34" rx="38" ry="4" fill="#ff003c" opacity="0.65" className="animate-pulse" />

          {/* Car main shadow grid */}
          <path d="M12,30 L90,30 L85,38 L15,38 Z" fill="#0d0203" opacity="0.8" />

          {/* 3D wedge shape lower bumper */}
          <path d="M6,22 L16,28 L84,28 L94,22 L86,32 L14,32 Z" fill="#1f0205" />

          {/* Main Cyber Aerodynamic Fuselage */}
          <path 
            d="M8,22 L22,12 L65,12 L84,20 L94,22 L88,29 L12,29 Z" 
            fill="url(#bodyGradX)" 
            stroke="#fff" 
            strokeWidth="0.5" 
            strokeOpacity="0.4"
          />

          {/* Angled Windshield Canopy layer (Prismatic mirror) */}
          <polygon points="50,13 65,13 78,20 54,20" fill="url(#canopyGrad)" stroke="#120204" strokeWidth="0.5" />
          
          {/* Front headlights flares (volumetric spotlight pointers) */}
          <polygon points="94,22 120,14 120,30" fill="rgba(255, 230, 230, 0.15)" stroke="none" />
          <circle cx="91" cy="22" r="1.5" fill="#fff" className="animate-pulse" />

          {/* Cyber Spoiler Wing */}
          <path d="M8,22 L14,8 L24,8 L18,22 Z" fill="#400710" />
          <line x1="6" y1="8" x2="26" y2="8" stroke="#ff003c" strokeWidth="1.5" className="animate-pulse" />

          {/* 3D Spin Wheels */}
          <circle cx="28" cy="30" r="5.5" fill="#000" stroke="#ff003c" strokeWidth="1.5" />
          <circle cx="28" cy="30" r="2.5" fill="#5c5c5c" className="animate-spin" style={{ animationDuration: `${Math.max(0.1, 1 - (scrollSpeed * 0.025))}s` }} />
          
          <circle cx="76" cy="30" r="5.5" fill="#000" stroke="#ff003c" strokeWidth="1.5" />
          <circle cx="76" cy="30" r="2.5" fill="#5c5c5c" className="animate-spin" style={{ animationDuration: `${Math.max(0.1, 1 - (scrollSpeed * 0.025))}s` }} />
        </svg>
      </div>
    </div>
  );
}

// 2. Interactive Full 3D CSS Cybercar Showroom Grid (Aero-NDK Cybercar Lab)
export function CyberCarShowroom3D() {
  // Rotational angles
  const [yaw, setYaw] = useState(-34);
  const [pitch, setPitch] = useState(-18);
  const [isRotating, setIsRotating] = useState(true);
  
  // Custom states
  const [headlights, setHeadlights] = useState(true);
  const [nitro, setNitro] = useState(false);
  const [suspension, setSuspension] = useState(6); // height in pixels (compression level)

  // Automatic spinning loop
  useEffect(() => {
    if (!isRotating) return;
    const timer = setInterval(() => {
      setYaw((prev) => (prev + 0.6) % 360);
    }, 28);
    return () => clearInterval(timer);
  }, [isRotating]);

  return (
    <div className="bg-black border-2 border-[#ff003c]/30 rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(255,0,60,0.1)]">
      
      {/* Title block */}
      <div className="bg-neutral-950 border-b border-neutral-900 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-mono text-[#ff003c] block uppercase tracking-widest font-black">
            [ INTERACTIVE CYBERNETIC HARDWARE LAB ]
          </span>
          <h3 className="font-display font-black text-lg text-white uppercase tracking-tight">
            NRK VULKAN CYBERRACER V4 PROTOTYPE
          </h3>
        </div>
        <div className="flex items-center gap-1 bg-[#150204] border border-[#ff003c]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-gray-300">
          <Cpu className="w-3.5 h-3.5 text-[#ff003c] animate-pulse" />
          <span>NDK RENDERING AGILITY STATUS: <strong className="text-white">OPTIMIZED (0.8ms)</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Interactive 3D CSS Canvas Area */}
        <div className="lg:col-span-8 bg-[#040102] h-[340px] sm:h-[450px] relative flex items-center justify-center overflow-hidden grid-bg-animated perspective-3d">
          
          {/* Floating HUD alignment grid rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-80 h-80 rounded-full border-2 border-dashed border-[#ff003c] animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[440px] h-[440px] rounded-full border border-[#ff003c]/40 animate-[spin_60s_linear_infinite_reverse]" />
          </div>

          {/* Floor Laser scanline alignment grids */}
          <div 
            className="absolute bottom-10 w-full h-[120px] bg-gradient-to-t from-[#ff003c]/10 to-transparent flex flex-col justify-end"
            style={{ 
              transform: "rotateX(75deg)", 
              transformOrigin: "bottom center",
              backgroundSize: "40px 40px",
              backgroundImage: "linear-gradient(to right, rgba(255, 0, 60, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 0, 60, 0.15) 1px, transparent 1px)"
            }}
          />

          {/* Dynamic Ambient Spotlights projection vectors */}
          {headlights && (
            <div 
              className="absolute pointer-events-none filter blur-[40px] opacity-40 mix-blend-screen bg-radial-gradient from-white/30 to-transparent"
              style={{
                width: "280px",
                height: "280px",
                transform: `rotateY(${yaw}deg) rotateX(${pitch}deg) translate3d(50px, 0px, 120px)`,
                transformStyle: "preserve-3d"
              }}
            />
          )}

          {/* THE MASTER 3D CAR CHASSIS CONTAINER */}
          <div 
            className="w-80 h-32 relative transition-all duration-300 transform-style-3d cursor-grab active:cursor-grabbing"
            style={{ 
              transform: `rotateX(${pitch}deg) rotateY(${yaw}deg) translateZ(0px)`,
              animation: nitro ? "pulseGlow 0.1s infinite" : "none"
            }}
          >
            {/* dynamic neon interior battery underglow shadow projecting downwards */}
            <div 
              className="absolute inset-x-4 bottom-[-10px] h-4 bg-[#ff003c] rounded-full blur-[25px] opacity-80 mix-blend-screen pointer-events-none"
              style={{ transform: "rotateX(90deg) translateZ(-60px)" }}
            />

            {/* 3D CAR LAYERS (Built out of carefully scaled CSS 3D solid blocks) */}
            
            {/* A: MAIN CHASSIS BED FLOORPLATE */}
            <div 
              className="absolute bg-gradient-to-r from-[#200407] via-red-950 to-black border border-red-900 rounded-lg flex items-center justify-center p-2"
              style={{ 
                width: "260px", 
                height: "110px", 
                left: "30px", 
                top: "10px", 
                transform: `translate3d(0px, ${suspension}px, 0px) rotateX(90deg)`,
                transformStyle: "preserve-3d"
              }}
            >
              <div className="text-[8px] font-mono text-[#ff003c] tracking-widest font-bold">NRK NDK POWERED</div>
            </div>

            {/* B: SECURE LOWER BUMPER Wedge (Front panel) */}
            <div 
              className="absolute bg-gradient-to-r from-[#1a0104] to-[#ff003c] border border-white/20"
              style={{
                width: "80px",
                height: "110px",
                right: "10px",
                top: "10px",
                transform: `translate3d(10px, ${suspension + 12}px, 0px) rotateY(90deg) rotateX(90deg)`,
                boxShadow: headlights ? "0 0 25px rgba(255, 255, 255, 0.4)" : "none"
              }}
            >
              {/* Highlight Headlight lens items inside front bumper */}
              <div className="flex justify-between items-center h-full px-2">
                <span className={`w-3 h-2 rounded-sm ${headlights ? "bg-white shadow-[0_0_15px_white]" : "bg-red-900"}`} />
                <span className="text-[6px] font-mono font-bold text-gray-500">VULKAN_V4</span>
                <span className={`w-3 h-2 rounded-sm ${headlights ? "bg-white shadow-[0_0_15px_white]" : "bg-red-900"}`} />
              </div>
            </div>

            {/* C: THE REAR DECK BLOCK & EXHAUST TAILPIPES */}
            <div 
              className="absolute bg-[#1a0104] border border-[#ff003c]"
              style={{
                width: "30px",
                height: "110px",
                left: "15px",
                top: "10px",
                transform: `translate3d(0px, ${suspension + 12}px, 0px) rotateY(-90deg) rotateX(90deg)`
              }}
            >
              {/* Tailpipes SVG exhaust flares inside the rear face */}
              <div className="flex justify-around items-center h-full px-2">
                <div className="relative">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-[#ff003c] block" />
                  {nitro && (
                    <span className="absolute -left-10 top-0 w-8 h-2.5 bg-gradient-to-r from-transparent via-[#ff003c] to-amber-400 rounded-full blur-[2px] animate-pulse" />
                  )}
                </div>
                
                <span className="text-[7px] font-mono text-gray-500 font-bold uppercase">NDK_APK</span>
                
                <div className="relative">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-[#ff003c] block" />
                  {nitro && (
                    <span className="absolute -left-10 top-0 w-8 h-2.5 bg-gradient-to-r from-transparent via-[#ff003c] to-amber-400 rounded-full blur-[2px] animate-pulse" />
                  )}
                </div>
              </div>
            </div>

            {/* D: COOP WEDGE SIDE DOORS (Left and Right profile faces) */}
            {/* Left Side Wall */}
            <div 
              className="absolute bg-gradient-to-r from-[#1e0205] to-[#ff003c] rounded-lg border-y border-white/20"
              style={{
                width: "260px",
                height: "60px",
                left: "30px",
                top: "10px",
                transform: `translate3d(0px, ${suspension - 25}px, 55px)`,
                transformStyle: "preserve-3d"
              }}
            >
              {/* Aerodynamic graphics on panels */}
              <div className="relative w-full h-full p-2.5 font-mono text-[8px] flex flex-col justify-between">
                <span className="text-white font-extrabold tracking-widest block bg-black/60 px-2 py-0.5 rounded w-fit border border-red-500/20">
                  NRK RACING
                </span>
                <div className="flex justify-between text-gray-400">
                  <span>DOWNFORCE // COMPRESSED</span>
                  <span>NDK_O3</span>
                </div>
              </div>
            </div>

            {/* Right Side Wall */}
            <div 
              className="absolute bg-gradient-to-r from-[#1e0205] to-[#ff003c] rounded-lg border-y border-white/20"
              style={{
                width: "260px",
                height: "60px",
                left: "30px",
                top: "10px",
                transform: `translate3d(0px, ${suspension - 25}px, -55px)`,
                transformStyle: "preserve-3d"
              }}
            >
              {/* Aerodynamic graphics on panels */}
              <div className="relative w-full h-full p-2.5 font-mono text-[8px] flex flex-col justify-between">
                <span className="text-white font-extrabold tracking-widest block bg-black/60 px-2 py-0.5 rounded w-fit border border-red-500/20">
                  NRK RACING
                </span>
                <div className="flex justify-between text-gray-400">
                  <span>AeroDuct // Active</span>
                  <span>VULKAN_V4</span>
                </div>
              </div>
            </div>

            {/* E: GLASS CANOPY HOOD COCKPIT (Top inclined blocks) */}
            <div 
              className="absolute bg-neutral-950 border border-[#80d5ff]/40 rounded-t"
              style={{
                width: "140px",
                height: "100px",
                left: "80px",
                top: "15px",
                transform: `translate3d(0px, ${suspension - 48}px, 0px) rotateX(90deg)`,
                opacity: 0.9,
                backgroundImage: "linear-gradient(135deg, rgba(128,213,255,0.2) 0%, rgba(0,0,0,0.8) 100%)"
              }}
            >
              <div className="w-full h-full p-2 flex items-center justify-center border-b border-sky-400/20">
                <span className="text-[7px] text-sky-300 font-mono tracking-widest">BIOMETRIC_COCKPIT</span>
              </div>
            </div>

            {/* F: HEAVY TREAD WHEELS THAT SPIN IN 3DPERSPECTIVE */}
            {/* Front Left Wheel */}
            <div 
              className="absolute bg-neutral-950 border-2 border-red-500 rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(255,0,0,0.5)] cursor-pointer"
              style={{
                width: "48px",
                height: "48px",
                left: "220px",
                top: "92px",
                transform: "translate3d(0px, 0px, 60px) rotateY(0deg)"
              }}
            >
              {/* Inside custom rotating wheel rim design */}
              <div className="w-10 h-10 border border-[#ff003c] rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: nitro ? "0.12s" : "1s" }}>
                <div className="w-1.5 h-full bg-[#ff003c]" />
                <div className="h-1.5 w-full bg-[#ff003c] absolute" />
                <div className="w-1.5 h-1.5 rounded-full bg-white absolute" />
              </div>
            </div>

            {/* Front Right Wheel */}
            <div 
              className="absolute bg-neutral-950 border-2 border-red-500 rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(255,0,0,0.5)] cursor-pointer"
              style={{
                width: "48px",
                height: "48px",
                left: "220px",
                top: "92px",
                transform: "translate3d(0px, 0px, -60px) rotateY(0deg)"
              }}
            >
              <div className="w-10 h-10 border border-[#ff003c] rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: nitro ? "0.12s" : "1s" }}>
                <div className="w-1.5 h-full bg-[#ff003c]" />
                <div className="h-1.5 w-full bg-[#ff003c] absolute" />
                <div className="w-1.5 h-1.5 rounded-full bg-white absolute" />
              </div>
            </div>

            {/* Rear Left Wheel */}
            <div 
              className="absolute bg-neutral-950 border-2 border-[#fff] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-pointer"
              style={{
                width: "55px",
                height: "55px",
                left: "40px",
                top: "88px",
                transform: "translate3d(0px, 0px, 60px) rotateY(0deg)"
              }}
            >
              <div className="w-12 h-12 border-2 border-[#ff003c] rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: nitro ? "0.1s" : "0.8s" }}>
                <div className="w-2 h-full bg-white" />
                <div className="h-2 w-full bg-white absolute" />
                <div className="w-3 h-3 rounded-full bg-[#ff003c] absolute" />
              </div>
            </div>

            {/* Rear Right Wheel */}
            <div 
              className="absolute bg-neutral-950 border-2 border-[#fff] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-pointer"
              style={{
                width: "55px",
                height: "55px",
                left: "40px",
                top: "88px",
                transform: "translate3d(0px, 0px, -60px) rotateY(0deg)"
              }}
            >
              <div className="w-12 h-12 border-2 border-[#ff003c] rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: nitro ? "0.1s" : "0.8s" }}>
                <div className="w-2 h-full bg-white" />
                <div className="h-2 w-full bg-white absolute" />
                <div className="w-3 h-3 rounded-full bg-[#ff003c] absolute" />
              </div>
            </div>

          </div>

          {/* Interactive touch HUD Overlay prompt for dragging rotation */}
          <div className="absolute top-4 left-4 bg-black/75 px-3 py-1.5 rounded-lg border border-neutral-900 font-mono text-[9px] text-gray-400 pointer-events-none uppercase">
            <span>SHOWROOM ENGINE CAMERA MODE</span>
          </div>

        </div>

        {/* Right Dashboard Controls Drawer Panel */}
        <div className="lg:col-span-4 bg-neutral-950 p-6 space-y-6 border-l border-neutral-900 flex flex-col justify-between">
          
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold border-b border-neutral-900 pb-2">
              SHOWROOM SYSTEM OVERLAY
            </span>

            {/* Orbit Rotator HUD parameters sliders */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gray-400">YAW SPIN CAMERA:</span>
                <span className="text-white font-bold">{Math.round(yaw)}°</span>
              </div>
              <input 
                type="range" 
                min="-180" 
                max="180" 
                value={yaw} 
                onChange={(e) => {
                  setYaw(Number(e.target.value));
                  setIsRotating(false);
                }}
                className="w-full accent-[#ff003c]" 
              />

              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gray-400">PITCH ANGLE CAMERA:</span>
                <span className="text-white font-bold">{Math.round(pitch)}°</span>
              </div>
              <input 
                type="range" 
                min="-60" 
                max="30" 
                value={pitch} 
                onChange={(e) => {
                  setPitch(Number(e.target.value));
                  setIsRotating(false);
                }}
                className="w-full accent-[#ff003c]" 
              />
            </div>

            {/* Interactive Suspension spring adjusting */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gray-400">NDK ADJUST SUSPENSION:</span>
                <span className="text-rose-500 font-bold">{suspension}MM</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="15" 
                value={suspension} 
                onChange={(e) => setSuspension(Number(e.target.value))}
                className="w-full accent-white" 
              />
              <span className="text-[9px] text-gray-400 font-mono block leading-none">
                Adjusts high-frequency Android suspension simulation compression values.
              </span>
            </div>

            {/* Switches and parameters matrix */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              
              <button
                onClick={() => setHeadlights(!headlights)}
                className={`py-2 px-3 rounded-lg border text-xs font-mono font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                  headlights 
                    ? "bg-white text-black border-white shadow-[0_0_12px_rgba(255,255,255,0.25)]" 
                    : "bg-black text-gray-500 border-neutral-900"
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>HEADLIGHTS</span>
              </button>

              <button
                onClick={() => setNitro(!nitro)}
                className={`py-2 px-3 rounded-lg border text-xs font-mono font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                  nitro 
                    ? "bg-[#ff003c] text-white border-[#ff003c] shadow-[0_0_12px_rgba(255,0,60,0.4)]" 
                    : "bg-black text-gray-500 border-neutral-900"
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>NITRO BOOST</span>
              </button>

            </div>

            {/* Orbit dynamic refresh trigger */}
            <button
              onClick={() => setIsRotating(!isRotating)}
              className="w-full py-2 bg-neutral-900 hover:bg-neutral-850 text-gray-300 rounded-lg text-xs font-mono font-bold border border-neutral-800 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#ff003c] ${isRotating ? "animate-spin" : ""}`} />
              <span>{isRotating ? "HALT ACTIVE SPINNING" : "RESUME AUTO CAM ROTATE"}</span>
            </button>
          </div>

          {/* Theoretical dynamic stats indicators */}
          <div className="p-3 bg-black rounded-xl border border-neutral-900 text-[11px] font-mono space-y-1.5">
            <span className="text-[9px] text-gray-500 block uppercase font-bold leading-none">VULKAN SIM ENGINE METRICS</span>
            <div className="flex justify-between">
              <span className="text-gray-400">DRAG COEFFICIENT:</span>
              <span className="text-white">0.23 Cx (NDK Optimize)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">ENGINE LATENCY:</span>
              <span className="text-emerald-400">0.8ms (Stable)</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
