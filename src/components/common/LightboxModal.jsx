import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, PlayCircle, Calendar, Tag } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  items = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div 
        className="w-full max-w-6xl mx-auto flex items-center justify-between text-white z-10 pt-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
            {currentItem.category}
          </span>
          <span className="text-sm text-slate-300 font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-7 h-7" />
        </button>
      </div>

      {/* Main Image / Video View */}
      <div 
        className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 focus:outline-none"
          aria-label="Previous item"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Media Content */}
        <div className="max-h-[72vh] max-w-full flex items-center justify-center">
          {currentItem.type === 'video' ? (
            <div className="w-[85vw] max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-black">
              <iframe
                src={currentItem.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
                title={currentItem.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img
              src={currentItem.url}
              alt={currentItem.title}
              className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl transition-all"
            />
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 focus:outline-none"
          aria-label="Next item"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Caption & Metadata Footer */}
      <div 
        className="w-full max-w-4xl mx-auto text-center text-white pb-2 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="text-base sm:text-lg font-serif font-bold text-slate-100">
          {currentItem.title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl mx-auto">
          {currentItem.description}
        </p>
        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 mt-2">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-gold-400" /> {currentItem.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Tag className="w-3 h-3 text-skyAccent-400" /> Umeed Global Archives
          </span>
        </div>
      </div>
    </div>
  );
}

