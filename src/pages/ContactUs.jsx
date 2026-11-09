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
  Sparkles 
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

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    "Hello Admissions Team! I'm reaching out through the school website contact page for admission information."
  )}`;

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-navy-800 px-3.5 py-1 rounded-full border border-navy-700">
            We Are Here to Assist You
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mt-3">
            Contact St. Xavier's International School
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
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
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-serif font-bold text-navy-900 border-b border-slate-100 pb-3">
                Campus Directory
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 border border-navy-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <strong className="block text-navy-900 text-sm">School Campus Address</strong>
                    <span>Sector 14, Institutional Area, Knowledge Park II, New Delhi NCR - 110075</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-skyAccent-50 text-skyAccent-600 border border-skyAccent-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-navy-900 text-sm">Telephone Helplines</strong>
                    <div className="text-xs space-y-0.5 mt-0.5">
                      <div>Admissions Desk: <a href="tel:+919876543210" className="text-skyAccent-600 font-bold hover:underline">+91 98765 43210</a></div>
                      <div>General Reception: <a href="tel:+919876543211" className="text-skyAccent-600 font-bold hover:underline">+91 98765 43211</a></div>
                      <div>Transport Control: <a href="tel:+919876543212" className="text-skyAccent-600 font-bold hover:underline">+91 98765 43212</a></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-navy-900 text-sm">Official Email Correspondence</strong>
                    <div className="text-xs space-y-0.5 mt-0.5">
                      <div>Admissions: <a href="mailto:admissions@stxavierschool.edu" className="text-skyAccent-600 hover:underline">admissions@stxavierschool.edu</a></div>
                      <div>General Enquiries: <a href="mailto:info@stxavierschool.edu" className="text-skyAccent-600 hover:underline">info@stxavierschool.edu</a></div>
                      <div>Principal’s Secretariat: <a href="mailto:principal@stxavierschool.edu" className="text-skyAccent-600 hover:underline">principal@stxavierschool.edu</a></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-navy-900 text-sm">Visiting & Office Working Hours</strong>
                    <div className="text-xs space-y-0.5 mt-0.5">
                      <div>Monday – Friday: <span className="font-semibold text-slate-800">8:00 AM – 3:30 PM</span></div>
                      <div>Saturday: <span className="font-semibold text-slate-800">8:00 AM – 1:00 PM</span></div>
                      <div className="text-slate-400">Sunday & Gazetted Holidays: Closed</div>
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
                  className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Instant Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-navy-900 text-white rounded-2xl p-6 shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-3">
                Follow St. Xavier's Online
              </h4>
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-navy-800 hover:bg-skyAccent-600 text-white transition-colors">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-navy-800 hover:bg-pink-600 text-white transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-navy-800 hover:bg-red-600 text-white transition-colors">
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-navy-800 hover:bg-skyAccent-700 text-white transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-navy-800 hover:bg-slate-700 text-white transition-colors">
                  <TwitterXIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Enquiry Form & Google Map (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Enquiry Form */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-skyAccent-600 uppercase tracking-widest bg-skyAccent-50 px-3 py-1 rounded-full">
                Get in Touch
              </span>
              <h3 className="text-2xl font-serif font-bold text-navy-900 mt-2 mb-2">
                Send an Official Enquiry
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                Have a query regarding admissions, syllabus, transportation or campus facilities? Leave a message below.
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-navy-900">Thank You for Contacting Us!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Your message has been dispatched to the designated department. A school representative will respond within 24 working hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-5 py-2 bg-navy-900 text-white rounded-lg text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Parent / Student Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Rajeshwar Sharma"
                        className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-skyAccent-400 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-skyAccent-400 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-skyAccent-400 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student's Full Name</label>
                      <input
                        type="text"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="e.g. Aryan Sharma"
                        className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-skyAccent-400 bg-white"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Class Interested In</label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-skyAccent-400 bg-white"
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
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message / Enquiry Details *</label>
                    <textarea
                      rows="3"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please state your specific enquiry or campus visit date preference..."
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-skyAccent-400 bg-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-gradient-to-r from-navy-900 to-skyAccent-700 hover:from-navy-950 hover:to-skyAccent-600 text-white font-bold text-sm rounded-xl shadow transition-all flex items-center justify-center gap-2"
                  >
                    {submitting ? 'Transmitting Message...' : 'Submit Enquiry Now'}
                    <Send className="w-4 h-4 text-gold-400" />
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Integration Embed */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-navy-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gold-500" /> Campus Location Map
                </h4>
                <span className="text-[11px] text-slate-400">Institutional Area, New Delhi NCR</span>
              </div>
              <div className="rounded-xl overflow-hidden h-72 w-full border border-slate-200">
                <iframe
                  title="St. Xavier's International School Campus Map"
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
