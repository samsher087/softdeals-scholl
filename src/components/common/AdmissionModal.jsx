import React, { useState } from 'react';
import { X, CheckCircle2, Send, GraduationCap, Phone, Mail, User, Sparkles, Clock, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { api } from '../../services/api';

export default function AdmissionModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    studentName: '',
    grade: 'Grade 1',
    academicSession: '2026-2027',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [regId, setRegId] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await api.submitEnquiry({
        ...formData,
        type: 'Admission Registration 2026-27'
      });

      setRegId(res?.data?.id || `ADM-2026-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);

      // Trigger confetti celebration
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      alert('Enquiry submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      studentName: '',
      grade: 'Grade 1',
      academicSession: '2026-2027',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080414]/85 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-xl theme-box p-0 text-slate-100 rounded-[32px] shadow-2xl overflow-hidden border border-[#442c75]/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 relative border-b border-[#341f5e]/80">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#a99ac7] hover:text-white hover:bg-[#1f1248] rounded-2xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#a78bfa] tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#a78bfa]" />
              <span>Intake Active • 2026-2027</span>
            </span>
            <span className="text-[10px] uppercase font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#1b103e] border border-[#3e276b] text-fuchsia-300">
              Limited Seats
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-black flex items-center gap-2 text-white">
            <GraduationCap className="w-6 h-6 text-fuchsia-400" />
            Online Admission Enquiry
          </h3>
          <p className="text-xs sm:text-sm text-[#d4c6f3] mt-1.5 leading-relaxed">
            Fill the form below to receive syllabus, fee structure & schedule a campus interaction.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 bg-transparent">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-purple-500/20 text-fuchsia-400 border border-purple-500/40 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Application Registered Successfully!</h4>
                <p className="text-sm text-[#d4c6f3] mt-1">
                  Thank you for your interest in <span className="font-semibold text-fuchsia-300">Umeed Global International School</span>.
                </p>
                <div className="mt-3 inline-block bg-[#0d0722] px-5 py-2.5 rounded-2xl border border-[#3e276b]">
                  <span className="text-[10px] text-[#a99ac7] block uppercase tracking-wider font-semibold">Enquiry Reference ID</span>
                  <span className="text-base font-mono font-bold text-fuchsia-300">{regId}</span>
                </div>
              </div>
              <p className="text-xs text-[#a99ac7] max-w-sm mx-auto">
                Our Admissions Counselor will contact you on <span className="font-semibold text-white">{formData.phone}</span> within 24 working hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold text-sm rounded-2xl shadow-xl shadow-purple-950/60"
                >
                  Done
                </button>
              </div>
              <div className="w-20 h-1 bg-white/20 rounded-full mx-auto mt-4" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-bold text-[#d4c6f3] uppercase tracking-wider mb-1">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#7964a2] absolute left-3.5 top-3" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Rajeshwar Sharma"
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-[#0d0722] border border-[#3e276b] text-white rounded-2xl focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none placeholder-[#7964a2]"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-[#d4c6f3] uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#7964a2] absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91-9818572692"
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-[#0d0722] border border-[#3e276b] text-white rounded-2xl focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none placeholder-[#7964a2]"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-[#d4c6f3] uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#7964a2] absolute left-3.5 top-3" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="parent@example.com"
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-[#0d0722] border border-[#3e276b] text-white rounded-2xl focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none placeholder-[#7964a2]"
                    />
                  </div>
                </div>

                {/* Student Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#d4c6f3] uppercase tracking-wider mb-1">
                    Student's Full Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="e.g. Aryan Sharma"
                    className="w-full px-4 py-2.5 text-sm bg-[#0d0722] border border-[#3e276b] text-white rounded-2xl focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none placeholder-[#7964a2]"
                  />
                </div>

                {/* Grade / Class */}
                <div>
                  <label className="block text-xs font-bold text-[#d4c6f3] uppercase tracking-wider mb-1">
                    Class Seeking Admission *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm bg-[#0d0722] border border-[#3e276b] text-white rounded-2xl focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none"
                  >
                    <option value="Pre-Nursery">Pre-Nursery (Age 2.5+)</option>
                    <option value="Nursery">Nursery (Age 3+)</option>
                    <option value="Kindergarten (KG)">Kindergarten (KG)</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11 - Science (PCM/PCB)">Grade 11 - Science (PCM/PCB)</option>
                    <option value="Grade 11 - Commerce">Grade 11 - Commerce</option>
                    <option value="Grade 11 - Humanities">Grade 11 - Humanities</option>
                    <option value="Grade 12">Grade 12 (Transfer)</option>
                  </select>
                </div>

                {/* Academic Session */}
                <div>
                  <label className="block text-xs font-bold text-[#d4c6f3] uppercase tracking-wider mb-1">
                    Target Academic Session
                  </label>
                  <input
                    type="text"
                    disabled
                    value="2026 - 2027 (Active Intake)"
                    className="w-full px-4 py-2.5 text-sm border border-[#3e276b] bg-[#0d0722]/60 text-fuchsia-300 rounded-2xl font-medium cursor-not-allowed"
                  />
                </div>

              </div>

              {/* Message / Remarks */}
              <div>
                <label className="block text-xs font-bold text-[#d4c6f3] uppercase tracking-wider mb-1">
                  Specific Questions or Requirements (Optional)
                </label>
                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ask about bus routes, hostel, scholarships, or curriculum..."
                  className="w-full px-4 py-2.5 text-sm bg-[#0d0722] border border-[#3e276b] text-white rounded-2xl focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none placeholder-[#7964a2]"
                ></textarea>
              </div>

              {/* Capsule tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="theme-pill text-[10px]">Instant SMS Confirmation</span>
                <span className="theme-pill text-[10px]">Zero Registration Fee</span>
                <span className="theme-pill text-[10px]">Direct Counselor Connect</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs text-[#a99ac7] hover:text-white font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold text-sm rounded-2xl shadow-xl shadow-purple-950/60 transition-all duration-200 disabled:opacity-50 hover:scale-[1.01]"
                >
                  {submitting ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[3] text-white" />
                      </span>
                      <span>Submit Admission Enquiry</span>
                    </>
                  )}
                </button>
              </div>

              <div className="w-20 h-1 bg-white/20 rounded-full mx-auto mt-4" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
