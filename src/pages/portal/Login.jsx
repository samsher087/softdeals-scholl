import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Sparkles, 
  Clock,
  Check,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Digital clock matching the theme indicator (e.g. 04:44)
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await login({ email, password, role });
    setLoading(false);

    if (res.success) {
      navigate('/portal/dashboard');
    } else {
      setError(res.message || 'Invalid credentials. Please select a demo account below.');
    }
  };

  // Quick 1-click Demo Fillers
  const fillDemoStudent = () => {
    setEmail('student@school.edu');
    setPassword('student123');
    setRole('student');
    setError('');
  };

  const fillDemoParent = () => {
    setEmail('parent@school.edu');
    setPassword('parent123');
    setRole('parent');
    setError('');
  };

  const fillDemoAdmin = () => {
    setEmail('admin@school.edu');
    setPassword('admin123');
    setRole('admin');
    setError('');
  };

  return (
    <div className="min-h-screen bg-[#080414] text-slate-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      
      {/* Mystical Neon Purple & Magenta Ambient Glows (Reference Theme) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-purple-700/25 via-fuchsia-600/20 to-pink-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-purple-900/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-fuchsia-950/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Futuristic Glowing Neon Orbital Arcs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-purple-500/15 pointer-events-none shadow-[0_0_80px_rgba(168,85,247,0.12)] animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[520px] rounded-full border border-fuchsia-500/10 pointer-events-none -rotate-12" />

      {/* Brand Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center mb-5">
        <Link to="/" className="inline-flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-[#190f38] border border-purple-500/40 flex items-center justify-center shadow-lg shadow-purple-950/60 group-hover:scale-105 transition-all">
            <GraduationCap className="w-6 h-6 text-purple-300" />
          </div>
          <div className="text-left">
            <span className="font-serif font-black text-xl text-white block leading-none tracking-tight">
              UMEED GLOBAL
            </span>
            <span className="text-[10px] text-fuchsia-400 font-semibold uppercase tracking-widest">
              Student Information System
            </span>
          </div>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-[440px] relative z-10 px-4 sm:px-0">
        
        {/* Main Card - Deep Violet Glassmorphism with Smooth 32px Corners */}
        <div className="relative bg-[#130b2e]/92 backdrop-blur-2xl py-8 px-6 sm:px-9 rounded-[32px] border border-[#442c75]/80 shadow-[0_20px_70px_-15px_rgba(76,29,149,0.5)]">
          
          {/* Subtle Top Inner Edge Highlight */}
          <div className="absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

          {/* Top Clock Indicator (Exact Reference Style: 🕒 04:44) */}
          <div className="flex items-center justify-center gap-2 text-[#a78bfa] font-medium text-sm sm:text-base mb-3 tracking-wider">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#a78bfa] stroke-[2.2]" />
            <span className="font-mono font-semibold">{currentTime}</span>
          </div>

          {/* Header & Privacy Notice */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              Privacy Reminder
            </h2>
            <p className="text-xs sm:text-[13px] text-[#d4c6f3] leading-relaxed max-w-xs mx-auto mb-2.5">
              This portal accesses authenticated student records. Please keep all matching credentials confidential.
            </p>
            <p className="text-[11px] sm:text-xs text-[#9d8ac7]">
              Before continuing, please select your account role:
            </p>
          </div>

          {/* Role Badges (Pills styled directly after the reference image pills) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-5">
            {[
              { id: 'student', label: 'Respect privacy', sub: 'Student' },
              { id: 'parent', label: 'No screenshots', sub: 'Parent' },
              { id: 'admin', label: 'Keep confidential', sub: 'Admin' }
            ].map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRole(r.id)}
                className={`py-2.5 px-2 rounded-2xl text-center border transition-all duration-200 flex flex-col items-center justify-center ${
                  role === r.id
                    ? 'bg-[#291754] border-fuchsia-400 text-white shadow-[0_0_20px_rgba(217,70,239,0.35)] scale-[1.02]'
                    : 'bg-[#180e38]/70 border-[#3d2668] text-[#b6a4db] hover:border-purple-400/60 hover:text-white'
                }`}
              >
                <span className="text-[11px] font-semibold leading-tight block">
                  {r.label}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-purple-300/70 font-mono mt-0.5">
                  ({r.sub})
                </span>
              </button>
            ))}
          </div>

          {/* Quick Demo Pre-fill Pill Bar */}
          <div className="mb-5 p-2.5 bg-[#170e36]/90 border border-[#3c2569] rounded-2xl flex items-center justify-between text-[11px]">
            <span className="text-[#a78bfa] font-medium flex items-center gap-1.5 pl-1">
              <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> Demo Quick Fill:
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={fillDemoStudent}
                className="px-2.5 py-1 rounded-xl bg-[#24144e] hover:bg-[#341d6e] text-[#d4c6f3] border border-[#482f7d] text-[10px] font-semibold transition-colors"
              >
                Student
              </button>
              <button
                type="button"
                onClick={fillDemoParent}
                className="px-2.5 py-1 rounded-xl bg-[#24144e] hover:bg-[#341d6e] text-[#d4c6f3] border border-[#482f7d] text-[10px] font-semibold transition-colors"
              >
                Parent
              </button>
              <button
                type="button"
                onClick={fillDemoAdmin}
                className="px-2.5 py-1 rounded-xl bg-[#24144e] hover:bg-[#341d6e] text-[#d4c6f3] border border-[#482f7d] text-[10px] font-semibold transition-colors"
              >
                Admin
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-950/60 border border-red-500/40 rounded-2xl text-xs text-red-300 font-medium text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            
            {/* Email / Username */}
            <div>
              <label className="block text-[11px] font-semibold text-[#b8a7db] uppercase tracking-wider mb-1.5 pl-1">
                Email Address / User ID
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#8b76b8] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={role === 'student' ? 'student@school.edu' : role === 'parent' ? 'parent@school.edu' : 'admin@school.edu'}
                  className="w-full pl-10 pr-3 py-3 text-sm bg-[#0d0722]/90 border border-[#3a2466] text-white rounded-2xl focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/25 outline-none placeholder-[#746098] transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[11px] font-semibold text-[#b8a7db] uppercase tracking-wider mb-1.5 pl-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#8b76b8] absolute left-3.5 top-3.5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 text-sm bg-[#0d0722]/90 border border-[#3a2466] text-white rounded-2xl focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/25 outline-none placeholder-[#746098] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-[#8b76b8] hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot options */}
            <div className="flex items-center justify-between text-xs pt-0.5 px-1">
              <label className="flex items-center gap-2 text-[#9f8dc9] cursor-pointer hover:text-[#d4c6f3] transition-colors">
                <input 
                  type="checkbox" 
                  defaultChecked 
                  className="rounded bg-[#0d0722] border-[#3a2466] text-fuchsia-500 focus:ring-fuchsia-400" 
                />
                <span>Remember session</span>
              </label>
              <a 
                href="#reset" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  alert("Please contact the IT Helpdesk at itdesk@umeedglobal.edu for password resets."); 
                }} 
                className="text-[#c084fc] hover:text-[#e879f9] transition-colors font-medium"
              >
                Forgot password?
              </a>
            </div>

            {/* Vibrant Gradient Submit Button (Directly inspired by "I agree" button) */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-5 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold text-base rounded-2xl shadow-[0_10px_30px_rgba(168,85,247,0.4)] hover:shadow-[0_12px_35px_rgba(217,70,239,0.55)] transition-all flex items-center justify-center gap-2.5 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span>Authenticating Credentials...</span>
              ) : (
                <>
                  <span className="w-6 h-6 rounded-full border-2 border-white/90 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3] text-white" />
                  </span>
                  <span>I agree & Sign In</span>
                </>
              )}
            </button>
          </form>

          {/* Bottom Security Tags */}
          <div className="mt-6 pt-4 border-t border-[#341e5b] grid grid-cols-3 gap-2 text-[10px] text-[#9f8dc9] text-center font-medium">
            <div className="py-1 px-1 bg-[#170e36]/60 border border-[#392363] rounded-xl truncate">
              🔒 256-Bit SSL
            </div>
            <div className="py-1 px-1 bg-[#170e36]/60 border border-[#392363] rounded-xl truncate">
              🛡️ Encrypted Auth
            </div>
            <div className="py-1 px-1 bg-[#170e36]/60 border border-[#392363] rounded-xl truncate">
              ✨ SoftDeals SIS
            </div>
          </div>

          {/* Modern App Bottom Home Bar Indicator (Exact from reference) */}
          <div className="w-28 h-1 bg-white/25 rounded-full mx-auto mt-6" />

        </div>

        {/* Return to Main Website Link */}
        <div className="text-center mt-6">
          <Link to="/" className="text-xs font-semibold text-[#9f8dc9] hover:text-[#d4c6f3] transition-colors">
            ← Return to Main School Website
          </Link>
        </div>

      </div>
    </div>
  );
}
