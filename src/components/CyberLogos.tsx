import React from "react";

/**
 * CyberLogos.tsx
 * High-fidelity, animated, cybernetic-gaming styled SVG logos for NRK Studios and its division segments.
 */

// 1. Corporate / Main Logo of NRK Studios (Aggressive Hexagonal Shield with core reactor)
export function NrkMainLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative ${className} group`}>
      {/* Dynamic backdrop neon shadow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-[#ff003c] to-amber-500 rounded-lg blur opacity-35 group-hover:opacity-75 transition duration-500" />
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10 filter drop-shadow-[0_0_8px_rgba(255,0,60,0.5)] cursor-pointer"
      >
        <defs>
          <linearGradient id="nrkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff003c" />
            <stop offset="100%" stopColor="#80001c" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff003c" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#ffe3e3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff003c" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Outer Tech Hexagon Chassis */}
        <polygon
          points="50,5 92,28 92,72 50,95 8,72 8,28"
          fill="black"
          stroke="url(#nrkGrad)"
          strokeWidth="3.5"
          className="transition-all duration-300 group-hover:stroke-[#fff]"
        />

        {/* Inner concentric crosshairs */}
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="#ff003c"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="animate-[spin_12s_linear_infinite]"
        />

        {/* Diagonal cyber notches */}
        <line x1="15" y1="15" x2="30" y2="30" stroke="#ff003c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="85" y1="15" x2="70" y2="30" stroke="#ff003c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="85" x2="30" y2="70" stroke="#ff003c" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="85" y1="85" x2="70" y2="70" stroke="#ff003c" strokeWidth="1.5" strokeLinecap="round" />

        {/* Core Glowing Letter N constructed with industrial lines */}
        <path
          d="M32,70 L32,30 L45,30 L62,56 L62,30 L70,30 L70,70 L58,70 L40,42 L40,70 Z"
          fill="none"
          stroke="#fce8eb"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
        />

        {/* Glowing sweep bar overlay */}
        <polygon
          points="20,10 80,10 80,90 20,90"
          fill="url(#goldGrad)"
          className="pointer-events-none opacity-40 mix-blend-overlay animate-[pulseGlow_2.5s_infinite_ease-in-out]"
        />
        
        {/* Core status indicator dots */}
        <circle cx="50" cy="88" r="2.5" fill="#ff003c" className="animate-ping" />
        <circle cx="50" cy="12" r="2" fill="#fff" />
      </svg>
    </div>
  );
}

// 2. EduAcademy Studio Logo (Wisdom Crest with core scanning orbits and atomic details)
export function EduAcademyLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative ${className} group`}>
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="crestGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff003c" />
            <stop offset="100%" stopColor="#2b000a" />
          </linearGradient>
          <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff003c" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff1243" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central radial laser glow glow */}
        <circle cx="60" cy="60" r="45" fill="url(#ringGlow)" className="animate-pulse" />

        {/* Outer Shield-Crest Framework */}
        <path
          d="M60,10 L102,28 C102,72 82,100 60,110 C38,100 18,72 18,28 Z"
          fill="black"
          stroke="url(#crestGrad)"
          strokeWidth="3.5"
          className="group-hover:stroke-white transition-all duration-300"
        />

        {/* Ring Orbits representing interconnected courses (Atomic Knowledge rings) */}
        <ellipse
          cx="60"
          cy="60"
          rx="34"
          ry="14"
          fill="none"
          stroke="#ff003c"
          strokeWidth="1"
          transform="rotate(30 60 60)"
          strokeDasharray="5 3"
          className="animate-[spin_20s_linear_infinite]"
        />
        <ellipse
          cx="60"
          cy="60"
          rx="34"
          ry="14"
          fill="none"
          stroke="#fff"
          strokeWidth="0.8"
          transform="rotate(-30 60 60)"
          strokeDasharray="3 3"
          className="animate-[spin_15s_linear_infinite_reverse]"
        />

        {/* Main High-Tech Crest Book/Graduation Crest Graphic */}
        <g className="translate-y-2">
          {/* Cybernetic Graduation Cap */}
          <polygon
            points="60,35 90,45 60,55 30,45"
            fill="none"
            stroke="#ff003c"
            strokeWidth="2.5"
            className="group-hover:stroke-white transition-colors duration-300"
          />
          <line x1="60" y1="55" x2="60" y2="70" stroke="#ff003c" strokeWidth="2" />
          <path d="M78,50 L78,66 C78,72 68,72 60,72" fill="none" stroke="#ff003c" strokeWidth="2" />
          
          {/* Glowing central CPU learning hub */}
          <rect x="52" y="62" width="16" height="12" rx="2" fill="none" stroke="#ffe3e3" strokeWidth="1.5" />
          <line x1="48" y1="68" x2="52" y2="68" stroke="#ff003c" strokeWidth="2" />
          <line x1="68" y1="68" x2="72" y2="68" stroke="#ff003c" strokeWidth="2" />
          <circle cx="60" cy="68" r="2" fill="#ff003c" className="animate-ping" />
        </g>

        {/* Bottom target anchor */}
        <path d="M45,98 L60,105 L75,98" fill="none" stroke="#ff003c" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// 3. FlowBoard Studio Logo (Workforce ERP & Logistics Loops with moving neon payload pulses)
export function FlowBoardLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative ${className} group`}>
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#80001c" />
            <stop offset="50%" stopColor="#ff003c" />
            <stop offset="100%" stopColor="#ff9eaf" />
          </linearGradient>
        </defs>

        {/* Tech grid backlines */}
        <line x1="10" y1="60" x2="110" y2="60" stroke="#ff003c" strokeWidth="1" strokeOpacity="0.1" />
        <line x1="60" y1="10" x2="60" y2="110" stroke="#ff003c" strokeWidth="1" strokeOpacity="0.1" />

        {/* Outer Hexagon node alignment */}
        <polygon
          points="60,15 100,38 100,82 60,105 20,82 20,38"
          fill="none"
          stroke="#400710"
          strokeWidth="2"
        />

        {/* Interactive Linked Flow Loop (An infinity sign representing cyclic ERP optimizations) */}
        <path
          d="M32,60 C32,42 50,42 60,60 C70,78 88,78 88,60 C88,42 70,42 60,60 C50,78 32,78 32,60 Z"
          fill="none"
          stroke="url(#flowGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          className="filter drop-shadow-[0_0_6px_rgba(255,0,60,0.6)]"
        />

        {/* Logistics Data Nodes (Small glowing boxes) */}
        {/* Node 1 */}
        <circle cx="32" cy="60" r="5" fill="#000" stroke="#ff003c" strokeWidth="2.5" />
        <circle cx="32" cy="60" r="2.5" fill="#fff" className="animate-ping" />

        {/* Node 2 */}
        <circle cx="88" cy="60" r="5" fill="#000" stroke="#ff003c" strokeWidth="2.5" />
        <circle cx="88" cy="60" r="2.5" fill="#fff" className="animate-ping" />

        {/* Center Node Hub */}
        <rect x="52" y="52" width="16" height="16" rx="3" fill="#000" stroke="#fff" strokeWidth="2" />
        <polygon points="58,56 64,60 58,64" fill="#ff003c" />

        {/* Flow particles travelling along the lines */}
        <circle cx="60" cy="60" r="2.5" fill="#ff003c" className="animate-pulse" />
      </svg>
    </div>
  );
}

// 4. QuickFocus Studio Logo (Chronograph Dial Lens with rotating speed focus shutter)
export function QuickFocusLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative ${className} group`}>
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="shutterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff5f5" />
            <stop offset="100%" stopColor="#ff003c" />
          </linearGradient>
        </defs>

        {/* Outer Circular Chronograph Hub */}
        <circle rx="48" ry="48" cx="60" cy="60" fill="none" stroke="#2b000a" strokeWidth="4" />
        <circle rx="44" ry="44" cx="60" cy="60" fill="none" stroke="#ff003c" strokeWidth="1.5" strokeDasharray="3 4" />

        {/* Clock Ticks on top edges */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <line
            key={deg}
            x1="60"
            y1="16"
            x2="60"
            y2="20"
            stroke="#ff003c"
            strokeWidth="1.5"
            transform={`rotate(${deg} 60 60)`}
          />
        ))}

        {/* Rotating Focus Shutter Aperture Blades */}
        <g className="animate-[spin_25s_linear_infinite]">
          <path d="M60,24 C74,24 86,30 86,44 L60,60 Z" fill="none" stroke="#ff003c" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M96,60 C96,74 90,86 76,86 L60,60 Z" fill="none" stroke="#ff003c" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M60,96 C46,96 34,90 34,76 L60,60 Z" fill="none" stroke="#ff003c" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M24,60 C24,46 30,34 44,34 L60,60 Z" fill="none" stroke="#ff003c" strokeWidth="1.5" strokeOpacity="0.4" />
        </g>

        {/* Dynamic Focus Dial Pointer */}
        <line
          x1="60"
          y1="60"
          x2="60"
          y2="30"
          stroke="url(#shutterGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="animate-[spin_6s_cubic-bezier(0.16,1,0.3,1)_infinite] origin-[60px_60px]"
        />

        {/* Glowing Central core lens */}
        <circle cx="60" cy="60" r="10" fill="black" stroke="#ff003c" strokeWidth="2.5" />
        <circle cx="60" cy="60" r="4.5" fill="#fce8eb" className="animate-ping" />
      </svg>
    </div>
  );
}

// 5. Cosmos Tap Reflex Logo (Retro Arcade Gateway with starfield lasers and reactions)
export function CosmosTapLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative ${className} group`}>
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="cyberGateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe3e3" />
            <stop offset="50%" stopColor="#ff003c" />
            <stop offset="100%" stopColor="#400710" />
          </linearGradient>
        </defs>

        {/* Cyberpunk Starfield grid background */}
        <line x1="15" y1="90" x2="60" y2="40" stroke="#ff003c" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="105" y1="90" x2="60" y2="40" stroke="#ff003c" strokeWidth="0.5" strokeOpacity="0.5" />
        <line x1="60" y1="90" x2="60" y2="40" stroke="#ff003c" strokeWidth="0.5" strokeOpacity="0.5" />

        {/* Dynamic laser concentric rings expanding (Reaction pulses) */}
        <circle cx="60" cy="55" r="15" fill="none" stroke="#ff003c" strokeWidth="0.8" strokeOpacity="0.3" className="animate-ping" style={{ animationDuration: "2.4s" }} />
        <circle cx="60" cy="55" r="30" fill="none" stroke="#ff003c" strokeWidth="1.2" strokeOpacity="0.2" className="animate-ping" style={{ animationDuration: "3s" }} />

        {/* Floating Game Star Indicators */}
        <polygon points="60,18 63,24 70,24 65,29 67,36 60,31 53,36 55,29 50,24 57,24" fill="#ffe3e3" className="animate-[pulseGlow_1.5s_infinite_ease-in-out]" />
        <circle cx="25" cy="40" r="1.5" fill="#ff003c" />
        <circle cx="95" cy="40" r="1.5" fill="#ff003c" />
        <circle cx="35" cy="72" r="2" fill="#fff" className="animate-ping" />

        {/* Isometric Retro Game Gateway Cabin */}
        <polygon
          points="60,32 100,52 82,98 38,98 20,52"
          fill="none"
          stroke="url(#cyberGateGrad)"
          strokeWidth="3.5"
          className="group-hover:stroke-white transition-all duration-300"
        />

        {/* Central target reflex dot representing tap event */}
        <g className="translate-y-1">
          <circle cx="60" cy="62" r="12" fill="none" stroke="#ff003c" strokeWidth="1.5" strokeDasharray="4 2" className="animate-[spin_4s_linear_infinite]" />
          <polygon points="54,62 66,56 66,68" fill="url(#cyberGateGrad)" />
          <line x1="60" y1="46" x2="60" y2="78" stroke="#ff003c" strokeWidth="1" strokeDasharray="3" />
        </g>
      </svg>
    </div>
  );
}
