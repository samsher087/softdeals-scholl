import React, { useState, useEffect } from 'react';
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
  ArrowUpRight
} from 'lucide-react';
import { api } from '../services/api';
import LightboxModal from '../components/common/LightboxModal';

export default function Home({ onOpenAdmissionModal }) {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [galleryPreview, setGalleryPreview] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);
  const [activeNoticeCategory, setActiveNoticeCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

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
      color: 'bg-cyan-50 text-cyan-600 border-cyan-200'
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
      comment: "Enrolling our son at St. Xavier's was the best decision we made. The teachers nurture not only academic precision but moral integrity and confidence. Aryan has flourished in both his STEM projects and debating.",
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
      <section className="relative min-h-[660px] lg:min-h-[740px] flex items-center bg-slate-950 overflow-hidden group">
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
          {/* Gradient Overlay for high-contrast crisp text in SoftDeals Dark Style */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40"></div>
        </div>

        {/* Slide Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950/70 hover:bg-cyan-500 text-slate-300 hover:text-slate-950 backdrop-blur-md border border-slate-700/80 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950/70 hover:bg-cyan-500 text-slate-300 hover:text-slate-950 backdrop-blur-md border border-slate-700/80 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20 lg:py-28 w-full">
          <div className="max-w-5xl xl:max-w-6xl">

            {/* Top Pill - SoftDeals Cyan Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-300 font-bold">ADMISSIONS OPEN FOR 2026-27</span>
              <span className="text-slate-300">| Nursery to Grade XI</span>
            </div>

            {/* Main Headline - Single Line on Desktop with SoftDeals Cyan-Sky-Teal Gradient */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[3.15rem] font-serif font-extrabold text-white tracking-tight leading-tight mb-5 lg:whitespace-nowrap drop-shadow-md">
              Building Bright Futures <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 bg-clip-text text-transparent">Through Quality Education.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl font-normal drop-shadow-sm">
              Empowering young minds with academic rigor, discipline, creativity, and technological innovation. Providing a world-class environment where future leaders discover their highest potential.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-2">
              <button
                onClick={onOpenAdmissionModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-brand-600 via-cyan-600 to-teal-500 hover:from-brand-500 hover:to-teal-400 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-cyan-950/60 hover:scale-[1.02] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Admission Enquiry</span>
                <ChevronRight className="w-5 h-5 text-teal-200" />
              </button>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base rounded-2xl border border-slate-700/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Explore Our School</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-4 pt-8 mt-8 border-t border-slate-800/80">
              <div className="flex items-center gap-3 text-slate-200 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0 shadow-sm">
                  <Users className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs xl:text-sm font-bold text-white leading-tight whitespace-nowrap">
                    <span className="font-serif font-black text-sm xl:text-base text-white mr-1.5">2,850+</span>
                    Total Students Enrolled
                  </div>
                  <div className="text-[11px] text-slate-400 hidden sm:block whitespace-nowrap">
                    Nurtured Across All Grades
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0 shadow-sm">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs xl:text-sm font-bold text-white leading-tight whitespace-nowrap">
                    <span className="font-serif font-black text-sm xl:text-base text-white mr-1.5">120+</span>
                    Qualified Educators
                  </div>
                  <div className="text-[11px] text-slate-400 hidden sm:block whitespace-nowrap">
                    Certified & Experienced Faculty
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0 shadow-sm">
                  <Award className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs xl:text-sm font-bold text-white leading-tight whitespace-nowrap">
                    <span className="font-serif font-black text-sm xl:text-base text-white mr-1.5">28+</span>
                    Years of Excellence
                  </div>
                  <div className="text-[11px] text-slate-400 hidden sm:block whitespace-nowrap">
                    Established in 1998
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-200 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0 shadow-sm">
                  <Trophy className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs xl:text-sm font-bold text-white leading-tight whitespace-nowrap">
                    <span className="font-serif font-black text-sm xl:text-base text-white mr-1.5">100%</span>
                    Board Examination Pass Rate
                  </div>
                  <div className="text-[11px] text-slate-400 hidden sm:block whitespace-nowrap">
                    Consistently Ranked in Top Tier
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Slider Indicators and Active Facility Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 mt-6">
            {/* Interactive slide indicator dots */}
            <div className="flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-3.5 py-2 rounded-full border border-slate-800">
              {heroSlides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${slide.tag}`}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentSlide
                      ? 'w-7 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 shadow-md shadow-cyan-500/50'
                      : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            {/* Active Facility Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-slate-800 text-xs text-slate-200">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-semibold text-white">{heroSlides[currentSlide].tag}</span>
              <span className="text-slate-400 text-[11px]">({currentSlide + 1} of {heroSlides.length})</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PRINCIPAL'S WELCOME MESSAGE - SoftDeals Dark Style */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800/90 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Principal Photograph & Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 aspect-[4/5] max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Eleanor Vance - Principal"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-serif font-bold text-lg text-white">Dr. Eleanor Vance</div>
                  <div className="text-xs text-cyan-300 font-medium">Principal & Academic Director</div>
                  <div className="text-[11px] text-slate-400">M.Sc., M.Ed., Ph.D. in Child Pedagogy • 26 Yrs Exp.</div>
                </div>
              </div>

              {/* Decorative Floating Quote Pill */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-slate-900/95 text-white p-3.5 rounded-xl shadow-xl border border-cyan-500/40 hidden sm:flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-200">"Excellence is not an act, but a habit."</span>
              </div>
            </div>

            {/* Welcome Statement */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" /> Welcome to Our Campus
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                "Nurturing Curious Minds, Resilient Characters, and Compassionate Hearts."
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Dear Students, Parents, and Honored Guests,
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                At St. Xavier's International School, we consider education a sacred journey of transformation. Our mission extends far beyond textbooks and examinations—we inspire young minds to question with curiosity, innovate with courage, and serve society with unshakeable moral integrity.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Supported by cutting-edge STEM laboratories, world-class athletic infrastructure, and faculty trained in global best practices, our learners consistently excel in academic olympiads and university placements across India and abroad.
              </p>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-serif font-bold text-white text-base">Dr. Eleanor Vance</div>
                  <div className="text-xs text-cyan-400">Principal, St. Xavier's International School</div>
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider transition-colors"
                >
                  Read Full Leadership Message <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE OUR SCHOOL - SoftDeals Dark Style */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
              Why Parents Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-3 mb-4">
              An Educational Experience Rooted in Excellence
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              We provide a balanced ecosystem where scholastic achievement is harmonized with character building, creative expression, and athletic training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-900/80 hover:bg-slate-850 backdrop-blur-xl rounded-3xl p-7 border border-slate-800/90 hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1.5"
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-slate-800/90 text-cyan-400 border border-slate-700/80 group-hover:border-cyan-400 group-hover:scale-110 transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. FACILITIES & INFRASTRUCTURE PREVIEW - SoftDeals Dark Style */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                World-Class Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-3">
                Inspiring Spaces for Learning & Discovery
              </h2>
            </div>
            <Link
              to="/gallery"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider transition-colors"
            >
              <span>View Full Campus Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-slate-900/90 backdrop-blur-xl border border-slate-800/90 shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-48 overflow-hidden bg-slate-800">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                      {fac.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. LATEST ANNOUNCEMENTS & EVENTS SECTION - SoftDeals Dark Style */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Notices & Circulars (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Official Bulletin</span>
                  <h3 className="text-2xl font-serif font-black text-white">Latest Announcements</h3>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
                  {['All', 'Admissions', 'Examinations'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveNoticeCategory(cat)}
                      className={`px-3 py-1 rounded-lg transition-colors ${
                        activeNoticeCategory === cat
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notices List */}
              <div className="space-y-3.5">
                {filteredNotices.slice(0, 4).map((notice) => (
                  <div
                    key={notice.id}
                    className="bg-slate-900/75 hover:bg-slate-850 rounded-2xl p-4 sm:p-5 border border-slate-800/90 hover:border-cyan-500/40 shadow-lg transition-all relative"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          notice.urgent
                            ? 'bg-red-500/15 text-red-300 border border-red-500/30'
                            : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        }`}>
                          {notice.category}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-cyan-400" /> {notice.date}
                        </span>
                      </div>

                      <a
                        href={notice.fileUrl}
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Downloading official notice circular: "${notice.title}".\nPDF verification authenticated.`);
                        }}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:text-cyan-300 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        <Download className="w-3 h-3 text-cyan-400" /> Notice PDF
                      </a>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors">
                      {notice.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {notice.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming School Events (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="mb-6">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">Mark Your Calendar</span>
                <h3 className="text-2xl font-serif font-black text-white">Upcoming Events</h3>
              </div>

              <div className="space-y-4">
                {events.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className="bg-slate-900/75 hover:bg-slate-850 rounded-2xl overflow-hidden border border-slate-800/90 hover:border-cyan-500/40 shadow-lg transition-all flex flex-col sm:flex-row"
                  >
                    <div className="sm:w-36 h-28 sm:h-auto overflow-hidden shrink-0">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-cyan-400 font-bold mb-1">
                          <span>{event.badge}</span>
                          <span className="text-slate-400 font-normal">{event.time}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white line-clamp-1">
                          {event.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                          {event.description}
                        </p>
                      </div>
                      <div className="mt-2 text-[10px] font-semibold text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800">
                        <span>📍 {event.venue}</span>
                        <span className="text-cyan-300 font-bold">{event.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. PARENT TESTIMONIALS - SoftDeals Dark Style */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
              Voices of Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-3 mb-3">
              What Our Parents Say
            </h2>
            <p className="text-slate-400 text-sm">
              Discover why generations of families place their heartfelt trust in our educational values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-7 border border-slate-800/90 hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-[11px] text-cyan-400 font-medium">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. PHOTO GALLERY PREVIEW - SoftDeals Dark Style */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Life at St. Xavier's</span>
              <h2 className="text-3xl font-serif font-black text-white">Campus Gallery Snapshot</h2>
            </div>
            <Link
              to="/gallery"
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider transition-colors"
            >
              Explore All Photos & Videos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryPreview.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightboxAt(index)}
                className="group relative h-48 sm:h-60 rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-slate-800 hover:border-cyan-500/50 transition-all"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider">{item.category}</span>
                  <div className="text-xs sm:text-sm font-bold line-clamp-1 text-white">{item.title}</div>
                  <div className="flex items-center gap-1 text-[11px] text-cyan-300 mt-1">
                    <Eye className="w-3.5 h-3.5 text-cyan-400" /> Click to enlarge
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
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-10 sm:p-14 shadow-2xl relative overflow-hidden border border-cyan-500/30 text-center">
            {/* Ambient Cyan Glow Orbs */}
            <div className="absolute top-0 right-10 w-72 h-72 bg-brand-600/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Admissions Open 2026-27
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black mb-4 text-white">
              Give Your Child the Foundation They Deserve
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Schedule a personal campus walkthrough, interact with our academic coordinators, and discover the St. Xavier's advantage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button
                onClick={onOpenAdmissionModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-600 via-cyan-600 to-teal-500 hover:from-brand-500 hover:to-teal-400 text-white font-bold rounded-2xl shadow-xl shadow-cyan-950/60 hover:scale-[1.02] transition-all"
              >
                Apply Online Now
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold rounded-2xl border border-slate-700/80 backdrop-blur-md transition-all hover:-translate-y-0.5"
              >
                Contact Admissions Office
              </Link>
            </div>
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

