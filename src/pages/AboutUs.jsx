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
  Globe2 
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
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/30 mb-3">
            Legacy of 28 Years
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            About St. Xavier's International School
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
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                Our Heritage & Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                Twenty-Eight Years of Nurturing Tomorrow’s Global Leaders
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Established in 1998 under the aegis of the Xavier Educational Trust, St. Xavier's International School has grown from a humble beginning into one of India’s premier CBSE-affiliated co-educational day-cum-boarding institutions.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Spread across 25 verdant acres, the school provides an idyllic learning environment where cutting-edge technology and ancient values coexist. We believe that true education does not merely train students to earn a living; it teaches them how to live meaningful, purposeful lives with honor and empathy.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <div className="text-2xl font-black font-serif text-white">2,850+</div>
                  <div className="text-xs text-slate-400 font-medium">Students Enrolled</div>
                </div>
                <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
                  <div className="text-2xl font-black font-serif text-cyan-400">100%</div>
                  <div className="text-xs text-slate-400 font-medium">CBSE Distinction Rate</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
                  alt="School Campus Front Facade"
                  className="w-full h-96 sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 text-white">
                  <div>
                    <div className="font-serif font-bold text-lg text-white">Main Heritage Academic Block</div>
                    <div className="text-xs text-cyan-300">Modern Architecture • Eco-Friendly Campus</div>
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
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800/90 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 text-cyan-400 flex items-center justify-center mb-6 border border-slate-700">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Our Vision</span>
              <h3 className="text-2xl font-serif font-black text-white mt-2 mb-4">
                Inspiring Intellect, Elevating Character
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                To be a benchmark international center of learning that fosters intellectual curiosity, ethical leadership, scientific temperament, and emotional resilience—empowering every student to leave an indelible, positive footprint on the world.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800/90 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 text-teal-400 flex items-center justify-center mb-6 border border-slate-700">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest">Our Mission</span>
              <h3 className="text-2xl font-serif font-black text-white mt-2 mb-4">
                Empowering Holistic Excellence
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                To deliver a child-centric, research-informed curriculum that nurtures creative potential, critical discernment, physical fitness, and technological fluency, while instilling timeless moral convictions and universal human empathy.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Messages: Chairman & Principal */}
      <section className="py-16 sm:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
              School Leadership
            </span>
            <h2 className="text-3xl font-serif font-black text-white mt-2">
              Messages from the Directorate
            </h2>
          </div>

          {/* Chairman's Message */}
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-slate-800/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 max-w-[280px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Chairman Shri Arvind Singhal"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="mt-4">
                <h4 className="font-serif font-bold text-lg text-white">Shri Arvind Singhal</h4>
                <div className="text-xs text-cyan-400 font-semibold">Chairman & Managing Trustee</div>
                <div className="text-[11px] text-slate-400">M.Tech (IIT Delhi), Philanthropist & Educationist</div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Chairman's Address</div>
              <h3 className="text-2xl font-serif font-bold text-white">
                "Education is the ignite switch for human potential."
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                When we planted the seeds of St. Xavier's International School nearly three decades ago, our vision was unambiguous: to create an institution that neither compromises on scholastic superiority nor dilutes human character.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Today, as artificial intelligence and automation reshape our global society, the greatest gift we can bestow upon our children is the capacity to think critically, adapt fluidly, and remain deeply grounded in moral integrity. I welcome you to join our family.
              </p>
            </div>
          </div>

          {/* Principal's Message */}
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-slate-800/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            <div className="lg:col-span-8 space-y-4 order-2 lg:order-1">
              <div className="text-xs font-bold text-teal-300 uppercase tracking-wider">Principal's Address</div>
              <h3 className="text-2xl font-serif font-bold text-white">
                "Every child is an ocean of undiscovered brilliance."
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                At St. Xavier's, we believe that education is an art of discovery rather than an exercise in rote compliance. Our classrooms are vibrant incubation centers where learners are encouraged to formulate hypotheses, experiment fearlessly, and embrace mistakes as valuable stepping stones.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our faculty members act as facilitators, mentors, and guides. We pride ourselves on creating an emotionally safe, intellectually invigorating atmosphere where every student feels seen, heard, and valued.
              </p>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 max-w-[280px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                  alt="Principal Dr. Eleanor Vance"
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <div className="mt-4">
                <h4 className="font-serif font-bold text-lg text-white">Dr. Eleanor Vance</h4>
                <div className="text-xs text-teal-400 font-semibold">Principal & Head of School</div>
                <div className="text-[11px] text-slate-400">M.Sc., M.Ed., Ph.D., National Pedagogical Fellow</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 sm:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
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
                  className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-800/90 shadow-xl hover:border-cyan-500/50 hover:shadow-cyan-500/10 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-slate-800 border border-slate-700 text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {val.desc}
                  </p>
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
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
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
                  <div className="w-6 h-6 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">1</div>
                  <div>
                    <strong className="text-sm text-white">Inquiry-Driven Classroom:</strong>
                    <p className="text-xs text-slate-400 mt-0.5">Students formulate open-ended questions, design investigative experiments, and collaborate on real-world case studies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">2</div>
                  <div>
                    <strong className="text-sm text-white">Integrated STEAM Framework:</strong>
                    <p className="text-xs text-slate-400 mt-0.5">Science, Technology, Engineering, Arts, and Mathematics are blended naturally into interdisciplinary coursework.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">3</div>
                  <div>
                    <strong className="text-sm text-white">Formative Continuous Evaluation:</strong>
                    <p className="text-xs text-slate-400 mt-0.5">Assessment that supports learning rather than inducing anxiety, highlighting individualized growth trajectories.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestones Timeline */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800/90 shadow-xl">
              <h3 className="text-xl font-serif font-black text-white mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-cyan-400" />
                Historic Milestones
              </h3>

              <div className="relative pl-6 border-l-2 border-slate-700 space-y-6">
                {milestones.map((m, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900 shadow"></div>
                    <span className="text-xs font-bold text-cyan-300 font-mono">{m.year}</span>
                    <h4 className="text-sm font-bold text-white">{m.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-14 bg-slate-950 border-t border-slate-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-serif font-black text-white mb-2">
            Experience Our Campus Firsthand
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">
            Book an appointment for a personalized campus interaction with our academic counselors.
          </p>
          <button
            onClick={onOpenAdmissionModal}
            className="px-7 py-3.5 bg-gradient-to-r from-brand-600 via-cyan-600 to-teal-500 hover:from-brand-500 hover:to-teal-400 text-white font-bold rounded-2xl text-sm shadow-xl shadow-cyan-950/60 hover:scale-[1.02] transition-all"
          >
            Schedule Campus Visit
          </button>
        </div>
      </section>

    </div>
  );
}

