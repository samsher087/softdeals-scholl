import React from 'react';
import { 
  Award, 
  Target, 
  Eye, 
  Heart, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  Trophy, 
  Compass, 
  Lightbulb, 
  Globe2,
  Clock,
  Check
} from 'lucide-react';

export default function AboutUs({ onOpenAdmissionModal }) {
  const coreValues = [
    {
      title: 'Integrity & Ethics',
      desc: 'Cultivating honesty, moral responsibility, and accountability in every sphere of life.',
      icon: ShieldCheck,
      color: 'bg-blue-50 text-skyAccent-600'
    },
    {
      title: 'Academic Excellence',
      desc: 'Pursuing relentless mastery in academic concepts, critical analysis, and intellectual rigor.',
      icon: GraduationCap,
      color: 'bg-amber-50 text-gold-600'
    },
    {
      title: 'Empathy & Inclusivity',
      desc: 'Fostering deep mutual respect, compassion for community, and an inclusive global perspective.',
      icon: Heart,
      color: 'bg-rose-50 text-rose-600'
    },
    {
      title: 'Innovation & Inquiry',
      desc: 'Encouraging bold questions, scientific experimentation, and creative technological solutions.',
      icon: Lightbulb,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Resilience & Grit',
      desc: 'Equipping learners with the mental fortitude to overcome challenges with grace and determination.',
      icon: Target,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Global Citizenship',
      desc: 'Instilling environmental stewardship and awareness of planetary sustainable development.',
      icon: Globe2,
      color: 'bg-teal-50 text-teal-600'
    }
  ];

  const milestones = [
    { year: '1998', title: 'Foundation Stone Laid', desc: 'Inaugurated with 150 students and a vision to redefine value-based schooling in New Delhi NCR.' },
    { year: '2005', title: 'CBSE Senior Secondary Affiliation', desc: 'Achieved complete 10+2 affiliation with distinction in Science and Commerce streams.' },
    { year: '2012', title: 'International Dimension & Sports Complex', desc: 'Opened the Olympic-standard heated swimming arena and launched foreign language programs.' },
    { year: '2019', title: 'Robotics & AI Innovation Hub', desc: 'Recognized as Top STEM School of North India by the National Education Council.' },
    { year: '2024', title: 'Silver Jubilee & Eco-Green Campus', desc: 'Achieved 100% solar powered campus infrastructure and ranked #1 Day-Cum-Boarding Institution.' }
  ];

  return (
    <div className="w-full min-h-screen text-slate-100">
      
      {/* Hero Header - SoftDeals Dark Style */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80"
            alt="School Heritage Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-fuchsia-300 bg-purple-950/80 px-3.5 py-1 rounded-full border border-purple-500/30 mb-3 shadow-md">
            Legacy of 28 Years
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            About Umeed Global International School
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Where tradition meets modern innovation. Dedicated to shaping empathetic thinkers, visionary innovators, and principled global citizens.
          </p>
        </div>
      </section>

      {/* School Introduction & Heritage */}
      <section className="py-16 sm:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-fuchsia-300 uppercase tracking-widest bg-purple-950/80 border border-purple-500/30 px-3 py-1 rounded-full shadow-md">
                Our Heritage & Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                Twenty-Eight Years of Nurturing Tomorrow’s Global Leaders
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Established in 1998 under the aegis of the Umeed Educational Trust, Umeed Global International School has grown from a humble beginning into one of India’s premier CBSE-affiliated co-educational day-cum-boarding institutions.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Spread across 25 verdant acres, the school provides an idyllic learning environment where cutting-edge technology and ancient values coexist. We believe that true education does not merely train students to earn a living; it teaches them how to live meaningful, purposeful lives with honor and empathy.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="theme-box p-4 sm:p-5">
                  <div className="text-2xl sm:text-3xl font-black font-serif text-white">2,850+</div>
                  <div className="text-xs text-[#a99ac7] font-medium mt-0.5">Students Enrolled</div>
                </div>
                <div className="theme-box p-4 sm:p-5">
                  <div className="text-2xl sm:text-3xl font-black font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899]">100%</div>
                  <div className="text-xs text-[#a99ac7] font-medium mt-0.5">CBSE Distinction Rate</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative theme-box p-0 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
                  alt="School Campus Front Facade"
                  className="w-full h-96 sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080414] via-transparent to-transparent flex items-end p-6 text-white">
                  <div>
                    <div className="font-serif font-bold text-lg text-white">Main Heritage Academic Block</div>
                    <div className="text-xs text-fuchsia-300">Modern Architecture • Eco-Friendly Campus</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="theme-box p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#a78bfa] tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-[#a78bfa]" />
                    <span>Institutional Vision • Directive</span>
                  </span>
                  <span className="text-[10px] uppercase font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#1b103e] border border-[#3e276b] text-fuchsia-300">
                    Charter 2026
                  </span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-[#190f38] text-purple-300 flex items-center justify-center mb-5 border border-purple-500/40 shadow-lg shadow-purple-950/60">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest block mb-1">Our Vision</span>
                <h3 className="text-2xl font-serif font-black text-white mb-3">
                  Inspiring Intellect, Elevating Character
                </h3>
                <p className="text-[#d4c6f3] text-xs sm:text-sm leading-relaxed mb-6">
                  To be a benchmark international center of learning that fosters intellectual curiosity, ethical leadership, scientific temperament, and emotional resilience—empowering every student to leave an indelible, positive footprint on the world.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="theme-pill">Curiosity Nurturing</span>
                  <span className="theme-pill">Ethical Leadership</span>
                  <span className="theme-pill">Global Footprint</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenAdmissionModal}
                  className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold text-xs shadow-[0_8px_20px_rgba(168,85,247,0.35)] flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
                >
                  <span className="w-4 h-4 rounded-full border border-white/90 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3] text-white" />
                  </span>
                  <span>Explore Academic Programs</span>
                </button>
                <div className="w-20 h-1 bg-white/20 rounded-full mx-auto mt-5" />
              </div>
            </div>

            {/* Mission */}
            <div className="theme-box p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#a78bfa] tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-[#a78bfa]" />
                    <span>Holistic Mission • Pedagogy</span>
                  </span>
                  <span className="text-[10px] uppercase font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#1b103e] border border-[#3e276b] text-fuchsia-300">
                    Empowerment
                  </span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-[#190f38] text-fuchsia-400 flex items-center justify-center mb-5 border border-purple-500/40 shadow-lg shadow-purple-950/60">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest block mb-1">Our Mission</span>
                <h3 className="text-2xl font-serif font-black text-white mb-3">
                  Empowering Holistic Excellence
                </h3>
                <p className="text-[#d4c6f3] text-xs sm:text-sm leading-relaxed mb-6">
                  To deliver a child-centric, research-informed curriculum that nurtures creative potential, critical discernment, physical fitness, and technological fluency, while instilling timeless moral convictions and universal human empathy.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="theme-pill">Research-Informed</span>
                  <span className="theme-pill">Critical Discernment</span>
                  <span className="theme-pill">Human Empathy</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenAdmissionModal}
                  className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold text-xs shadow-[0_8px_20px_rgba(168,85,247,0.35)] flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
                >
                  <span className="w-4 h-4 rounded-full border border-white/90 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3] text-white" />
                  </span>
                  <span>Connect With Admissions</span>
                </button>
                <div className="w-20 h-1 bg-white/20 rounded-full mx-auto mt-5" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Messages: Chairman & Principal */}
      <section className="py-16 sm:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-fuchsia-300 uppercase tracking-widest bg-purple-950/80 border border-purple-500/30 px-3 py-1 rounded-full shadow-md">
              School Leadership
            </span>
            <h2 className="text-3xl font-serif font-black text-white mt-2">
              Messages from the Directorate
            </h2>
          </div>

          {/* Chairman's Message */}
          <div className="theme-box p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl border border-[#442c75]/80 max-w-[280px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Chairman Shri Arvind Singhal"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="mt-4">
                <h4 className="font-serif font-bold text-lg text-white">Shri Arvind Singhal</h4>
                <div className="text-xs text-fuchsia-400 font-semibold">Chairman & Managing Trustee</div>
                <div className="text-[11px] text-[#a99ac7]">M.Tech (IIT Delhi), Philanthropist & Educationist</div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="theme-pill">Chairman's Address</span>
              </div>
              <h3 className="text-2xl font-serif font-black text-white">
                "Education is the ignite switch for human potential."
              </h3>
              <p className="text-[#d4c6f3] text-sm leading-relaxed">
                When we planted the seeds of Umeed Global International School nearly three decades ago, our vision was unambiguous: to create an institution that neither compromises on scholastic superiority nor dilutes human character.
              </p>
              <p className="text-[#a99ac7] text-sm leading-relaxed">
                Today, as artificial intelligence and automation reshape our global society, the greatest gift we can bestow upon our children is the capacity to think critically, adapt fluidly, and remain deeply grounded in moral integrity. I welcome you to join our family.
              </p>
            </div>
          </div>

          {/* Principal's Message */}
          <div className="theme-box p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-8 space-y-4 order-2 lg:order-1">
              <div className="flex items-center gap-2">
                <span className="theme-pill">Principal's Address</span>
              </div>
              <h3 className="text-2xl font-serif font-black text-white">
                "Every child is an ocean of undiscovered brilliance."
              </h3>
              <p className="text-[#d4c6f3] text-sm leading-relaxed">
                At Umeed Global, we believe that education is an art of discovery rather than an exercise in rote compliance. Our classrooms are vibrant incubation centers where learners are encouraged to formulate hypotheses, experiment fearlessly, and embrace mistakes as valuable stepping stones.
              </p>
              <p className="text-[#a99ac7] text-sm leading-relaxed">
                Our faculty members act as facilitators, mentors, and guides. We pride ourselves on creating an emotionally safe, intellectually invigorating atmosphere where every student feels seen, heard, and valued.
              </p>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right order-1 lg:order-2">
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl border border-[#442c75]/80 max-w-[280px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                  alt="Principal Dr. Eleanor Vance"
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <div className="mt-4">
                <h4 className="font-serif font-bold text-lg text-white">Dr. Eleanor Vance</h4>
                <div className="text-xs text-fuchsia-400 font-semibold">Principal & Head of School</div>
                <div className="text-[11px] text-[#a99ac7]">M.Sc., M.Ed., Ph.D., National Pedagogical Fellow</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 sm:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-fuchsia-300 uppercase tracking-widest bg-purple-950/80 border border-purple-500/30 px-3 py-1 rounded-full shadow-md">
              Our Compass
            </span>
            <h2 className="text-3xl font-serif font-black text-white mt-2 mb-3">
              The Core Values That Guide Us
            </h2>
            <p className="text-slate-400 text-sm">
              These six pillars form the foundational DNA of our institution, guiding students, faculty, and leadership alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="theme-box p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-[#190f38] border border-purple-500/40 text-purple-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-[#d4c6f3] text-xs sm:text-sm leading-relaxed mb-4">
                      {val.desc}
                    </p>
                  </div>
                  <div>
                    <span className="theme-pill text-[10px]">Umeed Global Core Value</span>
                    <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mt-4" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Educational Philosophy & Teaching Methodology */}
      <section className="py-16 sm:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-fuchsia-300 uppercase tracking-widest bg-purple-950/80 border border-purple-500/30 px-3 py-1 rounded-full shadow-md">
                Pedagogy & Methodology
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                Experiential, Inquiry-Based Learning
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our educational philosophy is anchored in Bloom’s Taxonomy and experiential education frameworks recommended by the National Education Policy (NEP 2020). We move beyond passive listening to active inquiry:
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-xl bg-purple-950 text-fuchsia-300 border border-purple-500/40 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">1</div>
                  <div>
                    <strong className="text-sm text-white">Inquiry-Driven Classroom:</strong>
                    <p className="text-xs text-slate-400 mt-0.5">Students formulate open-ended questions, design investigative experiments, and collaborate on real-world case studies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-xl bg-purple-950 text-fuchsia-300 border border-purple-500/40 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">2</div>
                  <div>
                    <strong className="text-sm text-white">Integrated STEAM Framework:</strong>
                    <p className="text-xs text-slate-400 mt-0.5">Science, Technology, Engineering, Arts, and Mathematics are blended naturally into interdisciplinary coursework.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-xl bg-purple-950 text-fuchsia-300 border border-purple-500/40 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">3</div>
                  <div>
                    <strong className="text-sm text-white">Formative Continuous Evaluation:</strong>
                    <p className="text-xs text-slate-400 mt-0.5">Assessment that supports learning rather than inducing anxiety, highlighting individualized growth trajectories.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestones Timeline */}
            <div className="theme-box p-8 sm:p-10 shadow-xl">
              <h3 className="text-xl font-serif font-black text-white mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-fuchsia-400" />
                Historic Milestones
              </h3>

              <div className="relative pl-6 border-l-2 border-purple-500/30 space-y-6">
                {milestones.map((m, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#6366f1] to-[#ec4899] border-2 border-[#130b2e] shadow-md shadow-purple-950/80"></div>
                    <span className="text-xs font-bold text-fuchsia-300 font-mono">{m.year}</span>
                    <h4 className="text-sm font-bold text-white">{m.title}</h4>
                    <p className="text-xs text-[#a99ac7] mt-0.5">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="theme-box p-8 sm:p-12 text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-white mb-2">
              Experience Our Campus Firsthand
            </h3>
            <p className="text-[#d4c6f3] text-xs sm:text-sm mb-6 max-w-xl mx-auto">
              Book an appointment for a personalized campus interaction with our academic counselors.
            </p>
            <button
              onClick={onOpenAdmissionModal}
              className="px-8 py-3.5 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] hover:from-[#5457ea] hover:via-[#7c3aed] hover:to-[#db2777] text-white font-bold rounded-2xl text-sm shadow-xl shadow-purple-950/60 hover:scale-[1.02] transition-all"
            >
              Schedule Campus Visit
            </button>
            <div className="w-20 h-1 bg-white/20 rounded-full mx-auto mt-6" />
          </div>
        </div>
      </section>

    </div>
  );
}

