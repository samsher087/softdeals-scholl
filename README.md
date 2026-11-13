# Umeed Global International School — Modern & Smart School Web Platform

**Designed & Developed by SOFTDEALS – Digital Solutions**

---

## 🏛️ Project Overview

**Umeed Global International School** is a modern, premium, professional, and fully responsive institutional web platform designed for prestigious educational institutions. It is crafted to build profound trust and confidence among prospective and current parents, students, educators, and board members.

The application adheres to modern UI/UX design standards: a pristine white background harmonized with deep navy blue, vibrant sky blue, and subtle golden accents, with high-definition educational imagery, interactive modals, dynamic bulletin tickers, a masonry-style media gallery, and a **Role-Based Student Information System (SIS)** with authentic report card generation.

---

## 🌟 Key Functional Highlights

### 1. Design & Institutional Branding
- **Color Palette:** Pure white canvas with deep navy blue (`#0a192f`, `#1e3a8a`), sky blue highlights (`#0ea5e9`, `#0284c7`), and golden amber accents (`#f59e0b`, `#d97706`).
- **Typography:** Plus Jakarta Sans & classic Cinzel serif for institutional prestige.
- **Micro-Interactions:** Smooth scrolling, animated ticker bar, floating interactive cards, and confetti celebrations upon admission enquiries.
- **Fully Responsive:** Pixel-perfect across desktop, laptop, tablet, and mobile displays.

### 2. Comprehensive Home Page
- **Top Announcement Bar:** Live ticker for notices and important admission dates.
- **Hero Section:** "Building Bright Futures Through Quality Education" with primary and secondary call-to-action triggers ("Explore Our School" & "Admission Enquiry").
- **Principal's Welcome Address:** Photograph, credentials, pedagogical vision, and institutional leadership note.
- **Key Statistics Counter:** 2,850+ Enrolled Students, 120+ Qualified Educators, 28+ Years of Excellence, 100% Board Pass Rate.
- **Why Choose Our School:** 6 feature cards showcasing STEAM labs, GPS transport, 1:15 ratio, and holistic curriculum.
- **Infrastructure Showcase:** Smart classrooms, robotics studio, central library, and Olympic-size sports arena.
- **Live Notices & School Events:** Interactive notice categorization and downloadable circular PDFs.
- **Parent Testimonials:** Verified reviews with 5-star ratings.
- **Photo Gallery Snapshot:** Direct link to full HD lightbox media gallery.

### 3. About Us (`/about`)
- 28-year history and founding milestone timeline (1998 to 2026).
- Clear Vision and Mission statements.
- 6 Core Institutional Values (Integrity, Excellence, Empathy, Innovation, Resilience, Global Citizenship).
- Messages from the Chairman and Principal with portraits.
- Educational philosophy anchored in Bloom's Taxonomy, Inquiry-Based Learning, and NEP 2020.

### 4. Academics & School Information (`/academics`)
- Academic structure across all 5 wings:
  - Pre-Primary (Pre-Nursery, Nursery, KG)
  - Primary School (Grades 1 to 5)
  - Middle School (Grades 6 to 8)
  - Secondary School (Grades 9 & 10)
  - Senior Secondary School (Grades 11 & 12: Science, Commerce, Humanities)
- Bell schedule & timings comparison (Summer vs. Winter).
- Interactive Academic Calendar & Gazetted Holiday List with downloadable PDF option.
- Code of conduct, 75% attendance policy, anti-bullying pledge, and uniform guides.
- Faculty and department directory with qualification filters.

### 5. Admissions & Fees (`/admissions`)
- 4-Stage admission roadmap (Enquiry → Tour → Interaction → Enrollment).
- Official age eligibility criteria matrix.
- Transparent fee structure breakdown (tuition, annual charges, security deposit).
- Merit scholarships (up to 50% waiver), sibling discount, and sports endowments.
- Safe AC bus transportation details with real-time GPS fleet tracking.

### 6. Interactive Photo & Video Gallery (`/gallery`)
- 9 Filterable Categories: School Campus, Classrooms, Annual Function, Sports Activities, Cultural Programs, Science Exhibition, Educational Tours, Student Activities, Video Gallery.
- Masonry image grid with hover previews.
- Fullscreen Lightbox preview with Next/Previous arrows, keyboard navigation (`ArrowLeft`, `ArrowRight`, `Esc`), and image counters.
- Video gallery embed support.

### 7. Student Information System (SIS) / Parent Portal (`/portal`)
- Role-based authentication (Student, Parent, Admin/Staff) using JSON Web Tokens (JWT).
- **1-Click Demo Logins:** Instant evaluation access for reviewers with pre-filled test accounts:
  - 👨‍🎓 **Student:** `student@school.edu` / `student123`
  - 👨‍👩‍👧 **Parent:** `parent@school.edu` / `parent123`
  - 🛡️ **Admin / Staff:** `admin@school.edu` / `admin123`
- **Student Profile Overview:** Scholar ID, photo, grade/section, blood group, emergency contacts, bus route.
- **Attendance Records:** Term percentage (94.6%), monthly breakdown, and subject-wise progress bars.
- **Examination Results:** Summative term scores, letter grades (A1/A2), co-scholastic grading, and rank.
- **Official Downloadable / Printable Report Card:** Official institutional report card format with school crest, grading criteria, and dedicated `window.print()` layout.
- **Homework & Daily Assignments:** Task tracking with status toggle ("Pending" / "Submitted"), priority flags, and deadlines.
- **Parent-Teacher Communication:** Remarks feed and PTM slot booking simulator.
- **Fee Payment Receipts:** Downloadable payment acknowledgments.
- **Admin Desk:** Live enquiry inbox and notice publisher.

### 8. Contact Us (`/contact`)
- School address, telephone helplines, official emails, and office working hours.
- Interactive Google Maps embed.
- Working contact enquiry form with instant feedback and confetti celebration.
- Direct floating and in-page WhatsApp button (`wa.me`) with pre-filled enquiry message.

---

## 🛠️ Technology Stack

- **Frontend:** React 18, Vite 8, Tailwind CSS v3, React Router v7, Lucide React, Framer Motion, Canvas Confetti.
- **Backend API:** Node.js, Express.js, CORS, JSON Web Tokens (`jsonwebtoken`), `bcryptjs`.
- **Database Architecture:** MongoDB ready via `mongoose`, with built-in high-fidelity in-memory/JSON store fallback for zero-configuration testing.
- **Developer Attribution:** SOFTDEALS – Digital Solutions.

---

## 🚀 Running the Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Client & Backend Simultaneously
```bash
npm run dev
```
- **Frontend URL:** `http://localhost:5173`
- **Backend API:** `http://localhost:5000`

### 3. Build for Production
```bash
npm run build
```

---

## 🔐 Demo Credentials

| Role | Username / Email | Password |
|---|---|---|
| **Student** | `student@school.edu` | `student123` |
| **Parent** | `parent@school.edu` | `parent123` |
| **Admin / Coordinator** | `admin@school.edu` | `admin123` |

*(You can also simply click the "Instant Demo Access" buttons on the portal sign-in page!)*

---

*Presented by SOFTDEALS – Digital Solutions.*
