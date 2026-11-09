import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AdmissionModal from './components/common/AdmissionModal';
import WhatsAppButton from './components/common/WhatsAppButton';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Login from './pages/portal/Login';
import Dashboard from './pages/portal/Dashboard';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function MainLayout({ onOpenAdmissionModal, children }) {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/portal/dashboard');
  const isLogin = location.pathname === '/portal/login';

  return (
    <div className="flex flex-col min-h-screen relative bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Whole Website Background Theme - SoftDeals Dark Tech Atmosphere */}
      <div className="site-bg-backdrop" aria-hidden="true"></div>
      <div className="site-bg-tint" aria-hidden="true"></div>
      
      {/* SoftDeals Ambient Glow Orbs */}
      <div className="fixed top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-brand-600/15 via-cyan-500/10 to-teal-400/10 rounded-full blur-3xl pointer-events-none -z-1" aria-hidden="true"></div>
      <div className="fixed bottom-1/4 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-blue-600/15 via-cyan-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none -z-1" aria-hidden="true"></div>

      {!isDashboard && !isLogin && (
        <Navbar onOpenAdmissionModal={onOpenAdmissionModal} />
      )}
      
      <main className="flex-1 relative z-10">
        {children}
      </main>

      {!isDashboard && !isLogin && (
        <Footer />
      )}

      {/* Floating WhatsApp Action Button */}
      {!isDashboard && <WhatsAppButton />}
    </div>
  );
}

export default function App() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <MainLayout onOpenAdmissionModal={() => setAdmissionModalOpen(true)}>
          <Routes>
            <Route path="/" element={<Home onOpenAdmissionModal={() => setAdmissionModalOpen(true)} />} />
            <Route path="/about" element={<AboutUs onOpenAdmissionModal={() => setAdmissionModalOpen(true)} />} />
            <Route path="/academics" element={<Academics onOpenAdmissionModal={() => setAdmissionModalOpen(true)} />} />
            <Route path="/admissions" element={<Admissions onOpenAdmissionModal={() => setAdmissionModalOpen(true)} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/portal/login" element={<Login />} />
            <Route path="/portal/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Home onOpenAdmissionModal={() => setAdmissionModalOpen(true)} />} />
          </Routes>
        </MainLayout>

        {/* Global Admission Modal */}
        <AdmissionModal
          isOpen={admissionModalOpen}
          onClose={() => setAdmissionModalOpen(false)}
        />
      </Router>
    </AuthProvider>
  );
}
