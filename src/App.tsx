/**
 * App.tsx
 * NRK Studios Portfolio - Extreme Cyber Red Team Gaming Theme
 * Built to showcase high-performance Android App & Game development.
 * 
 * Features:
 * - Red Team Gaming Aesthetic with neon red glows, oxanium futuristic text fonts, and animated cyber grid.
 * - Viewport Switching System: Simulates a high-fidelity desktop workspace vs an ultra-premium virtual Android phone frame.
 * - Dynamic Fast Car Scroll Animation: Translates scrolling speed and percentage to driving velocity on a neon road.
 * - Large Scale 3D Elements, holographic SVG charts, detailed architectural modules, and gaming high score cabinets.
 * - Direct secure copy and call access links. No unrequested interactive inquiry hub form.
 */

import React, { useState, useEffect, useRef } from "react";
import {
  Smartphone,
  Layers,
  Database,
  Cpu,
  Palette,
  CheckCircle,
  Sparkles,
  Phone,
  Mail,
  ChevronRight,
  Star,
  Shield,
  Zap,
  CheckSquare,
  MessageSquare,
  ArrowRight,
  Send,
  Building,
  Calendar,
  Lock,
  Compass,
  FileCheck,
  CheckSquare2,
  Terminal,
  Activity,
  Chrome,
  Wifi,
  Battery,
  Award,
  Download,
  Flame,
  Gauge,
  Monitor,
  Maximize2,
  Minimize2,
  Gamepad2,
  Clock,
  Briefcase,
  GraduationCap,
  Copy,
  Check,
  Volume2,
  VolumeX,
  ExternalLink,
  RefreshCw,
  Sliders
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { PRODUCT_SHOWCASE, TECHNICAL_MILESTONES, TECH_STACKS, TESTIMONIALS } from "./data";
import { DemoProduct } from "./types";
import { NrkMainLogo, EduAcademyLogo, FlowBoardLogo, QuickFocusLogo, CosmosTapLogo } from "./components/CyberLogos";
import { Speedway3DCar, CyberCarShowroom3D } from "./components/CyberCar3D";

export default function App() {
  // Master Viewport simulated frame: "desktop" or "mobile"
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">("desktop");
  
  // Active product category selector
  const [activeTab, setActiveTab] = useState<"showroom" | "stack" | "performance" | "milestones" | "testimonials">("showroom");
  const [selectedProduct, setSelectedProduct] = useState<string>("edu_academy");
  
  // Custom scroll tracking for the speedy sports car
  const [scrollPercent, setScrollPercent] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [isNitro, setIsNitro] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState("");
  
  // Simulator internal states (pure advertising, non-interactive functional logs)
  const [simulatedEngineBootLog, setSimulatedEngineBootLog] = useState<string[]>([
    "INIT // NRK_STUDIOS_BOOT_PROCESSOR_V4",
    "NDK: Local Vulkan drivers detected - compiling shaders...",
    "APK: Packaging optimization set to level -O3",
    "MEM: Garbage collection baseline minimized to < 0.2ms",
    "CORE: Android Runtime native wrapper loaded successfully."
  ]);

  const lastScrollY = useRef(0);
  const speedResetTimer = useRef<NodeJS.Timeout | null>(null);

  // Live Clock Tick for dynamic HUD experience
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Frame scroll listener to control the car translation and calculate simulated velocity
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (docHeight > 0) {
        setScrollPercent(currentScroll / docHeight);
      }

      // Calculate absolute speed
      const absoluteSpeed = Math.abs(currentScroll - lastScrollY.current);
      setScrollSpeed(Math.min(absoluteSpeed, 65));
      setIsNitro(absoluteSpeed > 18);

      lastScrollY.current = currentScroll;

      // Throttle speed decay
      if (speedResetTimer.current) clearTimeout(speedResetTimer.current);
      speedResetTimer.current = setTimeout(() => {
        setScrollSpeed(0);
        setIsNitro(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (speedResetTimer.current) clearTimeout(speedResetTimer.current);
    };
  }, []);

  // Easy corporate clipboard copy utilities
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  // Simulated live logging intervals
  useEffect(() => {
    const logs = [
      "DB // Firebase Offline Synchronization stream initialized.",
      "VULKAN // FPS stabilized at perfect 120.2Hz.",
      "SEC // Relational SQLite backend verified against zero-injection vectors.",
      "MEM // Garbage collector threshold tuned. Base RAM usage is constant at 34MB.",
      "APK // Play Console packaging verified: Proguard encryption locked.",
      "SYS // Multi-threaded background scheduler spawned."
    ];
    const logTimer = setInterval(() => {
      setSimulatedEngineBootLog((prev) => {
        const nextLog = logs[Math.floor(Math.random() * logs.length)];
        const trimmed = prev.length > 5 ? prev.slice(1) : prev;
        return [...trimmed, `[${new Date().toLocaleTimeString()}] ${nextLog}`];
      });
    }, 4500);
    return () => clearInterval(logTimer);
  }, []);

  const { scrollYProgress } = useScroll();
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // UI Preset Mock Content - Handcrafted high fidelity spec cards for the showcase
  const selectedProductData = PRODUCT_SHOWCASE.find((p) => p.id === selectedProduct) || PRODUCT_SHOWCASE[0];

  return (
    <div className="min-h-screen grid-bg-animated overflow-x-hidden selection:bg-[#ff003c] selection:text-white text-gray-200 font-sans relative">
      
      {/* Immersive Scanlines Layer */}
      <div className="scanlines" />

      {/* Cyberpunk HUD Ambient Header */}
      <header className="bg-black/95 border-b-2 border-[#ff003c]/40 sticky top-0 z-50 shadow-[0_4px_30px_rgba(255,0,60,0.15)] py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo HUD with Glowing Animated Cybernetic Emblem */}
          <div className="flex items-center gap-3">
            <NrkMainLogo className="w-11 h-11" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold tracking-wider text-xl text-white">NRK STUDIOS</span>
                <span className="bg-[#ff003c] text-[9px] font-mono text-white px-1.5 py-0.5 rounded border border-[#ff003c]/50 font-bold uppercase">
                  ANDROID ONLY
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-mono tracking-widest leading-none mt-1">
                HIGH PERFORMANCE ENGINEERING & GAMING LABS
              </p>
            </div>
          </div>

          {/* Real-time Simulated Telemetry readouts */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-xs text-gray-400">
            <div className="flex items-center gap-2 bg-[#200407] border border-[#ff003c]/20 px-3 py-1.5 rounded text-[11px]">
              <Cpu className="w-3.5 h-3.5 text-[#ff003c] animate-pulse" />
              <span>VULKAN 1.3 RENDERING: <strong className="text-white">OPTIMIZED</strong></span>
            </div>
            <div className="flex items-center gap-2 bg-[#121216] border border-gray-800 px-3 py-1.5 rounded text-[11px]">
              <Database className="w-3.5 h-3.5 text-[#ff003c]" />
              <span>OFFLINE SQLITE PARADIGMS: <strong className="text-emerald-400">SECURE</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-black px-3 py-1 rounded text-[11px] border border-[#ff003c]/30">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span className="text-[#ff003c] font-black">{currentTime}</span>
            </div>
          </div>

          {/* Quick Direct Corporate Dialing Channels & Copy Tools */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <a
              id="header_voice_tel"
              href="tel:+918848198680"
              className="px-3.5 py-2 rounded-lg bg-[#200407] border border-[#ff003c]/30 hover:bg-[#ff003c]/10 text-xs font-mono font-bold tracking-wider text-gray-200 hover:text-[#ff003c] transition-all flex items-center gap-2 group"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff003c] group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">+91 8848198680</span>
              <span className="sm:hidden">CALL</span>
            </a>

            <button
              id="header_email_copy"
              onClick={() => handleCopy("nrkstudios123@gmail.com", "EMAIL")}
              className="px-3.5 py-2 rounded-lg bg-gray-950 border border-gray-800 hover:border-white transition-all text-xs font-mono flex items-center justify-center gap-2 text-gray-300"
              title="Click to copy corporate email"
            >
              <Mail className="w-3.5 h-3.5 text-gray-400" />
              <span className="hidden md:inline">nrkstudios123@gmail.com</span>
              {copiedText === "EMAIL" ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3 text-gray-500 hover:text-white" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Extreme Hero Area */}
      <motion.section 
        className="relative px-4 pt-16 pb-12 overflow-hidden max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        
        {/* Holographic Graphic Elements */}
        <motion.div 
          className="absolute right-10 top-0 w-96 h-96 bg-[#ff003c]/10 rounded-full blur-[120px] pointer-events-none" 
          style={{ y: yParallaxFast, rotate: rotateParallax }}
        />
        <motion.div 
          className="absolute left-10 bottom-0 w-80 h-80 bg-red-800/5 rounded-full blur-[100px] pointer-events-none" 
          style={{ y: yParallaxSlow }}
        />

        <div className="text-center relative z-10 max-w-4xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#3d000c] border border-[#ff003c]/50 text-[#ff003c] text-xs font-mono uppercase tracking-widest font-black shadow-[0_0_15px_rgba(255,0,60,0.2)] animate-pulse">
            <Flame className="w-3.5 h-3.5" />
            <span>NATIVE ANDROID DEVELOPMENT EXPERTS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-black text-white tracking-tighter leading-none uppercase">
            WE BUILD ELITE <br />
            <span className="bg-gradient-to-r from-white via-red-500 to-[#ff003c] bg-clip-text text-transparent italic tracking-tight font-extrabold pb-2 inline-block">
              ANDROID SOFTWARE
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-xl font-mono leading-relaxed max-w-3xl mx-auto border-l-2 border-[#ff003c] pl-4 md:pl-6 text-left sm:text-center">
            NRK Studios is a professional cyber-engineered development company. We construct highly-optimized Android ecosystems, customizable educational apps, enterprise business dashboards, and zero-latency graphics engines. Powered by C++ NDK, Jetpack Compose, and ultra-secure Firebase parameters.
          </p>

          {/* VIEWPORT MODE SELECTOR HUD */}
          <div className="pt-6">
            <div className="bg-neutral-950 border-2 border-dashed border-[#ff003c]/30 p-6 rounded-2xl max-w-3xl mx-auto space-y-4 shadow-[0_0_25px_rgba(0,0,0,0.8)]">
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <span className="text-[10px] font-mono text-[#ff003c] block uppercase tracking-widest font-bold">
                    [ MASTER VIEWPORT CHASSIS SWITCH ]
                  </span>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white">
                    SELECT INTERACTIVE PRESENTATION DECK PROFILE
                  </h3>
                  <p className="text-[11px] text-gray-400 font-mono leading-tight mt-0.5">
                    Toggle to preview the portfolio formatted inside a premium Desktop Workstation or a high-fidelity virtual android phone chassis.
                  </p>
                </div>

                <div className="flex bg-[#120204] p-1.5 border border-[#ff003c]/40 rounded-xl gap-1 shrink-0">
                  <button
                    onClick={() => setViewportMode("desktop")}
                    className={`px-4 py-2.5 rounded-lg text-xs font-mono font-bold tracking-widest uppercase transition-all flex items-center gap-2 ${
                      viewportMode === "desktop"
                        ? "bg-[#ff003c] text-white shadow-[0_0_15px_rgba(255,0,60,0.5)]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Monitor className="w-4 h-4" />
                    <span>DESKTOP VIEW</span>
                  </button>

                  <button
                    onClick={() => setViewportMode("mobile")}
                    className={`px-4 py-2.5 rounded-lg text-xs font-mono font-bold tracking-widest uppercase transition-all flex items-center gap-2 ${
                      viewportMode === "mobile"
                        ? "bg-[#ff003c] text-white shadow-[0_0_15px_rgba(255,0,60,0.5)]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>MOBILE PHONE</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </motion.section>

      {/* DYNAMIC SCROLL HIGHWAY PANEL - DYNAMIC SPORTS CAR SCROLLING SPEED ENGINE */}
      <div className="sticky top-[78px] z-40 bg-black/90 border-y-2 border-[#ff003c]/30 py-3 px-4 shadow-xl backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono">
          
          {/* Velocity HUD Left Output */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 bg-[#3d000c]/80 border border-[#ff003c]/40 px-2.5 py-1 rounded">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
              <span className="text-[10px] text-gray-300 font-bold uppercase">SPEEDWAY TELEMETRY</span>
            </div>
            <div className="space-x-2 text-gray-300">
              <span>ACCEL: <strong className="text-[#ff003c]">{Math.round(scrollPercent * 100)}%</strong></span>
              <span>• VELOCITY: <strong className="text-white">{scrollSpeed > 0 ? `${scrollSpeed * 6} KM/H` : "IDLE"}</strong></span>
            </div>
          </div>

          {/* THE SPEEDWAY ROAD FRAME */}
          <div className="flex-grow mx-4 relative h-6 bg-[#160205] rounded border border-red-500/20 px-2 overflow-hidden w-full md:w-auto">
            
            {/* Horizontal Road lanes */}
            <div className="absolute inset-x-0 top-1/2 h-0.5 speed-highway -translate-y-1/2 opacity-30" />
            
            {/* Milestone target checkpoints */}
            <div className="absolute left-[15%] top-1/2 -translate-y-1/2 text-[8px] tracking-tighter text-gray-500 uppercase">
              UI DESIGN
            </div>
            <div className="absolute left-[45%] top-1/2 -translate-y-1/2 text-[8px] tracking-tighter text-gray-500 uppercase">
              C++ NDK LOGIC
            </div>
            <div className="absolute left-[75%] top-1/2 -translate-y-1/2 text-[8px] tracking-tighter text-gray-500 uppercase">
              SECURITY SHIELD
            </div>

            {/* Simulated Driving Sports Car Node (3D Isometric Car Animation!) */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-300"
              style={{ left: `${scrollPercent * 88}%` }}
            >
              <Speedway3DCar scrollPercent={scrollPercent} scrollSpeed={scrollSpeed} isNitro={isNitro} />
            </div>

          </div>

          {/* Drive info HUD right feedback */}
          <div className="shrink-0 text-right font-mono text-[10px] hidden sm:block">
            {isNitro ? (
              <span className="text-amber-450 font-black animate-bounce block">
                ⚡ SCROLLING RPM CRITICAL / BOOST ENGAGED!
              </span>
            ) : (
              <span className="text-gray-400">SCROLL DOWN TO ACCELERATE ENGINE</span>
            )}
          </div>

        </div>
      </div>

      {/* Main Structural Layout Wrapper */}
      <main className="max-w-7xl mx-auto w-full px-4 py-8">
        
        {/* IF MOBILE VIEWPORT SIMULATION PROTOCOL ENABLED */}
        {viewportMode === "mobile" ? (
          <div className="flex justify-center py-6">
            
            {/* LIFE-SIZED VIRTUAL SMARTPHONE WRAPPER */}
            <div className="w-full max-w-[430px] bg-[#0c0d12] rounded-[52px] border-4 border-[#323645] p-3.5 shadow-[0_25px_60px_-15px_rgba(255,0,60,0.3)] relative">
              
              {/* Outer Volume Buttons Graphics */}
              <div className="absolute -left-1.5 top-36 w-1 w-12 bg-[#323645] rounded-l" />
              <div className="absolute -left-1.5 top-52 w-1 w-12 bg-[#323645] rounded-l" />
              <div className="absolute -right-1.5 top-44 w-1 w-16 bg-[#323645] rounded-r animate-pulse" />

              {/* Glowing Bezel line */}
              <div className="absolute inset-1.5 border-[2px] border-[#ff003c]/20 rounded-[48px] pointer-events-none" />

              {/* Smartphone Screen Canvas */}
              <div className="bg-[#050102] rounded-[44px] overflow-hidden border border-black min-h-[760px] flex flex-col justify-between relative text-gray-300">
                
                {/* Active Simulated Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-black z-30 flex items-center justify-center">
                  <div className="w-28 h-4.5 bg-black rounded-b-xl flex items-center justify-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-blue-900 border border-blue-400" />
                    <span className="w-8 h-1 bg-neutral-900 rounded-full" />
                  </div>
                </div>

                {/* Smartphone Custom High-Density Header Bar */}
                <div className="bg-black text-[10px] font-mono px-6 pt-7 pb-2.5 flex items-center justify-between border-b border-[#ff003c]/10 z-20">
                  <span className="text-white font-bold leading-none">NRK_NET</span>
                  <div className="flex items-center gap-1.5">
                    <Wifi className="w-3 h-3 text-[#ff003c]" />
                    <span className="text-white font-bold">5G</span>
                    <span className="text-gray-400">|</span>
                    <Battery className="w-3 h-3 text-[#ff003c] rotate-90" />
                    <span className="text-white">99%</span>
                  </div>
                </div>

                {/* Virtual smartphone active nested wrapper */}
                <div className="flex-grow overflow-y-auto max-h-[660px] p-4.5 space-y-8 scrollbar-thin">
                  
                  {/* Internal Notice */}
                  <div className="bg-[#1f0308] border border-[#ff003c]/30 p-4 rounded-xl text-center space-y-1.5">
                    <span className="text-[9px] font-mono text-[#ff003c] uppercase block font-bold">
                      SMARTPHONE ADAPTIVITY TEST
                    </span>
                    <p className="text-xs text-slate-300 font-sans leading-tight">
                      This virtual Android display confirms pixel-perfect responsiveness. All NRK Studios modules render natively across all modern Android devices.
                    </p>
                  </div>

                  {/* Android Category selections inside vertical stack */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff003c] block font-extrabold text-center">
                      📱 STAGES
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 font-mono text-center">
                      {["showroom", "stack", "performance", "milestones", "testimonials"].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab as any)}
                          className={`py-2 px-1 rounded text-[10px] tracking-tight uppercase font-bold border transition-all ${
                            activeTab === tab
                              ? "bg-[#ff003c] border-[#ff003c] text-white"
                              : "bg-black border-neutral-900 text-gray-400"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Render the core tab components recursively in smartphone mode */}
                  <div className="space-y-6">
                    {activeTab === "showroom" && (
                      <div className="space-y-4">
                        <div className="bg-[#120204] p-3 rounded-xl border border-[#ff003c]/30 text-center">
                          <span className="text-[#ff003c] font-display font-black tracking-widest text-xs block uppercase">
                            ANDROID CORE SHOWCASE
                          </span>
                          <span className="text-[10px] font-mono text-gray-400 block mt-1">
                            Click different items to change specifications
                          </span>
                        </div>

                        {/* Category Selector Buttons */}
                        <div className="flex flex-col gap-1.5">
                          {PRODUCT_SHOWCASE.map((p) => (
                            <button
                              key={p.id}
                              onClick={() => setSelectedProduct(p.id)}
                              className={`p-2 text-left rounded-lg text-xs font-mono border transition-all flex items-center gap-3.5 ${
                                selectedProduct === p.id
                                  ? "bg-[#2b040a] border-[#ff003c] text-white"
                                  : "bg-black border-neutral-900 text-gray-500"
                              }`}
                            >
                              <div className="w-8 h-8 shrink-0 bg-neutral-950 p-0.5 rounded-md border border-neutral-900 flex items-center justify-center">
                                {p.id === "edu_academy" && <EduAcademyLogo className="w-7 h-7" />}
                                {p.id === "biz_flow" && <FlowBoardLogo className="w-7 h-7" />}
                                {p.id === "prod_focus" && <QuickFocusLogo className="w-7 h-7" />}
                                {p.id === "game_space" && <CosmosTapLogo className="w-7 h-7" />}
                              </div>
                              <span className="truncate">{p.title}</span>
                            </button>
                          ))}
                        </div>

                        {/* Selected Product Specifications View */}
                        <div className="bg-black/95 p-4 rounded-xl border border-neutral-900 space-y-3">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff003c]">
                            {selectedProductData.category} APP SPECIFICATIONS
                          </span>
                          <p className="font-display font-medium text-xs text-white leading-normal">
                            {selectedProductData.title}
                          </p>
                          <p className="text-[11px] text-gray-400 leading-normal">
                            {selectedProductData.description}
                          </p>
                          <div className="p-2 bg-neutral-950 rounded border border-neutral-900">
                            <span className="text-[9px] font-mono text-[#ff003c] block uppercase">
                              Client Specifications:
                            </span>
                            <p className="text-[11px] text-slate-300 italic mt-0.5 leading-tight">
                              {selectedProductData.fullDetails}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "stack" && (
                      <div className="space-y-4">
                        {TECH_STACKS.map((stack) => (
                          <div key={stack.name} className="p-3 bg-black border border-neutral-900 rounded-lg space-y-1">
                            <span className="text-[9px] font-mono text-[#ff003c] block">
                              {stack.category}
                            </span>
                            <span className="font-display font-bold text-xs text-white block">
                              {stack.name}
                            </span>
                            <p className="text-[11px] text-gray-400 leading-snug">
                              {stack.usage}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === "performance" && (
                      <div className="space-y-4">
                        <div className="p-3 bg-black border border-[#ff003c]/20 rounded-xl space-y-2">
                          <span className="text-[10px] font-mono text-[#ff003c] block font-bold">
                            ANDROID COMPILER BENCHMARK
                          </span>
                          <div className="h-28 bg-[#0a0002] rounded border border-neutral-900 p-2 relative flex flex-col justify-end">
                            <div className="absolute inset-0 grid grid-rows-4 pointer-events-none">
                              {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="border-b border-neutral-950 w-full" />
                              ))}
                            </div>
                            <div className="flex items-end justify-around h-full relative z-10">
                              <div className="flex flex-col items-center">
                                <div className="w-5 h-20 bg-gradient-to-t from-red-950 to-red-600 rounded-t shadow-[0_0_10px_rgba(255,0,0,0.4)]" />
                                <span className="text-[8px] font-mono text-gray-500 mt-1">NRK APP</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="w-5 h-10 bg-gray-900 rounded-t" />
                                <span className="text-[8px] font-mono text-gray-500 mt-1">HYBRID</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-[11px] text-gray-400 font-mono text-center">
                            NRK native compiling boasts **50% smaller APK footprint** and **FPS stabilization**.
                          </p>
                        </div>
                      </div>
                    )}

                    {activeTab === "milestones" && (
                      <div className="space-y-4">
                        {TECHNICAL_MILESTONES.map((stone, i) => (
                          <div key={i} className="p-3.5 bg-neutral-950 rounded-lg border border-neutral-900 relative">
                            <span className="absolute top-2.5 right-2.5 text-[8px] font-mono uppercase bg-[#200407] text-[#ff003c] border border-[#ff003c]/30 px-1.5 py-0.5 rounded">
                              {stone.status}
                            </span>
                            <h4 className="font-display font-bold text-xs text-white">
                              {stone.title}
                            </h4>
                            <p className="text-[11px] text-gray-400 leading-normal mt-1">
                              {stone.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === "testimonials" && (
                      <div className="space-y-4">
                        {TESTIMONIALS.map((t) => (
                          <div key={t.id} className="p-4 bg-[#120204] border border-[#ff003c]/20 rounded-xl space-y-2">
                            <div className="flex items-center gap-1.5">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-3 h-3 text-[#ff003c] fill-[#ff003c]" />
                              ))}
                            </div>
                            <p className="text-xs text-slate-300 italic font-mono leading-relaxed">
                              "{t.content}"
                            </p>
                            <div>
                              <span className="text-xs font-bold text-white block">
                                {t.author}
                              </span>
                              <span className="text-[10px] text-gray-400 block font-mono">
                                {t.role}, {t.company}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>

                {/* Simulated Smartphone Bottom Home Bar Overlay */}
                <div className="bg-black/95 py-3 flex justify-center items-center z-10 border-t border-neutral-950">
                  <div className="w-32 h-1 bg-white/70 rounded-full animate-pulse" />
                </div>

              </div>
            </div>

          </div>
        ) : (
          
          /* IF DESKTOP MODE ACTIVE (GRAND CYBERNETIC PRESENTATION WORKSPACE) */
          <div className="space-y-16">
            
            {/* Viewport Control Callout */}
            <div className="p-6 bg-[#0c0d12] border-2 border-[#ff003c]/30 rounded-3xl relative overflow-hidden shadow-[0_12px_45px_rgba(255,0,60,0.15)]">
              
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#ff003c]/5 to-transparent pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#ff003c]/10 text-[#ff003c] border border-[#ff003c]/30 text-xs font-mono px-3 py-0.5 rounded uppercase font-bold">
                      ACTIVE SYSTEM PREVIEW
                    </span>
                    <span className="text-gray-400 text-xs font-mono">• RED TEAM ARCHITECTURE</span>
                  </div>
                  <h2 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                    HIGH FIDELITY VISUAL SYSTEM SPECIFICATIONS
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed">
                    Unlike ordinary agencies assembling basic templates, NRK Studios engineers custom native components. Our Android applications deploy fully integrated local SQL wrappers, secure background execution loops, and responsive design systems. Browse our detailed technical specifications below.
                  </p>
                </div>

                <div className="lg:col-span-4 flex justify-start lg:justify-end gap-3 font-mono">
                  <div className="p-4 bg-black/80 rounded-2xl border border-neutral-900 text-center min-w-[120px]">
                    <span className="text-2xl font-black text-rose-500 block">60 FPS</span>
                    <span className="text-[9px] text-gray-500 uppercase">TARGET FLUIDITY</span>
                  </div>
                  <div className="p-4 bg-[#1f0205] rounded-2xl border border-[#ff003c]/30 text-center min-w-[120px]">
                    <span className="text-2xl font-black text-white block">ZERO</span>
                    <span className="text-[9px] text-[#ff003c] font-bold uppercase">OUTAGE DUMPS</span>
                  </div>
                </div>
              </div>

            </div>

            {/* PRODUCT SPECIFICATION PLATFORM SELECTION DECK */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column Selector Drawer */}
              <div className="lg:col-span-4 space-y-4">
                
                <h3 className="font-display font-black text-xs text-gray-500 uppercase tracking-widest px-1">
                  CHOOSE PRODUCT MATRIX
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
                  {PRODUCT_SHOWCASE.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedProduct(item.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-4 relative overflow-hidden group ${
                        selectedProduct === item.id
                          ? "bg-[#180205] border-[#ff003c] text-white shadow-[0_0_25px_rgba(255,0,60,0.15)]"
                          : "bg-black/90 border-neutral-900 hover:border-neutral-800 text-gray-400 hover:text-white"
                      }`}
                    >
                      <div className="w-14 h-14 shrink-0 p-1 bg-[#050102] rounded-xl border border-neutral-900 flex items-center justify-center transition-transform group-hover:scale-105">
                        {item.id === "edu_academy" && <EduAcademyLogo className="w-12 h-12" />}
                        {item.id === "biz_flow" && <FlowBoardLogo className="w-12 h-12" />}
                        {item.id === "prod_focus" && <QuickFocusLogo className="w-12 h-12" />}
                        {item.id === "game_space" && <CosmosTapLogo className="w-12 h-12" />}
                      </div>

                      <div className="min-w-0">
                        <span className="text-[8px] font-mono uppercase tracking-wider text-[#ff003c] bg-[#ff003c]/10 px-2 py-0.5 rounded font-bold">
                          {item.category} APP SECURE
                        </span>
                        <h4 className="font-display font-bold text-sm text-white mt-1.5 leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5 truncate">{item.tagline}</p>
                      </div>

                      {selectedProduct === item.id && (
                        <div className="absolute right-2 top-2">
                          <span className="w-2 h-2 rounded-full bg-[#ff003c] animate-ping block" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Architectural Specifications Panel */}
                <div className="p-5 bg-black border border-neutral-900 rounded-xl space-y-3">
                  <span className="text-[10px] font-mono text-[#ff003c] uppercase block font-bold tracking-widest border-b border-neutral-950 pb-2">
                    [ CONTEXT BLUEPRINT ACCESS ]
                  </span>
                  
                  <p className="text-xs text-gray-300 leading-normal font-sans">
                    {selectedProductData.fullDetails}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <span className="text-[9px] text-[#ff003c] font-mono block uppercase">
                      COMPILATION FEATURES INCLUDED:
                    </span>
                    {selectedProductData.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle className="w-4 h-4 text-[#ff003c] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column High Fidelity Advertisement Billboard Simulation */}
              <div className="lg:col-span-8">
                
                {/* Simulated Screen Console App Chassis */}
                <div className="bg-black border-2 border-[#ff003c]/30 rounded-2xl overflow-hidden shadow-2xl relative">
                  
                  {/* Console Header Bar */}
                  <div className="bg-neutral-950 border-b border-neutral-900 px-5 py-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff003c]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff003c]/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff003c]/20" />
                      </div>
                      <span className="text-[10px] font-mono text-gray-400 bg-black/80 px-3 py-1 rounded border border-neutral-900 uppercase">
                        SPECIFICATION // {selectedProductData.id}.apk
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff003c] animate-pulse" />
                      <span className="text-[10px] font-mono text-[#ff003c] uppercase tracking-wider font-bold">
                        SECURE BUILD VERIFIED
                      </span>
                    </div>
                  </div>

                  {/* Core Content Area */}
                  <div className="p-6 sm:p-8 space-y-8 bg-gradient-to-b from-[#0b0103] to-black min-h-[480px]">
                    
                    {/* Visual Advertisement Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-900">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#040102] border-2 border-[#ff003c]/20 rounded-2xl p-1 shrink-0 flex items-center justify-center shadow-[0_0_15px_rgba(255,0,60,0.15)]">
                          {selectedProduct === "edu_academy" && <EduAcademyLogo className="w-14 h-14" />}
                          {selectedProduct === "biz_flow" && <FlowBoardLogo className="w-14 h-14" />}
                          {selectedProduct === "prod_focus" && <QuickFocusLogo className="w-14 h-14" />}
                          {selectedProduct === "game_space" && <CosmosTapLogo className="w-14 h-14" />}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#ff003c] block uppercase tracking-widest font-black">
                            APP PROFILE SHOWCASE
                          </span>
                          <h3 className="font-display font-black text-xl sm:text-2xl text-white mt-0.5 uppercase tracking-tight">
                            {selectedProductData.title}
                          </h3>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {selectedProductData.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="px-4 py-2 bg-[#120204] border border-[#ff003c]/30 rounded-lg shrink-0">
                        <span className="text-[9px] font-mono text-[#ff003c] block uppercase font-bold text-center">
                          NDK SIZE
                        </span>
                        <span className="text-xs font-mono font-bold text-white block text-center">
                          32.4 MB (APK)
                        </span>
                      </div>
                    </div>

                    {/* Detailed Mock Vector Grid Illustration depending on selected product (Pure Advertisement) */}
                    <div>
                      {selectedProduct === "edu_academy" && (
                        <div className="space-y-6">
                          
                          {/* Simulated Class Student Assessment Graphic */}
                          <div className="bg-[#050102] p-6 rounded-2xl border border-neutral-900 relative">
                            <span className="absolute top-3 right-3 text-[9px] font-mono text-[#ff003c] uppercase">
                              PREPARATION ENGINE ACCELERATION
                            </span>
                            
                            <h4 className="font-display font-medium text-xs text-gray-400 uppercase tracking-widest mb-4">
                              STUDENT PERFORMANCE METRIC ANALYSIS
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                              
                              {/* Left Simulated Assessment stats */}
                              <div className="space-y-3 font-mono">
                                <div className="p-3 bg-black rounded border border-neutral-900 flex justify-between">
                                  <span className="text-[11px] text-gray-400">COACHING SATELLITE</span>
                                  <span className="text-xs font-bold text-white">ONLINE</span>
                                </div>
                                <div className="p-3 bg-black rounded border border-neutral-900 flex justify-between">
                                  <span className="text-[11px] text-gray-400">COMPLETED ASSESSMENTS</span>
                                  <span className="text-xs font-bold text-white">4,812</span>
                                </div>
                                <div className="p-3 bg-[#120204] rounded border border-[#ff003c]/30 flex justify-between">
                                  <span className="text-[11px] text-gray-400">OUTSTANDING RATIO</span>
                                  <span className="text-xs font-bold text-[#ff003c]">98.4% STATUS</span>
                                </div>
                              </div>

                              {/* Right Graph indicator made with clean high fidelity custom styled SVGs */}
                              <div className="p-4 bg-black rounded border border-neutral-900 flex flex-col items-center">
                                <span className="text-[9px] font-mono text-gray-500 mb-2 uppercase">LMS COMPILATION SPEED</span>
                                <svg viewBox="0 0 100 50" className="w-full h-24 overflow-visible">
                                  <path
                                    d="M0,45 Q20,35 40,38 T80,15 T100,5"
                                    fill="none"
                                    stroke="#ff003c"
                                    strokeWidth="3"
                                    className="drop-shadow-[0_0_8px_rgba(255,0,60,0.6)]"
                                  />
                                  <circle cx="100" cy="5" r="4.5" fill="#ff003c" />
                                  <line x1="0" y1="45" x2="100" y2="45" stroke="#222" strokeDasharray="3 3" />
                                </svg>
                                <span className="text-[10px] font-mono text-emerald-400 mt-2 uppercase">
                                  STABILIZED SPEED RATIO (120 FPS NATIVE)
                                </span>
                              </div>

                            </div>
                          </div>

                          {/* Human design notes */}
                          <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-900 text-xs text-slate-300 font-sans leading-relaxed">
                            <strong>Interactive Architecture Study:</strong> EduAcademy maps custom coaching interfaces. It packages video stream pipelines, structured practice grids, offline progress caches, and analytics monitors into an optimized, lightning-fast native installation. No heavy web frames to drain your student’s mobile data.
                          </div>

                        </div>
                      )}

                      {selectedProduct === "biz_flow" && (
                        <div className="space-y-6">
                          
                          {/* Corporate ERP Tracking flow mockup */}
                          <div className="bg-[#050102] p-6 rounded-2xl border border-neutral-900 space-y-4">
                            <span className="text-[9px] font-mono text-[#ff003c] uppercase block">
                              LOGISTICS OPTIMIZATION COMPILER
                            </span>
                            <h4 className="font-display font-medium text-xs text-gray-400 uppercase tracking-widest">
                              ACTIVE LOGISTICS MULTI-STAGE DISPATCH FLOW
                            </h4>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                              {[
                                { stage: "BACKLOG", task: "Database Sync Check", status: "VERIFIED" },
                                { stage: "WORKFLOW", task: "QR Batch Generation", status: "STABILIZED" },
                                { stage: "QA CHECKS", task: "Low RAM Compilation", status: "SUCCESS" },
                                { stage: "PRODUCTION", task: "Play Store Release Ready", status: "LOCKED" }
                              ].map((item, index) => (
                                <div key={index} className="p-3 bg-black border border-neutral-900 rounded text-center space-y-1">
                                  <span className="text-[9px] font-mono text-[#ff003c] block font-extrabold">{item.stage}</span>
                                  <p className="text-[11px] font-bold text-white line-clamp-1">{item.task}</p>
                                  <span className="inline-block px-1.5 py-0.5 bg-neutral-950 border border-neutral-900 text-[8px] font-mono text-gray-400 rounded">
                                    {item.status}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Simulated chart */}
                            <div className="p-4 bg-black rounded border border-neutral-900">
                              <span className="text-[9px] font-mono text-gray-500 block uppercase mb-2">
                                FLOWBOARD WORKLOAD OPTIMIZATION LEVEL
                              </span>
                              <div className="h-6 w-full bg-neutral-950 rounded overflow-hidden relative border border-neutral-900">
                                <span className="absolute inset-y-0 left-0 bg-[#ff003c]/20 border-r border-[#ff003c] flex items-center px-3 text-[10px] font-mono text-white" style={{ width: "88%" }}>
                                  OPTIMIZATION OVERVIEW: 88% SYSTEM GAIN
                                </span>
                              </div>
                            </div>

                          </div>

                          <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-900 text-xs text-gray-300 leading-relaxed">
                            <strong>Operational Notes:</strong> FlowBoard centralizes daily corporate assignments, multi-tier stockpile calculations, secure administrative rights, and dynamic report logs securely, operating with immediate sqlite data recall.
                          </div>

                        </div>
                      )}

                      {selectedProduct === "prod_focus" && (
                        <div className="space-y-6">
                          
                          {/* Productivity showcase panel */}
                          <div className="bg-[#050102] p-6 rounded-2xl border border-neutral-900 space-y-4">
                            <span className="text-[9px] font-mono text-[#ff003c] uppercase block">
                              BATTERY CONSERVATION PARAMETERS
                            </span>
                            <h4 className="font-display font-medium text-xs text-gray-400 uppercase tracking-widest">
                              BACKGROUND SLEEP CYCLE EXHAUSTION METRICS
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-center">
                              <div className="p-3 bg-black border border-neutral-900 rounded-lg">
                                <span className="text-[10px] text-gray-500 block">STANDARD BACKGROUND EXHAUSTION</span>
                                <span className="text-sm font-bold text-red-500 block">7.4% Hourly</span>
                              </div>
                              <div className="p-3 bg-[#120204] border border-[#ff003c]/30 rounded-lg">
                                <span className="text-[10px] text-[#ff003c] block font-bold">NRK OPTIMIZED EXHAUSTION</span>
                                <span className="text-sm font-bold text-emerald-450 block">0.3% Hourly</span>
                              </div>
                              <div className="p-3 bg-black border border-neutral-900 rounded-lg">
                                <span className="text-[10px] text-gray-500 block">BATTERY HEALTH SAVINGS</span>
                                <span className="text-sm font-bold text-white block">+95.2% Saved</span>
                              </div>
                            </div>

                            <p className="text-xs text-gray-400 leading-normal">
                              🚀 **QuickFocus** relies on native Android AlarmManager and WorkManager APIs to initiate wake alarms rather than running CPU-heavy polling loops, preserving device battery life perfectly.
                            </p>
                          </div>

                        </div>
                      )}

                      {selectedProduct === "game_space" && (
                        <div className="space-y-6">
                          
                          {/* Gaming latency metrics */}
                          <div className="bg-[#050102] p-6 rounded-2xl border border-neutral-900 space-y-4">
                            <span className="text-[9px] font-mono text-[#ff003c] uppercase block">
                              GAMING LATENCY BENCHMARK
                            </span>
                            <h4 className="font-display font-medium text-xs text-gray-400 uppercase tracking-widest">
                              TOUCH-TO-PIXEL INTERACTIVE REACTION TIME
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                              <div className="space-y-3 font-mono">
                                <div className="p-3 bg-[#120204] rounded border border-[#ff003c]/30 flex justify-between">
                                  <span className="text-[11px] text-[#ff003c] font-bold">NRK TOUCH LATENCY (NATIVE)</span>
                                  <span className="text-xs font-bold text-emerald-450">1.8 MS (60FPS Frame)</span>
                                </div>
                                <div className="p-3 bg-black rounded border border-neutral-900 flex justify-between">
                                  <span className="text-[11px] text-gray-500">HTML FRAMEWORK APPS</span>
                                  <span className="text-xs font-bold text-red-400">14.6 MS</span>
                                </div>
                                <div className="p-3 bg-black rounded border border-neutral-900 flex justify-between">
                                  <span className="text-[11px] text-gray-500">REACT HYBRID SHIELD</span>
                                  <span className="text-xs font-bold text-yellow-500">9.2 MS</span>
                                </div>
                              </div>

                              <div className="p-4 bg-black rounded border border-neutral-900 text-center space-y-2">
                                <span className="text-[9px] font-mono text-gray-500 block uppercase">SOUNDSPACE LATENCY (PCM)</span>
                                <div className="h-4 bg-neutral-950 rounded overflow-hidden relative">
                                  <div className="bg-red-650 h-full w-[8%]" />
                                </div>
                                <span className="text-[10px] font-mono text-[#ff003c] block font-bold leading-none mt-1">
                                  STABILIZED AUDIO BUFFERS (ZERO CLICK NOISE)
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-900 text-xs text-gray-300 leading-relaxed">
                            <strong>Game Optimization Insight:</strong> Cosmos Tap Reflex Arena demonstrates why native mobile compilation outpaces standard web applications. It implements high-fidelity vector calculations and instant sound buffers in high frame levels, minimizing system lag completely.
                          </div>

                        </div>
                      )}
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

        {/* 3D AERODYNAMIC SYSTEM SHOWCASE (THE NATIVE 3D SPORTS CAR LABORATORY) */}
        <motion.section 
          className="mt-16 space-y-8 max-w-7xl mx-auto w-full"
          initial={{ opacity: 0, y: 50, rotateX: 10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[#ff003c] font-mono text-xs uppercase tracking-widest font-black block animate-pulse">
              [ 3D AERODYNAMIC PROPULSION DECK ]
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase">
              NRK 3D VULKAN DESIGN INTERIOR
            </h2>
            <p className="text-xs sm:text-xs text-gray-400 font-mono">
              Use orbit camera nodes to drag, rotate, inspect body lines, suspension compression, and active NDK ignition routines on our core model.
            </p>
          </div>

          <CyberCarShowroom3D />

        </motion.section>

        {/* SECTION 3: THE NATIVE ANDROID ENGINE PERFORMANCE LAB */}
        <motion.section 
          className="mt-16 space-y-8 max-w-7xl mx-auto w-full"
          initial={{ opacity: 0, y: 50, rotateX: -10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[#ff003c] font-mono text-xs uppercase tracking-widest font-black block">
              [ NATIVE HARDWARE TUNING DECK ]
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase">
              COMPILER OPTIMIZATION BENCHMARK
            </h2>
            <p className="text-xs sm:text-xs text-gray-400 font-mono">
              Why our custom Android NDK architectures outpace typical hybrid web packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Metric 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.5 }}
              className="p-6 bg-black border-2 border-[#ff003c]/20 rounded-2xl relative overflow-hidden group hover:border-[#ff003c]/60 transition-colors"
            >
              <div className="absolute right-3 top-3">
                <Gauge className="w-8 h-8 text-[#ff003c]/20 group-hover:text-[#ff003c] transition-colors" />
              </div>
              <span className="text-xs font-mono text-gray-500 block uppercase">BENCHMARK 01</span>
              <h3 className="font-display font-bold text-base text-white uppercase mt-2">
                APK FILE SIZE MINIFICATION
              </h3>
              <p className="text-xs text-gray-400 font-mono mt-2 leading-relaxed">
                We implement ProGuard multi-step shrinking, native resource compression, and vector asset packaging, compressing base APK footprints down to **less than 15MB**.
              </p>
            </motion.div>

            {/* Metric 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.5 }}
              className="p-6 bg-black border-2 border-[#ff003c]/20 rounded-2xl relative overflow-hidden group hover:border-[#ff003c]/60 transition-colors"
            >
              <div className="absolute right-3 top-3">
                <Activity className="w-8 h-8 text-[#ff003c]/20 group-hover:text-[#ff003c] transition-colors" />
              </div>
              <span className="text-xs font-mono text-gray-500 block uppercase">BENCHMARK 02</span>
              <h3 className="font-display font-bold text-base text-white uppercase mt-2">
                ZERO GARBAGE COLLECTION STALLS
              </h3>
              <p className="text-xs text-gray-400 font-mono mt-2 leading-relaxed">
                By optimizing local scopes and avoiding memory leak-prone abstractions, garbage collection stalls remain constant under **0.2ms**, preventing interface lags.
              </p>
            </motion.div>

            {/* Metric 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", bounce: 0.5 }}
              className="p-6 bg-black border-2 border-[#ff003c]/20 rounded-2xl relative overflow-hidden group hover:border-[#ff003c]/60 transition-colors"
            >
              <div className="absolute right-3 top-3">
                <Lock className="w-8 h-8 text-[#ff003c]/20 group-hover:text-[#ff003c] transition-colors" />
              </div>
              <span className="text-xs font-mono text-gray-500 block uppercase">BENCHMARK 03</span>
              <h3 className="font-display font-bold text-base text-white uppercase mt-2">
                RED TEAM ENCRYPTED SQL CLIENT
              </h3>
              <p className="text-xs text-gray-400 font-mono mt-2 leading-relaxed">
                Dynamic local data caches are secured using hardware-level AES-256 Android Keystores. All tables enforce deep SQL validation preventing localized penetration attempts.
              </p>
            </motion.div>

          </div>

          {/* SIMULATED COMPILER LOG STREAM BOARD */}
          <div className="bg-black border border-neutral-900 rounded-2xl p-5 shadow-2xl space-y-3.5">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-950">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#ff003c]" />
                <span className="text-xs font-mono text-gray-300 font-bold uppercase">
                  VIRTUAL ANDROID COMPILER STREAM LOG
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-450 uppercase animate-pulse">
                SYS_LISTENER_ACTIVE
              </span>
            </div>

            <div className="space-y-1.5 font-mono text-[11px] text-gray-450 leading-relaxed bg-[#050102] p-4.5 rounded-xl border border-neutral-950 max-h-[160px] overflow-y-auto">
              {simulatedEngineBootLog.map((log, index) => (
                <div key={index} className="flex items-start gap-1">
                  <span className="text-red-800 shrink-0">&gt;</span>
                  <span className={log.includes("VULKAN") || log.includes("SUCCESS") ? "text-emerald-400" : "text-gray-400"}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </motion.section>

        {/* SECTION 4: THE RED TEAM HIGH SECURITY PENETRATION FRAME */}
        <motion.section 
          className="mt-16 space-y-8 max-w-7xl mx-auto w-full"
          initial={{ opacity: 0, y: 50, rotateX: 10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-neutral-950 to-[#200407] p-8 sm:p-10 rounded-3xl border-2 border-[#ff003c]/40 relative overflow-hidden">
            
            <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-radial-gradient from-red-600/5 to-transparent pointer-events-none" />

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3d000c] border border-[#ff003c]/50 text-xs font-mono text-[#ff003c] uppercase font-bold">
                <Shield className="w-3.5 h-3.5" />
                <span>RED TEAM PENETRATION CHECK</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase leading-none">
                RIGOROUS SECURITY AUDITING
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed">
                Loose code leads to database exploits. NRK Studios implements professional secure static application security tests (SAST) prior to every Play Store release. We sanitize all deep-link URL schema structures to block intent redirection intercepts, and secure internal memory tokens securely.
              </p>

              <div className="grid grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2 text-xs text-gray-400">
                  <CheckCircle className="w-4 h-4 text-[#ff003c] shrink-0" />
                  <span>Intent Intercept Prevention Shield</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-400">
                  <CheckCircle className="w-4 h-4 text-[#ff003c] shrink-0" />
                  <span>Obfuscated ProGuard JVM Classes</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-400">
                  <CheckCircle className="w-4 h-4 text-[#ff003c] shrink-0" />
                  <span>Biometric Keystore Integration Secure</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-400">
                  <CheckCircle className="w-4 h-4 text-[#ff003c] shrink-0" />
                  <span>SQL-injection Safe Database Hooks</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-black/90 rounded-2xl border border-neutral-900 space-y-4 text-center">
              <Shield className="w-16 h-16 text-[#ff003c] animate-pulse" />
              <div>
                <span className="text-xs font-mono text-gray-400 block">PENETRATION SCORE</span>
                <span className="text-3xl font-display font-black text-white">99.9% SHIELD</span>
                <span className="text-[10px] font-mono text-emerald-400 block mt-1 uppercase font-bold">
                  ✓ ZERO SECURE FLAWS FOUND
                </span>
              </div>
            </div>

          </div>

        </motion.section>

        {/* SECTION 5: THE 3D CYBER DECK TECHNOLOGY STACK */}
        <motion.section 
          className="mt-16 space-y-8 max-w-7xl mx-auto w-full"
          initial={{ opacity: 0, y: 50, rotateX: -10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-[#ff003c] font-mono text-xs uppercase tracking-widest font-bold block">
              [ NATIVE API CORE IMPLEMENTATIONS ]
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase leading-tight">
              3D ADVANCED DECK STACK
            </h2>
            <p className="text-xs sm:text-xs text-slate-400 font-mono">
              Hover/Touch the tech modules below to inspect full Android integration parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 perspective-3d">
            
            {TECH_STACKS.map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15, type: "spring", bounce: 0.4 }}
                className="p-5.5 bg-black border-2 border-[#ff003c]/20 hover:border-[#ff003c] rounded-2xl skew-card-3d space-y-3.5 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(255,0,60,0.15)] bg-gradient-to-br from-black to-[#120103]/20"
              >
                {/* Visual Accent Corner Indicators */}
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#ff003c]" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-[#ff003c]/40" />

                <div className="p-3 bg-neutral-950 w-fit rounded-xl border border-neutral-900 group-hover:border-[#ff003c]/50 text-[#ff003c] transition-colors">
                  {stack.name.includes("React") && <Smartphone className="w-5.5 h-5.5" />}
                  {stack.name.includes("Flutter") && <Layers className="w-5.5 h-5.5" />}
                  {stack.name.includes("Firebase") && <Database className="w-5.5 h-5.5" />}
                  {stack.name.includes("Node") && <Cpu className="w-5.5 h-5.5" />}
                  {stack.name.includes("Tailwind") && <Palette className="w-5.5 h-5.5" />}
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block font-bold">
                    {stack.category}
                  </span>
                  <h4 className="font-display font-black text-sm text-white uppercase tracking-tight">
                    {stack.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed pt-2 border-t border-neutral-950">
                    {stack.usage}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </motion.section>

        {/* SECTION 6: CLIENT TESTIMONIAL ARENA (ARCADE CABINET LAYOUTS) */}
        <motion.section 
          className="mt-16 space-y-8 max-w-7xl mx-auto w-full"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-[#ff003c] font-mono text-xs uppercase tracking-widest font-bold block">
              [ REAL HIGH-TRUST CUSTOMER REPORTS ]
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase">
              CLIENT TESTIMONIAL HIGH SCORES
            </h2>
            <p className="text-xs text-gray-400 font-mono">
              Read how Apex Academies and ZetaStream systems achieve rapid productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, type: "spring", bounce: 0.4 }}
                className="p-6 bg-[#040001] border-2 border-neutral-900 hover:border-[#ff003c] rounded-2xl relative space-y-4 transition-all"
              >
                {/* Stars scoring HUD */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 text-[#ff003c] fill-[#ff003c]" />
                  ))}
                  <span className="text-[10px] font-mono text-gray-500 ml-2">SCORE: 5.0/5.0</span>
                </div>

                {/* Body paragraph copy */}
                <p className="text-xs sm:text-xs text-slate-300 italic font-mono leading-relaxed relative z-10">
                  "{test.content}"
                </p>

                {/* Divider lines */}
                <div className="border-t border-neutral-950 pt-3 flex flex-col">
                  <span className="font-display font-bold text-sm text-white uppercase">
                    {test.author}
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono uppercase mt-0.5">
                    {test.role} @ <strong className="text-rose-500 font-semibold">{test.company}</strong>
                  </span>
                </div>

                {/* Highlight Badge */}
                <div className="absolute top-3 right-3 text-[8px] font-mono uppercase bg-[#200407] text-[#ff003c] px-2 py-0.5 rounded border border-[#ff003c]/20">
                  {test.projectType}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.section>

        {/* SECURE DIRECT CHANNELS BANNER (No complex user submission form) */}
        <motion.section 
          className="mt-16 max-w-7xl mx-auto w-full"
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          
          <div className="bg-black border-2 border-dashed border-[#ff003c]/60 p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-[0_22px_50px_rgba(255,0,60,0.1)]">
            
            <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-[#ff003c]/10 to-transparent pointer-events-none" />

            <div className="text-center md:text-left max-w-3xl space-y-4 relative z-10">
              <span className="text-[#ff003c] font-mono text-xs uppercase tracking-widest block font-black">
                [ SECURE CORRESPONDENCE PIPELINE ]
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase leading-none">
                READY TO ENGAGE ON AN ANDROID SUITE?
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed">
                We design and optimize mobile applications strictly for corporate entities, educational portals, and logistics organizations. Contact our leading development line directly through phone or corporate encryption email.
              </p>

              {/* Direct corporate links coordinates block */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
                
                <a
                  id="direct_call_footer"
                  href="tel:+918848198680"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#ff003c] hover:bg-[#ff003c]/90 text-white font-mono text-xs font-bold tracking-widest rounded-xl text-center flex items-center justify-center gap-3 transition-colors shadow-lg shadow-[#ff003c]/20"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>DIAL +91 8848198680</span>
                </a>

                <button
                  id="direct_copy_footer"
                  onClick={() => handleCopy("nrkstudios123@gmail.com", "FOOTER")}
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#0e0204] hover:bg-black text-gray-300 border border-[#ff003c]/40 font-mono text-xs font-bold tracking-widest rounded-xl text-center flex items-center justify-center gap-3 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#ff003c]" />
                  <span>{copiedText === "FOOTER" ? "COPIED SUCCESSFULLY!" : "COPY CORPORATE EMAIL"}</span>
                </button>

              </div>
            </div>

          </div>

        </motion.section>

      </main>

      {/* Extreme Gaming Grid Footer */}
      <footer className="bg-black border-t-2 border-[#ff003c]/40 py-10 px-4 mt-16 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-mono">
          
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2.5 h-2.5 bg-[#ff003c] rounded-xs" />
              <span className="font-display font-extrabold text-white tracking-wider text-sm">
                NRK STUDIOS
              </span>
            </div>
            <p className="text-[10px] text-gray-400">
              Elite Native Android Systems & Hyper-Responsive Application Architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-1 bg-[#1a0205] text-[#ff003c] px-2 py-0.5 rounded border border-[#ff003c]/20 text-[10px]">
              <Lock className="w-3 h-3" />
              <span>AES-256 SECURED C++ NDK</span>
            </span>
            <span className="text-[10px] text-gray-400">
              © {new Date().getFullYear()} NRK STUDIOS. ALL CHASSIS TRADEMARKED.
            </span>
          </div>

        </div>
      </footer>

    </div>
  );
}
