import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Sparkles, 
  LogIn, 
  ArrowRight,
  Users
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* SoftDeals Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center mb-6">
        <Link to="/" className="inline-flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-500/10">
            <GraduationCap className="w-7 h-7 text-cyan-400" />
          </div>
          <div className="text-left">
            <span className="font-serif font-black text-xl text-white block leading-none">
              ST. XAVIER'S
            </span>
            <span className="text-[10px] text-cyan-400 font-semibold uppercase tracking-widest">
              Student Information System (SIS)
            </span>
          </div>
        </Link>
        <h2 className="mt-4 text-2xl font-serif font-black text-white tracking-tight">
          Portal Sign In
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Access secure academic records, attendance logs, and exam gradebooks.
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4 sm:px-0">
        
        {/* Main Card - SoftDeals Dark Style */}
        <div className="bg-slate-900/80 backdrop-blur-xl py-8 px-6 sm:px-10 shadow-2xl rounded-3xl border border-slate-800/90">
          
          {/* Quick Demo Login Pill Bar */}
          <div className="mb-6 p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl">
            <div className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Instant Demo Access
              </span>
              <span className="text-[10px] text-slate-400 font-normal">Click to pre-fill</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs font-bold">
              <button
                type="button"
                onClick={fillDemoStudent}
                className="py-1.5 px-2 bg-slate-900 hover:bg-slate-850 hover:border-cyan-500/50 text-slate-200 rounded-xl border border-slate-700/80 shadow-sm transition-all text-center truncate"
              >
                👨‍🎓 Student
              </button>
              <button
                type="button"
                onClick={fillDemoParent}
                className="py-1.5 px-2 bg-slate-900 hover:bg-slate-850 hover:border-cyan-500/50 text-slate-200 rounded-xl border border-slate-700/80 shadow-sm transition-all text-center truncate"
              >
                👨‍👩‍👧 Parent
              </button>
              <button
                type="button"
                onClick={fillDemoAdmin}
                className="py-1.5 px-2 bg-slate-900 hover:bg-slate-850 hover:border-cyan-500/50 text-slate-200 rounded-xl border border-slate-700/80 shadow-sm transition-all text-center truncate"
              >
                🛡️ Admin
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-950/50 border border-red-500/30 rounded-xl text-xs text-red-300 font-medium">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            
            {/* Role Select */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Account Role
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['student', 'parent', 'admin'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`py-2 text-xs font-bold rounded-xl uppercase tracking-wider transition-all ${
                      role === r
                        ? 'bg-gradient-to-r from-brand-600 via-cyan-600 to-teal-500 text-white shadow-md shadow-cyan-950/50'
                        : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Email / Username */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Email Address / Student ID
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={role === 'student' ? 'student@school.edu' : role === 'parent' ? 'parent@school.edu' : 'admin@school.edu'}
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-950 border border-slate-800 text-white rounded-xl focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none placeholder-slate-600"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-10 py-2.5 text-sm bg-slate-950 border border-slate-800 text-white rounded-xl focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none placeholder-slate-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-1.5 text-slate-400 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-cyan-500 focus:ring-cyan-400" />
                <span>Remember this terminal</span>
              </label>
              <a href="#reset" onClick={(e) => { e.preventDefault(); alert("Please contact the IT Administrator at itdesk@stxavierschool.edu for password resets."); }} className="text-cyan-400 hover:underline font-semibold">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-brand-600 via-cyan-600 to-teal-500 hover:from-brand-500 hover:to-teal-400 text-white font-bold text-sm rounded-xl shadow-lg shadow-cyan-950/60 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
            >
              {loading ? (
                <span>Authenticating Credentials...</span>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <LogIn className="w-4 h-4 text-teal-200" />
                </>
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>256-Bit SSL Encrypted & Protected by SOFTDEALS Security</span>
          </div>

        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link to="/" className="text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors">
            ← Return to Main School Website
          </Link>
        </div>

      </div>
    </div>
  );
}

