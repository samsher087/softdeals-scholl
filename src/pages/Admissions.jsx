import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Download, 
  HelpCircle, 
  FileCheck, 
  Bus, 
  CreditCard, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  ChevronRight, 
  Send 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { api } from '../services/api';

export default function Admissions({ onOpenAdmissionModal }) {
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
  const [regId, setRegId] = useState('');

  const steps = [
    {
      num: '01',
      title: 'Online Enquiry & Registration',
      desc: 'Submit the digital enquiry form or obtain the prospectus from our admissions desk. Receive your unique applicant ID.'
    },
    {
      num: '02',
      title: 'Campus Tour & Orientation',
      desc: 'Parents and applicant are invited for a guided campus walkthrough, facility inspection, and discussion with our academic coordinators.'
    },
    {
      num: '03',
      title: 'Assessment & Interaction',
      desc: 'Age-appropriate foundational assessment (Grades 1 to 11) to understand student learning styles and aptitude. Friendly informal interaction for Pre-Primary.'
    },
    {
      num: '04',
      title: 'Enrollment & Welcome Kit',
      desc: 'Verification of required certificates, fee deposit confirmation, issuance of school ID, uniform allotment, and class assignment.'
    }
  ];

  const ageCriteria = [
    { grade: 'Pre-Nursery', age: '2.5 Years as on March 31, 2026', birthWindow: 'Born between Oct 2022 – Sept 2023' },
    { grade: 'Nursery', age: '3.0 Years as on March 31, 2026', birthWindow: 'Born between Oct 2021 – Sept 2022' },
    { grade: 'Kindergarten (KG)', age: '4.0 Years as on March 31, 2026', birthWindow: 'Born between Oct 2020 – Sept 2021' },
    { grade: 'Grade 1', age: '5.5 – 6 Years as on March 31, 2026', birthWindow: 'Born between Oct 2019 – March 2020' },
    { grade: 'Grades 2 to 9', age: 'Based on prior grade completion', birthWindow: 'Transfer Certificate & Grade Report Card required' },
    { grade: 'Grade 11 (Streams)', age: 'Completion of CBSE / ICSE Class 10', birthWindow: 'Merit cutoff in Board Examination / Pre-Boards' }
  ];

  const feeStructure = [
    { grade: 'Pre-Primary (Pre-Nur to KG)', admission: '₹ 25,000', compositeFee: '₹ 18,500 / Qtr', annual: '₹ 12,000', security: '₹ 5,000 (Refundable)' },
    { grade: 'Primary (Grades I to V)', admission: '₹ 30,000', compositeFee: '₹ 22,000 / Qtr', annual: '₹ 14,000', security: '₹ 5,000 (Refundable)' },
    { grade: 'Middle (Grades VI to VIII)', admission: '₹ 30,000', compositeFee: '₹ 25,500 / Qtr', annual: '₹ 16,000', security: '₹ 5,000 (Refundable)' },
    { grade: 'Secondary (Grades IX & X)', admission: '₹ 35,000', compositeFee: '₹ 29,000 / Qtr', annual: '₹ 18,000', security: '₹ 5,000 (Refundable)' },
    { grade: 'Senior Secondary (XI & XII)', admission: '₹ 35,000', compositeFee: '₹ 33,500 / Qtr', annual: '₹ 20,000', security: '₹ 5,000 (Refundable)' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await api.submitEnquiry({
        ...formData,
        type: 'Admissions Page Registration'
      });
      setRegId(res?.data?.id || `ADM-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch {
      alert('Submission error. Please retry.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen text-slate-100">
      
      {/* Header Banner */}
      <section className="bg-slate-950/80 border-b border-slate-800/80 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-cyan-500/15 px-3.5 py-1 rounded-full border border-cyan-400/30">
            Admissions Open 2026-27
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mt-3">
            Admissions Process & Fee Structure
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Discover a seamless, transparent admission experience designed to place your child at the center of holistic growth and scholastic distinction.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => alert("Downloading Official School Prospectus 2026-27 (PDF).")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-600 via-cyan-600 to-teal-500 hover:from-brand-500 hover:to-teal-400 text-white font-bold text-xs rounded-xl shadow-lg shadow-cyan-950/60 transition-all"
            >
              <Download className="w-4 h-4 text-cyan-200" /> Download Prospectus (PDF)
            </button>
            <button
              onClick={onOpenAdmissionModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-xl border border-slate-700/80 transition-all"
            >
              Apply Online Now <ChevronRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest bg-cyan-500/15 px-3 py-1 rounded-full border border-cyan-400/30">
              Step-by-Step
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">
              The 4-Stage Admission Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div 
                key={i} 
                className="bg-slate-900/80 backdrop-blur-xl hover:bg-slate-900 rounded-2xl p-6 border border-slate-800/90 hover:border-cyan-500/40 shadow-xl transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 mb-3">
                    {st.num}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Age Criteria Table */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/90 shadow-xl">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Eligibility Norms</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1 mb-4">
              Age Criteria Guidelines (2026-2027 Session)
            </h2>
            <p className="text-slate-300 text-sm mb-6">
              In accordance with Central Board of Secondary Education guidelines and the Directorate of Education guidelines:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-950 text-cyan-300 font-semibold uppercase tracking-wider text-xs border-b border-slate-800">
                  <tr>
                    <th className="px-5 py-3.5">Class / Grade</th>
                    <th className="px-5 py-3.5">Age Requirement</th>
                    <th className="px-5 py-3.5">Birth Window / Prerequisite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {ageCriteria.map((ac, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-950/40'}>
                      <td className="px-5 py-3 font-bold text-white">{ac.grade}</td>
                      <td className="px-5 py-3 text-slate-300 font-medium">{ac.age}</td>
                      <td className="px-5 py-3 text-slate-400">{ac.birthWindow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Transparent Fee Structure */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest bg-cyan-500/15 px-3 py-1 rounded-full border border-cyan-400/30">
                Financial Transparency
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                Fee Structure for Academic Year 2026-27
              </h2>
            </div>
            <button
              onClick={() => alert("Downloading detailed Official Fee Schedule PDF with payment installment dates.")}
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300"
            >
              <Download className="w-3.5 h-3.5" /> Download Full Fee Chart PDF
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-cyan-300 font-semibold uppercase tracking-wider text-xs border-b border-slate-800">
                <tr>
                  <th className="px-5 py-3.5">Academic Wing</th>
                  <th className="px-5 py-3.5">One-Time Admission Fee</th>
                  <th className="px-5 py-3.5">Composite Tuition (Quarterly)</th>
                  <th className="px-5 py-3.5">Annual Charges</th>
                  <th className="px-5 py-3.5">Caution Deposit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {feeStructure.map((fs, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-950/40'}>
                    <td className="px-5 py-3.5 font-bold text-white">{fs.grade}</td>
                    <td className="px-5 py-3.5 font-mono text-slate-300">{fs.admission}</td>
                    <td className="px-5 py-3.5 font-mono font-bold text-cyan-400">{fs.compositeFee}</td>
                    <td className="px-5 py-3.5 font-mono text-slate-300">{fs.annual}</td>
                    <td className="px-5 py-3.5 text-slate-400 font-medium">{fs.security}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Scholarship Highlights */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="font-bold text-cyan-300 text-sm mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Merit Scholarships (95%+ in Class X)
              </div>
              <p className="text-xs text-slate-300">Up to 50% tuition fee waiver for academic toppers enrolling in Grade XI Science, Commerce, and Humanities streams.</p>
            </div>

            <div className="p-5 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="font-bold text-cyan-300 text-sm mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Sibling Concession
              </div>
              <p className="text-xs text-slate-300">15% rebate on tuition fee for younger sibling studying concurrently in the school.</p>
            </div>

            <div className="p-5 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="font-bold text-cyan-300 text-sm mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                National Sports Achievers
              </div>
              <p className="text-xs text-slate-300">Special sports endowments and full coaching fee coverage for medalists representing state or nation.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Transportation Facilities */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest bg-cyan-500/15 px-3 py-1 rounded-full border border-cyan-400/30">
                Safe Commute Fleet
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Safe, Air-Conditioned & GPS-Tracked Transportation
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We operate a modern fleet of 35+ air-conditioned buses covering all major sectors of Delhi NCR. Each vehicle is equipped with dual CCTV surveillance, automated speed governors, RFID card taps, first-aid equipment, and trained female attendants.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Real-time GPS Tracking via Parent App</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Certified Drivers with Police Verification</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Dedicated Female Attendant in Every Bus</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>18 Well-Planned City Route Zones</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/60">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
                  alt="School Bus Fleet"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* In-Page Admission Enquiry Form */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest bg-cyan-500/15 px-3 py-1 rounded-full border border-cyan-400/30">
              Immediate Assistance
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">
              Submit Your Admission Registration
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Complete this form to receive a prospectus call from our Senior Admissions Counselor.
            </p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/90 shadow-xl">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 bg-teal-500/20 text-teal-400 border border-teal-500/40 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Enquiry Submitted Successfully!</h3>
                <p className="text-sm text-slate-300">Your registration ID is <strong className="text-cyan-400 font-mono">{regId}</strong>.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-5 py-2.5 bg-gradient-to-r from-brand-600 via-cyan-600 to-teal-500 hover:from-brand-500 hover:to-teal-400 text-white rounded-xl text-xs font-bold shadow-lg shadow-cyan-950/60"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Parent Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Rajeshwar Sharma"
                      className="w-full px-3.5 py-2 text-sm border border-slate-800 rounded-lg outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 bg-slate-950/90 text-white placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2 text-sm border border-slate-800 rounded-lg outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 bg-slate-950/90 text-white placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full px-3.5 py-2 text-sm border border-slate-800 rounded-lg outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 bg-slate-950/90 text-white placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Student Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="Student full name"
                      className="w-full px-3.5 py-2 text-sm border border-slate-800 rounded-lg outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 bg-slate-950/90 text-white placeholder-slate-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Class Seeking Admission *</label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-800 rounded-lg outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 bg-slate-950/90 text-white"
                    >
                      <option value="Pre-Nursery" className="bg-slate-950 text-white">Pre-Nursery (Ages 2.5+)</option>
                      <option value="Nursery" className="bg-slate-950 text-white">Nursery (Ages 3+)</option>
                      <option value="Kindergarten (KG)" className="bg-slate-950 text-white">Kindergarten (KG)</option>
                      <option value="Grade 1" className="bg-slate-950 text-white">Grade 1</option>
                      <option value="Grade 2" className="bg-slate-950 text-white">Grade 2</option>
                      <option value="Grade 3" className="bg-slate-950 text-white">Grade 3</option>
                      <option value="Grade 4" className="bg-slate-950 text-white">Grade 4</option>
                      <option value="Grade 5" className="bg-slate-950 text-white">Grade 5</option>
                      <option value="Grade 6" className="bg-slate-950 text-white">Grade 6</option>
                      <option value="Grade 7" className="bg-slate-950 text-white">Grade 7</option>
                      <option value="Grade 8" className="bg-slate-950 text-white">Grade 8</option>
                      <option value="Grade 9" className="bg-slate-950 text-white">Grade 9</option>
                      <option value="Grade 10" className="bg-slate-950 text-white">Grade 10</option>
                      <option value="Grade 11 - Science (PCM/PCB)" className="bg-slate-950 text-white">Grade 11 - Science (PCM/PCB)</option>
                      <option value="Grade 11 - Commerce" className="bg-slate-950 text-white">Grade 11 - Commerce</option>
                      <option value="Grade 11 - Humanities" className="bg-slate-950 text-white">Grade 11 - Humanities</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Questions / Remarks</label>
                  <textarea
                    rows="2"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about previous school, special interest in sports/arts, or transport requirement..."
                    className="w-full px-3.5 py-2 text-sm border border-slate-800 rounded-lg outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 bg-slate-950/90 text-white placeholder-slate-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-gradient-to-r from-brand-600 via-cyan-600 to-teal-500 hover:from-brand-500 hover:to-teal-400 text-white font-bold text-sm rounded-xl shadow-lg shadow-cyan-950/60 transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? 'Submitting Registration...' : 'Submit Admission Enquiry'}
                  <Send className="w-4 h-4 text-cyan-200" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

