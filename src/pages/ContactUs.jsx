import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles,
  Check
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon, TwitterXIcon } from '../components/common/SocialIcons';
import confetti from 'canvas-confetti';
import { api } from '../services/api';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    studentName: '',
    grade: 'Grade 1',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await api.submitEnquiry({
        ...formData,
        type: 'Contact Us General Enquiry'
      });
      setSubmitted(true);
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch {
      alert('Could not submit enquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/919818572692?text=${encodeURIComponent(
    "Hello Admissions Team! I'm reaching out through the school website contact page for admission information."
  )}`;

  return (
    <div className="w-full min-h-screen text-slate-100">
      
      {/* Header Banner - Theme Box Style */}
      <section className="bg-[#0d0722]/80 text-white py-16 sm:py-20 relative overflow-hidden border-b border-[#341f5e]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300 bg-purple-950/80 border border-purple-500/30 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
            Admissions Desk & Support
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mt-3">
            Contact Umeed Global International School
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#d4c6f3] max-w-2xl mx-auto">
            Get in touch with our administrative office, admissions counselors, or schedule an in-person campus walkthrough.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Info & Working Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Direct Phones Card */}
            <div className="theme-box p-7 sm:p-8 space-y-6 shadow-2xl">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#a78bfa] tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-[#a78bfa]" />
                    <span>Direct Desk • 08:00 - 15:30</span>
                  </span>
                  <span className="text-[10px] uppercase font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#1b103e] border border-[#3e276b] text-fuchsia-300">
                    Open Now
                  </span>
                </div>
                <h3 className="text-xl font-serif font-black text-white border-b border-[#341f5e]/80 pb-3">
                  Campus Directory
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#190f38] text-purple-300 border border-purple-500/40 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <strong className="block text-white text-sm">School Campus Address</strong>
                    <span className="text-[#a99ac7]">Sector 14, Institutional Area, Knowledge Park II, New Delhi NCR - 110075</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#190f38] text-fuchsia-400 border border-purple-500/40 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-sm">Telephone Helplines</strong>
                    <div className="text-xs space-y-1 mt-0.5 text-[#a99ac7]">
                      <div>Admissions Desk: <a href="tel:+919818572692" className="text-fuchsia-300 font-bold hover:underline">+91-9818572692</a></div>
                      <div>General Reception: <a href="tel:+919818572692" className="text-fuchsia-300 font-bold hover:underline">+91-9818572692</a></div>
                      <div>Transport Control: <a href="tel:+919818572692" className="text-fuchsia-300 font-bold hover:underline">+91-9818572692</a></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#190f38] text-purple-300 border border-purple-500/40 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-sm">Official Email Correspondence</strong>
                    <div className="text-xs space-y-1 mt-0.5 text-[#a99ac7]">
                      <div>Admissions: <a href="mailto:admissions@umeedglobal.edu" className="text-fuchsia-300 hover:underline">admissions@umeedglobal.edu</a></div>
                      <div>General Enquiries: <a href="mailto:info@umeedglobal.edu" className="text-fuchsia-300 hover:underline">info@umeedglobal.edu</a></div>
                      <div>Principal’s Secretariat: <a href="mailto:principal@umeedglobal.edu" className="text-fuchsia-300 hover:underline">principal@umeedglobal.edu</a></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#190f38] text-fuchsia-400 border border-purple-500/40 flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-sm">Visiting & Office Working Hours</strong>
                    <div className="text-xs space-y-1 mt-0.5 text-[#a99ac7]">
                      <div>Monday – Friday: <span className="font-semibold text-white">8:00 AM – 3:30 PM</span></div>
                      <div>Saturday: <span className="font-semibold text-white">8:00 AM – 1:00 PM</span></div>
                      <div className="text-[#7e6b9f]">Sunday & Gazetted Holidays: Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs rounded-2xl shadow-lg shadow-emerald-950/60 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Instant Chat on WhatsApp
                </a>
              </div>
              <div className="w-14 h-1 bg-white/20 rounded-full mx-auto mt-4" />
            </div>

            {/* Social Media Links */}
            <div className="theme-box p-6 text-white shadow-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-fuchsia-400 mb-3">
                Follow Umeed Global Online
              </h4>
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-[#180e38] hover:bg-[#251552] border border-[#3e276b] hover:border-purple-400/80 text-purple-200 hover:text-white transition-all shadow-md">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-[#180e38] hover:bg-[#251552] border border-[#3e276b] hover:border-pink-500/80 text-purple-200 hover:text-pink-400 transition-all shadow-md">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-[#180e38] hover:bg-[#251552] border border-[#3e276b] hover:border-red-500/80 text-purple-200 hover:text-red-400 transition-all shadow-md">
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-[#180e38] hover:bg-[#251552] border border-[#3e276b] hover:border-purple-400/80 text-purple-200 hover:text-white transition-all shadow-md">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-[#180e38] hover:bg-[#251552] border border-[#3e276b] hover:border-purple-400/80 text-purple-200 hover:text-white transition-all shadow-md">
                  <TwitterXIcon className="w-4 h-4" />
                </a>
              </div>
              <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mt-4" />
            </div>

          </div>

          {/* Right Column: Contact Enquiry Form & Google Map (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Enquiry Form */}
            <div className="theme-box p-8 sm:p-10 shadow-2xl">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#a78bfa] tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span>Enquiry Portal • Direct Dispatch</span>
                </span>
                <span className="text-[10px] uppercase font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#1b103e] border border-[#3e276b] text-fuchsia-300">
                  Priority Response
                </span>
              </div>

              <h3 className="text-2xl font-serif font-black text-white mb-2">
                Send an Official Enquiry
              </h3>
              <p className="text-[#d4c6f3] text-xs sm:text-sm mb-6">
                Have a query regarding admissions, syllabus, transportation or campus facilities? Leave a message below.
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-3 bg-[#0d0722]/90 rounded-2xl border border-[#3e276b]">
                  <div className="w-14 h-14 bg-purple-500/20 text-fuchsia-400 border border-purple-500/40 rounded-2xl flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank You for Contacting Us!</h4>
                  <p className="text-xs text-[#d4c6f3] max-w-md mx-auto">
                    Your message has been dispatched to the designated department. A school representative will respond within 24 working hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-6 py-2.5 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white rounded-xl text-xs font-bold shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#d4c6f3] uppercase mb-1">Parent / Student Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Rajeshwar Sharma"
                        className="w-full px-4 py-2.5 text-sm bg-[#0d0722] border border-[#3e276b] text-white rounded-2xl outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#7964a2]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#d4c6f3] uppercase mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91-9818572692"
                        className="w-full px-4 py-2.5 text-sm bg-[#0d0722] border border-[#3e276b] text-white rounded-2xl outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#7964a2]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#d4c6f3] uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full px-4 py-2.5 text-sm bg-[#0d0722] border border-[#3e276b] text-white rounded-2xl outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#7964a2]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#d4c6f3] uppercase mb-1">Student's Full Name</label>
                      <input
                        type="text"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="e.g. Aryan Sharma"
                        className="w-full px-4 py-2.5 text-sm bg-[#0d0722] border border-[#3e276b] text-white rounded-2xl outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#7964a2]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[#d4c6f3] uppercase mb-1">Class Interested In</label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-[#0d0722] border border-[#3e276b] text-white rounded-2xl outline-none focus:border-purple-400"
                      >
                        <option value="General Enquiry">General Information / Feedback</option>
                        <option value="Pre-Primary">Pre-Primary (Pre-Nursery, Nursery, KG)</option>
                        <option value="Primary (1-5)">Primary Wing (Grades 1 to 5)</option>
                        <option value="Middle (6-8)">Middle Wing (Grades 6 to 8)</option>
                        <option value="Secondary (9-10)">Secondary Wing (Grades 9 & 10)</option>
                        <option value="Senior Secondary (11-12)">Senior Secondary (Grades 11 & 12)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#d4c6f3] uppercase mb-1">Message / Enquiry Details *</label>
                    <textarea
                      rows="3"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please state your specific enquiry or campus visit date preference..."
                      className="w-full px-4 py-2.5 text-sm bg-[#0d0722] border border-[#3e276b] text-white rounded-2xl outline-none focus:border-purple-400 placeholder-[#7964a2]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold text-sm rounded-2xl shadow-xl shadow-purple-950/60 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-full border-2 border-white/90 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3] text-white" />
                    </span>
                    <span>{submitting ? 'Transmitting Message...' : 'Submit Official Enquiry'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Integration Embed */}
            <div className="theme-box p-6 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-fuchsia-400" /> Campus Location Map
                </h4>
                <span className="text-[11px] text-[#a99ac7]">Institutional Area, New Delhi NCR</span>
              </div>
              <div className="rounded-2xl overflow-hidden h-72 w-full border border-[#3e276b]">
                <iframe
                  title="Umeed Global International School Campus Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.978253198083!2d77.3621453472097!3d28.584948777121703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce566270c5383%3A0x6b6c0e5a953a8f1!2sKnowledge%20Park%20II%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
