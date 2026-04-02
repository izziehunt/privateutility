import { motion } from "motion/react";
import { X } from "lucide-react";

interface VancouverDetailsProps {
  onClose: () => void;
}

export default function VancouverDetails({ onClose }: VancouverDetailsProps) {
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
        <div className="sticky top-0 bg-gradient-to-br from-rose-500 to-red-700 text-white px-6 py-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="size-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="text-5xl">🍁</div>
            <div>
              <h2 className="font-bold text-2xl">Vancouver</h2>
              <p className="text-rose-100 text-sm">British Columbia, Canada · YVR</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 space-y-6" style={{ maxHeight: "calc(80vh - 120px)" }}>
          {/* Overview */}
          <section>
            <h3 className="font-bold text-lg mb-2 text-gray-900">About Vancouver</h3>
            <p className="text-gray-600 leading-relaxed">
              Vancouver is one of the world's most livable cities — a stunning Pacific Coast metropolis
              where snow-capped mountains meet the ocean. Known for its breathtaking natural beauty,
              diverse food scene, and outdoor adventure, Vancouver is a city that effortlessly blends
              urban sophistication with wilderness.
            </p>
          </section>

          {/* Popular Attractions */}
          <section>
            <h3 className="font-bold text-lg mb-3 text-gray-900">Popular Attractions</h3>
            <div className="space-y-3">
              {[
                { icon: "🌲", name: "Stanley Park", desc: "1,000-acre rainforest park with seawall and stunning views" },
                { icon: "🌉", name: "Capilano Suspension Bridge", desc: "Iconic 137m bridge suspended over a canyon" },
                { icon: "⛷️", name: "Whistler", desc: "World-class ski resort just 2 hours from the city" },
                { icon: "🎨", name: "Granville Island", desc: "Vibrant arts hub with a famous public market" },
                { icon: "🌊", name: "English Bay Beach", desc: "Stunning urban beach with mountain backdrop" },
                { icon: "🏔️", name: "Grouse Mountain", desc: "Year-round outdoor activities with panoramic city views" },
              ].map((attraction, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 p-3 bg-rose-50 rounded-xl"
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
                { icon: "🚵", label: "Mountain Biking" },
                { icon: "🍣", label: "Fresh Sushi" },
                { icon: "🛶", label: "Kayaking" },
                { icon: "🎿", label: "Skiing" },
                { icon: "🌿", label: "Rainforest Hikes" },
                { icon: "🐋", label: "Whale Watching" },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-rose-50 to-red-50 rounded-xl"
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
                <span className="font-semibold">Summer (June–August)</span> offers warm weather perfect
                for beaches and hiking. <span className="font-semibold">Winter (December–March)</span> is
                ideal for skiing at Whistler with the mountains at their best.
              </p>
            </div>
          </section>

          {/* Local Tips */}
          <section className="pb-4">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Local Tips</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">•</span>
                <span>Ride the SkyTrain — it's fast, clean, and connects the whole city</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">•</span>
                <span>Walk or cycle the full Stanley Park seawall — it's 10km of stunning scenery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">•</span>
                <span>Try authentic dim sum in Richmond — some of the best outside Hong Kong</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 mt-1">•</span>
                <span>Pack layers — the weather can change quickly between sun and rain</span>
              </li>
            </ul>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}
