import { motion } from "motion/react";
import { X } from "lucide-react";

interface BostonDetailsProps {
  onClose: () => void;
}

export default function BostonDetails({ onClose }: BostonDetailsProps) {
  return (
    <motion.div
      className="absolute inset-0 z-50 flex items-end justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Detail Panel */}
      <motion.div
        className="relative w-full bg-white rounded-t-3xl shadow-2xl max-h-[80%] overflow-hidden"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-br from-blue-600 to-blue-800 text-white px-6 py-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="size-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="text-5xl">🏙️</div>
            <div>
              <h2 className="font-bold text-2xl">Boston</h2>
              <p className="text-blue-100 text-sm">Massachusetts, USA</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 space-y-6" style={{ maxHeight: "calc(80vh - 120px)" }}>
          {/* Overview */}
          <section>
            <h3 className="font-bold text-lg mb-2 text-gray-900">About Boston</h3>
            <p className="text-gray-600 leading-relaxed">
              Boston is one of America's oldest cities, rich in history and culture. Known for its 
              prestigious universities, world-class museums, and revolutionary heritage, Boston 
              offers a perfect blend of historic charm and modern innovation.
            </p>
          </section>

          {/* Popular Attractions */}
          <section>
            <h3 className="font-bold text-lg mb-3 text-gray-900">Popular Attractions</h3>
            <div className="space-y-3">
              {[
                { icon: "🏛️", name: "Freedom Trail", desc: "2.5-mile historic walking path through 16 significant sites" },
                { icon: "🎨", name: "Museum of Fine Arts", desc: "World-renowned art museum with over 450,000 works" },
                { icon: "⚾", name: "Fenway Park", desc: "America's oldest ballpark, home of the Red Sox" },
                { icon: "🐟", name: "New England Aquarium", desc: "Ocean life exhibits with a giant ocean tank" },
                { icon: "🎓", name: "Harvard University", desc: "Tour the historic campus in nearby Cambridge" },
                { icon: "🌳", name: "Boston Common", desc: "America's oldest public park, perfect for strolls" },
              ].map((attraction, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 p-3 bg-blue-50 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl flex-shrink-0">{attraction.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{attraction.name}</div>
                    <div className="text-sm text-gray-600">{attraction.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Things to Do */}
          <section>
            <h3 className="font-bold text-lg mb-3 text-gray-900">Things to Do</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🍽️", label: "Seafood Dining" },
                { icon: "🛍️", label: "Newbury Street Shopping" },
                { icon: "🚢", label: "Harbor Cruises" },
                { icon: "🎭", label: "Theater District" },
                { icon: "🏃", label: "Charles River Esplanade" },
                { icon: "🍺", label: "Brewery Tours" },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  <div className="text-3xl">{activity.icon}</div>
                  <div className="text-xs text-center font-medium text-gray-700">{activity.label}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
          <section>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Best Time to Visit</h3>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
              <p className="text-gray-700">
                <span className="font-semibold">Spring (April-June)</span> and <span className="font-semibold">Fall (September-November)</span> 
                {" "}offer pleasant weather and beautiful foliage. Summer is vibrant but can be hot and crowded.
              </p>
            </div>
          </section>

          {/* Local Tips */}
          <section className="pb-4">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Local Tips</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Try authentic clam chowder at Quincy Market</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Use the "T" (MBTA subway) for easy navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Walk or bike through the scenic Emerald Necklace parks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Book reservations ahead for popular restaurants and tours</span>
              </li>
            </ul>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}
