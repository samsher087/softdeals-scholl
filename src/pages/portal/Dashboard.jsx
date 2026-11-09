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
    studentId: 'STX-2024-1014',
    rollNo: 14,
    grade: '10',
    section: 'A',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    bloodGroup: 'B+',
    house: 'Blue Sapphire',
    fatherName: 'Dr. Rajeshwar Sharma',
    parentPhone: '+91 98765 43210',
    overallAttendance: 94.6,
    gpa: 3.92,
    classRank: 2,
    busRoute: 'Route 12 (Bus DL-1PB-4509)'
  };

  return (
    <div className="w-full bg-slate-100 min-h-screen">
      
      {/* Top Portal Bar (Screen only) */}
      <header className="bg-navy-950 text-white border-b border-navy-800 sticky top-0 z-30 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-navy-900 border border-gold-400 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-gold-400" />
              </div>
              <div className="hidden sm:block">
                <span className="font-serif font-bold text-sm block leading-none">ST. XAVIER'S</span>
                <span className="text-[9px] text-slate-400 tracking-wider uppercase">Portal Dashboard</span>
              </div>
            </Link>

            <span className="text-slate-600 hidden sm:inline">|</span>

            <div className="bg-navy-900 px-3 py-1 rounded-full text-xs font-semibold text-slate-300 border border-navy-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="capitalize">{user?.role} Session Active</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-right">
              <img
                src={student.avatar}
                alt={user?.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-gold-400"
              />
              <div className="hidden md:block">
                <div className="text-xs font-bold text-white">{user?.name}</div>
                <div className="text-[10px] text-gold-400">{user?.role === 'parent' ? 'Parent Portal' : user?.role === 'admin' ? 'Staff Portal' : `Class ${student.grade}-${student.section}`}</div>
              </div>
            </div>

            <button
              onClick={logout}
              className="p-2 text-slate-400 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors"
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
        <div className="no-print bg-white p-2 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-wrap gap-1">
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
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
                } ${tab.highlight && !active ? 'text-skyAccent-700 bg-skyAccent-50' : ''}`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-gold-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 1. OVERVIEW & PROFILE TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Student ID Banner Card */}
            <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-skyAccent-950 text-white rounded-3xl p-6 sm:p-8 shadow-premium border border-navy-800 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-gold-400 shadow-xl shrink-0"
                />

                <div className="flex-1 text-center md:text-left space-y-2">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <span className="bg-gold-500 text-navy-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Student Scholar
                    </span>
                    <span className="text-xs text-skyAccent-300 font-mono">
                      ID: {student.studentId}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {student.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300">
                    Grade <strong className="text-white">{student.grade} - Section {student.section}</strong> • Roll Number: <strong className="text-white">{student.rollNo}</strong> • House: <strong className="text-gold-400">{student.house}</strong>
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
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 text-center">
                    <div className="text-[10px] text-slate-300 uppercase font-semibold">Attendance</div>
                    <div className="text-lg font-bold text-emerald-400">{student.overallAttendance}%</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 text-center">
                    <div className="text-[10px] text-slate-300 uppercase font-semibold">Term GPA</div>
                    <div className="text-lg font-bold text-gold-400">{student.gpa} / 4.0</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 text-center">
                    <div className="text-[10px] text-slate-300 uppercase font-semibold">Class Rank</div>
                    <div className="text-lg font-bold text-skyAccent-300">#{student.classRank} in Class</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Widgets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Transport Widget */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-navy-900 font-bold text-sm">
                  <span className="flex items-center gap-2">
                    <Bus className="w-4 h-4 text-skyAccent-600" /> Transport Allotment
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">Active Fleet</span>
                </div>
                <div className="text-xs text-slate-600">
                  <div className="font-semibold text-slate-800">{student.busRoute}</div>
                  <div className="mt-1">Driver In-Charge: Mr. Satish Kumar (+91 98112 33445)</div>
                  <div className="text-slate-400 mt-0.5">Morning Pickup: 07:12 AM • Evening Drop: 02:40 PM</div>
                </div>
              </div>

              {/* Next Exam Notice */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-navy-900 font-bold text-sm">
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-gold-500" /> Upcoming Assessment
                  </span>
                  <span className="text-[10px] bg-skyAccent-100 text-skyAccent-700 px-2 py-0.5 rounded font-bold">Term Final</span>
                </div>
                <div className="text-xs text-slate-600">
                  <div className="font-semibold text-slate-800">Annual Board Practicals</div>
                  <div className="mt-1">Physics & Robotics Lab Viva Voce</div>
                  <div className="text-slate-400 mt-0.5">Date: March 18, 2026 • Reporting: 08:30 AM</div>
                </div>
              </div>

              {/* Teacher Remarks Snapshot */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-navy-900 font-bold text-sm">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-purple-600" /> Mentor Remark
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Mrs. Banerjee</span>
                </div>
                <p className="text-xs text-slate-600 italic">
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
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-xs font-semibold text-slate-500 uppercase">Total Working Days</div>
                <div className="text-2xl font-bold font-serif text-navy-900 mt-1">{attendance?.totalDays || 182}</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-xs font-semibold text-slate-500 uppercase">Days Present</div>
                <div className="text-2xl font-bold font-serif text-emerald-600 mt-1">{attendance?.presentDays || 172}</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-xs font-semibold text-slate-500 uppercase">Authorized Leave</div>
                <div className="text-2xl font-bold font-serif text-amber-600 mt-1">{attendance?.medicalLeave || 3}</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-xs font-semibold text-slate-500 uppercase">Term Attendance Rate</div>
                <div className="text-2xl font-bold font-serif text-skyAccent-600 mt-1">{attendance?.attendancePercentage || 94.5}%</div>
              </div>
            </div>

            {/* Monthly Breakdown Table */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-navy-900 mb-4">
                Monthly Attendance Breakdown (Academic Year 2025-26)
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-navy-950 text-white uppercase text-xs">
                    <tr>
                      <th className="px-5 py-3">Month</th>
                      <th className="px-5 py-3">Total Working Days</th>
                      <th className="px-5 py-3">Days Attended</th>
                      <th className="px-5 py-3">Attendance Rate</th>
                      <th className="px-5 py-3">CBSE Threshold Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {(attendance?.monthlySummary || []).map((m, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-5 py-3 font-bold text-navy-900">{m.month}</td>
                        <td className="px-5 py-3">{m.total} Days</td>
                        <td className="px-5 py-3 font-semibold text-emerald-600">{m.present} Days</td>
                        <td className="px-5 py-3 font-mono font-bold text-skyAccent-600">{m.rate}</td>
                        <td className="px-5 py-3">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
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
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-navy-900 mb-4">
                Subject-Wise Attendance Distribution
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(attendance?.subjectWise || []).map((sw, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-navy-900">
                      <span>{sw.subject}</span>
                      <span className="text-skyAccent-600 font-mono">{sw.percentage}% ({sw.attended}/{sw.total})</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-skyAccent-500 h-full rounded-full transition-all"
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
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">{results?.examTitle || 'Pre-Board Assessment'}</span>
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mt-1">Official Term Gradebook</h3>
                </div>

                <button
                  onClick={() => setActiveTab('reportCard')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-navy-900 to-skyAccent-700 text-white font-bold text-xs rounded-xl shadow shrink-0"
                >
                  <FileText className="w-4 h-4 text-gold-400" />
                  <span>Generate Report Card Format</span>
                </button>
              </div>

              {/* Result Summary Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="p-4 bg-navy-50 rounded-xl border border-navy-100 text-center">
                  <div className="text-xs text-slate-500 font-semibold uppercase">Overall Aggregate</div>
                  <div className="text-2xl font-extrabold text-navy-900 font-serif mt-0.5">{results?.overallPercentage || '92.8'}%</div>
                  <div className="text-[11px] text-emerald-600 font-bold mt-1">Passed with Distinction</div>
                </div>
                <div className="p-4 bg-navy-50 rounded-xl border border-navy-100 text-center">
                  <div className="text-xs text-slate-500 font-semibold uppercase">Class Standings</div>
                  <div className="text-2xl font-extrabold text-navy-900 font-serif mt-0.5">Rank 2nd</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-1">Among 42 Section Peers</div>
                </div>
                <div className="p-4 bg-navy-50 rounded-xl border border-navy-100 text-center">
                  <div className="text-xs text-slate-500 font-semibold uppercase">Conduct Grade</div>
                  <div className="text-2xl font-extrabold text-emerald-600 font-serif mt-0.5">Grade A+</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-1">Exemplary Discipline</div>
                </div>
              </div>

              {/* Subject Scores Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-navy-950 text-white uppercase text-xs font-semibold">
                    <tr>
                      <th className="px-5 py-3">Subject Code & Name</th>
                      <th className="px-5 py-3">Max Marks</th>
                      <th className="px-5 py-3">Marks Obtained</th>
                      <th className="px-5 py-3">Letter Grade</th>
                      <th className="px-5 py-3">Faculty Remark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {(results?.subjects || []).map((sub, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-5 py-3 font-bold text-navy-900">
                          <span className="text-[10px] text-slate-400 block font-mono">{sub.code}</span>
                          {sub.name}
                        </td>
                        <td className="px-5 py-3 font-mono">{sub.maxMarks}</td>
                        <td className="px-5 py-3 font-mono font-bold text-navy-900">{sub.marksObtained}</td>
                        <td className="px-5 py-3">
                          <span className="font-bold text-xs bg-gold-100 text-gold-800 px-2.5 py-0.5 rounded border border-gold-300">
                            {sub.grade}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-xs text-slate-500">{sub.remarks}</td>
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
            <div className="no-print flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-xs text-slate-600">
                <strong className="text-navy-900">Official Institutional Report Card:</strong> Standardized CBSE grading format suitable for printing and record archiving.
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrintReport}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-950 text-white font-bold text-xs rounded-xl shadow transition-all"
                >
                  <Printer className="w-4 h-4 text-gold-400" />
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
                      ST. XAVIER'S INTERNATIONAL SCHOOL
                    </h1>
                    <p className="text-xs text-slate-600 font-semibold">
                      Affiliated to the Central Board of Secondary Education (CBSE), New Delhi • Affiliation No: 2130894
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Sector 14, Institutional Area, Knowledge Park II, New Delhi NCR • Email: controller@stxavierschool.edu
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
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-skyAccent-600 uppercase tracking-widest">Academic Tasks</span>
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mt-1">Daily Homework & Projects</h3>
                </div>
                <span className="text-xs text-slate-500">
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
                          ? 'bg-slate-50 border-slate-200 opacity-75' 
                          : 'bg-white border-slate-200 shadow-sm hover:border-skyAccent-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => handleToggleHomework(hw.id)}
                            className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              isDone
                                ? 'bg-emerald-500 border-emerald-500 text-white'
                                : 'border-slate-300 hover:border-skyAccent-500 bg-white'
                            }`}
                          >
                            {isDone && <CheckCircle2 className="w-4 h-4" />}
                          </button>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-skyAccent-50 text-skyAccent-700 uppercase">
                                {hw.subject}
                              </span>
                              <span className="text-xs text-slate-400">• Teacher: {hw.teacher}</span>
                            </div>

                            <h4 className={`text-sm font-bold text-navy-900 mt-1 ${isDone ? 'line-through text-slate-500' : ''}`}>
                              {hw.title}
                            </h4>

                            <p className="text-xs text-slate-600 mt-1">
                              {hw.instructions}
                            </p>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block mb-1 ${
                            isDone 
                              ? 'bg-emerald-100 text-emerald-700' 
                              : hw.priority === 'High' 
                                ? 'bg-red-100 text-red-700' 
                                : 'bg-amber-100 text-amber-700'
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
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <span className="text-xs font-bold text-skyAccent-600 uppercase tracking-widest">Direct Communication</span>
                <h3 className="text-xl font-serif font-bold text-navy-900">Message Class Teacher</h3>
                <p className="text-xs text-slate-600">
                  Send a query directly to Class Mentor Mrs. Sunanda Banerjee. Replies will appear here within 24 hours.
                </p>

                {msgSent ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium">
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
                      className="w-full p-3 text-xs border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-skyAccent-400"
                    ></textarea>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-navy-900 hover:bg-navy-950 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5 text-gold-400" />
                      <span>Transmit Message</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Schedule PTM Meeting */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">Parent-Teacher Meeting</span>
                <h3 className="text-xl font-serif font-bold text-navy-900">Reserve PTM Consultation Slot</h3>
                <p className="text-xs text-slate-600">
                  Upcoming PTM Date: <strong>Saturday, March 21, 2026</strong>. Reserve your 15-minute 1-on-1 discussion window.
                </p>

                {ptmRequested ? (
                  <div className="p-4 bg-skyAccent-50 border border-skyAccent-200 rounded-xl text-xs text-skyAccent-900 font-medium">
                    ✓ PTM Slot Confirmed: Saturday, 10:30 AM - 10:45 AM (Room 204 - Science Wing). A calendar invite has been emailed to you.
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                      <strong>Available Slots:</strong>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => setPtmRequested(true)}
                          className="p-2 bg-white hover:bg-skyAccent-50 rounded-lg border text-center font-bold text-navy-900"
                        >
                          10:30 AM - 10:45 AM
                        </button>
                        <button
                          type="button"
                          onClick={() => setPtmRequested(true)}
                          className="p-2 bg-white hover:bg-skyAccent-50 rounded-lg border text-center font-bold text-navy-900"
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
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Quarterly Fee Summary & Receipts</h3>
              <p className="text-xs text-slate-500 mb-6">Student ID: {student.studentId} • Academic Session 2025-26</p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-navy-950 text-white uppercase text-xs font-semibold">
                    <tr>
                      <th className="px-5 py-3">Installment Quarter</th>
                      <th className="px-5 py-3">Due Date</th>
                      <th className="px-5 py-3">Amount</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Receipt Document</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {[
                      { qtr: 'Quarter 1 (Apr - Jun)', due: '15 April 2025', amt: '₹ 29,000', status: 'Paid', receipt: 'REC-2025-Q1' },
                      { qtr: 'Quarter 2 (Jul - Sep)', due: '15 July 2025', amt: '₹ 29,000', status: 'Paid', receipt: 'REC-2025-Q2' },
                      { qtr: 'Quarter 3 (Oct - Dec)', due: '15 October 2025', amt: '₹ 29,000', status: 'Paid', receipt: 'REC-2025-Q3' },
                      { qtr: 'Quarter 4 (Jan - Mar)', due: '15 January 2026', amt: '₹ 29,000', status: 'Paid', receipt: 'REC-2026-Q4' }
                    ].map((f, i) => (
                      <tr key={i} className="bg-white">
                        <td className="px-5 py-3 font-bold text-navy-900">{f.qtr}</td>
                        <td className="px-5 py-3 text-slate-500">{f.due}</td>
                        <td className="px-5 py-3 font-mono font-bold text-slate-800">{f.amt}</td>
                        <td className="px-5 py-3">
                          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded">
                            {f.status}
                          </span>
                        </td>
                        <td className="px-5 py-3">
                          <button
                            onClick={() => alert(`Downloading Verified Fee Receipt: ${f.receipt} (PDF).`)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-skyAccent-600 hover:underline"
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
            
            {/* Post Notice Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">Administrative Directorate</span>
              <h3 className="text-xl font-serif font-bold text-navy-900">Publish New Official School Notice</h3>

              {noticePosted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium">
                  ✓ School Notice broadcasted successfully to all students, parents, and public portal!
                </div>
              )}

              <form onSubmit={handleCreateNotice} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Notice Headline *</label>
                    <input
                      type="text"
                      required
                      value={noticeTitle}
                      onChange={(e) => setNoticeTitle(e.target.value)}
                      placeholder="e.g. Schedule for Annual Science Olympiad 2026"
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-skyAccent-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category</label>
                    <select
                      value={noticeCategory}
                      onChange={(e) => setNoticeCategory(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-skyAccent-400 bg-white"
                    >
                      <option value="Academic">Academic</option>
                      <option value="Admissions">Admissions</option>
                      <option value="Examinations">Examinations</option>
                      <option value="Sports">Sports</option>
                      <option value="Events">Events</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Notice Details & Summary *</label>
                  <textarea
                    rows="2"
                    required
                    value={noticeSummary}
                    onChange={(e) => setNoticeSummary(e.target.value)}
                    placeholder="Enter announcement text to display on homepage and portal..."
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-skyAccent-400"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="urgent"
                    checked={noticeUrgent}
                    onChange={(e) => setNoticeUrgent(e.target.checked)}
                    className="rounded text-red-600 focus:ring-red-400"
                  />
                  <label htmlFor="urgent" className="text-xs text-slate-700 font-semibold cursor-pointer">
                    Flag as Urgent / High Priority Notice
                  </label>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-navy-900 hover:bg-navy-950 text-white font-bold text-xs rounded-xl shadow"
                >
                  Publish Notice
                </button>
              </form>
            </div>

            {/* Received Enquiries List */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-skyAccent-600 uppercase tracking-widest">Admissions Inbox</span>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mt-1">Recent Website Enquiries</h3>
                </div>
                <span className="text-xs font-semibold text-slate-500">{enquiries.length} Inquiries Logged</span>
              </div>

              <div className="space-y-3">
                {enquiries.map((enq) => (
                  <div key={enq.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                    <div className="flex items-center justify-between font-bold text-navy-900">
                      <span>{enq.name} ({enq.phone})</span>
                      <span className="text-gold-600 bg-gold-50 px-2 py-0.5 rounded text-[10px]">{enq.grade}</span>
                    </div>
                    <div className="text-slate-600">{enq.message}</div>
                    <div className="text-[10px] text-slate-400 pt-1">Student: {enq.studentName} • Status: {enq.status}</div>
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

