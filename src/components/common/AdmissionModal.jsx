import React, { useState } from 'react';
import { X, CheckCircle2, Send, GraduationCap, Phone, Mail, User, Sparkles } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-skyAccent-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="bg-gold-500 text-navy-950 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Session 2026-27
            </span>
            <span className="text-xs text-skyAccent-200 font-medium">Limited Seats</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold flex items-center gap-2 text-white">
            <GraduationCap className="w-6 h-6 text-gold-400" />
            Online Admission Enquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Fill the form below to receive syllabus, fee structure & schedule a campus interaction.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy-900">Application Registered Successfully!</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Thank you for your interest in <span className="font-semibold text-navy-800">St. Xavier's International School</span>.
                </p>
                <div className="mt-3 inline-block bg-slate-100 px-4 py-2 rounded-lg border border-slate-200">
                  <span className="text-xs text-slate-500 block uppercase tracking-wider font-semibold">Enquiry Reference ID</span>
                  <span className="text-base font-mono font-bold text-skyAccent-600">{regId}</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Our Admissions Counselor will contact you on <span className="font-semibold text-slate-700">{formData.phone}</span> within 24 working hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-navy-900 hover:bg-navy-950 text-white font-bold text-sm rounded-lg shadow"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Rajeshwar Sharma"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-skyAccent-400 focus:border-skyAccent-400 outline-none"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-skyAccent-400 focus:border-skyAccent-400 outline-none"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="parent@example.com"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-skyAccent-400 focus:border-skyAccent-400 outline-none"
                    />
                  </div>
                </div>

                {/* Student Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Student's Full Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="e.g. Aryan Sharma"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-skyAccent-400 focus:border-skyAccent-400 outline-none"
                  />
                </div>

                {/* Grade / Class */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Class Seeking Admission *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-skyAccent-400 focus:border-skyAccent-400 outline-none bg-white"
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
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Target Academic Session
                  </label>
                  <input
                    type="text"
                    disabled
                    value="2026 - 2027 (Active Intake)"
                    className="w-full px-3 py-2 text-sm border border-slate-200 bg-slate-50 text-slate-600 rounded-lg font-medium cursor-not-allowed"
                  />
                </div>

              </div>

              {/* Message / Remarks */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Questions or Requirements (Optional)
                </label>
                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ask about bus routes, hostel, scholarships, or curriculum..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-skyAccent-400 focus:border-skyAccent-400 outline-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-slate-800 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-navy-900 to-skyAccent-700 hover:from-navy-950 hover:to-skyAccent-600 text-white font-bold text-sm rounded-lg shadow transition-all duration-200 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4 text-gold-400" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 pt-1">
                🔒 Your personal information is encrypted and strictly used for school communication only.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
