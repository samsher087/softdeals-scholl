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
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-navy-800 px-3.5 py-1 rounded-full border border-navy-700">
            Life at St. Xavier's
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mt-3">
            Photo & Video Gallery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Glimpses of vibrant moments, academic milestones, athletic triumphs, and unforgettable campus celebrations.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Results Count & Feedback */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <span>Showing <strong className="text-navy-900 font-bold">{filteredItems.length}</strong> items in <strong className="text-skyAccent-600 font-bold">{selectedCategory}</strong></span>
          <span className="hidden sm:inline">Click any photo or video to view in fullscreen high-definition</span>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightboxAt(idx)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Video Play Badge or Category Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-navy-900/80 backdrop-blur-md text-gold-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/10 flex items-center gap-1">
                    {item.type === 'video' ? <PlayCircle className="w-3 h-3 text-gold-400" /> : <Tag className="w-3 h-3 text-gold-400" />}
                    {item.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transform scale-75 group-hover:scale-100 transition-transform">
                    {item.type === 'video' ? (
                      <PlayCircle className="w-7 h-7 text-gold-400 fill-current" />
                    ) : (
                      <Eye className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>
              </div>

              {/* Caption Card Body */}
              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-navy-900 group-hover:text-skyAccent-600 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-3 pt-2.5 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" /> {item.date}
                  </span>
                  <span className="text-skyAccent-600 font-semibold group-hover:underline">
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

