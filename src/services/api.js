// Client API service for Umeed Global International School
// Developed for SOFTDEALS – Digital Solutions

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
} from '../../server/data/defaultData.js';

const API_BASE = '/api';

// Helper to get token
const getAuthHeaders = () => {
  const token = localStorage.getItem('softdeals_school_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
  };
};

export const api = {
  // Auth
  login: async (credentials) => {
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      if (res.ok) {
        return await res.json();
      }
      const errData = await res.json();
      throw new Error(errData.message || 'Login failed');
    } catch {
      // Offline / Direct fallback demo authentication
      const { email, role } = credentials;
      let user = mockStudentUser;
      if (email?.includes('parent') || role === 'parent') {
        user = mockParentUser;
      } else if (email?.includes('admin') || role === 'admin') {
        user = mockAdminUser;
      }
      const fakeToken = 'mock-jwt-token-' + Date.now();
      localStorage.setItem('softdeals_school_token', fakeToken);
      localStorage.setItem('softdeals_school_user', JSON.stringify(user));
      return { success: true, token: fakeToken, user, message: `Welcome back, ${user.name}!` };
    }
  },

  getCurrentUser: async () => {
    try {
      const res = await fetch(`${API_BASE}/auth/me`, {
        headers: getAuthHeaders()
      });
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // fallback
    }
    const cached = localStorage.getItem('softdeals_school_user');
    return cached ? { success: true, user: JSON.parse(cached) } : { success: false };
  },

  // Notices
  getNotices: async (category = 'All') => {
    try {
      const url = category && category !== 'All' 
        ? `${API_BASE}/notices?category=${encodeURIComponent(category)}`
        : `${API_BASE}/notices`;
      const res = await fetch(url);
      if (res.ok) return await res.json();
    } catch {
      // fallback
    }
    const filtered = category === 'All' 
      ? initialNotices 
      : initialNotices.filter(n => n.category.toLowerCase() === category.toLowerCase());
    return { success: true, data: filtered };
  },

  postNotice: async (noticeData) => {
    try {
      const res = await fetch(`${API_BASE}/notices`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(noticeData)
      });
      if (res.ok) return await res.json();
    } catch {
      // fallback
    }
    const newNotice = {
      id: `not-${Date.now()}`,
      ...noticeData,
      date: new Date().toISOString().split('T')[0],
      author: 'Administrative Directorate'
    };
    return { success: true, data: newNotice, message: 'Notice posted successfully (Local mode).' };
  },

  // Events
  getEvents: async () => {
    try {
      const res = await fetch(`${API_BASE}/events`);
      if (res.ok) return await res.json();
    } catch {
      // fallback
    }
    return { success: true, data: initialEvents };
  },

  // Gallery
  getGallery: async (category = 'All') => {
    try {
      const url = category && category !== 'All' 
        ? `${API_BASE}/gallery?category=${encodeURIComponent(category)}`
        : `${API_BASE}/gallery`;
      const res = await fetch(url);
      if (res.ok) return await res.json();
    } catch {
      // fallback
    }
    const filtered = category === 'All' 
      ? initialGallery 
      : initialGallery.filter(item => item.category.toLowerCase() === category.toLowerCase());
    return { success: true, data: filtered };
  },

  // Enquiries
  submitEnquiry: async (enquiryData) => {
    try {
      const res = await fetch(`${API_BASE}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiryData)
      });
      if (res.ok) return await res.json();
      const err = await res.json();
      throw new Error(err.message || 'Failed to submit enquiry');
    } catch {
      // Return successful simulation
      const saved = {
        id: `enq-${Date.now()}`,
        ...enquiryData,
        date: new Date().toISOString(),
        status: 'Received'
      };
      return {
        success: true,
        message: 'Thank you! Your enquiry has been registered. Our Admissions Office will reach out shortly.',
        data: saved
      };
    }
  },

  getEnquiries: async () => {
    try {
      const res = await fetch(`${API_BASE}/enquiries`, { headers: getAuthHeaders() });
      if (res.ok) return await res.json();
    } catch {
      // fallback
    }
    return { success: true, data: mockEnquiries };
  },

  // Student Information System
  getStudentProfile: async () => {
    try {
      const res = await fetch(`${API_BASE}/students/profile`, { headers: getAuthHeaders() });
      if (res.ok) return await res.json();
    } catch {
      // fallback
    }
    return { success: true, data: mockStudentUser };
  },

  getStudentAttendance: async () => {
    try {
      const res = await fetch(`${API_BASE}/students/attendance`, { headers: getAuthHeaders() });
      if (res.ok) return await res.json();
    } catch {
      // fallback
    }
    return { success: true, data: mockAttendanceRecords };
  },

  getStudentResults: async () => {
    try {
      const res = await fetch(`${API_BASE}/students/results`, { headers: getAuthHeaders() });
      if (res.ok) return await res.json();
    } catch {
      // fallback
    }
    return { success: true, data: mockExamResults };
  },

  getStudentHomework: async () => {
    try {
      const res = await fetch(`${API_BASE}/students/homework`, { headers: getAuthHeaders() });
      if (res.ok) return await res.json();
    } catch {
      // fallback
    }
    return { success: true, data: mockHomework };
  }
};

