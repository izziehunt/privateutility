import { motion } from "motion/react";
import { X } from "lucide-react";

interface NYCDetailsProps {
  onClose: () => void;
}

export default function NYCDetails({ onClose }: NYCDetailsProps) {
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
        <div className="sticky top-0 bg-gradient-to-br from-violet-600 to-purple-800 text-white px-6 py-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="size-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="text-5xl">🗽</div>
            <div>
              <h2 className="font-bold text-2xl">New York City</h2>
              <p className="text-violet-100 text-sm">New York, USA · JFK</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 space-y-6" style={{ maxHeight: "calc(80vh - 120px)" }}>
          {/* Overview */}
          <section>
            <h3 className="font-bold text-lg mb-2 text-gray-900">About New York City</h3>
            <p className="text-gray-600 leading-relaxed">
              New York City is the city that never sleeps — a towering metropolis of iconic skylines,
              world-class culture, and electric energy. From Central Park to Times Square, NYC pulses
              with ambition, diversity, and an unmistakable spirit found nowhere else on earth.
            </p>
          </section>

          {/* Popular Attractions */}
          <section>
            <h3 className="font-bold text-lg mb-3 text-gray-900">Popular Attractions</h3>
            <div className="space-y-3">
              {[
                { icon: "🗽", name: "Statue of Liberty", desc: "Iconic symbol of freedom on Liberty Island in the harbor" },
                { icon: "🌳", name: "Central Park", desc: "843 acres of green space in the heart of Manhattan" },
                { icon: "🎨", name: "The Met", desc: "One of the world's largest and finest art museums" },
                { icon: "🌉", name: "Brooklyn Bridge", desc: "Walk across this landmark for stunning skyline views" },
                { icon: "🎭", name: "Broadway", desc: "World-renowned theater district with shows every night" },
                { icon: "🔭", name: "Top of the Rock", desc: "360° views of Manhattan from Rockefeller Center" },
              ].map((attraction, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 p-3 bg-violet-50 rounded-xl"
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
                { icon: "🍕", label: "NYC Pizza" },
                { icon: "🛍️", label: "Fifth Ave Shopping" },
                { icon: "🚢", label: "Staten Island Ferry" },
                { icon: "🎵", label: "Jazz in Harlem" },
                { icon: "🏃", label: "High Line Walk" },
                { icon: "🌆", label: "Rooftop Bars" },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl"
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
                <span className="font-semibold">Spring (April–June)</span> and{" "}
                <span className="font-semibold">Fall (September–November)</span> offer the best weather
                for exploring on foot. December brings festive magic with holiday markets and ice skating.
              </p>
            </div>
          </section>

          {/* Local Tips */}
          <section className="pb-4">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Local Tips</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-violet-600 mt-1">•</span>
                <span>Get a MetroCard — the subway is the fastest way to get around</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-600 mt-1">•</span>
                <span>Walk everywhere you can — the city reveals itself best on foot</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-600 mt-1">•</span>
                <span>Try a classic NYC bagel with lox from a local deli</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-600 mt-1">•</span>
                <span>Book Broadway tickets in advance or try the TKTS booth for same-day deals</span>
              </li>
            </ul>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}
