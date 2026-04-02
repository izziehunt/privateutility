import { motion } from "motion/react";
import { ArrowLeft, Camera, MapPin, Calendar, X, Anchor } from "lucide-react";
import { useState, useRef } from "react";

interface TravelJournalProps {
  onBack: () => void;
}

interface JournalEntry {
  location: string;
  date: string;
  text: string;
  images: string[];
}

export default function TravelJournal({ onBack }: TravelJournalProps) {
  const [selectedLocation, setSelectedLocation] = useState<string>("Boston");
  const [entryText, setEntryText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [savedEntry, setSavedEntry] = useState<JournalEntry | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const locations = ["Boston", "Los Angeles", "New York City", "Vancouver"];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result as string);
          if (newImages.length === files.length) {
            setImages([...images, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSaveEntry = () => {
    const entry: JournalEntry = {
      location: selectedLocation,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      text: entryText,
      images: images,
    };
    setSavedEntry(entry);
  };

  return (
    <motion.div
      className="absolute inset-0 z-50"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      style={{
        background: "linear-gradient(to bottom, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)",
      }}
    >
      {/* Decorative Wave Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 30, 50 50 T 100 50" stroke="#0284c7" fill="none" strokeWidth="2"/>
              <path d="M0 70 Q 25 50, 50 70 T 100 70" stroke="#0284c7" fill="none" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      {/* Header with nautical theme */}
      <div className="relative bg-gradient-to-br from-cyan-600 to-blue-700 text-white px-4 py-4 shadow-lg border-b-4 border-cyan-300">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
          >
            <ArrowLeft className="size-5" />
          </button>
          <div className="flex-1">
            <h1 className="font-bold text-2xl tracking-wide">Captain's Log</h1>
            <p className="text-sm text-cyan-100">Chart your voyage</p>
          </div>
          <motion.div
            className="text-3xl"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            ⚓
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative overflow-y-auto px-4 py-4 space-y-4" style={{ height: "calc(100% - 80px)" }}>
        {/* Location Selector with nautical styling */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-cyan-200">
          <label className="flex items-center gap-2 text-cyan-900 font-semibold mb-3">
            <MapPin className="size-5 text-cyan-600" />
            Port of Call
          </label>
          <div className="flex gap-2 flex-wrap">
            {locations.map((location) => (
              <motion.button
                key={location}
                onClick={() => setSelectedLocation(location)}
                className={`px-4 py-2 rounded-full font-medium transition-all border-2 ${
                  selectedLocation === location
                    ? "bg-cyan-600 text-white shadow-md border-cyan-700"
                    : "bg-white text-cyan-700 hover:bg-cyan-50 border-cyan-300"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {location} {location === "Los Angeles" ? "🌴" : location === "New York City" ? "🗽" : location === "Vancouver" ? "🍁" : "🏙️"}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Journal Entry Form with nautical design */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-cyan-200 space-y-4">
          <div className="flex items-center gap-2 text-cyan-900 font-semibold pb-2 border-b-2 border-cyan-100">
            <Calendar className="size-5 text-cyan-600" />
            <span>
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <div>
            <label className="block text-sm font-semibold text-cyan-900 mb-2 flex items-center gap-2">
              <span>📝</span>
              Voyage Notes
            </label>
            <textarea
              value={entryText}
              onChange={(e) => setEntryText(e.target.value)}
              placeholder="Document your maritime adventure... What ports did you explore? What treasures did you discover? What tales do you have to tell?"
              className="w-full h-32 px-4 py-3 border-2 border-cyan-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none text-gray-700 bg-white/80"
              style={{
                backgroundImage: "linear-gradient(to bottom, transparent 31px, #e0f2fe 1px)",
                backgroundSize: "100% 32px",
                lineHeight: "32px",
              }}
            />
          </div>

          {/* Image Upload Section with nautical theme */}
          <div>
            <label className="block text-sm font-semibold text-cyan-900 mb-2 flex items-center gap-2">
              <span>📸</span>
              Voyage Gallery
            </label>
            <div className="space-y-3">
              {/* Uploaded Images Grid */}
              {images.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative aspect-square rounded-xl overflow-hidden bg-cyan-50 border-2 border-cyan-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <img
                        src={image}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white shadow-lg hover:bg-red-600 transition-colors"
                      >
                        <X className="size-3" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Upload Button */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-dashed border-cyan-400 rounded-xl text-cyan-700 font-semibold hover:bg-cyan-100 transition-colors"
              >
                <Camera className="size-5" />
                Capture Memories
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>

          {/* Save Button with anchor icon */}
          <motion.button
            onClick={handleSaveEntry}
            disabled={!entryText.trim()}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold py-3 rounded-xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 border-2 border-cyan-500"
            whileTap={{ scale: 0.98 }}
          >
            <Anchor className="size-5" />
            Drop Anchor (Save Entry)
          </motion.button>
        </div>

        {/* Saved Entry Display with nautical theme */}
        {savedEntry && (
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md border-2 border-emerald-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-emerald-200">
              <div className="text-2xl">⚓</div>
              <div>
                <h3 className="font-bold text-cyan-900">Entry Logged!</h3>
                <p className="text-sm text-cyan-700">
                  {savedEntry.location} • {savedEntry.date}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 leading-relaxed">{savedEntry.text}</p>
            {savedEntry.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {savedEntry.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden bg-cyan-50 border-2 border-cyan-200"
                  >
                    <img
                      src={image}
                      alt={`Memory ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Nautical Journal Tips */}
        <div className="bg-cyan-600/20 backdrop-blur-sm rounded-2xl p-4 border-2 border-cyan-300">
          <h3 className="font-bold text-cyan-900 mb-2 flex items-center gap-2">
            <span>🧭</span>
            Navigator's Tips
          </h3>
          <ul className="text-sm text-cyan-900 space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 mt-0.5">•</span>
              <span>Document the hidden gems only locals know about</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 mt-0.5">•</span>
              <span>Capture the sights, sounds, and flavors of your journey</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 mt-0.5">•</span>
              <span>Add photos to preserve precious moments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 mt-0.5">•</span>
              <span>Record the people and stories that made the voyage special</span>
            </li>
          </ul>
        </div>

        {/* Decorative nautical elements at bottom */}
        <div className="text-center text-4xl py-4 space-x-4">
          <motion.span
            className="inline-block"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            🐙
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            🦀
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            🦐
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}