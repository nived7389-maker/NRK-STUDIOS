import { DemoProduct, Testimonial, TechnicalMilestone } from "./types";

export const PRODUCT_SHOWCASE: DemoProduct[] = [
  {
    id: "edu_academy",
    title: "🎓 NRK EduAcademy Suite",
    category: "education",
    tagline: "High-Performance Learning & Training Engine",
    icon: "GraduationCap",
    features: [
      "Dynamic assessments & interactive mock exams",
      "Live attendance tracking & real-time analytics",
      "Secure video lectures stream & secure syllabus logs",
      "Automated reports & performance indicators"
    ],
    description: "An advanced, human-centric Learning Management System designed for students, institutions, and training centers.",
    fullDetails: "NRK EduAcademy simplifies custom coaching paradigms. By housing video playback, interactive exam cards, attendance trackers, and progress metrics within an intuitive app frame, we make premier quality education universally accessible."
  },
  {
    id: "biz_flow",
    title: "🏢 FlowBoard ERP & Operation Manager",
    category: "business",
    tagline: "Enterprise Workforce & Logistics Optimizer",
    icon: "Briefcase",
    features: [
      "Agile workflow tasks organizer & log tracker",
      "Multi-entity inventory tracking",
      "Role-based secure administrative management",
      "Real-time team performance analytics boards"
    ],
    description: "A secure, robust administrative suite designed to help companies streamline everyday operations efficiently.",
    fullDetails: "FlowBoard provides deep operational visibility. By centralizing active assignments, automated milestone states, team progress reporting, and workflow histories, we help organizations save hours on manual administration."
  },
  {
    id: "prod_focus",
    title: "📊 QuickFocus Utility",
    category: "productivity",
    tagline: "Ergonomic Focus Booster & Timer Engine",
    icon: "Clock",
    features: [
      "Dynamic focus block intervals (Pomodoro feedback)",
      "Interactive status checklist with priority sorting",
      "Acoustic focus generators & soundscape triggers",
      "Secure local usage logs and productivity statistics"
    ],
    description: "A gorgeous, clean productivity engine that converts focus hours into beautiful, reviewable data matrices.",
    fullDetails: "QuickFocus combines minimalism with robust client-side hooks, preventing exhaustion through organized work intervals, eye-rest cues, and dynamic performance trackers saved locally on the device."
  },
  {
    id: "game_space",
    title: "🎮 Cosmos Tap Reflex Arena",
    category: "games",
    tagline: "Hyper-Responsive Touch Reaction Memory Trainer",
    icon: "Gamepad2",
    features: [
      "Tactile responsive gameplay mechanics",
      "Interactive stage levels of increasing speeds",
      "Highly optimized state loops with smooth rendering",
      "Best Score tracking and offline multiplier save files"
    ],
    description: "A lightweight, beautiful mobile game offering delight, fast touch reflexes, and immediate gameplay gratification.",
    fullDetails: "Cosmos Tap exhibits NRK Studios' capability in executing smooth, zero-latency mobile game loops. Tailor-made for ultra-responsive feedback and optimized for modern screen devices."
  }
];

export const TECHNICAL_MILESTONES: TechnicalMilestone[] = [
  {
    title: "Human-Centered Design Sprint",
    description: "Every deployment begins by mapping authentic users. We draft interactive user flows and wireframes prioritizing contrast ratio, comfort, and natural thumb-navigation states.",
    status: "Design Stage"
  },
  {
    title: "Cross-Platform Optimization",
    description: "Deploying standard Flutter or React Native with custom native bridges. This ensures beautiful identical graphics on Apple iOS and Android while ensuring maximum CPU efficiency.",
    status: "Engineering Step"
  },
  {
    title: "Secure Middleware & Firebase Core",
    description: "Utilizing highly secure Firebase architectures, cloud authorization tokens, real-time database syncing, and multi-stage Cloud Run deployments to keep operations confidential.",
    status: "Infrastructure Stage"
  },
  {
    title: "Continuous Automated Iterations",
    description: "Releasing weekly builds based on performance logs, automated crash dumps, and proactive telemetry reviews to deliver endless excellence and software health.",
    status: "Maintenance Cycle"
  }
];

export const TECH_STACKS = [
  { 
    name: "React Native", 
    category: "Mobile App Architectures", 
    icon: "Smartphone", 
    usage: "Cross-platform engineering for fast, scalable iOS & Android custom apps." 
  },
  { 
    name: "Flutter Engine", 
    category: "High-Graphic Rendering", 
    icon: "Layers", 
    usage: "Pixel-perfect multi-platform UI layers with high speed, animations, and fluid canvas runs." 
  },
  { 
    name: "Firebase & Cloud Run", 
    category: "Robust Secure Storage", 
    icon: "Database", 
    usage: "Ultra-fast NoSQL Firestore database, cloud functions proxy, and secure OAuth logs." 
  },
  { 
    name: "Node.js & Express API", 
    category: "Custom Server Frameworks", 
    icon: "Cpu", 
    usage: "Scalable backend service environments executing REST endpoints and background crons cleanly." 
  },
  { 
    name: "Tailwind UI & Framer", 
    category: "Interactive Layouts", 
    icon: "Palette", 
    usage: "Sleek utility styling paired with micro-animations that respond instantly to touch gestures." 
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Arjun R. Nair",
    role: "Managing Director",
    company: "Apex Academy Kerala",
    content: "NRK Studios transformed our entire academy workflow. The educational application they built hosts video learning modules, grades test papers, and schedules analytics cleanly. User feedback has been phenomenal!",
    rating: 5,
    projectType: "Educational App Integration"
  },
  {
    id: "t2",
    author: "Preethi S. Menon",
    role: "Co-Founder",
    company: "ZetaStream Logistics",
    content: "Their custom ERP system is incredibly reliable. It streamlined our inventory dispatch workflows and reduced weekly administration hours by almost half. Superb project focus!",
    rating: 5,
    projectType: "Management platform"
  },
  {
    id: "t3",
    author: "Rohan K. Sharma",
    role: "Product Owner",
    company: "HyperActive Games",
    content: "We partnered with NRK to develop two casual reflex games. The touch responsiveness is flawless even on budget mobile phones, and the graphic layout is gorgeous.",
    rating: 5,
    projectType: "Mobile Game Suite"
  }
];
