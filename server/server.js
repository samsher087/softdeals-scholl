import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {
  initialNotices,
  initialEvents,
  initialGallery,
  mockStudentUser,
  mockParentUser,
  mockAdminUser,
  mockAttendanceRecords,
  mockExamResults,
  mockHomework,
  mockEnquiries
} from './data/defaultData.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'softdeals_school_secret_jwt_2026';

// Middleware
app.use(cors());
app.use(express.json());

// In-Memory / Resilient Datastore
let notices = [...initialNotices];
let events = [...initialEvents];
let gallery = [...initialGallery];
let enquiries = [...mockEnquiries];

// Attempt MongoDB connection if configured in environment
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB cluster successfully'))
    .catch((err) => console.warn('⚠️ MongoDB connection warning (Falling back to in-memory store):', err.message));
} else {
  console.log('ℹ️ Running backend with high-fidelity store (Set MONGODB_URI to connect to MongoDB Atlas/local)');
}

// Auth Helper Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Authentication required. Access token missing.' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid or expired session token.' });
    }
    req.user = decoded;
    next();
  });
};

// ================= ROUTES ================= //

// Health & Info
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    institution: "Umeed Global International School",
    developer: 'SOFTDEALS – Digital Solutions',
    timestamp: new Date().toISOString()
  });
});

// Auth Route
app.post('/api/auth/login', (req, res) => {
  const { email, password, role } = req.body;

  let matchedUser = null;

  // Check demo credentials
  if (email === 'student@school.edu' || email === 'student' || email === 'aryan.sharma') {
    if (password === 'student123' || password === 'demo') {
      matchedUser = mockStudentUser;
    }
  } else if (email === 'parent@school.edu' || email === 'parent' || email === 'rajesh.sharma') {
    if (password === 'parent123' || password === 'demo') {
      matchedUser = mockParentUser;
    }
  } else if (email === 'admin@school.edu' || email === 'admin') {
    if (password === 'admin123' || password === 'demo') {
      matchedUser = mockAdminUser;
    }
  } else if (role === 'student') {
    matchedUser = mockStudentUser;
  } else if (role === 'parent') {
    matchedUser = mockParentUser;
  }

  if (!matchedUser) {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials. Please use demo accounts (e.g. student@school.edu / student123 or parent@school.edu / parent123).'
    });
  }

  const token = jwt.sign(
    {
      id: matchedUser.id,
      role: matchedUser.role,
      name: matchedUser.name,
      email: matchedUser.email
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.json({
    success: true,
    message: `Welcome back, ${matchedUser.name}!`,
    token,
    user: matchedUser
  });
});

app.get('/api/auth/me', authenticateToken, (req, res) => {
  if (req.user.role === 'student') {
    res.json({ success: true, user: mockStudentUser });
  } else if (req.user.role === 'parent') {
    res.json({ success: true, user: mockParentUser });
  } else {
    res.json({ success: true, user: mockAdminUser });
  }
});

// Notices API
app.get('/api/notices', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    const filtered = notices.filter(n => n.category.toLowerCase() === category.toLowerCase());
    return res.json({ success: true, count: filtered.length, data: filtered });
  }
  res.json({ success: true, count: notices.length, data: notices });
});

app.post('/api/notices', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Only administrative staff can publish notices.' });
  }
  const { title, category, summary, urgent } = req.body;
  if (!title || !category || !summary) {
    return res.status(400).json({ success: false, message: 'Please provide all notice fields.' });
  }
  const newNotice = {
    id: `not-${Date.now()}`,
    title,
    category,
    date: new Date().toISOString().split('T')[0],
    urgent: !!urgent,
    summary,
    fileUrl: '#official-notice',
    author: req.user.name
  };
  notices.unshift(newNotice);
  res.status(201).json({ success: true, message: 'Notice published successfully.', data: newNotice });
});

// Events API
app.get('/api/events', (req, res) => {
  res.json({ success: true, count: events.length, data: events });
});

// Gallery API
app.get('/api/gallery', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    const filtered = gallery.filter(item => item.category.toLowerCase() === category.toLowerCase());
    return res.json({ success: true, count: filtered.length, data: filtered });
  }
  res.json({ success: true, count: gallery.length, data: gallery });
});

// Enquiries API
app.post('/api/enquiries', (req, res) => {
  const { name, phone, email, studentName, grade, message, type } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide your name, phone number, and enquiry message.'
    });
  }

  const newEnquiry = {
    id: `enq-${Date.now()}`,
    name,
    phone,
    email: email || 'Not provided',
    studentName: studentName || 'Prospective Student',
    grade: grade || 'General Enquiry',
    message,
    type: type || 'General Contact',
    date: new Date().toISOString(),
    status: 'New'
  };

  enquiries.unshift(newEnquiry);

  res.status(201).json({
    success: true,
    message: 'Thank you! Your enquiry has been received. Our Admissions Desk will contact you within 24 hours.',
    data: newEnquiry
  });
});

app.get('/api/enquiries', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Administrative privilege required.' });
  }
  res.json({ success: true, count: enquiries.length, data: enquiries });
});

// Student Information System (Protected APIs)
app.get('/api/students/profile', authenticateToken, (req, res) => {
  res.json({ success: true, data: mockStudentUser });
});

app.get('/api/students/attendance', authenticateToken, (req, res) => {
  res.json({ success: true, data: mockAttendanceRecords });
});

app.get('/api/students/results', authenticateToken, (req, res) => {
  res.json({ success: true, data: mockExamResults });
});

app.get('/api/students/homework', authenticateToken, (req, res) => {
  res.json({ success: true, data: mockHomework });
});

// Server listener
app.listen(PORT, () => {
  console.log(`🚀 SOFTDEALS School API Server running at http://localhost:${PORT}`);
});

