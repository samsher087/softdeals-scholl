// Initial realistic data for St. Xavier's International School
// Developed for SOFTDEALS – Digital Solutions

export const initialNotices = [
  {
    id: 'not-01',
    title: 'Admissions Open for Academic Year 2026-2027 (Pre-Nursery to Grade XI)',
    category: 'Admissions',
    date: '2026-03-01',
    urgent: true,
    summary: 'Online registration is now open for the session 2026-27. Limited seats available in Science, Commerce and Humanities streams for Grade XI.',
    fileUrl: '#download-prospectus',
    author: 'Admissions Directorate'
  },
  {
    id: 'not-02',
    title: 'CBSE Senior Secondary Board Practical Exam Schedule Announced',
    category: 'Examinations',
    date: '2026-02-28',
    urgent: true,
    summary: 'The CBSE board practical examinations for Grades 10 & 12 will commence from next week. Students are requested to download the hall ticket and lab guidelines.',
    fileUrl: '#exam-schedule-pdf',
    author: 'Examination Controller'
  },
  {
    id: 'not-03',
    title: 'Annual Inter-School STEM & Robotics Exhibition "INNOVIZ 2026"',
    category: 'Events',
    date: '2026-02-25',
    urgent: false,
    summary: 'Students from 35 partner schools will compete in AI, IoT and Robotics prototypes. Parents and educators are cordially invited.',
    fileUrl: '#innoviz-guidelines',
    author: 'Dept. of Science & Technology'
  },
  {
    id: 'not-04',
    title: 'Annual Athletic Meet & Sports Gala 2026 - Schedule & House Teams',
    category: 'Sports',
    date: '2026-02-20',
    urgent: false,
    summary: 'Final list of athletes representing Blue Sapphire, Emerald, Ruby, and Topaz houses has been posted on the main sports bulletin.',
    fileUrl: '#sports-schedule',
    author: 'Physical Education Dept.'
  },
  {
    id: 'not-05',
    title: 'Parent-Teacher Interaction Session (PTM) for Term-2 Assessment',
    category: 'Academic',
    date: '2026-02-15',
    urgent: false,
    summary: 'PTM for Grades 1 to 9 & 11 will be conducted on Saturday. Slots can be reserved via the Parent Portal.',
    fileUrl: '#ptm-schedule',
    author: 'Academic Council'
  }
];

export const initialEvents = [
  {
    id: 'ev-01',
    title: 'Annual Day & Cultural Extravaganza "SPANDAN 2026"',
    date: 'March 28, 2026',
    time: '5:00 PM - 9:00 PM',
    venue: 'St. Xavier\'s Grand Auditorium',
    badge: 'Flagship Event',
    description: 'An evening celebrating classical dance, orchestral harmony, theatrical drama, and student excellence awards.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ev-02',
    title: 'National Science Day Olympiad & Innovation Expo',
    date: 'April 10, 2026',
    time: '9:00 AM - 3:30 PM',
    venue: 'Aryabhata Science Block & Labs',
    badge: 'STEM & Robotics',
    description: 'Featuring interactive student research kiosks, renewable energy demonstrations, and astronomy telescopes.',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ev-03',
    title: 'Inter-House Football Championship Finals',
    date: 'April 22, 2026',
    time: '3:00 PM - 6:00 PM',
    venue: 'FIFA-Standard Synthetic Turf Stadium',
    badge: 'Athletics',
    description: 'Final clash between Ruby Lions and Sapphire Eagles for the prestigious Rolling Founder\'s Cup.',
    image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ev-04',
    title: 'Workshop: Career Pathways in AI, Biotechnology & Law',
    date: 'May 05, 2026',
    time: '10:00 AM - 1:00 PM',
    venue: 'Conference Hall & Online Webinar',
    badge: 'Career Guidance',
    description: 'Special panel discussion featuring distinguished alumni from IITs, Oxford, and Harvard for senior students.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  }
];

export const initialGallery = [
  {
    id: 'gal-01',
    title: 'Sprawling Green Campus & Heritage Clock Tower',
    category: 'School Campus',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    description: 'The 25-acre pollution-free green campus designed with modern academic blocks and heritage aesthetics.',
    date: '2026-01-15'
  },
  {
    id: 'gal-02',
    title: 'Smart Interactive Digital Classroom',
    category: 'Classrooms',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    description: 'Air-conditioned smart learning spaces equipped with 4K touch panels, ergonomic seating, and audio acoustics.',
    date: '2026-01-20'
  },
  {
    id: 'gal-03',
    title: 'Annual Cultural Festival "Spandan" Grand Finale',
    category: 'Annual Function',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    description: 'Spectacular light and sound choreography performed by over 450 middle and high school students.',
    date: '2025-12-22'
  },
  {
    id: 'gal-04',
    title: 'Inter-School Swimming Championship at Olympic Pool',
    category: 'Sports Activities',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80',
    description: 'Our all-weather heated Olympic-size swimming facility with certified national-level trainers.',
    date: '2026-02-10'
  },
  {
    id: 'gal-05',
    title: 'Traditional Dance Performance at Independence Celebrations',
    category: 'Cultural Programs',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    description: 'Nurturing Indian classical traditions, Kathak, and global music ensembles.',
    date: '2025-08-15'
  },
  {
    id: 'gal-06',
    title: 'AI & Robotics Prototype Showcase by Young Innovators',
    category: 'Science Exhibition',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    description: 'Students demonstrating autonomous solar rovers and voice-activated assistance models.',
    date: '2026-02-04'
  },
  {
    id: 'gal-07',
    title: 'Heritage Educational Tour to NASA Kennedy Space Center & ISRO',
    category: 'Educational Tours',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    description: 'Senior secondary students participating in the international aeronautics immersion tour.',
    date: '2025-10-18'
  },
  {
    id: 'gal-08',
    title: 'Advanced Chemistry & Biotechnology Research Lab',
    category: 'Classrooms',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    description: 'Ultra-modern laboratories adhering strictly to international safety protocols and sensor apparatus.',
    date: '2026-01-11'
  },
  {
    id: 'gal-09',
    title: 'Basketball League Champions Trophy Celebration',
    category: 'Sports Activities',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
    description: 'St. Xavier\'s under-17 basketball team clinching the Regional Gold Medal for the third consecutive year.',
    date: '2026-01-29'
  },
  {
    id: 'gal-10',
    title: 'Central Digital Library & Reading Sanctuary',
    category: 'School Campus',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    description: 'Housing over 35,000 physical volumes, kindle stations, and access to international scholarly journals.',
    date: '2026-02-01'
  },
  {
    id: 'gal-11',
    title: 'Kindergarten & Montessori Activity Hub',
    category: 'Student Activities',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    description: 'Sensory play, foundational storytelling, and creative motor skill development in vibrant early-learning suites.',
    date: '2026-02-14'
  },
  {
    id: 'gal-12',
    title: 'Campus Tour & Annual Glimpses (Virtual Showcase)',
    category: 'Video Gallery',
    type: 'video',
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video embed
    description: 'Experience 4 minutes of exhilarating campus life, sports complexes, and academic brilliance.',
    date: '2026-01-05'
  }
];

export const mockStudentUser = {
  id: 'usr-student-01',
  role: 'student',
  name: 'Aryan Sharma',
  email: 'student@school.edu',
  studentId: 'STX-2024-1014',
  rollNo: 14,
  grade: '10',
  section: 'A',
  academicYear: '2025-2026',
  avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
  dob: '2010-06-14',
  bloodGroup: 'B+',
  house: 'Blue Sapphire',
  fatherName: 'Dr. Rajeshwar Sharma',
  motherName: 'Mrs. Sunita Sharma',
  parentPhone: '+91 98765 43210',
  address: '42, Oakwood Boulevard, South City Phase II, New Delhi - 110048',
  busRoute: 'Route 12 (South Extension & GK II - Bus DL-1PB-4509)',
  emergencyContact: '+91 98765 43211',
  overallAttendance: 94.6,
  gpa: 3.92,
  classRank: 2
};

export const mockParentUser = {
  id: 'usr-parent-01',
  role: 'parent',
  name: 'Dr. Rajeshwar Sharma',
  email: 'parent@school.edu',
  relationship: 'Father',
  wardName: 'Aryan Sharma',
  wardGrade: 'Grade 10 - Section A',
  wardStudentId: 'STX-2024-1014',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
  phone: '+91 98765 43210'
};

export const mockAdminUser = {
  id: 'usr-admin-01',
  role: 'admin',
  name: 'Sister Margaret D\'Souza',
  email: 'admin@school.edu',
  designation: 'Vice Principal & Chief Academic Officer',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
};

export const mockAttendanceRecords = {
  totalDays: 182,
  presentDays: 172,
  absentDays: 7,
  medicalLeave: 3,
  attendancePercentage: 94.5,
  monthlySummary: [
    { month: 'Sep 2025', total: 24, present: 23, rate: '95.8%' },
    { month: 'Oct 2025', total: 21, present: 20, rate: '95.2%' },
    { month: 'Nov 2025', total: 23, present: 22, rate: '95.6%' },
    { month: 'Dec 2025', total: 20, present: 18, rate: '90.0%' },
    { month: 'Jan 2026', total: 22, present: 21, rate: '95.4%' },
    { month: 'Feb 2026', total: 22, present: 21, rate: '95.4%' }
  ],
  subjectWise: [
    { subject: 'English Communicative', attended: 45, total: 47, percentage: 95.7 },
    { subject: 'Mathematics Advanced', attended: 58, total: 60, percentage: 96.6 },
    { subject: 'Physics & Chemistry Lab', attended: 48, total: 52, percentage: 92.3 },
    { subject: 'Biology', attended: 36, total: 38, percentage: 94.7 },
    { subject: 'Social Sciences', attended: 40, total: 42, percentage: 95.2 },
    { subject: 'Artificial Intelligence & IT', attended: 32, total: 33, percentage: 96.9 }
  ]
};

export const mockExamResults = {
  studentName: 'Aryan Sharma',
  rollNumber: '1014',
  grade: '10th Standard',
  section: 'A',
  examTitle: 'Term II Pre-Board Summative Assessment 2025-26',
  conductedOn: 'January 2026',
  resultStatus: 'Passed with Distinction',
  overallPercentage: 92.8,
  rankInClass: '2nd / 42 Students',
  subjects: [
    {
      code: 'ENG-101',
      name: 'English Language & Literature',
      maxMarks: 100,
      marksObtained: 94,
      grade: 'A1',
      remarks: 'Exceptional creative writing and analytical reading comprehension.'
    },
    {
      code: 'MAT-102',
      name: 'Mathematics (Standard)',
      maxMarks: 100,
      marksObtained: 96,
      grade: 'A1',
      remarks: 'Outstanding logical reasoning in Coordinate Geometry and Trigonometry.'
    },
    {
      code: 'SCI-103',
      name: 'Science (Physics, Chemistry, Biology)',
      maxMarks: 100,
      marksObtained: 91,
      grade: 'A1',
      remarks: 'Excellent mastery of concepts; demonstrated diligent practical lab skills.'
    },
    {
      code: 'SST-104',
      name: 'Social Science (History, Civics, Geography)',
      maxMarks: 100,
      marksObtained: 89,
      grade: 'A2',
      remarks: 'Thorough answers with commendable map work precision.'
    },
    {
      code: 'LAN-105',
      name: 'Hindi Course A / French',
      maxMarks: 100,
      marksObtained: 92,
      grade: 'A1',
      remarks: 'Very good vocabulary and grammar accuracy.'
    },
    {
      code: 'AI-106',
      name: 'Artificial Intelligence (Skill Subject)',
      maxMarks: 100,
      marksObtained: 97,
      grade: 'A1',
      remarks: 'Top score; designed an innovative Python computer vision mini-project.'
    }
  ],
  coScholastic: [
    { area: 'Work Education & Computer Literacy', grade: 'A' },
    { area: 'Visual & Performing Arts', grade: 'A' },
    { area: 'Health & Physical Education (Sports)', grade: 'A+' },
    { area: 'Discipline & School Values', grade: 'A+' }
  ],
  principalRemarks: 'Aryan is a bright, intellectually curious, and exceptionally disciplined student with strong leadership capabilities.',
  classTeacher: 'Mrs. Sunanda Banerjee, M.Sc., B.Ed.'
};

export const mockHomework = [
  {
    id: 'hw-01',
    subject: 'Mathematics',
    title: 'Quadratic Equations & Arithmetic Progressions Exercise 5.3',
    dueDate: '2026-03-05',
    assignedDate: '2026-03-01',
    teacher: 'Mr. Arvind Saxena',
    status: 'Pending',
    priority: 'High',
    instructions: 'Complete solved examples 12 to 18 and submit handwritten notebooks in period 2.'
  },
  {
    id: 'hw-02',
    subject: 'Physics',
    title: 'Ray Optics & Lens Formula Lab Report Writing',
    dueDate: '2026-03-06',
    assignedDate: '2026-02-28',
    teacher: 'Dr. Pradeep Verma',
    status: 'In Progress',
    priority: 'Medium',
    instructions: 'Plot graph between focal length (1/u vs 1/v) with error calculations.'
  },
  {
    id: 'hw-03',
    subject: 'English',
    title: 'Critical Essay: Themes of Social Justice in Contemporary Literature',
    dueDate: '2026-03-03',
    assignedDate: '2026-02-26',
    teacher: 'Ms. Rebecca Collins',
    status: 'Submitted',
    priority: 'Normal',
    instructions: 'Submit 750 words double-spaced PDF or printed document.'
  },
  {
    id: 'hw-04',
    subject: 'Artificial Intelligence',
    title: 'Model Evaluation Metrics (Precision, Recall, F1 Score) Python Exercise',
    dueDate: '2026-03-08',
    assignedDate: '2026-03-02',
    teacher: 'Mr. Saurabh Mehta',
    status: 'Pending',
    priority: 'High',
    instructions: 'Upload Jupyter notebook (.ipynb) to portal classroom drive.'
  }
];

export const mockEnquiries = [
  {
    id: 'enq-01',
    name: 'Vikramaditya Singhania',
    email: 'vikram.singhania@example.com',
    phone: '+91 98112 34567',
    studentName: 'Aarav Singhania',
    grade: 'Grade 6',
    message: 'Seeking details regarding boarding facilities and robotics club opportunities for 2026-27.',
    date: '2026-03-01T10:15:00.000Z',
    status: 'Contacted'
  },
  {
    id: 'enq-02',
    name: 'Meenakshi Iyer',
    email: 'meenakshi.iyer@example.com',
    phone: '+91 97401 23456',
    studentName: 'Aditi Iyer',
    grade: 'Grade 11 - Science (PCM + AI)',
    message: 'Would like to schedule a campus interaction and understand IIT-JEE integrated coaching support.',
    date: '2026-03-02T14:30:00.000Z',
    status: 'New'
  }
];

