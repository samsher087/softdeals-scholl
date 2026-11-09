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
    <div className="w-full bg-slate-50">
      
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-navy-800 px-3.5 py-1 rounded-full border border-navy-700">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs rounded-xl shadow transition-all"
            >
              <Download className="w-4 h-4" /> Download Prospectus (PDF)
            </button>
            <button
              onClick={onOpenAdmissionModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-all"
            >
              Apply Online Now <ChevronRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-skyAccent-600 uppercase tracking-widest bg-skyAccent-50 px-3 py-1 rounded-full">
              Step-by-Step
            </span>
            <h2 className="text-3xl font-serif font-bold text-navy-900 mt-2">
              The 4-Stage Admission Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div 
                key={i} 
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-skyAccent-300 shadow-sm hover:shadow-premium transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold font-serif text-gold-500 mb-3">
                    {st.num}
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Age Criteria Table */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">Eligibility Norms</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 mt-1 mb-4">
              Age Criteria Guidelines (2026-2027 Session)
            </h2>
            <p className="text-slate-600 text-sm mb-6">
              In accordance with Central Board of Secondary Education guidelines and the Directorate of Education guidelines:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-navy-950 text-white font-semibold uppercase tracking-wider text-xs">
                  <tr>
                    <th className="px-5 py-3.5">Class / Grade</th>
                    <th className="px-5 py-3.5">Age Requirement</th>
                    <th className="px-5 py-3.5">Birth Window / Prerequisite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {ageCriteria.map((ac, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-5 py-3 font-bold text-navy-900">{ac.grade}</td>
                      <td className="px-5 py-3 text-slate-700 font-medium">{ac.age}</td>
                      <td className="px-5 py-3 text-slate-500">{ac.birthWindow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Transparent Fee Structure */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-skyAccent-600 uppercase tracking-widest bg-skyAccent-50 px-3 py-1 rounded-full">
                Financial Transparency
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 mt-1">
                Fee Structure for Academic Year 2026-27
              </h2>
            </div>
            <button
              onClick={() => alert("Downloading detailed Official Fee Schedule PDF with payment installment dates.")}
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-skyAccent-600 hover:text-skyAccent-800"
            >
              <Download className="w-3.5 h-3.5" /> Download Full Fee Chart PDF
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-navy-950 text-white font-semibold uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-5 py-3.5">Academic Wing</th>
                  <th className="px-5 py-3.5">One-Time Admission Fee</th>
                  <th className="px-5 py-3.5">Composite Tuition (Quarterly)</th>
                  <th className="px-5 py-3.5">Annual Charges</th>
                  <th className="px-5 py-3.5">Caution Deposit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {feeStructure.map((fs, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-5 py-3.5 font-bold text-navy-900">{fs.grade}</td>
                    <td className="px-5 py-3.5 font-mono text-slate-700">{fs.admission}</td>
                    <td className="px-5 py-3.5 font-mono font-bold text-skyAccent-700">{fs.compositeFee}</td>
                    <td className="px-5 py-3.5 font-mono text-slate-700">{fs.annual}</td>
                    <td className="px-5 py-3.5 text-slate-500 font-medium">{fs.security}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Scholarship Highlights */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-gold-50/60 rounded-xl border border-gold-200">
              <div className="font-bold text-navy-900 text-sm mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold-600" />
                Merit Scholarships (95%+ in Class X)
              </div>
              <p className="text-xs text-slate-600">Up to 50% tuition fee waiver for academic toppers enrolling in Grade XI Science, Commerce, and Humanities streams.</p>
            </div>

            <div className="p-5 bg-skyAccent-50/60 rounded-xl border border-skyAccent-200">
              <div className="font-bold text-navy-900 text-sm mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-skyAccent-600" />
                Sibling Concession
              </div>
              <p className="text-xs text-slate-600">15% rebate on tuition fee for younger sibling studying concurrently in the school.</p>
            </div>

            <div className="p-5 bg-emerald-50/60 rounded-xl border border-emerald-200">
              <div className="font-bold text-navy-900 text-sm mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                National Sports Achievers
              </div>
              <p className="text-xs text-slate-600">Special sports endowments and full coaching fee coverage for medalists representing state or nation.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Transportation Facilities */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-skyAccent-600 uppercase tracking-widest bg-skyAccent-50 px-3 py-1 rounded-full">
                Safe Commute Fleet
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
                Safe, Air-Conditioned & GPS-Tracked Transportation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We operate a modern fleet of 35+ air-conditioned buses covering all major sectors of Delhi NCR. Each vehicle is equipped with dual CCTV surveillance, automated speed governors, RFID card taps, first-aid equipment, and trained female attendants.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Real-time GPS Tracking via Parent App</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Certified Drivers with Police Verification</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Dedicated Female Attendant in Every Bus</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>18 Well-Planned City Route Zones</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
              Immediate Assistance
            </span>
            <h2 className="text-3xl font-serif font-bold text-navy-900 mt-2">
              Submit Your Admission Registration
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Complete this form to receive a prospectus call from our Senior Admissions Counselor.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Enquiry Submitted Successfully!</h3>
                <p className="text-sm text-slate-600">Your registration ID is <strong className="text-skyAccent-600 font-mono">{regId}</strong>.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-5 py-2 bg-navy-900 text-white rounded-lg text-xs font-bold"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Parent Name *</label>
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
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
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
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Student Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="Student full name"
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-skyAccent-400 bg-white"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Class Seeking Admission *</label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-skyAccent-400 bg-white"
                    >
                      <option value="Pre-Nursery">Pre-Nursery (Ages 2.5+)</option>
                      <option value="Nursery">Nursery (Ages 3+)</option>
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
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Questions / Remarks</label>
                  <textarea
                    rows="2"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about previous school, special interest in sports/arts, or transport requirement..."
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-skyAccent-400 bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-gradient-to-r from-navy-900 to-skyAccent-700 hover:from-navy-950 hover:to-skyAccent-600 text-white font-bold text-sm rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? 'Submitting Registration...' : 'Submit Admission Enquiry'}
                  <Send className="w-4 h-4 text-gold-400" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

