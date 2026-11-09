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
    <header className="w-full relative z-50">
      {/* Top Announcement Bar */}
      <div className="bg-navy-950 text-slate-200 text-xs py-2 px-4 border-b border-navy-800">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          {/* Institutional Highlights */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-hidden w-full sm:w-auto text-[11px] sm:text-xs text-slate-300 whitespace-nowrap shrink-0">
            <span className="inline-flex items-center gap-1.5 text-gold-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>CBSE Senior Secondary</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-200 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-skyAccent-400 shrink-0" />
              <span>1:15 Teacher-Student Ratio</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-200 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-skyAccent-400 shrink-0" />
              <span>AI & Robotics Hubs</span>
            </span>
          </div>

          {/* Quick Contact & Working Hours */}
          <div className="hidden md:flex items-center gap-4 xl:gap-5 text-[11px] text-slate-300 whitespace-nowrap shrink-0">
            <a href="tel:+919876543210" className="hover:text-gold-400 transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <Phone className="w-3.5 h-3.5 text-skyAccent-400 shrink-0" /> +91 98765 43210
            </a>
            <a href="mailto:admissions@stxavierschool.edu" className="hover:text-gold-400 transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <Mail className="w-3.5 h-3.5 text-skyAccent-400 shrink-0" /> admissions@stxavierschool.edu
            </a>
            <div className="flex items-center gap-1.5 text-slate-400 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" /> Mon - Sat: 8:00 AM - 3:30 PM
            </div>
          </div>

        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-premium sticky top-0 py-2.5 border-b border-slate-200' 
            : 'bg-white py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-2">
            
            {/* School Brand / Crest */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-navy-900 to-navy-700 flex items-center justify-center shadow-md border-2 border-gold-400 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-gold-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-skyAccent-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-serif font-bold text-base sm:text-xl text-navy-900 tracking-tight leading-none group-hover:text-skyAccent-600 transition-colors">
                  ST. XAVIER'S
                </span>
                <span className="text-[9px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-widest mt-0.5">
                  International School
                </span>
                <span className="text-[9px] font-medium text-gold-600 tracking-normal hidden xl:block">
                  Affiliated to CBSE, New Delhi • Estd. 1998
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative whitespace-nowrap px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                      active
                        ? 'text-navy-900 bg-skyAccent-50 text-skyAccent-700 font-bold'
                        : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                    }`}
                  >
                    <span className="whitespace-nowrap">{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] bg-skyAccent-100 text-skyAccent-700 font-bold px-1.5 py-0.2 rounded-full border border-skyAccent-300 shrink-0">
                        {link.badge}
                      </span>
                    )}
                    {active && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-skyAccent-500 rounded-full" />
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
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-navy-50 text-navy-900 hover:bg-navy-100 text-xs font-semibold border border-navy-200 transition-colors whitespace-nowrap shrink-0"
                  >
                    <img 
                      src={user?.avatar || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"} 
                      alt={user?.name} 
                      className="w-5 h-5 rounded-full object-cover border border-gold-400 shrink-0"
                    />
                    <span className="truncate max-w-[110px] whitespace-nowrap">{user?.name?.split(' ')[0]}</span>
                  </Link>
                  <button
                    onClick={logout}
                    title="Sign Out"
                    className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/portal/login"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-navy-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all whitespace-nowrap shrink-0"
                >
                  <User className="w-3.5 h-3.5 text-navy-800 shrink-0" />
                  <span className="whitespace-nowrap">Portal Login</span>
                </Link>
              )}

              <button
                onClick={onOpenAdmissionModal}
                className="inline-flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-2 xl:py-2.5 text-xs font-bold text-white bg-gradient-to-r from-navy-900 via-navy-800 to-skyAccent-700 hover:from-navy-950 hover:to-skyAccent-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Admission Enquiry</span>
                <ChevronRight className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenAdmissionModal}
                className="text-xs font-bold text-white bg-navy-900 px-3 py-1.5 rounded-lg sm:hidden"
              >
                Apply
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none"
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

      {/* Notice Marquee Bar just below Menu (Same size as top bar) */}
      <div className="bg-navy-950 text-slate-200 text-xs py-2 px-4 border-b border-navy-800 flex items-center overflow-hidden">
        <div className="max-w-[1440px] w-full mx-auto flex items-center gap-3">
          
          {/* Badge */}
          <div className="flex items-center gap-1.5 bg-gold-500 text-navy-950 font-bold px-2.5 py-0.5 rounded text-[10px] tracking-wider uppercase shrink-0 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
            <span className="font-extrabold">NOTICE</span>
          </div>

          {/* Marquee Ticker */}
          <div className="flex-1 overflow-hidden flex items-center">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="6"
              onMouseOver={(e) => e.target.stop()}
              onMouseOut={(e) => e.target.start()}
              className="text-slate-300 text-xs font-medium cursor-pointer"
            >
              <span className="inline-flex items-center gap-8 whitespace-nowrap">
                <span className="text-slate-200 hover:text-gold-400 transition-colors">
                  📢 <strong className="text-gold-400">Admissions Open 2026-27:</strong> Online registration is active for Pre-Nursery to Grade XI (Science, Commerce & Humanities) • Limited Seats Available.
                </span>
                <span className="text-gold-500 font-bold">★★★</span>
                <span className="text-slate-200 hover:text-gold-400 transition-colors">
                  📝 <strong className="text-skyAccent-400">CBSE Board Examinations:</strong> Senior Secondary practical schedules & hall tickets for Grades 10 & 12 are available on the Student Information Portal.
                </span>
                <span className="text-gold-500 font-bold">★★★</span>
                <span className="text-slate-200 hover:text-gold-400 transition-colors">
                  🤖 <strong className="text-gold-400">STEM & Robotics Expo:</strong> Annual Inter-School Science Fair "INNOVIZ 2026" registrations open for student prototypes.
                </span>
                <span className="text-gold-500 font-bold">★★★</span>
                <span className="text-slate-200 hover:text-gold-400 transition-colors">
                  🏆 <strong className="text-skyAccent-400">Athletic Meet 2026:</strong> Inter-house sports finals (Blue Sapphire, Emerald, Ruby, Topaz) scheduled this weekend at the Main Stadium.
                </span>
                <span className="text-gold-500 font-bold">★★★</span>
                <span className="text-slate-200 hover:text-gold-400 transition-colors">
                  👨‍👩‍👧 <strong className="text-gold-400">Parent-Teacher Meeting:</strong> Term-2 PTM consultation slots are now open for online reservation.
                </span>
              </span>
            </marquee>
          </div>

        </div>
      </div>
    </header>
  );
}

