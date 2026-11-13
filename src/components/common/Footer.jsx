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
    <footer className="bg-[#080414] text-[#a99ac7] pt-16 pb-10 border-t border-[#341f5e]/80 relative overflow-hidden">
      {/* Decorative SoftDeals Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-700/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#341f5e]/80">
          
          {/* Col 1 & 2: School Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-12 h-12 rounded-2xl bg-[#180e38] border border-purple-500/50 flex items-center justify-center shadow-lg shadow-purple-950/60 group-hover:border-fuchsia-400 transition-all">
                <GraduationCap className="w-7 h-7 text-fuchsia-400 group-hover:text-fuchsia-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-black text-xl text-white tracking-tight group-hover:text-fuchsia-300 transition-colors">
                  UMEED GLOBAL
                </span>
                <span className="text-xs font-bold text-[#b8a7db] uppercase tracking-widest">
                  International School
                </span>
              </div>
            </Link>

            <p className="text-[#d4c6f3] text-sm leading-relaxed pr-4">
              Building bright futures through academic excellence, character education, cutting-edge STEM laboratories, and world-class athletic facilities. Fostering responsible global citizens since 1998.
            </p>

            {/* Certifications & Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium bg-[#180e38] border border-[#3e276b] text-[#d4c6f3]">
                <ShieldCheck className="w-3.5 h-3.5 text-fuchsia-400" /> CBSE Affiliated #2130894
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium bg-[#180e38] border border-[#3e276b] text-[#d4c6f3]">
                <Award className="w-3.5 h-3.5 text-purple-400" /> ISO 9001:2015 Certified
              </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-[#b8a7db] uppercase tracking-wider mb-2">Connect With Us</div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-[#180e38] hover:bg-[#22134e] hover:border-purple-400 text-[#d4c6f3] hover:text-white flex items-center justify-center transition-all border border-[#3e276b]"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-[#180e38] hover:bg-[#22134e] hover:border-pink-500/50 text-[#d4c6f3] hover:text-pink-400 flex items-center justify-center transition-all border border-[#3e276b]"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-[#180e38] hover:bg-[#22134e] hover:border-red-500/50 text-[#d4c6f3] hover:text-red-400 flex items-center justify-center transition-all border border-[#3e276b]"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-[#180e38] hover:bg-[#22134e] hover:border-purple-400 text-[#d4c6f3] hover:text-white flex items-center justify-center transition-all border border-[#3e276b]"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-xl bg-[#180e38] hover:bg-[#22134e] hover:border-purple-400 text-[#d4c6f3] hover:text-white flex items-center justify-center transition-all border border-[#3e276b]"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-fuchsia-400 pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#a99ac7] hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-fuchsia-400" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#a99ac7] hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-fuchsia-400" /> About Our Legacy
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-[#a99ac7] hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-fuchsia-400" /> Academic Structure
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-[#a99ac7] hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-fuchsia-400" /> Admissions & Fees
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#a99ac7] hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-fuchsia-400" /> Campus Life & Gallery
                </Link>
              </li>
              <li>
                <Link to="/portal/login" className="text-[#a99ac7] hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-fuchsia-400" /> Student & Parent Portal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#a99ac7] hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-fuchsia-400" /> Contact Campus
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Mandatory Disclosures & Information */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-fuchsia-400 pl-2.5">
              School Governance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#cbse-disclosure" className="text-[#a99ac7] hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400" /> Mandatory CBSE Disclosure
                </a>
              </li>
              <li>
                <a href="#transfer-certificates" className="text-[#a99ac7] hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400" /> Transfer Certificate (TC)
                </a>
              </li>
              <li>
                <Link to="/academics" className="text-[#a99ac7] hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400" /> Academic Calendar 2026
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-[#a99ac7] hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400" /> School Bus Route Chart
                </Link>
              </li>
              <li>
                <a href="#posh-policy" className="text-[#a99ac7] hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400" /> Anti-Bullying Committee
                </a>
              </li>
              <li>
                <a href="#careers" className="text-[#a99ac7] hover:text-fuchsia-300 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400" /> Careers / Faculty Openings
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-fuchsia-400 pl-2.5">
              Campus Office
            </h4>
            <div className="space-y-3 text-xs text-[#d4c6f3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                <span>Sector 14, Institutional Area, Knowledge Park II, New Delhi NCR - 110075</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="tel:+919818572692" className="hover:text-fuchsia-300 transition-colors">+91-9818572692</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="mailto:info@umeedglobal.edu" className="hover:text-fuchsia-300 transition-colors">info@umeedglobal.edu</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-fuchsia-400 shrink-0" />
                <span>Office: 8:00 AM – 3:30 PM (Mon-Sat)</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-white mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> School Newsletter
              </div>
              {subscribed ? (
                <div className="p-2.5 bg-purple-950/80 border border-purple-500/50 rounded-2xl text-xs text-fuchsia-300 flex items-center gap-1.5 shadow-md">
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
                    className="w-full bg-[#180e38] border border-[#3e276b] text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-purple-400 placeholder:text-[#7964a2]"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold px-3.5 py-2.5 rounded-xl text-xs transition-all shadow-md shadow-purple-950/50 shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar & SOFTDEALS Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#a99ac7] gap-4">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Umeed Global International School. All Rights Reserved.
          </div>

          {/* Distinctive SOFTDEALS – Digital Solutions Credit */}
          <a
            href="https://www.softdeals.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#180e38]/90 hover:bg-[#22134e] px-4 py-2 rounded-2xl border border-[#3e276b] hover:border-purple-400 text-[#d4c6f3] transition-all shadow-md group"
          >
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
            <span>Powered & Developed by</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#e879f9] to-[#f472b6] group-hover:brightness-125 transition-all">
              SOFTDEALS
            </span>
            <span className="text-[11px] text-fuchsia-400 font-semibold">— Digital Solutions</span>
          </a>

          <div className="flex items-center gap-4 text-[#a99ac7]">
            <a href="#privacy" className="hover:text-fuchsia-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-fuchsia-300 transition-colors">Terms of Use</a>
            <span>•</span>
            <a href="#sitemap" className="hover:text-fuchsia-300 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
