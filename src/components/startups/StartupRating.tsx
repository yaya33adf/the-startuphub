import { useState } from "react";
import { Star } from "lucide-react";

interface StartupRatingProps {
  onRate: (rating: number) => void;
}

export const StartupRating = ({ onRate }: StartupRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const handleRate = (rating: number) => {
    setSelectedRating(rating);
    onRate(rating);
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((rating) => (
        <button
          key={rating}
          onMouseEnter={() => setHoveredRating(rating)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => handleRate(rating)}
          className="focus:outline-none"
        >
          <Star
            className={`w-6 h-6 transition-colors ${
              rating <= (hoveredRating || selectedRating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
};