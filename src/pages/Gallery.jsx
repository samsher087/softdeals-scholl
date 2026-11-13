import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  PlayCircle, 
  Calendar, 
  Tag, 
  Filter, 
  Image as ImageIcon,
  Sparkles,
  Clock
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
      
      {/* Header Banner - Theme Box Style */}
      <section className="bg-[#0d0722]/80 text-white py-16 sm:py-20 relative overflow-hidden border-b border-[#341f5e]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-300 bg-purple-950/80 border border-purple-500/30 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
            Visual Campus Archives
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mt-3">
            Photo & Video Gallery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#d4c6f3] max-w-2xl mx-auto">
            Glimpses of vibrant moments, academic milestones, athletic triumphs, and unforgettable campus celebrations.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-2 p-2 theme-box rounded-full shadow-2xl shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white shadow-md font-bold'
                    : 'text-[#a99ac7] hover:text-white hover:bg-[#231452]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Results Count & Feedback */}
        <div className="flex items-center justify-between text-xs text-[#a99ac7] mb-6">
          <span>Showing <strong className="text-white font-bold">{filteredItems.length}</strong> items in <strong className="text-fuchsia-300 font-bold">{selectedCategory}</strong></span>
          <span className="hidden sm:inline">Click any photo or video to view in fullscreen high-definition</span>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightboxAt(idx)}
              className="group relative theme-box p-0 rounded-[30px] overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-[#180e38]">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Video Play Badge or Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="theme-pill text-[10px]">
                    {item.type === 'video' ? <PlayCircle className="w-3.5 h-3.5 text-fuchsia-400" /> : <Tag className="w-3.5 h-3.5 text-fuchsia-400" />}
                    {item.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0d0722]/75 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#190f38] backdrop-blur-md border border-purple-500/60 flex items-center justify-center text-purple-200 transform scale-75 group-hover:scale-100 transition-transform shadow-xl">
                    {item.type === 'video' ? (
                      <PlayCircle className="w-8 h-8 text-fuchsia-300 fill-current" />
                    ) : (
                      <Eye className="w-7 h-7 text-fuchsia-300" />
                    )}
                  </div>
                </div>
              </div>

              {/* Caption Card Body */}
              <div className="p-6 bg-transparent flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-fuchsia-300 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#d4c6f3] line-clamp-2 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs text-[#b8a7db] mt-4 pt-3 border-t border-[#341f5e]/70">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#a78bfa]" /> {item.date}
                    </span>
                    <span className="text-fuchsia-300 font-semibold group-hover:underline flex items-center gap-1">
                      View in HD
                    </span>
                  </div>
                  <div className="w-14 h-1 bg-white/20 rounded-full mx-auto mt-4" />
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

