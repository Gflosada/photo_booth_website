import { Calendar } from 'lucide-react';

interface FloatingBookButtonProps {
  onClick: () => void;
}

export function FloatingBookButton({ onClick }: FloatingBookButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 group"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
        
        {/* Button */}
        <div className="relative opbe-btn-primary px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform">
          <Calendar className="w-5 h-5" />
          <span>Book Now</span>
        </div>
      </div>
    </button>
  );
}
