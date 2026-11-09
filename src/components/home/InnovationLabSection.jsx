import React, { useState, useRef } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Layers, 
  Terminal, 
  ExternalLink, 
  X, 
  Compass, 
  Activity, 
  Microscope, 
  Radio, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';

export const labProjects = [
  {
    id: 'lab-01',
    code: 'ROBO-01',
    title: 'Autonomous Lunar Rover & AI Vision Bot',
    domain: 'Robotics & AI',
    status: 'Operational',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Self-navigating obstacle-avoidance planetary rover prototype utilizing edge tensor compute, 360° LiDAR telemetry, and real-time computer vision.',
    specs: {
      framework: 'ROS 2 Humble + TensorFlow Lite Edge',
      hardware: 'Raspberry Pi 5 (8GB) + NVIDIA Jetson Nano',
      sensors: 'RPLiDAR A2 360°, Intel RealSense D435i',
      team: 'Aryan Sharma (Gr 11), Kiara Malhotra (Gr 10)',
      mentor: 'Dr. V. K. Raman (Head of Robotics & STEAM)'
    },
    metrics: [
      { label: 'Max Traverse Speed', value: '1.8 m/s' },
      { label: 'Obstacle Accuracy', value: '99.4%' },
      { label: 'Autonomous Endurance', value: '6.5 hrs' }
    ]
  },
  {
    id: 'lab-02',
    code: 'BIO-02',
    title: 'Myoelectric Bionic Prosthetic Arm',
    domain: 'Biotech & 3D Printing',
    status: 'Incubated',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    summary: 'Ultra-low-cost 3D-printed prosthetic forearm driven by dual-channel EMG surface muscle sensors and high-torque micro-servo actuation.',
    specs: {
      framework: 'SolidWorks Generative CAD + Embedded C++',
      hardware: 'Carbon-Fiber Reinforced PLA + Metal Gear Servos',
      sensors: 'MyoWare 2.0 Muscle Bio-Sensors',
      team: 'Devansh Kapoor (Gr 12), Sania Patel (Gr 11)',
      mentor: 'Mrs. S. Banerjee (Biomedical Innovation Mentor)'
    },
    metrics: [
      { label: 'Total Weight', value: '420 grams' },
      { label: 'Grip Configurations', value: '6 Gestures' },
      { label: 'Bio-Latency', value: '38 ms' }
    ]
  },
  {
    id: 'lab-03',
    code: 'IOT-03',
    title: 'Automated Smart Hydroponic Farm',
    domain: 'IoT & Automation',
    status: 'Live Deployment',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80',
    summary: 'Closed-loop agricultural vertical farming tower with automated pH dosing, dynamic nutrient EC replenishment, and solar battery storage.',
    specs: {
      framework: 'ESP32 MQTT Mesh + Node-RED Cloud Telemetry',
      hardware: 'Peristaltic Precision Pumps + Full-Spectrum LEDs',
      sensors: 'Industrial pH, Electrical Conductivity, DHT22',
      team: 'Rohan Nanda (Gr 9), Ananya Deshmukh (Gr 9)',
      mentor: 'Mr. Arvind Gupta (Head of Environmental Sciences)'
    },
    metrics: [
      { label: 'Water Conservation', value: '92%' },
      { label: 'Harvest Cycle', value: '3.4x Faster' },
      { label: 'Energy Source', value: '100% Solar' }
    ]
  },
  {
    id: 'lab-04',
    code: 'ASTRO-04',
    title: 'DeepSpace Robotic Telescope Tracker',
    domain: 'Space Tech',
    status: 'Operational',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=1200&q=80',
    summary: 'Automated motorized equatorial tracking mount for deep-sky astrophotography, exoplanet transit observations, and lunar topography mapping.',
    specs: {
      framework: 'Python AstroPy + INDI Client Protocol',
      hardware: '12-inch Schmidt-Cassegrain Telescope + Stepper Drive',
      sensors: 'Thermoelectrically Cooled Sony IMX571 CMOS',
      team: 'Kabir Bakshi (Gr 12), Meera Trivedi (Gr 11)',
      mentor: 'Dr. N. K. Joshi (Observatory Director)'
    },
    metrics: [
      { label: 'Optical Focal Length', value: '3,048 mm' },
      { label: 'Sidereal Tracking', value: '±0.2 arcsec' },
      { label: 'Limiting Magnitude', value: '16.5 Mag' }
    ]
  },
  {
    id: 'lab-05',
    code: 'AI-05',
    title: 'Humanoid Campus Concierge & Vision Bot',
    domain: 'Robotics & AI',
    status: 'Beta Testing',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=1200&q=80',
    summary: 'Interactive humanoid assistant capable of vocal campus guidance, student RFID verification, and conversational navigation in 6 languages.',
    specs: {
      framework: 'Whisper STT + Local Llama-3 8B + Piper Neural TTS',
      hardware: 'Articulated Dual-Arm Torso + Omni-Directional Base',
      sensors: 'Stereoscopic Vision Array + 6-Mic Beamforming',
      team: 'Tanya Roy (Gr 11), Siddharth Verma (Gr 10)',
      mentor: 'Ms. Shalini Roy (AI Research Faculty)'
    },
    metrics: [
      { label: 'Languages Supported', value: '6 Indian & Intl' },
      { label: 'Inference Latency', value: '0.55 sec' },
      { label: 'Guidance Accuracy', value: '99.8%' }
    ]
  },
  {
    id: 'lab-06',
    code: 'AERO-06',
    title: 'Generative Aerodynamic Drone Airframe',
    domain: '3D Engineering',
    status: 'Wind-Tunnel Tested',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Bio-inspired biomimetic drone airframe topology-optimized through computational fluid dynamics (CFD) for disaster relief reconnaissance.',
    specs: {
      framework: 'Autodesk Fusion 360 FEA + Ansys Fluent CFD',
      hardware: 'Bambu Lab X1-Carbon (PEEK & Continuous Carbon)',
      sensors: 'Barometric Altimeter + Optical Flow Nav',
      team: 'Aditya Singhania (Gr 12), Neha Kulkarni (Gr 11)',
      mentor: 'Mr. Rajesh Verma (Aeronautical Society In-Charge)'
    },
    metrics: [
      { label: 'Parasitic Drag', value: '-28% Reduced' },
      { label: 'Useful Payload', value: '2.4 kg' },
      { label: 'Max Flight Time', value: '38 minutes' }
    ]
  }
];

// Interactive 3D Tilt Card Component
function InteractiveLabCard({ project, onInspect }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`);
    setSpotlight({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onInspect(project)}
      style={{
        transform: transformStyle,
        transition: 'transform 0.18s cubic-bezier(0.2, 0, 0, 1)'
      }}
      className="group relative bg-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-800/90 hover:border-cyan-400/70 shadow-xl hover:shadow-cyan-500/20 cursor-pointer flex flex-col justify-between select-none"
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(circle 240px at ${spotlight.x}px ${spotlight.y}px, rgba(6, 182, 212, 0.22), transparent 75%)`
        }}
      />

      {/* Media Image Header */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Top Floating Cyber Badges */}
        <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
          <span className="font-mono text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
            [{project.code}]
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {project.status}
          </span>
        </div>

        {/* Bottom Tagline on Image */}
        <div className="absolute bottom-3 left-3.5 right-3.5 z-10 flex items-center justify-between">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            {project.domain}
          </span>
          <span className="font-mono text-[10px] text-slate-400">
            SYS.YEAR // {project.year}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col justify-between flex-1 relative z-10">
        <div>
          <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-2">
            {project.title}
          </h4>
          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
            {project.summary}
          </p>
        </div>

        {/* Live Metrics Grid Snapshot */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/90 text-center">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/70">
              <div className="text-[9px] font-mono text-slate-400 uppercase tracking-tight truncate">{m.label}</div>
              <div className="text-xs font-bold font-mono text-cyan-300 mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Bottom Action Footer */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-cyan-300 transition-colors">
          <span className="font-mono text-[11px] tracking-wider uppercase flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Inspect Prototype
          </span>
          <span className="w-7 h-7 rounded-lg bg-slate-800/80 group-hover:bg-cyan-500 group-hover:text-slate-950 flex items-center justify-center transition-all">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

// Arrow helper
function ArrowRight(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  );
}

export default function InnovationLabSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    'All',
    'Robotics & AI',
    'Biotech & 3D Printing',
    'IoT & Automation',
    'Space Tech',
    '3D Engineering'
  ];

  const filteredProjects = activeCategory === 'All'
    ? labProjects
    : labProjects.filter((p) => p.domain.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-slate-950 border-t border-slate-800/80">
      
      {/* Background Cybernetic Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #06b6d4 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Ashfall Studio Lab Style Telemetry */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 font-mono text-[11px] text-cyan-300 font-bold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>THE INNOVATION LAB // ASHFALL BENCHMARK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
              Inside Our Innovation Lab
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
              Experience the bleeding edge of school-level STEAM, robotics, 3D printing, and artificial intelligence prototyping created by St. Xavier's student fellows.
            </p>
          </div>

          {/* Telemetry Badge */}
          <div className="flex items-center gap-3">
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-right font-mono text-xs hidden sm:block">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">LAB STATUS: ONLINE</div>
              <div className="text-cyan-400 font-bold">STX-STEAM // 6 ACTIVE PROJECTS</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-[1.02]'
                  : 'bg-slate-900/80 hover:bg-slate-850 text-slate-300 border border-slate-800/90 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Perspective Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <InteractiveLabCard
              key={project.id}
              project={project}
              onInspect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Bottom Lab Footer Bar */}
        <div className="mt-14 p-6 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold block">Empowering Young Inventors & Researchers</span>
              <span>Supported by the Atal Tinkering Lab (ATL) & SoftDeals STEM Initiative.</span>
            </div>
          </div>
          <div className="font-mono text-[11px] text-cyan-400 flex items-center gap-2">
            <span>EXPLORE ROBOTICS SYLLABUS</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>

      {/* Ashfall-Style Project Inspection Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-fadeIn">
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
          >
            {/* Modal Header Media */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-rose-500 text-slate-300 hover:text-white backdrop-blur-md border border-slate-700/80 flex items-center justify-center transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Badges */}
              <div className="absolute bottom-4 left-6 right-6 z-10 flex items-end justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                    [{selectedProject.code}] • {selectedProject.domain}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                  {selectedProject.status}
                </span>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-slate-300">
              
              {/* Summary */}
              <div>
                <h5 className="font-mono text-xs uppercase font-bold text-slate-400 mb-1.5 tracking-wider">Prototype Overview</h5>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 text-center">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</div>
                    <div className="text-base font-bold font-mono text-cyan-300 mt-1">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Tech Specs Table */}
              <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 space-y-3 font-mono">
                <h5 className="text-xs uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" /> Engineering Telemetry
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] pt-1">
                  <div>
                    <span className="text-slate-500 block uppercase">Software Framework:</span>
                    <span className="text-white font-semibold">{selectedProject.specs.framework}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase">Compute & Hardware:</span>
                    <span className="text-white font-semibold">{selectedProject.specs.hardware}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase">Sensor Array:</span>
                    <span className="text-white font-semibold">{selectedProject.specs.sensors}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase">Student Fellows:</span>
                    <span className="text-cyan-300 font-semibold">{selectedProject.specs.team}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[11px]">
                  <span className="text-slate-500 uppercase">Faculty Research Supervisor: </span>
                  <span className="text-white font-semibold">{selectedProject.specs.mentor}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
                >
                  Close Inspector
                </button>
                <button
                  onClick={() => {
                    alert(`Accessing Full CAD Repository & Code for "${selectedProject.title}".\nAuthenticated via St. Xavier's STEAM portal.`);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/20"
                >
                  Download Project Whitepaper (PDF)
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
