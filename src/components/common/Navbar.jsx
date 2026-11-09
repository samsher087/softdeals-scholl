import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Clock, 
  GraduationCap, 
  Menu, 
  X, 
  ChevronRight, 
  User, 
  Bell, 
  Award,
  Sparkles,
  LogIn,
  LogOut,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Navbar({ onOpenAdmissionModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics & Info', path: '/academics' },
    { name: 'Admissions & Fees', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Student Portal', path: isAuthenticated ? '/portal/dashboard' : '/portal/login', badge: 'SIS' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md transition-shadow">
      {/* Top Announcement Bar - SoftDeals Dark Style */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          {/* Institutional Highlights */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-hidden w-full sm:w-auto text-[11px] sm:text-xs text-slate-300 whitespace-nowrap shrink-0">
            <span className="inline-flex items-center gap-1.5 text-cyan-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>CBSE Senior Secondary</span>
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-200 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>1:15 Teacher-Student Ratio</span>
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-200 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>AI & Robotics Hubs</span>
            </span>
          </div>

          {/* Quick Contact & Working Hours */}
          <div className="hidden md:flex items-center gap-4 xl:gap-5 text-[11px] text-slate-300 whitespace-nowrap shrink-0">
            <a href="tel:+919876543210" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> +91 98765 43210
            </a>
            <a href="mailto:admissions@stxavierschool.edu" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> admissions@stxavierschool.edu
            </a>
            <div className="flex items-center gap-1.5 text-slate-400 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Mon - Sat: 8:00 AM - 3:30 PM
            </div>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar - SoftDeals Dark Glass Architecture */}
      <nav 
        className={`w-full transition-all duration-300 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 ${
          isScrolled ? 'py-2 sm:py-2.5 shadow-lg shadow-black/40' : 'py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-2">
            
            {/* School Brand / Crest */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300 shrink-0">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-teal-400 rounded-full border-2 border-slate-950"></div>
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-serif font-black text-base sm:text-xl text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors">
                  ST. XAVIER'S
                </span>
                <span className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  International School
                </span>
                <span className="text-[9px] font-semibold text-cyan-400/90 tracking-normal hidden xl:block">
                  Affiliated to CBSE, New Delhi • Estd. 1998
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative whitespace-nowrap px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                      active
                        ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 font-bold shadow-xs'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span className="whitespace-nowrap">{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] bg-cyan-500/20 text-cyan-300 font-bold px-1.5 py-0.2 rounded-full border border-cyan-400/30 shrink-0">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-2 xl:gap-3 shrink-0">
              {isAuthenticated ? (
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    to="/portal/dashboard"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white text-xs font-semibold border border-slate-700/80 transition-colors whitespace-nowrap shrink-0"
                  >
                    <img 
                      src={user?.avatar || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"} 
                      alt={user?.name} 
                      className="w-5 h-5 rounded-full object-cover border border-cyan-400 shrink-0"
                    />
                    <span className="truncate max-w-[110px] whitespace-nowrap">{user?.name?.split(' ')[0]}</span>
                  </Link>
                  <button
                    onClick={logout}
                    title="Sign Out"
                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors shrink-0"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/portal/login"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-cyan-500/40 hover:text-cyan-300 rounded-xl transition-all whitespace-nowrap shrink-0 shadow-sm"
                >
                  <User className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="whitespace-nowrap">Portal Login</span>
                </Link>
              )}

              <button
                onClick={onOpenAdmissionModal}
                className="inline-flex items-center gap-1.5 xl:gap-2 px-4 xl:px-4.5 py-2.5 text-xs font-bold bg-gradient-to-r from-brand-600 via-cyan-600 to-teal-500 hover:from-brand-500 hover:to-teal-400 text-white rounded-xl shadow-md shadow-cyan-950/60 hover:scale-[1.02] transition-all whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Admission Enquiry</span>
                <ChevronRight className="w-3.5 h-3.5 text-teal-200 shrink-0" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenAdmissionModal}
                className="text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-cyan-600 px-3 py-1.5 rounded-lg sm:hidden"
              >
                Apply
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                      active
                        ? 'text-navy-950 bg-skyAccent-50 font-bold border-l-4 border-skyAccent-500'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] bg-skyAccent-100 text-skyAccent-700 px-2 py-0.5 rounded-full font-bold">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Auth & CTA */}
            <div className="mt-5 pt-4 border-t border-slate-200 space-y-3">
              {isAuthenticated ? (
                <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-2">
                    <img 
                      src={user?.avatar || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"} 
                      alt={user?.name} 
                      className="w-8 h-8 rounded-full object-cover border border-gold-400"
                    />
                    <div>
                      <div className="text-xs font-bold text-navy-900">{user?.name}</div>
                      <div className="text-[10px] text-slate-500 uppercase">{user?.role}</div>
                    </div>
                  </div>
                  <button
                    onClick={logout}
                    className="text-xs text-red-600 font-semibold px-2.5 py-1 bg-red-50 rounded"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/portal/login"
                  className="w-full py-2.5 px-4 text-center text-sm font-semibold text-navy-900 bg-slate-100 rounded-lg flex items-center justify-center gap-2"
                >
                  <LogIn className="w-4 h-4 text-skyAccent-600" />
                  Student & Parent Portal Login
                </Link>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissionModal();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-bold text-white bg-gradient-to-r from-navy-900 to-skyAccent-700 rounded-lg shadow"
              >
                Admission Enquiry 2026-27
              </button>

              <div className="text-center pt-2 text-xs text-slate-500">
                Helpline: <a href="tel:+919876543210" className="text-skyAccent-600 font-bold">+91 98765 43210</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Notice Marquee Bar just below Menu - SoftDeals Dark Style */}
      <div className="bg-slate-900/95 text-slate-200 py-2.5 px-4 border-b border-slate-800/80 flex items-center overflow-hidden">
        <div className="max-w-[1440px] w-full mx-auto flex items-center gap-3">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold tracking-wider uppercase shrink-0 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>NOTICE</span>
          </div>

          {/* Marquee Ticker */}
          <div className="flex-1 overflow-hidden flex items-center">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="6"
              onMouseOver={(e) => e.target.stop()}
              onMouseOut={(e) => e.target.start()}
              className="text-slate-200 text-sm sm:text-[15px] font-medium cursor-pointer"
            >
              <span className="inline-flex items-center gap-8 whitespace-nowrap">
                <span className="text-slate-200 hover:text-cyan-300 transition-colors">
                  📢 <strong className="text-cyan-300">Admissions Open 2026-27:</strong> Online registration is active for Pre-Nursery to Grade XI (Science, Commerce & Humanities) • Limited Seats Available.
                </span>
                <span className="text-cyan-500/70 font-bold">★★★</span>
                <span className="text-slate-200 hover:text-cyan-300 transition-colors">
                  📝 <strong className="text-teal-300">CBSE Board Examinations:</strong> Senior Secondary practical schedules & hall tickets for Grades 10 & 12 are available on the Student Information Portal.
                </span>
                <span className="text-cyan-500/70 font-bold">★★★</span>
                <span className="text-slate-200 hover:text-cyan-300 transition-colors">
                  🤖 <strong className="text-cyan-300">STEM & Robotics Expo:</strong> Annual Inter-School Science Fair "INNOVIZ 2026" registrations open for student prototypes.
                </span>
                <span className="text-cyan-500/70 font-bold">★★★</span>
                <span className="text-slate-200 hover:text-cyan-300 transition-colors">
                  🏆 <strong className="text-teal-300">Athletic Meet 2026:</strong> Inter-house sports finals (Blue Sapphire, Emerald, Ruby, Topaz) scheduled this weekend at the Main Stadium.
                </span>
                <span className="text-cyan-500/70 font-bold">★★★</span>
                <span className="text-slate-200 hover:text-cyan-300 transition-colors">
                  👨‍👩‍👧 <strong className="text-cyan-300">Parent-Teacher Meeting:</strong> Term-2 PTM consultation slots are now open for online reservation.
                </span>
              </span>
            </marquee>
          </div>

        </div>
      </div>
    </header>
  );
}

