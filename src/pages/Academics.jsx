import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Download, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles, 
  Shirt, 
  Users, 
  GraduationCap, 
  FileText, 
  Award,
  ChevronDown
} from 'lucide-react';

export default function Academics({ onOpenAdmissionModal }) {
  const [activeTab, setActiveTab] = useState('structure');
  const [staffDept, setStaffDept] = useState('All');

  const academicWings = [
    {
      wing: 'Pre-Primary Wing (Early Childhood)',
      grades: 'Pre-Nursery, Nursery, Kindergarten (KG)',
      age: 'Ages 2.5 to 5 Years',
      focus: 'Play-way methodology, sensory stimulation, phonics, gross motor skills, social empathy, and curiosity nurturing.',
      ratio: '1:12 Student-Teacher Ratio with Dedicated Caretakers'
    },
    {
      wing: 'Primary School (Foundational & Preparatory)',
      grades: 'Grades I to V',
      age: 'Ages 6 to 10 Years',
      focus: 'Foundational literacy and numeracy (FLN), experiential math labs, environmental studies, visual arts, and introductory block coding.',
      ratio: '1:15 Student-Teacher Ratio'
    },
    {
      wing: 'Middle School (Exploratory Stage)',
      grades: 'Grades VI to VIII',
      age: 'Ages 11 to 13 Years',
      focus: 'Subject specialization in Physics, Chemistry, Biology, History, Civics, Geography. Language electives (French, German, Sanskrit) & Robotics.',
      ratio: '1:18 Student-Teacher Ratio'
    },
    {
      wing: 'Secondary School (CBSE Board Track)',
      grades: 'Grades IX & X',
      age: 'Ages 14 to 15 Years',
      focus: 'Comprehensive preparation for CBSE AISSE Board exams, Artificial Intelligence skill subject, Model United Nations, and Olympiad mentoring.',
      ratio: '1:20 Student-Teacher Ratio'
    },
    {
      wing: 'Senior Secondary School (Specialized Streams)',
      grades: 'Grades XI & XII',
      age: 'Ages 16 to 17 Years',
      focus: 'Three premier career streams: Science (PCM/PCB + AI/Biotech), Commerce (Economics, Accountancy, Applied Math), and Humanities (Psychology, Political Science). Integrated competitive exam guidance (JEE, NEET, CLAT, CUET).',
      ratio: '1:18 Student-Teacher Ratio'
    }
  ];

  const timings = [
    { period: 'Assembly & Morning Mindfulness', summer: '07:45 AM - 08:10 AM', winter: '08:15 AM - 08:40 AM' },
    { period: 'Period 1 - Core Academic Subject', summer: '08:10 AM - 08:50 AM', winter: '08:40 AM - 09:20 AM' },
    { period: 'Period 2 - Core Academic Subject', summer: '08:50 AM - 09:30 AM', winter: '09:20 AM - 10:00 AM' },
    { period: 'Period 3 - Science / Computer Lab', summer: '09:30 AM - 10:10 AM', winter: '10:00 AM - 10:40 AM' },
    { period: 'Fruit Break & Healthy Snack', summer: '10:10 AM - 10:25 AM', winter: '10:40 AM - 10:55 AM' },
    { period: 'Period 4 - Language / Elective', summer: '10:25 AM - 11:05 AM', winter: '10:55 AM - 11:35 AM' },
    { period: 'Period 5 - Mathematics & Reasoning', summer: '11:05 AM - 11:45 AM', winter: '11:35 AM - 12:15 PM' },
    { period: 'Lunch Break & Free Play', summer: '11:45 AM - 12:15 PM', winter: '12:15 PM - 12:45 PM' },
    { period: 'Period 6 - Sports / Performing Arts', summer: '12:15 PM - 12:55 PM', winter: '12:45 PM - 01:25 PM' },
    { period: 'Period 7 - Co-Curricular & Club Activity', summer: '12:55 PM - 01:35 PM', winter: '01:25 PM - 02:05 PM' },
    { period: 'Dispersal & Bus Boarding', summer: '01:45 PM', winter: '02:15 PM' }
  ];

  const holidays = [
    { date: 'March 25, 2026', occasion: 'Holi Celebrations', type: 'Gazetted Holiday' },
    { date: 'April 03, 2026', occasion: 'Good Friday', type: 'Gazetted Holiday' },
    { date: 'April 14, 2026', occasion: 'Dr. B.R. Ambedkar Jayanti', type: 'Gazetted Holiday' },
    { date: 'May 18 to June 30, 2026', occasion: 'Summer Vacation (Students)', type: 'School Break' },
    { date: 'August 15, 2026', occasion: 'Independence Day (Ceremonial)', type: 'National Holiday' },
    { date: 'October 02, 2026', occasion: 'Mahatma Gandhi Jayanti', type: 'National Holiday' },
    { date: 'October 19 to 24, 2026', occasion: 'Dussehra & Autumn Break', type: 'Festival Break' },
    { date: 'November 09 to 14, 2026', occasion: 'Diwali & Bhai Dooj Holidays', type: 'Festival Break' },
    { date: 'December 25 to Jan 03, 2027', occasion: 'Winter Break & Christmas', type: 'Winter Vacation' }
  ];

  const faculty = [
    {
      name: 'Dr. Eleanor Vance',
      designation: 'Principal & Head of School',
      dept: 'Administration',
      qualification: 'Ph.D., M.Sc. (Physics), M.Ed.',
      experience: '26 Years',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Mr. Arvind Saxena',
      designation: 'Head of Mathematics Department',
      dept: 'Mathematics',
      qualification: 'M.Sc. (Maths, Delhi University), B.Ed.',
      experience: '18 Years',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Dr. Pradeep Verma',
      designation: 'Senior Faculty - Physics & STEM',
      dept: 'Science',
      qualification: 'Ph.D. in Applied Optics, B.Ed.',
      experience: '15 Years',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Ms. Rebecca Collins',
      designation: 'Head of English & Foreign Languages',
      dept: 'Languages',
      qualification: 'M.A. English (Oxon), CELTA Certified',
      experience: '14 Years',
      photo: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Mr. Saurabh Mehta',
      designation: 'Lead Instructor - AI, Robotics & Coding',
      dept: 'Technology',
      qualification: 'B.Tech (Computer Science), Certified AI Educator',
      experience: '10 Years',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Mrs. Sunanda Banerjee',
      designation: 'Senior Coordinator - Humanities & Social Sciences',
      dept: 'Humanities',
      qualification: 'M.A. History, B.Ed., CBSE Master Trainer',
      experience: '20 Years',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
    }
  ];

  const filteredFaculty = staffDept === 'All' 
    ? faculty 
    : faculty.filter(f => f.dept === staffDept);

  return (
    <div className="w-full min-h-screen text-slate-100">
      
      {/* Header Banner */}
      <section className="bg-[#0c0722]/90 border-b border-[#341f5e]/80 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300 bg-purple-950/80 px-3.5 py-1 rounded-full border border-purple-500/30 inline-flex items-center gap-1.5 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> CBSE Curriculum & NEP 2020 Aligned
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mt-3">
            Academic Structure & School Information
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#d4c6f3] max-w-2xl mx-auto">
            Comprehensive details on our class structure, daily schedule, academic calendar, institutional guidelines, and faculty directory.
          </p>

          {/* Quick Sub-navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'structure', label: 'Academic Structure & Curriculum' },
              { id: 'timings', label: 'School Timings & Schedule' },
              { id: 'calendar', label: 'Academic Calendar & Holidays' },
              { id: 'rules', label: 'Rules & Uniform' },
              { id: 'staff', label: 'Faculty Directory' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white shadow-lg shadow-purple-950/80 scale-105'
                    : 'bg-[#180e38]/90 text-purple-200 hover:text-white hover:bg-[#231452] border border-[#3e276b]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* TAB 1: ACADEMIC STRUCTURE & CURRICULUM */}
        {activeTab === 'structure' && (
          <div className="space-y-12">
            
            {/* Overview Card */}
            <div className="theme-box p-8 sm:p-10 shadow-xl">
              <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest block mb-1">Foundations of Learning</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-white mb-3">
                The 5-3-3-4 Curricular Framework
              </h2>
              <p className="text-[#d4c6f3] text-xs sm:text-sm leading-relaxed mb-6">
                Umeed Global International School strictly adheres to the National Curriculum Framework (NCF) formulated under the National Education Policy (NEP 2020). Our progressive roadmap ensures conceptual clarity, experiential skill application, and holistic student well-being.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#341f5e]/80">
                <div className="p-4 bg-[#0d0722]/80 rounded-2xl border border-[#3b2568]">
                  <div className="font-bold text-fuchsia-300 text-sm mb-1">Affiliation Details</div>
                  <div className="text-xs text-[#a99ac7]">Central Board of Secondary Education (CBSE), Affiliation No. 2130894. School Code: 70412.</div>
                </div>
                <div className="p-4 bg-[#0d0722]/80 rounded-2xl border border-[#3b2568]">
                  <div className="font-bold text-fuchsia-300 text-sm mb-1">Medium of Instruction</div>
                  <div className="text-xs text-[#a99ac7]">English Medium. Second and Third languages include Hindi, Sanskrit, French, and German.</div>
                </div>
                <div className="p-4 bg-[#0d0722]/80 rounded-2xl border border-[#3b2568]">
                  <div className="font-bold text-fuchsia-300 text-sm mb-1">Co-Curricular Breadth</div>
                  <div className="text-xs text-[#a99ac7]">Robotics, Artificial Intelligence, Indian Classical Dance, Western Music, Debate & Public Speaking.</div>
                </div>
              </div>
            </div>

            {/* Wings Cards */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-white">Class & Grade Progression</h3>
              
              {academicWings.map((wing, i) => (
                <div 
                  key={i}
                  className="theme-box p-6 sm:p-7 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-[#341f5e]/80">
                    <div>
                      <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider">{wing.grades}</span>
                      <h4 className="text-lg font-bold text-white">{wing.wing}</h4>
                    </div>
                    <span className="theme-pill shrink-0">
                      {wing.age}
                    </span>
                  </div>

                  <p className="text-[#d4c6f3] text-xs sm:text-sm leading-relaxed mb-4">
                    {wing.focus}
                  </p>

                  <div className="text-xs font-medium text-[#a99ac7] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-fuchsia-400 shrink-0" />
                    <span>{wing.ratio}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 2: TIMINGS & BELL SCHEDULE */}
        {activeTab === 'timings' && (
          <div className="space-y-8">
            <div className="theme-box p-8 sm:p-10 shadow-xl">
              <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest block mb-1">Punctuality & Discipline</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-white mb-3">
                Daily School Timings & Bell Schedule
              </h2>
              <p className="text-[#d4c6f3] text-sm mb-6">
                We operate on an 8-period academic cycle interspersed with mindfulness, nutritious refreshment intervals, and physical recreation periods.
              </p>

              {/* Table */}
              <div className="overflow-x-auto rounded-2xl border border-[#382361] bg-[#0d0722]/85">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#180e38] text-[#d8b4fe] text-xs uppercase tracking-wider font-semibold border-b border-[#3b2568]">
                    <tr>
                      <th className="px-5 py-3.5">Academic Session / Bell Period</th>
                      <th className="px-5 py-3.5">Summer Timings (Apr - Oct)</th>
                      <th className="px-5 py-3.5">Winter Timings (Nov - Mar)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#341f5e]/60 text-slate-300 text-xs sm:text-sm">
                    {timings.map((t, idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? 'bg-[#130b2e]/50' : 'bg-[#0d0722]/60'} hover:bg-[#1a0f3d]/70 transition-colors`}>
                        <td className="px-5 py-3.5 font-semibold text-white flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-fuchsia-400" />
                          {t.period}
                        </td>
                        <td className="px-5 py-3.5 font-mono font-medium text-slate-300">{t.summer}</td>
                        <td className="px-5 py-3.5 font-mono font-medium text-slate-300">{t.winter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 p-4 bg-[#1b103e]/80 rounded-2xl border border-[#3e276b] text-xs text-[#d4c6f3] flex items-center gap-2">
                <span className="theme-pill text-[10px]">Important Notice</span>
                <span>School gates close strictly at 07:50 AM in Summer and 08:20 AM in Winter. Late arrivals require guardian clearance.</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ACADEMIC CALENDAR & HOLIDAYS */}
        {activeTab === 'calendar' && (
          <div className="space-y-8">
            <div className="theme-box p-8 sm:p-10 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest block mb-1">Session 2026-2027</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
                    Academic Calendar & Holiday List
                  </h2>
                </div>

                <button
                  onClick={() => alert("Downloading Official Umeed Global Academic Calendar 2026-27 (PDF).")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold text-xs rounded-2xl shadow-lg shadow-purple-950/60 transition-all shrink-0"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Download Calendar PDF</span>
                </button>
              </div>

              <p className="text-[#d4c6f3] text-sm mb-6">
                The school year runs from April 1, 2026, through March 2027, partitioned into Term 1 (April to September) and Term 2 (October to March).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {holidays.map((h, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-[#3b2568] bg-[#0d0722]/85 flex items-center justify-between hover:border-purple-400/60 transition-all"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-wider block">
                        {h.type}
                      </span>
                      <h4 className="text-sm font-bold text-white">{h.occasion}</h4>
                    </div>
                    <div className="text-xs font-semibold text-purple-200 bg-[#180e38] px-3 py-1.5 rounded-xl border border-[#3e276b]">
                      {h.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: RULES, REGULATIONS & UNIFORM */}
        {activeTab === 'rules' && (
          <div className="space-y-8">
            {/* Rules */}
            <div className="theme-box p-8 sm:p-10 shadow-xl">
              <h3 className="text-xl font-serif font-black text-white mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-fuchsia-400" />
                Institutional Code of Conduct & Rules
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#d4c6f3]">
                <div className="space-y-2 p-5 bg-[#0d0722]/85 rounded-2xl border border-[#3b2568]">
                  <h4 className="font-bold text-fuchsia-300">1. Attendance Criterion</h4>
                  <p className="text-[#a99ac7]">Students must maintain a mandatory minimum attendance of 75% across the academic session to be eligible for CBSE board examinations and annual promotion.</p>
                </div>
                <div className="space-y-2 p-5 bg-[#0d0722]/85 rounded-2xl border border-[#3b2568]">
                  <h4 className="font-bold text-fuchsia-300">2. Anti-Bullying Zero Tolerance</h4>
                  <p className="text-[#a99ac7]">The campus is a strictly designated anti-bullying safe zone. Any harassment, online misconduct, or physical intimidation results in immediate disciplinary review.</p>
                </div>
                <div className="space-y-2 p-5 bg-[#0d0722]/85 rounded-2xl border border-[#3b2568]">
                  <h4 className="font-bold text-fuchsia-300">3. Electronic Gadget Regulations</h4>
                  <p className="text-[#a99ac7]">Smartphones and personal gaming devices are prohibited during instructional hours. Digital tablets for senior research are permitted under teacher supervision.</p>
                </div>
                <div className="space-y-2 p-5 bg-[#0d0722]/85 rounded-2xl border border-[#3b2568]">
                  <h4 className="font-bold text-fuchsia-300">4. Campus Dignity & Property</h4>
                  <p className="text-[#a99ac7]">Respect for school assets, laboratory apparatus, and library volumes is mandatory. Damage to school equipment must be restored by responsible parties.</p>
                </div>
              </div>
            </div>

            {/* Uniform Details */}
            <div className="theme-box p-8 sm:p-10 shadow-xl">
              <h3 className="text-xl font-serif font-black text-white mb-4 flex items-center gap-2">
                <Shirt className="w-5 h-5 text-fuchsia-400" />
                Official School Uniform Specification
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 bg-[#0d0722]/85 rounded-2xl border border-[#3b2568]">
                  <div className="font-bold text-fuchsia-300 text-sm mb-2">Summer Uniform</div>
                  <ul className="text-xs text-[#d4c6f3] space-y-1.5 list-disc pl-4">
                    <li>Boys: Crisp sky blue short-sleeve shirt with embroidered crest, navy blue tailored trousers.</li>
                    <li>Girls: Sky blue pleated shirt with navy blue skirt / divided skirt, school tie & belt.</li>
                    <li>Footwear: Polished black oxford shoes with navy blue ankle socks.</li>
                  </ul>
                </div>

                <div className="p-5 bg-[#0d0722]/85 rounded-2xl border border-[#3b2568]">
                  <div className="font-bold text-fuchsia-300 text-sm mb-2">Winter Uniform</div>
                  <ul className="text-xs text-[#d4c6f3] space-y-1.5 list-disc pl-4">
                    <li>Navy blue single-breasted blazer with golden school insignia buttons.</li>
                    <li>Warm V-neck woolen navy pullover with purple/gold neck trim.</li>
                    <li>Long-sleeve formal shirt and grey woolen trousers/skirts.</li>
                  </ul>
                </div>

                <div className="p-5 bg-[#0d0722]/85 rounded-2xl border border-[#3b2568]">
                  <div className="font-bold text-fuchsia-300 text-sm mb-2">House Sports Kit (Wed & Sat)</div>
                  <ul className="text-xs text-[#d4c6f3] space-y-1.5 list-disc pl-4">
                    <li>House dry-fit polo jersey (Blue Sapphire, Emerald Green, Ruby Red, Topaz Yellow).</li>
                    <li>White track pants with navy piping.</li>
                    <li>Non-marking sports trainers.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: FACULTY DIRECTORY */}
        {activeTab === 'staff' && (
          <div className="space-y-8">
            <div className="theme-box p-8 sm:p-10 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest block mb-1">Mentors of Excellence</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
                    Faculty & Department Directory
                  </h2>
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap gap-1.5 bg-[#140b30]/90 p-1.5 rounded-full border border-[#3e276b] text-xs">
                  {['All', 'Science', 'Mathematics', 'Languages', 'Technology', 'Humanities'].map(d => (
                    <button
                      key={d}
                      onClick={() => setStaffDept(d)}
                      className={`px-3 py-1 rounded-full font-semibold transition-all ${
                        staffDept === d 
                          ? 'bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white shadow-md font-bold' 
                          : 'text-[#a99ac7] hover:text-white'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFaculty.map((f, idx) => (
                  <div
                    key={idx}
                    className="theme-box p-5 rounded-[26px] flex items-center gap-4 hover:scale-[1.02] transition-all duration-300 shadow-lg"
                  >
                    <img
                      src={f.photo}
                      alt={f.name}
                      className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-purple-400/80 shrink-0 shadow-md"
                    />
                    <div>
                      <span className="text-[10px] font-mono font-bold text-fuchsia-400 uppercase tracking-wider">{f.dept}</span>
                      <h4 className="text-sm font-bold text-white group-hover:text-fuchsia-300">{f.name}</h4>
                      <p className="text-xs text-[#d4c6f3] font-medium">{f.designation}</p>
                      <div className="text-[11px] text-[#a99ac7] mt-1">{f.qualification} • {f.experience}</div>
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

