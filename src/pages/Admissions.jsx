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
  Send,
  Clock,
  Check
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
      title: 'Online Enquiry & Registration',
      desc: 'Submit the digital enquiry form or obtain the prospectus from our admissions desk. Receive your unique applicant ID.',
      tag: 'Stage 01',
      pills: ['Digital Form', 'Unique ID', 'Instant Token'],
      action: 'Start Registration'
    },
    {
      title: 'Campus Tour & Orientation',
      desc: 'Parents and applicant are invited for a guided campus walkthrough, facility inspection, and discussion with our academic coordinators.',
      tag: 'Stage 02',
      pills: ['Guided Walk', 'Inspect Labs', 'Faculty Meet'],
      action: 'Schedule Tour'
    },
    {
      title: 'Assessment & Interaction',
      desc: 'Age-appropriate foundational assessment (Grades 1 to 11) to understand student learning styles and aptitude. Friendly informal interaction for Pre-Primary.',
      tag: 'Stage 03',
      pills: ['Foundational', 'No Pressure', 'Aptitude Review'],
      action: 'Assessment Info'
    },
    {
      title: 'Enrollment & Welcome Kit',
      desc: 'Verification of required certificates, fee deposit confirmation, issuance of school ID, uniform allotment, and class assignment.',
      tag: 'Stage 04',
      pills: ['Document Check', 'ID Issued', 'Kit Allotment'],
      action: 'Enroll Student'
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
      <section className="bg-[#0c0722]/90 border-b border-[#341f5e]/80 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300 bg-purple-950/80 px-3.5 py-1 rounded-full border border-purple-500/30 inline-flex items-center gap-1.5 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> Admissions Open 2026-27
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mt-3">
            Admissions Process & Fee Structure
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#d4c6f3] max-w-2xl mx-auto">
            Discover a seamless, transparent admission experience designed to place your child at the center of holistic growth and scholastic distinction.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => alert("Downloading Official School Prospectus 2026-27 (PDF).")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold text-xs rounded-2xl shadow-lg shadow-purple-950/60 transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4 text-fuchsia-200" /> Download Prospectus (PDF)
            </button>
            <button
              onClick={onOpenAdmissionModal}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#180e38]/85 hover:bg-[#22134e] text-purple-200 hover:text-white font-bold text-xs rounded-2xl border border-[#442c75]/80 backdrop-blur-md transition-all shadow-md"
            >
              Apply Online Now <ChevronRight className="w-4 h-4 text-fuchsia-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section - Styled like reference card theme */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-fuchsia-300 uppercase tracking-widest bg-purple-950/80 px-3.5 py-1 rounded-full border border-purple-500/30 inline-flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> Step-by-Step Admissions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-1">
              The 4-Stage Admission Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Transparent, student-centric onboarding crafted for your convenience at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div
                key={i}
                className="group relative bg-[#130b2e]/92 backdrop-blur-2xl rounded-[30px] p-6 sm:p-7 border border-[#442c75]/80 hover:border-purple-400/80 shadow-[0_15px_40px_-10px_rgba(76,29,149,0.35)] hover:shadow-[0_22px_50px_-8px_rgba(168,85,247,0.45)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Top Inner Edge Highlight Rim (Exact from reference) */}
                <div className="absolute inset-x-6 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent pointer-events-none" />

                <div>
                  {/* Top Status & Stage Badge (like 🕒 04:44) */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#a78bfa] tracking-wider">
                      <Clock className="w-3.5 h-3.5 text-[#a78bfa] stroke-[2.2]" />
                      <span>{st.tag}</span>
                    </span>
                    <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-full bg-[#1b103e] border border-[#3e276b] text-fuchsia-300">
                      Step {st.num}
                    </span>
                  </div>

                  {/* Gradient Stage Number */}
                  <div className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] mb-2.5">
                    {st.num}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-purple-200 transition-colors">
                    {st.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-[13px] text-[#d4c6f3] leading-relaxed mb-5">
                    {st.desc}
                  </p>
                </div>

                <div>
                  {/* Capsule Pills Row (like Respect privacy, No screenshots) */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {st.pills.map((pill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-[#180e38]/80 border border-[#3e276b] text-[10px] font-semibold text-[#b8a7db]"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  {/* Gradient Action Button (like "I agree" button) */}
                  <button
                    type="button"
                    onClick={onOpenAdmissionModal}
                    className="w-full py-2.5 px-3 rounded-2xl bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold text-xs shadow-[0_8px_20px_rgba(168,85,247,0.35)] hover:shadow-[0_10px_25px_rgba(217,70,239,0.5)] transition-all flex items-center justify-center gap-1.5 hover:scale-[1.01]"
                  >
                    <span className="w-4 h-4 rounded-full border border-white/90 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3] text-white" />
                    </span>
                    <span>{st.action}</span>
                  </button>

                  {/* App Home Bar Indicator */}
                  <div className="w-16 h-1 bg-white/20 rounded-full mx-auto mt-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Age Criteria Table */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="theme-box p-7 sm:p-10">
            {/* Top Clock / Verification Pill Indicator (like 🕒 04:44) */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-[#a78bfa] tracking-wider">
                <Clock className="w-4 h-4 text-[#a78bfa] stroke-[2.2]" />
                <span>Eligibility & Age Verification • CBSE Norms</span>
              </span>
              <span className="text-[10px] uppercase font-mono font-bold px-3 py-1 rounded-full bg-[#1b103e] border border-[#3e276b] text-fuchsia-300">
                Official Guideline
              </span>
            </div>

            <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest block mb-1">
              Eligibility Norms
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white tracking-tight mb-2">
              Age Criteria Guidelines (2026-2027 Session)
            </h2>
            <p className="text-xs sm:text-sm text-[#d4c6f3] leading-relaxed mb-6 max-w-3xl">
              In accordance with Central Board of Secondary Education guidelines and the Directorate of Education guidelines:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[#382361] bg-[#0d0722]/85 shadow-lg">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#180e38] text-[#d8b4fe] font-mono text-[11px] uppercase tracking-wider border-b border-[#3b2568]">
                  <tr>
                    <th className="px-5 py-3.5">Class / Grade</th>
                    <th className="px-5 py-3.5">Age Requirement</th>
                    <th className="px-5 py-3.5">Birth Window / Prerequisite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#341f5e]/60 text-slate-300">
                  {ageCriteria.map((ac, idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? 'bg-[#130b2e]/50' : 'bg-[#0d0722]/60'} hover:bg-[#1a0f3d]/70 transition-colors`}>
                      <td className="px-5 py-3.5 font-bold text-white">
                        <span className="px-2.5 py-1 rounded-lg bg-[#201147] border border-[#442c75] text-white font-bold text-xs inline-block">
                          {ac.grade}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-[#d4c6f3] font-medium">{ac.age}</td>
                      <td className="px-5 py-3.5 text-[#a99ac7]">{ac.birthWindow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Capsule Pills & Action Button Row (like Respect privacy, No screenshots, I agree) */}
            <div className="mt-6 pt-5 border-t border-[#341f5e]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="theme-pill">👶 Valid Birth Certificate</span>
                <span className="theme-pill">📋 TC from Recognized Board</span>
                <span className="theme-pill">📅 Cutoff 31st March 2026</span>
              </div>
              <button
                onClick={onOpenAdmissionModal}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold text-xs shadow-[0_8px_20px_rgba(168,85,247,0.35)] transition-all flex items-center gap-2 hover:scale-[1.01] shrink-0"
              >
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Verify & Apply for Admission</span>
              </button>
            </div>

            {/* White Home Bar Indicator */}
            <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-6" />
          </div>

        </div>
      </section>

      {/* Transparent Fee Structure */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="theme-box p-7 sm:p-10 mb-10">
            {/* Top Indicator */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-[#a78bfa] tracking-wider">
                <Clock className="w-4 h-4 text-[#a78bfa] stroke-[2.2]" />
                <span>Session 2026-27 • Transparent Fee Policy</span>
              </span>
              <button
                onClick={() => alert("Downloading detailed Official Fee Schedule PDF with payment installment dates.")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-fuchsia-300 hover:text-white px-3 py-1 rounded-full bg-[#1b103e] border border-[#3e276b] transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Download PDF Chart
              </button>
            </div>

            <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest block mb-1">
              Financial Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white tracking-tight mb-2">
              Fee Structure for Academic Year 2026-27
            </h2>
            <p className="text-xs sm:text-sm text-[#d4c6f3] leading-relaxed mb-6 max-w-3xl">
              Complete itemized schedule of tuition, laboratory, and composite fees with zero hidden charges.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[#382361] bg-[#0d0722]/85 shadow-lg">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#180e38] text-[#d8b4fe] font-mono text-[11px] uppercase tracking-wider border-b border-[#3b2568]">
                  <tr>
                    <th className="px-5 py-3.5">Academic Wing</th>
                    <th className="px-5 py-3.5">One-Time Admission Fee</th>
                    <th className="px-5 py-3.5">Composite Tuition (Quarterly)</th>
                    <th className="px-5 py-3.5">Annual Charges</th>
                    <th className="px-5 py-3.5">Caution Deposit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#341f5e]/60 text-slate-300">
                  {feeStructure.map((fs, idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? 'bg-[#130b2e]/50' : 'bg-[#0d0722]/60'} hover:bg-[#1a0f3d]/70 transition-colors`}>
                      <td className="px-5 py-3.5 font-bold text-white">{fs.grade}</td>
                      <td className="px-5 py-3.5 font-mono text-slate-300">{fs.admission}</td>
                      <td className="px-5 py-3.5 font-mono font-bold text-fuchsia-400">{fs.compositeFee}</td>
                      <td className="px-5 py-3.5 font-mono text-slate-300">{fs.annual}</td>
                      <td className="px-5 py-3.5 text-slate-400 font-medium">{fs.security}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Capsule Pills */}
            <div className="mt-6 pt-5 border-t border-[#341f5e]/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                <span className="theme-pill">💳 Online NetBanking & UPI</span>
                <span className="theme-pill">🧾 Quarterly Installments</span>
                <span className="theme-pill">🛡️ 100% Refundable Caution</span>
              </div>
              <span className="text-xs text-[#a99ac7] font-mono">UGS-FEE-2026 // VERIFIED</span>
            </div>

            {/* White Home Bar Indicator */}
            <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-6" />
          </div>

          {/* Scholarship Highlights - 3 Theme Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="theme-box p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#a78bfa] mb-3">
                  <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> Merit Award</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1b103e] border border-[#3e276b] text-fuchsia-300">Class X</span>
                </div>
                <h4 className="font-bold text-white text-base mb-2">
                  Academic Merit Scholarships
                </h4>
                <p className="text-xs text-[#d4c6f3] leading-relaxed mb-4">
                  Up to 50% tuition fee waiver for academic toppers (95%+ in Class X) enrolling in Grade XI Science, Commerce, and Humanities.
                </p>
              </div>
              <div>
                <span className="theme-pill text-[10px]">95%+ Board Score</span>
                <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mt-4" />
              </div>
            </div>

            <div className="theme-box p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#a78bfa] mb-3">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-fuchsia-400" /> Family Support</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1b103e] border border-[#3e276b] text-fuchsia-300">Siblings</span>
                </div>
                <h4 className="font-bold text-white text-base mb-2">
                  Sibling Concession
                </h4>
                <p className="text-xs text-[#d4c6f3] leading-relaxed mb-4">
                  15% rebate on composite tuition fee for younger sibling studying concurrently in the school from Pre-Nursery to Grade XII.
                </p>
              </div>
              <div>
                <span className="theme-pill text-[10px]">15% Rebate Active</span>
                <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mt-4" />
              </div>
            </div>

            <div className="theme-box p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#a78bfa] mb-3">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400" /> Sports Excellence</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1b103e] border border-[#3e276b] text-fuchsia-300">National</span>
                </div>
                <h4 className="font-bold text-white text-base mb-2">
                  National Sports Achievers
                </h4>
                <p className="text-xs text-[#d4c6f3] leading-relaxed mb-4">
                  Special athletic endowments and full training fee coverage for state and national champions in football, athletics, and swimming.
                </p>
              </div>
              <div>
                <span className="theme-pill text-[10px]">Full Endowment</span>
                <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mt-4" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Transportation Facilities */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="theme-box p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#a78bfa] tracking-wider">
                  <Clock className="w-4 h-4 text-[#a78bfa]" />
                  <span>Fleet GPS Live • 35+ AC Buses</span>
                </span>
                <span className="text-[10px] uppercase font-mono font-bold px-3 py-1 rounded-full bg-[#1b103e] border border-[#3e276b] text-fuchsia-300">
                  Safe Commute
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
                Safe, Air-Conditioned & GPS-Tracked Transportation
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We operate a modern fleet of 35+ air-conditioned buses covering all major sectors of Delhi NCR. Each vehicle is equipped with dual CCTV surveillance, automated speed governors, RFID card taps, first-aid equipment, and trained female attendants.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#d4c6f3]">
                  <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />
                  <span>Real-time GPS Tracking via Parent App</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#d4c6f3]">
                  <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />
                  <span>Certified Drivers with Police Verification</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#d4c6f3]">
                  <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />
                  <span>Dedicated Female Attendant in Every Bus</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#d4c6f3]">
                  <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />
                  <span>18 Well-Planned City Route Zones</span>
                </div>
              </div>

              {/* Bottom Capsule Pills */}
              <div className="flex flex-wrap gap-2 pt-3">
                <span className="theme-pill">🛰️ Dual CCTV</span>
                <span className="theme-pill">🪪 RFID Taps</span>
                <span className="theme-pill">🛡️ Speed Governors</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl border border-[#442c75]/80">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
                  alt="School Bus Fleet"
                  className="w-full h-72 object-cover brightness-90 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* In-Page Admission Enquiry Form */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-8">
            <span className="text-xs font-bold text-fuchsia-300 uppercase tracking-widest bg-purple-950/80 px-3.5 py-1 rounded-full border border-purple-500/30 inline-flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> Immediate Assistance
            </span>
            <h2 className="text-3xl font-serif font-black text-white mt-1">
              Submit Your Admission Registration
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Complete this form to receive a prospectus call from our Senior Admissions Counselor.
            </p>
          </div>

          <div className="theme-box p-7 sm:p-10">
            {/* Top Indicator */}
            <div className="flex items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-[#a78bfa] tracking-wider">
                <Clock className="w-4 h-4 text-[#a78bfa]" />
                <span>Session 2026-27 • Registration Desk</span>
              </span>
              <span className="text-[10px] uppercase font-mono font-bold px-3 py-1 rounded-full bg-[#1b103e] border border-[#3e276b] text-fuchsia-300">
                Online Form
              </span>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-fuchsia-950/60">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">Enquiry Submitted Successfully!</h3>
                <p className="text-sm text-[#d4c6f3]">Your registration token is <strong className="text-fuchsia-400 font-mono text-base">{regId}</strong>.</p>
                <div className="flex justify-center gap-2 pt-2">
                  <span className="theme-pill">Counselor Assigned</span>
                  <span className="theme-pill">SMS Dispatched</span>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white rounded-2xl text-xs font-bold shadow-lg shadow-purple-950/60 transition-all"
                >
                  Submit Another Registration
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#b8a7db] uppercase tracking-wider mb-1.5 pl-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Rajeshwar Sharma"
                      className="w-full px-3.5 py-3 text-sm border border-[#3a2466] rounded-2xl outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/25 bg-[#0d0722]/90 text-white placeholder-[#746098] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#b8a7db] uppercase tracking-wider mb-1.5 pl-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-3 text-sm border border-[#3a2466] rounded-2xl outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/25 bg-[#0d0722]/90 text-white placeholder-[#746098] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#b8a7db] uppercase tracking-wider mb-1.5 pl-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full px-3.5 py-3 text-sm border border-[#3a2466] rounded-2xl outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/25 bg-[#0d0722]/90 text-white placeholder-[#746098] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#b8a7db] uppercase tracking-wider mb-1.5 pl-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="Student full name"
                      className="w-full px-3.5 py-3 text-sm border border-[#3a2466] rounded-2xl outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/25 bg-[#0d0722]/90 text-white placeholder-[#746098] transition-all"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold text-[#b8a7db] uppercase tracking-wider mb-1.5 pl-1">
                      Class Seeking Admission *
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3.5 py-3 text-sm border border-[#3a2466] rounded-2xl outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/25 bg-[#0d0722]/90 text-white transition-all"
                    >
                      <option value="Pre-Nursery" className="bg-[#0d0722] text-white">Pre-Nursery (Ages 2.5+)</option>
                      <option value="Nursery" className="bg-[#0d0722] text-white">Nursery (Ages 3+)</option>
                      <option value="Kindergarten (KG)" className="bg-[#0d0722] text-white">Kindergarten (KG)</option>
                      <option value="Grade 1" className="bg-[#0d0722] text-white">Grade 1</option>
                      <option value="Grade 2" className="bg-[#0d0722] text-white">Grade 2</option>
                      <option value="Grade 3" className="bg-[#0d0722] text-white">Grade 3</option>
                      <option value="Grade 4" className="bg-[#0d0722] text-white">Grade 4</option>
                      <option value="Grade 5" className="bg-[#0d0722] text-white">Grade 5</option>
                      <option value="Grade 6" className="bg-[#0d0722] text-white">Grade 6</option>
                      <option value="Grade 7" className="bg-[#0d0722] text-white">Grade 7</option>
                      <option value="Grade 8" className="bg-[#0d0722] text-white">Grade 8</option>
                      <option value="Grade 9" className="bg-[#0d0722] text-white">Grade 9</option>
                      <option value="Grade 10" className="bg-[#0d0722] text-white">Grade 10</option>
                      <option value="Grade 11 - Science (PCM/PCB)" className="bg-[#0d0722] text-white">Grade 11 - Science (PCM/PCB)</option>
                      <option value="Grade 11 - Commerce" className="bg-[#0d0722] text-white">Grade 11 - Commerce</option>
                      <option value="Grade 11 - Humanities" className="bg-[#0d0722] text-white">Grade 11 - Humanities</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#b8a7db] uppercase tracking-wider mb-1.5 pl-1">
                    Questions / Remarks
                  </label>
                  <textarea
                    rows="2"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about previous school, special interest in sports/arts, or transport requirement..."
                    className="w-full px-3.5 py-3 text-sm border border-[#3a2466] rounded-2xl outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/25 bg-[#0d0722]/90 text-white placeholder-[#746098] transition-all"
                  ></textarea>
                </div>

                {/* Privacy reminder note */}
                <div className="flex items-center gap-2 text-xs text-[#9d8ac7] pt-1">
                  <Check className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span>All information submitted is strictly confidential and encrypted under Umeed Global Privacy Policy.</span>
                </div>

                {/* Primary Button styled like "I agree" */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-5 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold text-sm rounded-2xl shadow-[0_10px_30px_rgba(168,85,247,0.4)] hover:shadow-[0_12px_35px_rgba(217,70,239,0.55)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] mt-3"
                >
                  <span className="w-5 h-5 rounded-full border-2 border-white/90 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3] text-white" />
                  </span>
                  <span>{submitting ? 'Submitting Registration...' : 'I agree & Submit Admission Enquiry'}</span>
                </button>
              </form>
            )}

            {/* Bottom Home Bar */}
            <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-6" />
          </div>

        </div>
      </section>

    </div>
  );
}

