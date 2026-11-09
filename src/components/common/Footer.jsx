import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon, TwitterXIcon } from './SocialIcons';

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-10 border-t border-slate-800/80 relative overflow-hidden">
      {/* Decorative SoftDeals Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: School Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center shadow-md shadow-cyan-500/10 group-hover:border-cyan-400 transition-all">
                <GraduationCap className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-black text-xl text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  ST. XAVIER'S
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  International School
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Building bright futures through academic excellence, character education, cutting-edge STEM laboratories, and world-class athletic facilities. Fostering responsible global citizens since 1998.
            </p>

            {/* Certifications & Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> CBSE Affiliated #2130894
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300">
                <Award className="w-3.5 h-3.5 text-teal-400" /> ISO 9001:2015 Certified
              </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Connect With Us</div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-850 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-all border border-slate-800"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-850 hover:border-pink-500/50 text-slate-300 hover:text-pink-400 flex items-center justify-center transition-all border border-slate-800"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-850 hover:border-red-500/50 text-slate-300 hover:text-red-400 flex items-center justify-center transition-all border border-slate-800"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-850 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-all border border-slate-800"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-850 hover:border-slate-500/50 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-500" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-500" /> About Our Legacy
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-500" /> Academic Structure
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-500" /> Admissions & Fees
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-500" /> Campus Life & Gallery
                </Link>
              </li>
              <li>
                <Link to="/portal/login" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-500" /> Student & Parent Portal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-500" /> Contact Campus
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Mandatory Disclosures & Information */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2.5">
              School Governance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#cbse-disclosure" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" /> Mandatory CBSE Disclosure
                </a>
              </li>
              <li>
                <a href="#transfer-certificates" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" /> Transfer Certificate (TC)
                </a>
              </li>
              <li>
                <Link to="/academics" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" /> Academic Calendar 2026
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" /> School Bus Route Chart
                </Link>
              </li>
              <li>
                <a href="#posh-policy" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" /> Anti-Bullying Committee
                </a>
              </li>
              <li>
                <a href="#careers" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" /> Careers / Faculty Openings
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2.5">
              Campus Office
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Sector 14, Institutional Area, Knowledge Park II, New Delhi NCR - 110075</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-cyan-300 transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:info@stxavierschool.edu" className="hover:text-cyan-300 transition-colors">info@stxavierschool.edu</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Office: 8:00 AM – 3:30 PM (Mon-Sat)</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-white mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> School Newsletter
              </div>
              {subscribed ? (
                <div className="p-2.5 bg-teal-950/60 border border-teal-500/50 rounded-xl text-xs text-teal-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" /> You are subscribed to school updates!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-1.5">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter parent email..."
                    required
                    className="w-full bg-slate-900 border border-slate-700/80 text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-brand-600 via-cyan-600 to-teal-500 hover:from-brand-500 hover:to-teal-400 text-white font-bold px-3.5 py-2.5 rounded-xl text-xs transition-all shadow-md shadow-cyan-950/50 shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar & SOFTDEALS Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} St. Xavier's International School. All Rights Reserved.
          </div>

          {/* Distinctive SOFTDEALS – Digital Solutions Credit */}
          <a
            href="https://www.softdeals.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-850 px-4 py-2 rounded-2xl border border-slate-800 hover:border-cyan-500/50 text-slate-300 transition-all shadow-md group"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Powered & Developed by</span>
            <span className="font-bold text-white group-hover:text-cyan-300 transition-colors">
              SOFTDEALS
            </span>
            <span className="text-[11px] text-cyan-400 font-semibold">— Digital Solutions</span>
          </a>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="#privacy" className="hover:text-cyan-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-cyan-300 transition-colors">Terms of Use</a>
            <span>•</span>
            <a href="#sitemap" className="hover:text-cyan-300 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
