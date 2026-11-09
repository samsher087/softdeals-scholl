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

  const stats = [
    { label: 'Total Students Enrolled', value: '2,850+', subtext: 'Nurtured Across All Grades', icon: Users },
    { label: 'Qualified Educators', value: '120+', subtext: 'Certified & Experienced Faculty', icon: GraduationCap },
    { label: 'Years of Excellence', value: '28+', subtext: 'Established in 1998', icon: Award },
    { label: 'Board Examination Pass Rate', value: '100%', subtext: 'Consistently Ranked in Top Tier', icon: Trophy }
  ];

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

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-navy-950 overflow-hidden">
        {/* Background Image with School Stationery Theme */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/school-bg.jpg"
            alt="St. Xavier's International School Academic & Creative Theme"
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-5xl xl:max-w-6xl">

            {/* Top Pill */}


            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[3.2rem] font-serif font-extrabold text-white tracking-tight leading-tight mb-6 lg:whitespace-nowrap">
              Building Bright Futures <span className="gold-gradient-text">Through Quality Education.</span>
            </h1>

            {/* Subtitle */}


            {/* CTAs */}


            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-10 mt-10 border-t border-white/15">
              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>CBSE Senior Secondary</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>1:15 Teacher-Student Ratio</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>AI & Robotics Hubs</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. KEY STATISTICS BAR */}
      <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-premium border border-amber-200/60">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-4 p-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-navy-50 text-navy-900 border border-navy-100 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-skyAccent-600" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight font-serif">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 hidden sm:block">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. PRINCIPAL'S WELCOME MESSAGE */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-soft border border-amber-200/60 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Principal Photograph & Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Eleanor Vance - Principal"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-serif font-bold text-lg">Dr. Eleanor Vance</div>
                  <div className="text-xs text-gold-300 font-medium">Principal & Academic Director</div>
                  <div className="text-[11px] text-slate-300">M.Sc., M.Ed., Ph.D. in Child Pedagogy • 26 Yrs Exp.</div>
                </div>
              </div>

              {/* Decorative Floating Quote Pill */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-navy-900 text-white p-3.5 rounded-xl shadow-lg border border-gold-400 hidden sm:flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span className="text-xs font-semibold">"Excellence is not an act, but a habit."</span>
              </div>
            </div>

            {/* Welcome Statement */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-skyAccent-50 text-skyAccent-700 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" /> Welcome to Our Campus
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 leading-tight">
                "Nurturing Curious Minds, Resilient Characters, and Compassionate Hearts."
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Dear Students, Parents, and Honored Guests,
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At St. Xavier's International School, we consider education a sacred journey of transformation. Our mission extends far beyond textbooks and examinations—we inspire young minds to question with curiosity, innovate with courage, and serve society with unshakeable moral integrity.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Supported by cutting-edge STEM laboratories, world-class athletic infrastructure, and faculty trained in global best practices, our learners consistently excel in academic olympiads and university placements across India and abroad.
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-serif font-bold text-navy-900 text-base">Dr. Eleanor Vance</div>
                  <div className="text-xs text-slate-500">Principal, St. Xavier's International School</div>
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-skyAccent-600 hover:text-skyAccent-700 uppercase tracking-wider"
                >
                  Read Full Leadership Message <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE OUR SCHOOL */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-skyAccent-600 bg-skyAccent-50 px-3 py-1 rounded-full">
              Why Parents Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mt-3 mb-4">
              An Educational Experience Rooted in Excellence
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We provide a balanced ecosystem where scholastic achievement is harmonized with character building, creative expression, and athletic training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/95 backdrop-blur-md hover:bg-white rounded-2xl p-7 border border-amber-200/60 hover:border-skyAccent-300 shadow-sm hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-skyAccent-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. FACILITIES & INFRASTRUCTURE PREVIEW */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
                World-Class Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mt-3">
                Inspiring Spaces for Learning & Discovery
              </h2>
            </div>
            <Link
              to="/gallery"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold text-skyAccent-600 hover:text-skyAccent-800 uppercase tracking-wider transition-colors"
            >
              <span>View Full Campus Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-white/95 backdrop-blur-md border border-amber-200/60 shadow-sm hover:shadow-premium hover:border-skyAccent-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-navy-900 mb-1.5 group-hover:text-skyAccent-600 transition-colors">
                      {fac.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. LATEST ANNOUNCEMENTS & EVENTS SECTION */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Notices & Circulars (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-skyAccent-600 uppercase tracking-wider block">Official Bulletin</span>
                  <h3 className="text-2xl font-serif font-bold text-navy-900">Latest Announcements</h3>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-200 text-xs font-semibold">
                  {['All', 'Admissions', 'Examinations'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveNoticeCategory(cat)}
                      className={`px-2.5 py-1 rounded-md transition-colors ${activeNoticeCategory === cat
                        ? 'bg-navy-900 text-white font-bold'
                        : 'text-slate-600 hover:text-navy-900'
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
                    className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${notice.urgent
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : 'bg-skyAccent-100 text-skyAccent-700'
                          }`}>
                          {notice.category}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {notice.date}
                        </span>
                      </div>

                      <a
                        href={notice.fileUrl}
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Downloading official notice circular: "${notice.title}".\nPDF verification authenticated.`);
                        }}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-skyAccent-600 hover:text-skyAccent-800 bg-skyAccent-50 hover:bg-skyAccent-100 px-2.5 py-1 rounded transition-colors"
                      >
                        <Download className="w-3 h-3" /> Notice PDF
                      </a>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-navy-900 hover:text-skyAccent-600 transition-colors">
                      {notice.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {notice.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming School Events (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="mb-6">
                <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block">Mark Your Calendar</span>
                <h3 className="text-2xl font-serif font-bold text-navy-900">Upcoming Events</h3>
              </div>

              <div className="space-y-4">
                {events.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:border-gold-400 transition-all flex flex-col sm:flex-row"
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
                        <div className="flex items-center justify-between text-[11px] text-gold-600 font-bold mb-1">
                          <span>{event.badge}</span>
                          <span className="text-slate-400 font-normal">{event.time}</span>
                        </div>
                        <h4 className="text-sm font-bold text-navy-900 line-clamp-1">
                          {event.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                          {event.description}
                        </p>
                      </div>
                      <div className="mt-2 text-[10px] font-semibold text-slate-400 flex items-center justify-between pt-2 border-t border-slate-100">
                        <span>📍 {event.venue}</span>
                        <span className="text-navy-900 font-bold">{event.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. PARENT TESTIMONIALS */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
              Voices of Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mt-3 mb-3">
              What Our Parents Say
            </h2>
            <p className="text-slate-600 text-sm">
              Discover why generations of families place their heartfelt trust in our educational values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-7 border border-amber-200/60 shadow-sm relative flex flex-col justify-between hover:shadow-premium transition-all duration-300"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-gold-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-gold-400"
                  />
                  <div>
                    <div className="text-sm font-bold text-navy-900">{t.name}</div>
                    <div className="text-[11px] text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. PHOTO GALLERY PREVIEW */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-skyAccent-600 uppercase tracking-wider block">Life at St. Xavier's</span>
              <h2 className="text-3xl font-serif font-bold text-navy-900">Campus Gallery Snapshot</h2>
            </div>
            <Link
              to="/gallery"
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-skyAccent-600 hover:text-skyAccent-800 uppercase tracking-wider"
            >
              Explore All Photos & Videos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryPreview.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightboxAt(index)}
                className="group relative h-48 sm:h-60 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-bold text-gold-400 uppercase tracking-wider">{item.category}</span>
                  <div className="text-xs sm:text-sm font-bold line-clamp-1">{item.title}</div>
                  <div className="flex items-center gap-1 text-[11px] text-skyAccent-300 mt-1">
                    <Eye className="w-3.5 h-3.5" /> Click to enlarge
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. ADMISSION CALL TO ACTION BANNER */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl p-10 sm:p-14 shadow-2xl relative overflow-hidden border border-navy-800 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Admissions Open 2026-27
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Give Your Child the Foundation They Deserve
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Schedule a personal campus walkthrough, interact with our academic coordinators, and discover the St. Xavier's advantage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenAdmissionModal}
                className="w-full sm:w-auto px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-xl shadow-glow-gold transition-all"
              >
                Apply Online Now
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all"
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

