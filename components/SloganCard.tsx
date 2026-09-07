import { Heart, Clock } from 'lucide-react';
import { formatTimeAgo } from '@/lib/mockData';

interface SloganCardProps {
  slogan: string;
  createdAt: string;
  isNew?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function SloganCard({ 
  slogan, 
  createdAt, 
  isNew = false, 
  className = '',
  onClick 
}: SloganCardProps) {
  return (
    <div 
      className={`bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#ff2d92]/20 transition-all duration-300 group cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <p className="text-white font-medium text-lg leading-relaxed group-hover:text-[#ff2d92] transition-colors duration-300">
          "{slogan}"
        </p>
        <button className="opacity-0 group-hover:opacity-100 ml-4 p-2 hover:bg-[#2a2a2a] rounded-lg transition-all duration-200">
          <Heart className="h-4 w-4 text-[#ff2d92]" />
        </button>
      </div>
      
      <div className="flex items-center justify-between text-sm text-[#666]">
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4" />
          <span>{formatTimeAgo(createdAt)}</span>
        </div>
        {isNew && (
          <span className="bg-[#ff2d92] text-white px-2 py-1 rounded-full text-xs font-bold">
            NEW
          </span>
        )}
      </div>
    </div>
  );
}