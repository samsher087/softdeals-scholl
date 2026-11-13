import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  GraduationCap, 
  LogOut, 
  User, 
  Calendar, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Printer, 
  Download, 
  Clock, 
  Bus, 
  ShieldCheck, 
  MessageSquare, 
  Send, 
  Sparkles, 
  PlusCircle,
  CreditCard,
  ChevronRight,
  ChevronDown,
  TrendingUp,
  Inbox
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { api } from '../../services/api';

export default function Dashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('overview');
  const [studentProfile, setStudentProfile] = useState(null);
  const [attendance, setAttendance] = useState(null);
  const [results, setResults] = useState(null);
  const [homework, setHomework] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeCategory, setNoticeCategory] = useState('Academic');
  const [noticeSummary, setNoticeSummary] = useState('');
  const [noticeUrgent, setNoticeUrgent] = useState(false);
  const [noticePosted, setNoticePosted] = useState(false);
  const [ptmRequested, setPtmRequested] = useState(false);
  const [teacherMsg, setTeacherMsg] = useState('');
  const [msgSent, setMsgSent] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/portal/login');
      return;
    }

    const loadPortalData = async () => {
      const [profRes, attRes, resRes, hwRes, enqRes] = await Promise.all([
        api.getStudentProfile(),
        api.getStudentAttendance(),
        api.getStudentResults(),
        api.getStudentHomework(),
        api.getEnquiries()
      ]);

      if (profRes?.data) setStudentProfile(profRes.data);
      if (attRes?.data) setAttendance(attRes.data);
      if (resRes?.data) setResults(resRes.data);
      if (hwRes?.data) setHomework(hwRes.data);
      if (enqRes?.data) setEnquiries(enqRes.data);
    };

    loadPortalData();
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  const handlePrintReport = () => {
    window.print();
  };

  const handleCreateNotice = async (e) => {
    e.preventDefault();
    if (!noticeTitle || !noticeSummary) return;

    await api.postNotice({
      title: noticeTitle,
      category: noticeCategory,
      summary: noticeSummary,
      urgent: noticeUrgent
    });

    setNoticePosted(true);
    setNoticeTitle('');
    setNoticeSummary('');
    setTimeout(() => setNoticePosted(false), 4000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!teacherMsg) return;
    setMsgSent(true);
    setTeacherMsg('');
    setTimeout(() => setMsgSent(false), 4000);
  };

  const handleToggleHomework = (id) => {
    setHomework(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: item.status === 'Submitted' ? 'Pending' : 'Submitted'
        };
      }
      return item;
    }));
  };

  const student = studentProfile || {
    name: user?.name || 'Aryan Sharma',
    studentId: 'UGS-2024-1014',
    rollNo: 14,
    grade: '10',
    section: 'A',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    bloodGroup: 'B+',
    house: 'Blue Sapphire',
    fatherName: 'Dr. Rajeshwar Sharma',
    parentPhone: '+91-9818572692',
    overallAttendance: 94.6,
    gpa: 3.92,
    classRank: 2,
    busRoute: 'Route 12 (Bus DL-1PB-4509)'
  };

  return (
    <div className="w-full bg-slate-950 text-slate-100 min-h-screen print:bg-white print:text-slate-900">
      
      {/* Top Portal Bar (Screen only) */}
      <header className="bg-[#080414]/90 backdrop-blur-md text-white border-b border-[#341f5e]/80 sticky top-0 z-30 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#180e38] border border-purple-500/50 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-fuchsia-400" />
              </div>
              <div className="hidden sm:block">
                <span className="font-serif font-bold text-sm block leading-none">UMEED GLOBAL</span>
                <span className="text-[9px] text-fuchsia-400 tracking-wider uppercase font-medium">Portal Dashboard</span>
              </div>
            </Link>

            <span className="text-slate-700 hidden sm:inline">|</span>

            <div className="bg-slate-900 px-3 py-1 rounded-full text-xs font-semibold text-slate-300 border border-slate-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="capitalize">{user?.role} Session Active</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-right">
              <img
                src={student.avatar}
                alt={user?.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-purple-400/80"
              />
              <div className="hidden md:block">
                <div className="text-xs font-bold text-white">{user?.name}</div>
                <div className="text-[10px] text-fuchsia-300">{user?.role === 'parent' ? 'Parent Portal' : user?.role === 'admin' ? 'Staff Portal' : `Class ${student.grade}-${student.section}`}</div>
              </div>
            </div>

            <button
              onClick={logout}
              className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Dashboard Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs (no-print) */}
        <div className="no-print bg-slate-900/80 backdrop-blur-xl p-2 rounded-2xl border border-slate-800/90 shadow-xl mb-8 flex flex-wrap gap-1">
          {[
            { id: 'overview', label: 'Overview & Profile', icon: User },
            { id: 'attendance', label: 'Attendance Records', icon: Calendar },
            { id: 'results', label: 'Examinations & Grades', icon: Award },
            { id: 'reportCard', label: 'Official Report Card', icon: FileText, highlight: true },
            { id: 'homework', label: 'Homework & Assignments', icon: BookOpen },
            { id: 'communication', label: 'Teacher Remarks & PTM', icon: MessageSquare },
            { id: 'fees', label: 'Fee Payments', icon: CreditCard },
            ...(user?.role === 'admin' ? [{ id: 'adminTools', label: 'Admin Management', icon: ShieldCheck }] : [])
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  active
                    ? 'bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white shadow-lg shadow-purple-950/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                } ${tab.highlight && !active ? 'text-fuchsia-300 bg-purple-950/80 border border-purple-500/40' : ''}`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-white' : 'text-fuchsia-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 1. OVERVIEW & PROFILE TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Student ID Banner Card */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800/90 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-purple-400/80 shadow-xl shrink-0"
                />

                <div className="flex-1 text-center md:text-left space-y-2">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <span className="bg-purple-950/80 text-fuchsia-300 border border-purple-500/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Student Scholar
                    </span>
                    <span className="text-xs text-fuchsia-400 font-mono">
                      ID: {student.studentId}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {student.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300">
                    Grade <strong className="text-white">{student.grade} - Section {student.section}</strong> • Roll Number: <strong className="text-white">{student.rollNo}</strong> • House: <strong className="text-fuchsia-400">{student.house}</strong>
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300 pt-1">
                    <span>Blood Group: <strong className="text-white">{student.bloodGroup}</strong></span>
                    <span>•</span>
                    <span>Guardian: <strong className="text-white">{student.fatherName}</strong></span>
                    <span>•</span>
                    <span>Emergency: <strong className="text-white">{student.parentPhone}</strong></span>
                  </div>
                </div>

                {/* Quick Score Badges */}
                <div className="grid grid-cols-3 md:grid-cols-1 gap-2.5 shrink-0 w-full md:w-auto">
                  <div className="bg-[#0d0722]/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Attendance</div>
                    <div className="text-lg font-bold text-teal-400">{student.overallAttendance}%</div>
                  </div>
                  <div className="bg-[#0d0722]/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Term GPA</div>
                    <div className="text-lg font-bold text-fuchsia-400">{student.gpa} / 4.0</div>
                  </div>
                  <div className="bg-[#0d0722]/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Class Rank</div>
                    <div className="text-lg font-bold text-teal-300">#{student.classRank} in Class</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Widgets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Transport Widget */}
              <div className="theme-box p-6 shadow-xl space-y-3">
                <div className="flex items-center justify-between text-white font-bold text-sm">
                  <span className="flex items-center gap-2">
                    <Bus className="w-4 h-4 text-fuchsia-400" /> Transport Allotment
                  </span>
                  <span className="text-[10px] bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded font-bold">Active Fleet</span>
                </div>
                <div className="text-xs text-slate-300">
                  <div className="font-semibold text-white">{student.busRoute}</div>
                  <div className="mt-1">Driver In-Charge: Mr. Satish Kumar (+91 98112 33445)</div>
                  <div className="text-slate-400 mt-0.5">Morning Pickup: 07:12 AM • Evening Drop: 02:40 PM</div>
                </div>
              </div>

              {/* Next Exam Notice */}
              <div className="theme-box p-6 shadow-xl space-y-3">
                <div className="flex items-center justify-between text-white font-bold text-sm">
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-fuchsia-400" /> Upcoming Assessment
                  </span>
                  <span className="text-[10px] bg-purple-950/80 text-fuchsia-300 border border-purple-500/40 px-2 py-0.5 rounded font-bold">Term Final</span>
                </div>
                <div className="text-xs text-slate-300">
                  <div className="font-semibold text-white">Annual Board Practicals</div>
                  <div className="mt-1">Physics & Robotics Lab Viva Voce</div>
                  <div className="text-slate-400 mt-0.5">Date: March 18, 2026 • Reporting: 08:30 AM</div>
                </div>
              </div>

              {/* Teacher Remarks Snapshot */}
              <div className="theme-box p-6 shadow-xl space-y-3">
                <div className="flex items-center justify-between text-white font-bold text-sm">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-fuchsia-400" /> Mentor Remark
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Mrs. Banerjee</span>
                </div>
                <p className="text-xs text-slate-300 italic">
                  "Aryan consistently demonstrates exceptional commitment to mathematics and science research."
                </p>
              </div>

            </div>

          </div>
        )}

        {/* 2. ATTENDANCE RECORDS TAB */}
        {activeTab === 'attendance' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Metric Summary */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="theme-box p-5 shadow-xl">
                <div className="text-xs font-semibold text-slate-400 uppercase">Total Working Days</div>
                <div className="text-2xl font-bold font-serif text-white mt-1">{attendance?.totalDays || 182}</div>
              </div>
              <div className="theme-box p-5 shadow-xl">
                <div className="text-xs font-semibold text-slate-400 uppercase">Days Present</div>
                <div className="text-2xl font-bold font-serif text-emerald-400 mt-1">{attendance?.presentDays || 172}</div>
              </div>
              <div className="theme-box p-5 shadow-xl">
                <div className="text-xs font-semibold text-slate-400 uppercase">Authorized Leave</div>
                <div className="text-2xl font-bold font-serif text-amber-400 mt-1">{attendance?.medicalLeave || 3}</div>
              </div>
              <div className="theme-box p-5 shadow-xl">
                <div className="text-xs font-semibold text-slate-400 uppercase">Term Attendance Rate</div>
                <div className="text-2xl font-bold font-serif text-fuchsia-400 mt-1">{attendance?.attendancePercentage || 94.5}%</div>
              </div>
            </div>

            {/* Monthly Breakdown Table */}
            <div className="theme-box p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg font-serif font-bold text-white mb-4">
                Monthly Attendance Breakdown (Academic Year 2025-26)
              </h3>
              
              <div className="overflow-x-auto rounded-2xl border border-[#3e276b] bg-[#0d0722]/85">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0d0722] text-[#d4c6f3] uppercase text-xs border-b border-slate-800">
                    <tr>
                      <th className="px-5 py-3">Month</th>
                      <th className="px-5 py-3">Total Working Days</th>
                      <th className="px-5 py-3">Days Attended</th>
                      <th className="px-5 py-3">Attendance Rate</th>
                      <th className="px-5 py-3">CBSE Threshold Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#341f5e]/60 text-slate-300">
                    {(attendance?.monthlySummary || []).map((m, idx) => (
                      <tr key={idx} className="bg-transparent hover:bg-[#180e38]/60 transition-colors">
                        <td className="px-5 py-3.5 font-bold text-white">{m.month}</td>
                        <td className="px-5 py-3.5 text-slate-400">{m.total} Days</td>
                        <td className="px-5 py-3.5 font-semibold text-emerald-400">{m.present} Days</td>
                        <td className="px-5 py-3.5 font-mono font-bold text-fuchsia-400">{m.rate}</td>
                        <td className="px-5 py-3.5">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                            <CheckCircle2 className="w-3 h-3" /> Satisfactory
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Subject-Wise Attendance */}
            <div className="theme-box p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg font-serif font-bold text-white mb-4">
                Subject-Wise Attendance Distribution
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(attendance?.subjectWise || []).map((sw, i) => (
                  <div key={i} className="p-4 bg-slate-950/60 rounded-xl border border-[#3e276b] space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-white">
                      <span>{sw.subject}</span>
                      <span className="text-fuchsia-400 font-mono">{sw.percentage}% ({sw.attended}/{sw.total})</span>
                    </div>
                    <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-[#c084fc] to-[#f472b6] h-full rounded-full transition-all"
                        style={{ width: `${sw.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 3. EXAMINATIONS & RESULTS TAB */}
        {activeTab === 'results' && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="theme-box p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#3e276b]">
                <div>
                  <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest">{results?.examTitle || 'Pre-Board Assessment'}</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">Official Term Gradebook</h3>
                </div>

                <button
                  onClick={() => setActiveTab('reportCard')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white shadow-xl shadow-purple-950/60 font-bold text-xs rounded-xl shadow-lg shadow-purple-500/20 shrink-0 transition-all"
                >
                  <FileText className="w-4 h-4 text-slate-950" />
                  <span>Generate Report Card Format</span>
                </button>
              </div>

              {/* Result Summary Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="p-4 bg-[#0d0722]/90 rounded-xl border border-[#3e276b] text-center">
                  <div className="text-xs text-slate-400 font-semibold uppercase">Overall Aggregate</div>
                  <div className="text-2xl font-extrabold text-fuchsia-400 font-serif mt-0.5">{results?.overallPercentage || '92.8'}%</div>
                  <div className="text-[11px] text-emerald-400 font-bold mt-1">Passed with Distinction</div>
                </div>
                <div className="p-4 bg-[#0d0722]/90 rounded-xl border border-[#3e276b] text-center">
                  <div className="text-xs text-slate-400 font-semibold uppercase">Class Standings</div>
                  <div className="text-2xl font-extrabold text-white font-serif mt-0.5">Rank 2nd</div>
                  <div className="text-[11px] text-slate-400 font-medium mt-1">Among 42 Section Peers</div>
                </div>
                <div className="p-4 bg-[#0d0722]/90 rounded-xl border border-[#3e276b] text-center">
                  <div className="text-xs text-slate-400 font-semibold uppercase">Conduct Grade</div>
                  <div className="text-2xl font-extrabold text-emerald-400 font-serif mt-0.5">Grade A+</div>
                  <div className="text-[11px] text-slate-400 font-medium mt-1">Exemplary Discipline</div>
                </div>
              </div>

              {/* Subject Scores Table */}
              <div className="overflow-x-auto rounded-2xl border border-[#3e276b] bg-[#0d0722]/85">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0d0722] text-[#d4c6f3] uppercase text-xs font-semibold border-b border-slate-800">
                    <tr>
                      <th className="px-5 py-3">Subject Code & Name</th>
                      <th className="px-5 py-3">Max Marks</th>
                      <th className="px-5 py-3">Marks Obtained</th>
                      <th className="px-5 py-3">Letter Grade</th>
                      <th className="px-5 py-3">Faculty Remark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#341f5e]/60 text-slate-300">
                    {(results?.subjects || []).map((sub, i) => (
                      <tr key={i} className="bg-transparent hover:bg-[#180e38]/60 transition-colors">
                        <td className="px-5 py-3.5 font-bold text-white">
                          <span className="text-[10px] text-slate-400 block font-mono">{sub.code}</span>
                          {sub.name}
                        </td>
                        <td className="px-5 py-3.5 font-mono text-slate-400">{sub.maxMarks}</td>
                        <td className="px-5 py-3.5 font-mono font-bold text-fuchsia-300">{sub.marksObtained}</td>
                        <td className="px-5 py-3.5">
                          <span className="font-bold text-xs bg-[#1b103e] text-fuchsia-300 border border-[#3e276b] px-2.5 py-0.5 rounded-full">
                            {sub.grade}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-xs text-slate-400">{sub.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* 4. OFFICIAL DOWNLOADABLE & PRINTABLE REPORT CARD */}
        {activeTab === 'reportCard' && (
          <div className="space-y-6">
            
            {/* Action Bar (Screen Only) */}
            <div className="no-print flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 backdrop-blur-xl p-4 rounded-2xl border border-[#3e276b] shadow-xl">
              <div className="text-xs text-slate-300">
                <strong className="text-white">Official Institutional Report Card:</strong> Standardized CBSE grading format suitable for printing and record archiving.
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrintReport}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white shadow-xl shadow-purple-950/60 font-bold text-xs rounded-xl shadow-lg shadow-purple-500/20 transition-all"
                >
                  <Printer className="w-4 h-4 text-slate-950" />
                  <span>Print Official Report Card</span>
                </button>
              </div>
            </div>

            {/* Official Report Card Printable Sheet */}
            <div className="print-card bg-white p-8 sm:p-12 rounded-3xl shadow-xl border-2 border-slate-300 max-w-4xl mx-auto relative overflow-hidden">
              
              {/* Report Header */}
              <div className="border-b-2 border-navy-900 pb-6 text-center space-y-2">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-navy-950 border-2 border-gold-400 flex items-center justify-center text-white">
                    <GraduationCap className="w-8 h-8 text-gold-400" />
                  </div>
                  <div className="text-left">
                    <h1 className="text-2xl font-serif font-bold text-navy-950 tracking-tight">
                      UMEED GLOBAL INTERNATIONAL SCHOOL
                    </h1>
                    <p className="text-xs text-slate-600 font-semibold">
                      Affiliated to the Central Board of Secondary Education (CBSE), New Delhi • Affiliation No: 2130894
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Sector 14, Institutional Area, Knowledge Park II, New Delhi NCR • Email: controller@umeedglobal.edu
                    </p>
                  </div>
                </div>

                <div className="pt-3">
                  <span className="inline-block bg-navy-950 text-gold-400 font-serif font-bold px-6 py-1 rounded-full text-xs uppercase tracking-widest border border-gold-400">
                    ACADEMIC PROGRESS REPORT & EVALUATION DOSSIER (2025-26)
                  </span>
                </div>
              </div>

              {/* Student Metadata Table */}
              <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs border border-slate-200 p-4 rounded-xl bg-slate-50/70">
                <div>
                  <span className="text-slate-400 block uppercase font-semibold text-[10px]">Student Name</span>
                  <strong className="text-navy-950 text-sm font-serif">{student.name}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-semibold text-[10px]">Scholar / ID No</span>
                  <strong className="text-navy-950 text-sm font-mono">{student.studentId}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-semibold text-[10px]">Class & Section</span>
                  <strong className="text-navy-950 text-sm">Grade {student.grade} - {student.section}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-semibold text-[10px]">Roll Number</span>
                  <strong className="text-navy-950 text-sm">{student.rollNo}</strong>
                </div>

                <div>
                  <span className="text-slate-400 block uppercase font-semibold text-[10px]">Father's Name</span>
                  <span className="font-semibold text-slate-700">{student.fatherName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-semibold text-[10px]">House Allotment</span>
                  <span className="font-semibold text-slate-700">{student.house}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-semibold text-[10px]">Session Attendance</span>
                  <span className="font-semibold text-emerald-600">{student.overallAttendance}% (172 / 182 Days)</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase font-semibold text-[10px]">Academic Term</span>
                  <span className="font-semibold text-navy-950">Term II Summative</span>
                </div>
              </div>

              {/* Scholastic Assessment Marks Table */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
                  Part 1: Scholastic Performance
                </h4>
                <div className="rounded-lg border border-slate-300 overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-navy-950 font-bold border-b border-slate-300">
                      <tr>
                        <th className="p-2.5">Subject Code & Description</th>
                        <th className="p-2.5 text-center">Max Marks</th>
                        <th className="p-2.5 text-center">Marks Obtained</th>
                        <th className="p-2.5 text-center">Grade</th>
                        <th className="p-2.5">Academic Remark</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {(results?.subjects || []).map((sub, i) => (
                        <tr key={i}>
                          <td className="p-2.5 font-semibold text-navy-900">{sub.name}</td>
                          <td className="p-2.5 text-center font-mono">{sub.maxMarks}</td>
                          <td className="p-2.5 text-center font-mono font-bold">{sub.marksObtained}</td>
                          <td className="p-2.5 text-center font-bold text-skyAccent-700">{sub.grade}</td>
                          <td className="p-2.5 text-[11px] text-slate-600">{sub.remarks}</td>
                        </tr>
                      ))}
                      <tr className="bg-slate-50 font-bold border-t-2 border-slate-300">
                        <td className="p-2.5 text-navy-900">GRAND TOTAL / AGGREGATE</td>
                        <td className="p-2.5 text-center font-mono">600</td>
                        <td className="p-2.5 text-center font-mono text-emerald-700 font-extrabold text-sm">559</td>
                        <td className="p-2.5 text-center text-emerald-700 font-extrabold text-sm">93.17% (A1)</td>
                        <td className="p-2.5 text-navy-900">Passed with Distinction (Class Rank 2nd)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Co-Scholastic & Life Skills */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-2">
                  Part 2: Co-Scholastic & Value Evaluation
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {(results?.coScholastic || []).map((cs, i) => (
                    <div key={i} className="p-2.5 rounded border border-slate-200 bg-slate-50">
                      <div className="text-[10px] text-slate-500 font-medium line-clamp-1">{cs.area}</div>
                      <div className="text-sm font-bold text-navy-900 mt-0.5">Grade {cs.grade}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Remarks & Endorsements */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs mb-8 space-y-2">
                <div>
                  <strong className="text-navy-900">Class Mentor’s Observations:</strong>
                  <p className="text-slate-600 italic mt-0.5">
                    "Aryan demonstrates remarkable intellectual curiosity, analytical poise, and consistent leadership among his peers. Recommended for advanced STEM immersion programs."
                  </p>
                </div>
              </div>

              {/* Signatures & Seal */}
              <div className="pt-8 border-t border-slate-300 grid grid-cols-3 gap-6 text-center text-xs">
                <div>
                  <div className="font-serif italic text-slate-700 h-8 flex items-center justify-center font-bold">
                    Sunanda Banerjee
                  </div>
                  <div className="border-t border-slate-400 pt-1 text-slate-500 font-medium">Class Teacher</div>
                </div>

                <div>
                  <div className="w-16 h-16 border-2 border-slate-400 rounded-full mx-auto flex items-center justify-center text-[9px] uppercase font-bold text-slate-400 tracking-tighter">
                    Official Institutional Seal
                  </div>
                </div>

                <div>
                  <div className="font-serif italic text-navy-900 h-8 flex items-center justify-center font-bold text-sm">
                    Dr. Eleanor Vance
                  </div>
                  <div className="border-t border-slate-400 pt-1 text-slate-500 font-medium">Principal & Academic Director</div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* 5. HOMEWORK & ASSIGNMENTS TAB */}
        {activeTab === 'homework' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="theme-box p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest">Academic Tasks</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">Daily Homework & Projects</h3>
                </div>
                <span className="text-xs text-slate-400">
                  Click checkbox to toggle submission status
                </span>
              </div>

              <div className="space-y-4">
                {homework.map((hw) => {
                  const isDone = hw.status === 'Submitted';
                  return (
                    <div
                      key={hw.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        isDone 
                          ? 'bg-slate-950/40 border-slate-800/60 opacity-60' 
                          : 'bg-[#0d0722]/90 border-[#3e276b] shadow-lg hover:border-purple-400'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => handleToggleHomework(hw.id)}
                            className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              isDone
                                ? 'bg-emerald-500 border-emerald-500 text-white'
                                : 'border-slate-700 hover:border-purple-400 bg-slate-900 text-transparent'
                            }`}
                          >
                            {isDone && <CheckCircle2 className="w-4 h-4" />}
                          </button>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#1b103e] text-fuchsia-300 border border-[#3e276b] uppercase">
                                {hw.subject}
                              </span>
                              <span className="text-xs text-slate-400">• Teacher: {hw.teacher}</span>
                            </div>

                            <h4 className={`text-sm font-bold text-white mt-1.5 ${isDone ? 'line-through text-slate-500' : ''}`}>
                              {hw.title}
                            </h4>

                            <p className="text-xs text-slate-300 mt-1">
                              {hw.instructions}
                            </p>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block mb-1 border ${
                            isDone 
                              ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' 
                              : hw.priority === 'High' 
                                ? 'bg-rose-500/15 border-rose-500/30 text-rose-400' 
                                : 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                          }`}>
                            {hw.status}
                          </span>
                          <span className="text-[11px] text-slate-400">Due: {hw.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 6. TEACHER COMMUNICATION & PTM TAB */}
        {activeTab === 'communication' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Message Class Teacher */}
              <div className="theme-box p-6 sm:p-8 shadow-2xl space-y-4">
                <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest">Direct Communication</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">Message Class Teacher</h3>
                <p className="text-xs text-slate-300">
                  Send a query directly to Class Mentor Mrs. Sunanda Banerjee. Replies will appear here within 24 hours.
                </p>

                {msgSent ? (
                  <div className="p-4 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 font-medium">
                    ✓ Your note has been delivered to the teacher's portal desk.
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-3">
                    <textarea
                      rows="4"
                      required
                      value={teacherMsg}
                      onChange={(e) => setTeacherMsg(e.target.value)}
                      placeholder="Write your note regarding student progress, leave requests, or questions..."
                      className="w-full p-3 text-xs text-white bg-[#0d0722]/90 border border-[#3e276b] rounded-xl outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder:text-slate-500 shadow-inner"
                    ></textarea>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white shadow-xl shadow-purple-950/60 font-bold text-xs rounded-xl shadow-lg shadow-purple-500/20 flex items-center gap-2 transition-all"
                    >
                      <Send className="w-3.5 h-3.5 text-slate-950" />
                      <span>Transmit Message</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Schedule PTM Meeting */}
              <div className="theme-box p-6 sm:p-8 shadow-2xl space-y-4">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Parent-Teacher Meeting</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">Reserve PTM Consultation Slot</h3>
                <p className="text-xs text-slate-300">
                  Upcoming PTM Date: <strong className="text-white">Saturday, March 21, 2026</strong>. Reserve your 15-minute 1-on-1 discussion window.
                </p>

                {ptmRequested ? (
                  <div className="p-4 bg-purple-950/80 border border-purple-500/40 rounded-xl text-xs text-fuchsia-300 font-medium">
                    ✓ PTM Slot Confirmed: Saturday, 10:30 AM - 10:45 AM (Room 204 - Science Wing). A calendar invite has been emailed to you.
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="p-4 bg-slate-950/60 rounded-xl border border-[#3e276b] text-xs text-slate-300">
                      <strong className="text-white">Available Slots:</strong>
                      <div className="grid grid-cols-2 gap-2.5 mt-3">
                        <button
                          type="button"
                          onClick={() => setPtmRequested(true)}
                          className="p-2.5 bg-slate-900 hover:bg-[#1b103e] hover:border-purple-400/60 rounded-xl border border-slate-800 text-center font-bold text-fuchsia-300 transition-all shadow"
                        >
                          10:30 AM - 10:45 AM
                        </button>
                        <button
                          type="button"
                          onClick={() => setPtmRequested(true)}
                          className="p-2.5 bg-slate-900 hover:bg-[#1b103e] hover:border-purple-400/60 rounded-xl border border-slate-800 text-center font-bold text-fuchsia-300 transition-all shadow"
                        >
                          11:00 AM - 11:15 AM
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* 7. FEES TAB */}
        {activeTab === 'fees' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="theme-box p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">Quarterly Fee Summary & Receipts</h3>
              <p className="text-xs text-slate-400 mb-6">Student ID: {student.studentId} • Academic Session 2025-26</p>

              <div className="overflow-x-auto rounded-2xl border border-[#3e276b] bg-[#0d0722]/85">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0d0722] text-[#d4c6f3] uppercase text-xs font-semibold border-b border-slate-800">
                    <tr>
                      <th className="px-5 py-3">Installment Quarter</th>
                      <th className="px-5 py-3">Due Date</th>
                      <th className="px-5 py-3">Amount</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Receipt Document</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#341f5e]/60 text-slate-300">
                    {[
                      { qtr: 'Quarter 1 (Apr - Jun)', due: '15 April 2025', amt: '₹ 29,000', status: 'Paid', receipt: 'REC-2025-Q1' },
                      { qtr: 'Quarter 2 (Jul - Sep)', due: '15 July 2025', amt: '₹ 29,000', status: 'Paid', receipt: 'REC-2025-Q2' },
                      { qtr: 'Quarter 3 (Oct - Dec)', due: '15 October 2025', amt: '₹ 29,000', status: 'Paid', receipt: 'REC-2025-Q3' },
                      { qtr: 'Quarter 4 (Jan - Mar)', due: '15 January 2026', amt: '₹ 29,000', status: 'Paid', receipt: 'REC-2026-Q4' }
                    ].map((f, i) => (
                      <tr key={i} className="bg-transparent hover:bg-[#180e38]/60 transition-colors">
                        <td className="px-5 py-3.5 font-bold text-white">{f.qtr}</td>
                        <td className="px-5 py-3.5 text-slate-400">{f.due}</td>
                        <td className="px-5 py-3.5 font-mono font-bold text-fuchsia-300">{f.amt}</td>
                        <td className="px-5 py-3.5">
                          <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                            {f.status}
                          </span>
                        </td>
                        <td className="px-5 py-3.5">
                          <button
                            onClick={() => alert(`Downloading Verified Fee Receipt: ${f.receipt} (PDF).`)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-fuchsia-400 hover:text-fuchsia-300 transition-colors hover:underline"
                          >
                            <Download className="w-3.5 h-3.5" /> {f.receipt}.pdf
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 8. ADMIN TOOLS TAB (Visible only to Admin role) */}
        {activeTab === 'adminTools' && user?.role === 'admin' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Post Notice Section - Transparent Glass Theme */}
            <div className="theme-box p-6 sm:p-8 shadow-2xl space-y-5">
              <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest">Administrative Directorate</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">Publish New Official School Notice</h3>

              {noticePosted && (
                <div className="p-3.5 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>School Notice broadcasted successfully to all students, parents, and public portal!</span>
                </div>
              )}

              <form onSubmit={handleCreateNotice} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Notice Headline <span className="text-fuchsia-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={noticeTitle}
                      onChange={(e) => setNoticeTitle(e.target.value)}
                      placeholder="e.g. Schedule for Annual Science Olympiad 2026"
                      className="w-full px-4 py-2.5 text-xs text-white bg-[#0d0722]/90 border border-[#3e276b] rounded-xl outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder:text-slate-500 transition-all shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Category</label>
                    <div className="relative">
                      <select
                        value={noticeCategory}
                        onChange={(e) => setNoticeCategory(e.target.value)}
                        className="w-full px-4 py-2.5 text-xs text-white bg-[#0d0722]/90 border border-[#3e276b] rounded-xl outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 appearance-none cursor-pointer pr-10 transition-all shadow-inner"
                      >
                        <option value="Academic" className="bg-slate-900 text-white py-1">Academic</option>
                        <option value="Admissions" className="bg-slate-900 text-white py-1">Admissions</option>
                        <option value="Examinations" className="bg-slate-900 text-white py-1">Examinations</option>
                        <option value="Sports" className="bg-slate-900 text-white py-1">Sports</option>
                        <option value="Events" className="bg-slate-900 text-white py-1">Events</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Notice Details & Summary <span className="text-fuchsia-400">*</span>
                  </label>
                  <textarea
                    rows="3"
                    required
                    value={noticeSummary}
                    onChange={(e) => setNoticeSummary(e.target.value)}
                    placeholder="Enter announcement text to display on homepage and portal..."
                    className="w-full px-4 py-2.5 text-xs text-white bg-[#0d0722]/90 border border-[#3e276b] rounded-xl outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder:text-slate-500 transition-all shadow-inner resize-y"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="urgent"
                    checked={noticeUrgent}
                    onChange={(e) => setNoticeUrgent(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-rose-500 focus:ring-rose-400 focus:ring-offset-slate-900 cursor-pointer"
                  />
                  <label htmlFor="urgent" className="text-xs text-slate-300 font-medium cursor-pointer select-none">
                    Flag as <span className="text-rose-400 font-semibold">Urgent / High Priority</span> Notice
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white shadow-xl shadow-purple-950/60 font-bold text-xs rounded-xl shadow-lg shadow-purple-500/20 transition-all transform hover:-translate-y-0.5"
                  >
                    Publish Notice
                  </button>
                </div>
              </form>
            </div>

            {/* Received Enquiries List - Transparent Glass Theme */}
            <div className="theme-box p-6 sm:p-8 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest">Admissions Inbox</span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">Recent Website Enquiries</h3>
                </div>
                <span className="text-xs font-semibold text-slate-300 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700/60">
                  {enquiries.length} Inquiries Logged
                </span>
              </div>

              <div className="space-y-3">
                {enquiries.map((enq) => (
                  <div key={enq.id} className="p-4 bg-slate-950/60 rounded-xl border border-[#3e276b] text-xs space-y-1.5 hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between font-bold text-white">
                      <span>{enq.name} <span className="text-slate-400 font-normal">({enq.phone})</span></span>
                      <span className="text-fuchsia-300 bg-[#1b103e] border border-[#3e276b] px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                        {enq.grade}
                      </span>
                    </div>
                    <div className="text-slate-300">{enq.message}</div>
                    <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800/60 flex items-center justify-between">
                      <span>Student: <strong className="text-slate-200">{enq.studentName}</strong></span>
                      <span className="text-emerald-400 font-semibold">• {enq.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

