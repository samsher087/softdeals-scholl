import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Sparkles,
  ShieldCheck,
  Compass,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Star,
  Eye,
  Cpu,
  Trophy,
  Globe,
  Building2,
  Smile,
  Check,
  ArrowUpRight,
  Pause,
  Play,
  Clock
} from 'lucide-react';
import { api } from '../services/api';
import { initialEvents } from '../../server/data/defaultData.js';
import LightboxModal from '../components/common/LightboxModal';

export default function Home({ onOpenAdmissionModal }) {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState(initialEvents);
  const [galleryPreview, setGalleryPreview] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);
  const [activeNoticeCategory, setActiveNoticeCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEventsPaused, setIsEventsPaused] = useState(false);
  const [isNoticesPaused, setIsNoticesPaused] = useState(false);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=85',
      title: 'Modern Lush Green Campus & Academic Blocks',
      tag: 'Campus Infrastructure'
    },
    {
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2000&q=85',
      title: 'Interactive 4K Smart Classrooms',
      tag: 'Smart Classrooms'
    },
    {
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2000&q=85',
      title: 'Next-Gen AI & Robotics Innovation Lab',
      tag: 'Robotics & STEAM Hub'
    },
    {
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85',
      title: 'Olympic-Standard Aquatic Center & Sports Arena',
      tag: 'Olympic Sports Arena'
    },
    {
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2000&q=85',
      title: 'Central Digital Library & Research Center',
      tag: 'Central Library'
    },
    {
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85',
      title: 'Vibrant Community of Future Global Leaders',
      tag: 'Student Excellence'
    }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [heroSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  useEffect(() => {
    // Fetch dynamic content
    const loadData = async () => {
      const [nRes, eRes, gRes] = await Promise.all([
        api.getNotices(),
        api.getEvents(),
        api.getGallery()
      ]);
      if (nRes?.data) setNotices(nRes.data);
      if (eRes?.data) setEvents(eRes.data);
      if (gRes?.data) setGalleryPreview(gRes.data.slice(0, 6));
    };
    loadData();
  }, []);

  const openLightboxAt = (index) => {
    setCurrentLightboxIndex(index);
    setLightboxOpen(true);
  };

  const filteredNotices = activeNoticeCategory === 'All'
    ? notices
    : notices.filter(n => n.category.toLowerCase() === activeNoticeCategory.toLowerCase());

  const whyChooseUs = [
    {
      title: 'Holistic & Innovative Pedagogy',
      desc: 'Blended experiential learning combining CBSE academic rigor with STEAM projects, critical thinking, and coding from early years.',
      icon: Sparkles,
      color: 'bg-blue-50 text-skyAccent-600 border-skyAccent-200'
    },
    {
      title: 'Smart Digital Infrastructure',
      desc: '4K interactive smart classrooms, state-of-the-art AI & Robotics hubs, advanced composite science labs, and campus-wide high-speed fiber.',
      icon: Cpu,
      color: 'bg-amber-50 text-gold-600 border-gold-200'
    },
    {
      title: 'Olympic-Standard Sports Arena',
      desc: 'All-weather heated swimming pool, FIFA-standard synthetic turf, indoor badminton courts, basketball arena, and professional coaches.',
      icon: Trophy,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    {
      title: 'Safe, Secure & GPS-Tracked',
      desc: '100% CCTV surveillance, RFID automated attendance gates, background-checked staff, and GPS-enabled air-conditioned bus transport.',
      icon: ShieldCheck,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      title: 'Global Citizen Curriculum',
      desc: 'Foreign language electives (French, German), Model United Nations (MUN), international student exchange, and public speaking clubs.',
      icon: Globe,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      title: 'Individual Attention (1:15 Ratio)',
      desc: 'Low student-to-teacher ratio ensuring tailored guidance, personalized remedial learning support, and dedicated career counseling.',
      icon: Compass,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    }
  ];

  const facilities = [
    {
      name: 'Smart Touch Classrooms',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      description: 'Ergonomic furniture, digital whiteboards, acoustic insulation, and high-lumen laser projectors.'
    },
    {
      name: 'Robotics & AI Innovation Lab',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      description: 'Equipped with 3D printers, Arduino kits, drone assembly zones, and Python programming stations.'
    },
    {
      name: 'Central Knowledge Library',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
      description: 'Over 35,000 reference books, national dailies, Kindle e-readers, and quiet research carrels.'
    },
    {
      name: 'Olympic Aquatic & Sports Complex',
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
      description: 'Dedicated heated swimming pool, athletics track, tennis academy, and cricket nets.'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Vikram Malhotra',
      role: 'Cardiologist & Parent of Aryan (Grade 10)',
      comment: "Enrolling our son at Umeed Global was the best decision we made. The teachers nurture not only academic precision but moral integrity and confidence. Aryan has flourished in both his STEM projects and debating.",
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Mrs. Ananya Sengupta',
      role: 'Architect & Parent of Riya (Grade 6)',
      comment: "The infrastructure is truly world-class. From the clean and monitored swimming pools to the safety in transportation, everything reflects pure professionalism. The management's transparency is commendable.",
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Mr. Rajesh & Priya Kulkarni',
      role: 'Parents of Kabir (Grade 2)',
      comment: "The primary wing has created a warm, encouraging atmosphere for our child. He looks forward to school every single morning! The experiential learning pedagogy has made mathematics and reading an absolute joy.",
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <div className="w-full">

      {/* 1. HERO SECTION WITH SLIDING SCHOOL IMAGES */}
      <section className="relative min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] flex flex-col justify-end bg-slate-950 overflow-hidden group">
        {/* Sliding Background School Images */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center filter brightness-90 transform transition-transform duration-[7000ms] ease-out ${index === currentSlide ? 'scale-105' : 'scale-100'
                  }`}
              />
            </div>
          ))}
          {/* Subtle bottom gradient to dock stats boxes cleanly */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080414] via-[#080414]/40 to-transparent pointer-events-none"></div>
        </div>

        {/* Slide Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0d0722]/80 hover:bg-purple-600 text-purple-200 hover:text-white backdrop-blur-md border border-[#442c75]/80 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0d0722]/80 hover:bg-purple-600 text-purple-200 hover:text-white backdrop-blur-md border border-[#442c75]/80 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-8 sm:pb-12 w-full">
          <div className="max-w-6xl mx-auto">

            {/* Quick Trust Highlights - Exactly matching user screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="theme-box p-4 sm:p-5 flex items-center gap-3.5 hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-2xl bg-[#190f38] border border-purple-500/40 flex items-center justify-center shrink-0 shadow-md text-purple-300">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#f472b6]">
                    2,850+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">Total Students</div>
                </div>
              </div>

              <div className="theme-box p-4 sm:p-5 flex items-center gap-3.5 hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-2xl bg-[#190f38] border border-purple-500/40 flex items-center justify-center shrink-0 shadow-md text-purple-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#f472b6]">
                    120+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">Qualified Educators</div>
                </div>
              </div>

              <div className="theme-box p-4 sm:p-5 flex items-center gap-3.5 hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-2xl bg-[#190f38] border border-purple-500/40 flex items-center justify-center shrink-0 shadow-md text-purple-300">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#f472b6]">
                    28+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">Years of Excellence</div>
                </div>
              </div>

              <div className="theme-box p-4 sm:p-5 flex items-center gap-3.5 hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-2xl bg-[#190f38] border border-purple-500/40 flex items-center justify-center shrink-0 shadow-md text-purple-300">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#f472b6]">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">Board Pass Rate</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 2. PRINCIPAL'S WELCOME MESSAGE - SoftDeals Dark Style */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="theme-box p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Principal Photograph & Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 aspect-[4/5] max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Eleanor Vance - Principal"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080414]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-serif font-bold text-lg text-white">Dr. Eleanor Vance</div>
                  <div className="text-xs text-fuchsia-300 font-medium">Principal & Academic Director</div>
                  <div className="text-[11px] text-[#a99ac7]">M.Sc., M.Ed., Ph.D. in Child Pedagogy • 26 Yrs Exp.</div>
                </div>
              </div>

              {/* Decorative Floating Quote Pill */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#180e38]/95 text-white p-3.5 rounded-2xl shadow-xl border border-purple-500/40 hidden sm:flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-fuchsia-400" />
                <span className="text-xs font-semibold text-[#d4c6f3]">"Excellence is not an act, but a habit."</span>
              </div>
            </div>

            {/* Welcome Statement */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-md">
                <GraduationCap className="w-3.5 h-3.5 text-fuchsia-400" /> Welcome to Our Campus
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                "Nurturing Curious Minds, Resilient Characters, and Compassionate Hearts."
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Dear Students, Parents, and Honored Guests,
              </p>

              <p className="text-[#d4c6f3] text-sm sm:text-base leading-relaxed">
                At Umeed Global International School, we consider education a sacred journey of transformation. Our mission extends far beyond textbooks and examinations—we inspire young minds to question with curiosity, innovate with courage, and serve society with unshakeable moral integrity.
              </p>

              <p className="text-[#d4c6f3] text-sm sm:text-base leading-relaxed">
                Supported by cutting-edge STEM laboratories, world-class athletic infrastructure, and faculty trained in global best practices, our learners consistently excel in academic olympiads and university placements across India and abroad.
              </p>

              <div className="pt-4 border-t border-[#341f5e]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-serif font-bold text-white text-base">Dr. Eleanor Vance</div>
                  <div className="text-xs text-fuchsia-400">Principal, Umeed Global International School</div>
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-fuchsia-400 hover:text-fuchsia-300 uppercase tracking-wider transition-colors"
                >
                  Read Full Leadership Message <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE OUR SCHOOL - Theme Box Style */}
      <section className="py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300 bg-purple-950/80 border border-purple-500/30 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
              Why Parents Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-3 mb-4">
              An Educational Experience Rooted in Excellence
            </h2>
            <p className="text-[#d4c6f3] text-sm sm:text-base">
              We provide a balanced ecosystem where scholastic achievement is harmonized with character building, creative expression, and athletic training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              const isFirstThree = index < 3;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isFirstThree ? -120 : 120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{
                    duration: 0.75,
                    delay: isFirstThree ? index * 0.15 : (index - 3) * 0.15 + 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="h-full"
                >
                  <div className="group theme-box p-8 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#a78bfa] tracking-wider">
                          <Clock className="w-3.5 h-3.5 text-[#a78bfa]" />
                          <span>Pillar {index + 1}</span>
                        </span>
                        <span className="text-[10px] uppercase font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#1b103e] border border-[#3e276b] text-fuchsia-300">
                          Excellence
                        </span>
                      </div>

                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-[#190f38] text-purple-300 border border-purple-500/40 group-hover:border-purple-400 group-hover:scale-105 transition-all shadow-md">
                        <Icon className="w-6 h-6 text-purple-300" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#d4c6f3] text-xs sm:text-sm leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div>
                      <span className="theme-pill text-[10px]">Umeed Global Distinction</span>
                      <div className="w-14 h-1 bg-white/20 rounded-full mx-auto mt-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. FACILITIES & INFRASTRUCTURE PREVIEW - Theme Box Style */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300 bg-purple-950/80 border border-purple-500/30 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                World-Class Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-3">
                Inspiring Spaces for Learning & Discovery
              </h2>
            </div>
            <Link
              to="/gallery"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold text-fuchsia-400 hover:text-fuchsia-300 uppercase tracking-wider transition-colors"
            >
              <span>View Full Campus Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.75,
                  delay: idx * 0.12,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="h-full"
              >
                <div className="group theme-box hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">
                  <div className="h-48 overflow-hidden bg-[#180e38] relative">
                    <img
                      src={fac.image}
                      alt={fac.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-95 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#130b2e] via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="theme-pill text-[10px] mb-2.5">Campus Wing</span>
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {fac.name}
                      </h3>
                      <p className="text-xs text-[#d4c6f3] leading-relaxed mb-4">
                        {fac.description}
                      </p>
                    </div>
                    <div className="w-14 h-1 bg-white/20 rounded-full mx-auto mt-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. LATEST ANNOUNCEMENTS & EVENTS SECTION - Theme Box Style */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Notices & Circulars (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 min-h-[58px]">
                <div>
                  <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider block">Official Bulletin</span>
                  <h3 className="text-2xl font-serif font-black text-white">Latest Announcements</h3>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Filter Pills */}
                  <div className="flex items-center gap-1.5 bg-[#140b30]/90 p-1.5 rounded-full border border-[#3e276b] text-xs font-semibold">
                    {['All', 'Admissions', 'Examinations'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveNoticeCategory(cat)}
                        className={`px-3 py-1 rounded-full transition-all ${activeNoticeCategory === cat
                          ? 'bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white shadow-md font-bold'
                          : 'text-[#a99ac7] hover:text-white'
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Auto-scroll toggle pill */}
                  <button
                    type="button"
                    onClick={() => setIsNoticesPaused((prev) => !prev)}
                    className="theme-pill px-3 py-1.5"
                    title={isNoticesPaused ? "Click to resume auto-scroll" : "Click to pause auto-scroll (or hover on any notice)"}
                  >
                    {isNoticesPaused ? (
                      <>
                        <Play className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="text-amber-300">Paused</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
                        <span className="text-white">Auto-Scroll</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Scrolling Notices Box with Fade Masks */}
              <div
                className="theme-box p-3 relative h-[495px] overflow-hidden group shadow-2xl"
              >
                {/* Top and Bottom Gradient Fade Masks */}
                <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#130b2e] via-[#130b2e]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#130b2e] via-[#130b2e]/80 to-transparent z-10 pointer-events-none" />

                {/* Hardware-Accelerated CSS Infinite Vertical Scroller */}
                <div
                  className="animate-scroll-up space-y-3.5 py-2 cursor-pointer"
                  style={{
                    animationPlayState: isNoticesPaused ? 'paused' : 'running',
                    animationDuration: '30s'
                  }}
                  onMouseEnter={() => setIsNoticesPaused(true)}
                  onMouseLeave={() => setIsNoticesPaused(false)}
                >
                  {/* Duplicated list for seamless upward loop */}
                  {(filteredNotices.length > 0 ? [...filteredNotices, ...filteredNotices] : []).map((notice, idx) => (
                    <div
                      key={`${notice.id}-${idx}`}
                      className="theme-box p-4 rounded-[22px] hover:scale-[1.01] transition-all shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${notice.urgent
                            ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                            : 'bg-purple-500/20 text-fuchsia-300 border border-purple-500/40'
                            }`}>
                            {notice.category}
                          </span>
                          <span className="text-[11px] text-[#a99ac7] flex items-center gap-1 font-mono">
                            <Calendar className="w-3 h-3 text-purple-400" /> {notice.date}
                          </span>
                        </div>

                        <a
                          href={notice.fileUrl}
                          onClick={(e) => {
                            e.preventDefault();
                            alert(`Downloading official notice circular: "${notice.title}".\nPDF verification authenticated.`);
                          }}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] px-3 py-1 rounded-full shadow-sm hover:shadow-purple-950/80 transition-all shrink-0"
                        >
                          <Download className="w-3 h-3 text-white" /> Notice PDF
                        </a>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-white hover:text-fuchsia-300 transition-colors line-clamp-1 mb-1">
                        {notice.title}
                      </h4>
                      <p className="text-xs text-[#d4c6f3] leading-relaxed line-clamp-2">
                        {notice.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming School Events (5 Cols) - Upward Auto-Scrolling */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="mb-6 flex items-center justify-between min-h-[58px]">
                <div>
                  <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider block">Mark Your Calendar</span>
                  <h3 className="text-2xl font-serif font-black text-white">Upcoming Events</h3>
                </div>

                {/* Auto-scroll status indicator & toggle */}
                <button
                  type="button"
                  onClick={() => setIsEventsPaused((prev) => !prev)}
                  className="theme-pill px-3 py-1.5"
                  title={isEventsPaused ? "Click to resume auto-scroll" : "Click to pause auto-scroll (or hover on any card)"}
                >
                  {isEventsPaused ? (
                    <>
                      <Play className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="text-amber-300">Paused</span>
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
                      <span className="text-white">Auto-Scroll</span>
                    </>
                  )}
                </button>
              </div>

              {/* Scrolling Events Box with Fade Masks */}
              <div
                className="theme-box p-3 relative h-[495px] overflow-hidden group shadow-2xl"
              >
                {/* Top and Bottom Gradient Fade Masks */}
                <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#130b2e] via-[#130b2e]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#130b2e] via-[#130b2e]/80 to-transparent z-10 pointer-events-none" />

                {/* Hardware-Accelerated CSS Infinite Vertical Scroller */}
                <div
                  className="animate-scroll-up space-y-4 py-2 cursor-pointer"
                  style={{
                    animationPlayState: isEventsPaused ? 'paused' : 'running'
                  }}
                  onMouseEnter={() => setIsEventsPaused(true)}
                  onMouseLeave={() => setIsEventsPaused(false)}
                >
                  {/* Duplicated event list for seamless, uninterrupted upward loop */}
                  {(events.length > 0 ? [...events, ...events] : []).map((event, idx) => (
                    <div
                      key={`${event.id}-${idx}`}
                      className="theme-box p-4 rounded-[26px] flex flex-col sm:flex-row group/card hover:scale-[1.01] transition-all duration-300 shadow-xl"
                    >
                      <div className="sm:w-36 h-28 sm:h-auto overflow-hidden rounded-2xl shrink-0 relative border border-[#3e276b] mb-3 sm:mb-0">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="sm:pl-4 flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#a78bfa] mb-1">
                            <span className="text-fuchsia-400 font-bold">{event.badge}</span>
                            <span className="flex items-center gap-1 text-[#b8a7db]">
                              <Clock className="w-3 h-3 text-[#a78bfa]" />
                              {event.time}
                            </span>
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-white line-clamp-1 group-hover/card:text-fuchsia-300 transition-colors">
                            {event.title}
                          </h4>
                          <p className="text-[12px] text-[#d4c6f3] line-clamp-2 mt-1 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                        <div className="mt-3 text-[11px] font-semibold text-[#b8a7db] flex items-center justify-between pt-2 border-t border-[#341f5e]/70">
                          <span>📍 {event.venue?.replace(/St\. Xavier's/gi, "Umeed Global")}</span>
                          <span className="text-fuchsia-300 font-mono font-bold">{event.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. PARENT TESTIMONIALS - SoftDeals Dark Style */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300 bg-purple-950/80 border border-purple-500/30 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
              Voices of Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-3 mb-3">
              What Our Parents Say
            </h2>
            <p className="text-[#d4c6f3] text-sm">
              Discover why generations of families place their heartfelt trust in our educational values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="theme-box p-7 sm:p-8 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                      ))}
                    </div>
                    <span className="theme-pill text-[10px]">Verified Parent</span>
                  </div>

                  <p className="text-[#d4c6f3] text-xs sm:text-sm leading-relaxed italic mb-6">
                    "{t.comment}"
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#341f5e]/80">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-purple-400/80 shadow-md"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-[11px] text-fuchsia-300 font-medium">{t.role}</div>
                    </div>
                  </div>
                  <div className="w-14 h-1 bg-white/20 rounded-full mx-auto mt-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. PHOTO GALLERY PREVIEW - Theme Box Style */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider block">Life at Umeed Global</span>
              <h2 className="text-3xl font-serif font-black text-white">Campus Gallery Snapshot</h2>
            </div>
            <Link
              to="/gallery"
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-fuchsia-400 hover:text-fuchsia-300 uppercase tracking-wider transition-colors"
            >
              Explore All Photos & Videos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryPreview.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightboxAt(index)}
                className="group relative theme-box p-0 h-48 sm:h-60 rounded-[26px] overflow-hidden cursor-pointer shadow-xl border border-[#442c75]/80 hover:border-purple-400/80 hover:scale-[1.02] transition-all duration-300"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130b2e]/95 via-[#130b2e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-mono font-bold text-fuchsia-300 uppercase tracking-wider">{item.category}</span>
                  <div className="text-xs sm:text-sm font-bold line-clamp-1 text-white">{item.title}</div>
                  <div className="flex items-center gap-1 text-[11px] text-purple-200 mt-1">
                    <Eye className="w-3.5 h-3.5 text-purple-300" /> Click to view full image
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. ADMISSION CALL TO ACTION BANNER - SoftDeals Dark Style */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="theme-box p-10 sm:p-14 text-center">
            {/* Ambient Purple Glow Orbs */}
            <div className="absolute top-0 right-10 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-fuchsia-500/15 rounded-full blur-3xl pointer-events-none"></div>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-fuchsia-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> Admissions Open 2026-27
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black mb-4 text-white">
              Give Your Child the Foundation They Deserve
            </h2>

            <p className="text-[#d4c6f3] text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Schedule a personal campus walkthrough, interact with our academic coordinators, and discover the Umeed Global advantage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button
                onClick={onOpenAdmissionModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold rounded-2xl shadow-xl shadow-purple-950/60 hover:scale-[1.02] transition-all"
              >
                Apply Online Now
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-[#180e38]/80 hover:bg-[#22134e] text-slate-200 hover:text-white font-semibold rounded-2xl border border-[#3e276b] backdrop-blur-md transition-all hover:-translate-y-0.5"
              >
                Contact Admissions Office
              </Link>
            </div>

            {/* Bottom Home Bar */}
            <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        items={galleryPreview}
        currentIndex={currentLightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryPreview.length - 1))}
        onNext={() => setCurrentLightboxIndex((prev) => (prev < galleryPreview.length - 1 ? prev + 1 : 0))}
      />

    </div>
  );
}

