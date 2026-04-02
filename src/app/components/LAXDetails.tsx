import { motion } from "motion/react";
import { X } from "lucide-react";

interface LAXDetailsProps {
  onClose: () => void;
}

export default function LAXDetails({ onClose }: LAXDetailsProps) {
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
        <div className="sticky top-0 bg-gradient-to-br from-sky-500 to-blue-700 text-white px-6 py-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="size-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="text-5xl">🌴</div>
            <div>
              <h2 className="font-bold text-2xl">Los Angeles</h2>
              <p className="text-sky-100 text-sm">California, USA · LAX</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 space-y-6" style={{ maxHeight: "calc(80vh - 120px)" }}>
          {/* Overview */}
          <section>
            <h3 className="font-bold text-lg mb-2 text-gray-900">About Los Angeles</h3>
            <p className="text-gray-600 leading-relaxed">
              Los Angeles is the entertainment capital of the world — a sprawling sun-soaked city of
              beaches, mountains, and iconic neighborhoods. From Hollywood to Venice Beach, LA blends
              creativity, culture, and California cool like nowhere else.
            </p>
          </section>

          {/* Popular Attractions */}
          <section>
            <h3 className="font-bold text-lg mb-3 text-gray-900">Popular Attractions</h3>
            <div className="space-y-3">
              {[
                { icon: "🎬", name: "Hollywood Walk of Fame", desc: "Over 2,700 stars honoring entertainment legends" },
                { icon: "🏛️", name: "Getty Center", desc: "World-class art museum with sweeping city views" },
                { icon: "🎢", name: "Universal Studios", desc: "Movie-themed rides and behind-the-scenes studio tours" },
                { icon: "🌊", name: "Venice Beach", desc: "Iconic boardwalk, muscle beach, and street performers" },
                { icon: "🦁", name: "Los Angeles Zoo", desc: "Over 1,400 animals in Griffith Park" },
                { icon: "🌟", name: "Griffith Observatory", desc: "Stunning views of the Hollywood Sign and the city" },
              ].map((attraction, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 p-3 bg-sky-50 rounded-xl"
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
                { icon: "🏄", label: "Surfing" },
                { icon: "🍜", label: "Food Truck Scene" },
                { icon: "🛍️", label: "Rodeo Drive Shopping" },
                { icon: "🎭", label: "Live Music & Comedy" },
                { icon: "🥾", label: "Hiking Runyon Canyon" },
                { icon: "🎥", label: "Studio Tours" },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl"
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
                <span className="font-semibold">Spring (March–May)</span> and{" "}
                <span className="font-semibold">Fall (September–November)</span> bring mild temperatures
                and fewer crowds. Summers are warm and sunny but expect heavy traffic.
              </p>
            </div>
          </section>

          {/* Local Tips */}
          <section className="pb-4">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Local Tips</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-1">•</span>
                <span>Rent a car — LA is a driving city and public transit is limited</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-1">•</span>
                <span>Hit popular spots early morning to beat the crowds and traffic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-1">•</span>
                <span>Explore neighborhoods like Silver Lake, Los Feliz, and Koreatown for local flavor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-1">•</span>
                <span>Don't miss the sunset from the Griffith Observatory — it's free entry</span>
              </li>
            </ul>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}
