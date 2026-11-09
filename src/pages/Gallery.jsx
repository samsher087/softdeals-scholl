import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  PlayCircle, 
  Calendar, 
  Tag, 
  Filter, 
  Image as ImageIcon,
  Sparkles
} from 'lucide-react';
import { api } from '../services/api';
import LightboxModal from '../components/common/LightboxModal';

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    'All',
    'School Campus',
    'Classrooms',
    'Annual Function',
    'Sports Activities',
    'Cultural Programs',
    'Science Exhibition',
    'Educational Tours',
    'Student Activities',
    'Video Gallery'
  ];

  useEffect(() => {
    const fetchGallery = async () => {
      const res = await api.getGallery();
      if (res?.data) {
        setItems(res.data);
      }
    };
    fetchGallery();
  }, []);

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  const openLightboxAt = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full min-h-screen text-slate-100">
      
      {/* Header Banner - SoftDeals Dark Style */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1 rounded-full">
            Life at St. Xavier's
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mt-3">
            Photo & Video Gallery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Glimpses of vibrant moments, academic milestones, athletic triumphs, and unforgettable campus celebrations.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-2 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Results Count & Feedback */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
          <span>Showing <strong className="text-white font-bold">{filteredItems.length}</strong> items in <strong className="text-cyan-400 font-bold">{selectedCategory}</strong></span>
          <span className="hidden sm:inline">Click any photo or video to view in fullscreen high-definition</span>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightboxAt(idx)}
              className="group relative bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-800/90 shadow-xl hover:border-cyan-500/50 hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-slate-800">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Video Play Badge or Category Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-slate-950/80 backdrop-blur-md text-cyan-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-slate-700/80 flex items-center gap-1">
                    {item.type === 'video' ? <PlayCircle className="w-3 h-3 text-cyan-400" /> : <Tag className="w-3 h-3 text-cyan-400" />}
                    {item.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/50 flex items-center justify-center text-cyan-300 transform scale-75 group-hover:scale-100 transition-transform">
                    {item.type === 'video' ? (
                      <PlayCircle className="w-7 h-7 text-cyan-300 fill-current" />
                    ) : (
                      <Eye className="w-6 h-6 text-cyan-300" />
                    )}
                  </div>
                </div>
              </div>

              {/* Caption Card Body */}
              <div className="p-5 bg-slate-900/90 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-3 pt-2.5 border-t border-slate-800">
                  <span className="flex items-center gap-1 text-slate-400">
                    <Calendar className="w-3 h-3 text-cyan-400" /> {item.date}
                  </span>
                  <span className="text-cyan-400 font-semibold group-hover:underline">
                    View in HD
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        items={filteredItems}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))}
        onNext={() => setCurrentIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))}
      />

    </div>
  );
}

