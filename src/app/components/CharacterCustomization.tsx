import { motion } from "motion/react";
import { ArrowLeft, Check, Anchor } from "lucide-react";
import { useState } from "react";
import imgWaveocto1 from "../../assets/0823ef1c13441622248c39898a7b5f74604a9352.png";
import imgWaveshrimp1 from "../../assets/8ed6ffcdc268d308a4030ce2147c31953f0a15c1.png";
import imgWavecrab1 from "../../assets/d6157abe27276ac4289d3e009849ea4c61b53793.png";

interface CharacterCustomizationProps {
  onBack: () => void;
}

interface CharacterOptions {
  name: string;
  face: string;
  hairStyle: string;
  hairColor: string;
  outfit: string;
  outfitColor: string;
  accessory: string;
  skinTone: string;
}

// Avatar Component
const AvatarDisplay = ({ character }: { character: CharacterOptions }) => {
  const skinColors: Record<string, string> = {
    fair: "#FFE4D1",
    light: "#FFDFC4",
    tan: "#F0C69F",
    beige: "#E8C4A8",
    medium: "#D4A574",
    olive: "#C8A882",
    brown: "#C68642",
    caramel: "#B57A3D",
    dark: "#8D5524",
    ebony: "#6B4423",
  };

  const hairColors: Record<string, string> = {
    black: "#2C1B18",
    brown: "#6F4E37",
    blonde: "#F5C34B",
    red: "#C1666B",
    gray: "#B8B8B8",
    platinum: "#E8E8E8",
    auburn: "#A52A2A",
    chestnut: "#954535",
  };

  const outfitColors: Record<string, string> = {
    blue: "#3B82F6",
    red: "#EF4444",
    green: "#10B981",
    purple: "#8B5CF6",
    orange: "#F97316",
    pink: "#EC4899",
  };

  return (
    <svg width="200" height="280" viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
      {/* Body/Outfit */}
      <g>
        {character.outfit === "tshirt" && (
          <>
            <rect x="60" y="150" width="80" height="90" rx="10" fill={outfitColors[character.outfitColor]} />
            <rect x="50" y="150" width="25" height="60" rx="8" fill={outfitColors[character.outfitColor]} />
            <rect x="125" y="150" width="25" height="60" rx="8" fill={outfitColors[character.outfitColor]} />
          </>
        )}
        {character.outfit === "dress" && (
          <path d="M 60 150 L 50 240 L 150 240 L 140 150 Z" fill={outfitColors[character.outfitColor]} />
        )}
        {character.outfit === "suit" && (
          <>
            <rect x="60" y="150" width="80" height="90" rx="5" fill={outfitColors[character.outfitColor]} />
            <rect x="95" y="155" width="10" height="40" fill="white" />
            <polygon points="100,150 85,165 115,165" fill={outfitColors[character.outfitColor]} />
          </>
        )}
        {character.outfit === "hoodie" && (
          <>
            <rect x="60" y="150" width="80" height="95" rx="10" fill={outfitColors[character.outfitColor]} />
            <rect x="50" y="150" width="25" height="65" rx="8" fill={outfitColors[character.outfitColor]} />
            <rect x="125" y="150" width="25" height="65" rx="8" fill={outfitColors[character.outfitColor]} />
            <circle cx="100" cy="130" r="25" fill={outfitColors[character.outfitColor]} opacity="0.3" />
          </>
        )}
      </g>

      {/* Hair Back Layer (behind head) */}
      <g>
        {character.hairStyle === "short" && (
          <ellipse cx="100" cy="75" rx="48" ry="28" fill={hairColors[character.hairColor]} />
        )}
        {character.hairStyle === "long" && (
          <>
            <ellipse cx="100" cy="75" rx="48" ry="28" fill={hairColors[character.hairColor]} />
            <rect x="52" y="75" width="96" height="55" fill={hairColors[character.hairColor]} />
            <ellipse cx="100" cy="130" rx="48" ry="15" fill={hairColors[character.hairColor]} />
          </>
        )}
        {character.hairStyle === "curly" && (
          <>
            <circle cx="65" cy="70" r="20" fill={hairColors[character.hairColor]} />
            <circle cx="80" cy="62" r="20" fill={hairColors[character.hairColor]} />
            <circle cx="100" cy="58" r="20" fill={hairColors[character.hairColor]} />
            <circle cx="120" cy="62" r="20" fill={hairColors[character.hairColor]} />
            <circle cx="135" cy="70" r="20" fill={hairColors[character.hairColor]} />
            <ellipse cx="100" cy="80" rx="48" ry="15" fill={hairColors[character.hairColor]} />
          </>
        )}
        {character.hairStyle === "bun" && (
          <>
            <ellipse cx="100" cy="75" rx="48" ry="22" fill={hairColors[character.hairColor]} />
            <circle cx="100" cy="45" r="22" fill={hairColors[character.hairColor]} />
          </>
        )}
        {character.hairStyle === "ponytail" && (
          <>
            <ellipse cx="100" cy="75" rx="48" ry="25" fill={hairColors[character.hairColor]} />
            <ellipse cx="100" cy="95" rx="20" ry="50" fill={hairColors[character.hairColor]} />
          </>
        )}
        {character.hairStyle === "wavy" && (
          <>
            <ellipse cx="100" cy="75" rx="48" ry="28" fill={hairColors[character.hairColor]} />
            <path d="M 52 80 Q 60 100 52 120 L 148 120 Q 140 100 148 80 Z" fill={hairColors[character.hairColor]} />
          </>
        )}
        {character.hairStyle === "pixie" && (
          <>
            <ellipse cx="100" cy="78" rx="47" ry="25" fill={hairColors[character.hairColor]} />
            <path d="M 53 78 L 53 85 L 147 85 L 147 78 Z" fill={hairColors[character.hairColor]} />
          </>
        )}
        {character.hairStyle === "bob" && (
          <>
            <ellipse cx="100" cy="75" rx="48" ry="28" fill={hairColors[character.hairColor]} />
            <rect x="52" y="75" width="96" height="35" fill={hairColors[character.hairColor]} />
            <ellipse cx="100" cy="110" rx="48" ry="12" fill={hairColors[character.hairColor]} />
          </>
        )}
        {character.hairStyle === "afro" && (
          <>
            <circle cx="100" cy="75" r="50" fill={hairColors[character.hairColor]} />
          </>
        )}
        {character.hairStyle === "braids" && (
          <>
            <ellipse cx="100" cy="75" rx="48" ry="25" fill={hairColors[character.hairColor]} />
            <rect x="60" y="75" width="12" height="50" rx="6" fill={hairColors[character.hairColor]} />
            <rect x="80" y="75" width="12" height="55" rx="6" fill={hairColors[character.hairColor]} />
            <rect x="108" y="75" width="12" height="55" rx="6" fill={hairColors[character.hairColor]} />
            <rect x="128" y="75" width="12" height="50" rx="6" fill={hairColors[character.hairColor]} />
          </>
        )}
        {character.hairStyle === "spiky" && (
          <>
            <polygon points="70,75 65,55 75,75" fill={hairColors[character.hairColor]} />
            <polygon points="85,75 82,50 88,75" fill={hairColors[character.hairColor]} />
            <polygon points="100,75 100,45 105,75" fill={hairColors[character.hairColor]} />
            <polygon points="115,75 118,50 120,75" fill={hairColors[character.hairColor]} />
            <polygon points="130,75 135,55 135,75" fill={hairColors[character.hairColor]} />
            <ellipse cx="100" cy="78" rx="48" ry="20" fill={hairColors[character.hairColor]} />
          </>
        )}
        {character.hairStyle === "mohawk" && (
          <>
            <rect x="90" y="45" width="20" height="35" rx="10" fill={hairColors[character.hairColor]} />
            <ellipse cx="100" cy="78" rx="48" ry="15" fill={hairColors[character.hairColor]} />
          </>
        )}
        {character.hairStyle === "shaggy" && (
          <>
            <ellipse cx="100" cy="72" rx="48" ry="30" fill={hairColors[character.hairColor]} />
            <rect x="52" y="75" width="96" height="25" fill={hairColors[character.hairColor]} />
            <path d="M 52 100 Q 55 105 52 110 L 70 110 Q 68 105 70 100 L 85 110 Q 82 105 85 100 L 100 110 Q 98 105 100 100 L 115 110 Q 112 105 115 100 L 130 110 Q 128 105 130 100 L 148 110 Q 145 105 148 100 Z" fill={hairColors[character.hairColor]} />
          </>
        )}
        {character.hairStyle === "sidepart" && (
          <>
            <ellipse cx="100" cy="75" rx="48" ry="28" fill={hairColors[character.hairColor]} />
            <path d="M 75 60 L 72 85 L 52 85 L 52 75 Z" fill={hairColors[character.hairColor]} />
          </>
        )}
        {character.hairStyle === "topknot" && (
          <>
            <ellipse cx="100" cy="77" rx="47" ry="20" fill={hairColors[character.hairColor]} />
            <ellipse cx="100" cy="50" r="18" fill={hairColors[character.hairColor]} />
            <rect x="95" y="50" width="10" height="25" fill={hairColors[character.hairColor]} />
          </>
        )}
      </g>

      {/* Head */}
      <circle cx="100" cy="100" r="45" fill={skinColors[character.skinTone]} />
      
      {/* Face */}
      <g>
        {character.face === "happy" && (
          <>
            <circle cx="85" cy="95" r="4" fill="#2C1B18" />
            <circle cx="115" cy="95" r="4" fill="#2C1B18" />
            <path d="M 80 110 Q 100 120 120 110" stroke="#2C1B18" strokeWidth="3" fill="none" />
          </>
        )}
        {character.face === "neutral" && (
          <>
            <circle cx="85" cy="95" r="4" fill="#2C1B18" />
            <circle cx="115" cy="95" r="4" fill="#2C1B18" />
            <line x1="85" y1="115" x2="115" y2="115" stroke="#2C1B18" strokeWidth="3" />
          </>
        )}
        {character.face === "excited" && (
          <>
            <circle cx="85" cy="95" r="5" fill="#2C1B18" />
            <circle cx="115" cy="95" r="5" fill="#2C1B18" />
            <ellipse cx="100" cy="115" rx="15" ry="10" fill="#2C1B18" />
            <ellipse cx="100" cy="115" rx="12" ry="7" fill="#FF6B9D" />
          </>
        )}
        {character.face === "cool" && (
          <>
            <rect x="75" y="92" width="20" height="8" rx="4" fill="#2C1B18" />
            <rect x="105" y="92" width="20" height="8" rx="4" fill="#2C1B18" />
            <path d="M 85 112 Q 100 117 115 112" stroke="#2C1B18" strokeWidth="2" fill="none" />
          </>
        )}
        {character.face === "smile" && (
          <>
            <ellipse cx="85" cy="95" rx="3" ry="5" fill="#2C1B18" />
            <ellipse cx="115" cy="95" rx="3" ry="5" fill="#2C1B18" />
            <path d="M 80 108 Q 100 118 120 108" stroke="#2C1B18" strokeWidth="3" fill="none" />
          </>
        )}
        {character.face === "wink" && (
          <>
            <circle cx="85" cy="95" r="4" fill="#2C1B18" />
            <line x1="108" y1="95" x2="122" y2="95" stroke="#2C1B18" strokeWidth="3" />
            <path d="M 82 110 Q 100 118 118 110" stroke="#2C1B18" strokeWidth="3" fill="none" />
          </>
        )}
      </g>

      {/* Accessories */}
      <g>
        {character.accessory === "glasses" && (
          <>
            <circle cx="85" cy="95" r="12" fill="none" stroke="#2C1B18" strokeWidth="3" />
            <circle cx="115" cy="95" r="12" fill="none" stroke="#2C1B18" strokeWidth="3" />
            <line x1="97" y1="95" x2="103" y2="95" stroke="#2C1B18" strokeWidth="3" />
          </>
        )}
        {character.accessory === "hat" && (
          <>
            <ellipse cx="100" cy="55" rx="50" ry="8" fill="#8B4513" />
            <rect x="75" y="45" width="50" height="15" rx="5" fill="#8B4513" />
          </>
        )}
        {character.accessory === "cap" && (
          <>
            <ellipse cx="100" cy="60" rx="45" ry="10" fill="#DC2626" />
            <rect x="70" y="50" width="60" height="15" rx="3" fill="#DC2626" />
            <ellipse cx="110" cy="62" rx="25" ry="5" fill="#DC2626" />
          </>
        )}
        {character.accessory === "scarf" && (
          <>
            <rect x="80" y="140" width="40" height="15" rx="3" fill="#F59E0B" />
            <rect x="85" y="150" width="8" height="30" fill="#F59E0B" />
            <rect x="107" y="150" width="8" height="30" fill="#F59E0B" />
          </>
        )}
        {character.accessory === "backpack" && (
          <>
            <rect x="125" y="160" width="30" height="40" rx="5" fill="#10B981" />
            <rect x="130" y="165" width="20" height="15" rx="2" fill="#059669" />
            <line x1="130" y1="160" x2="130" y2="150" stroke="#10B981" strokeWidth="4" />
            <line x1="145" y1="160" x2="145" y2="150" stroke="#10B981" strokeWidth="4" />
          </>
        )}
      </g>
    </svg>
  );
};

export default function CharacterCustomization({ onBack }: CharacterCustomizationProps) {
  const [character, setCharacter] = useState<CharacterOptions>({
    name: "Captain Explorer",
    face: "happy",
    hairStyle: "short",
    hairColor: "brown",
    outfit: "tshirt",
    outfitColor: "blue",
    accessory: "none",
    skinTone: "light",
  });

  const [activeTab, setActiveTab] = useState<string>("face");

  const updateCharacter = (key: keyof CharacterOptions, value: string) => {
    setCharacter({ ...character, [key]: value });
  };

  const renderOptions = () => {
    switch (activeTab) {
      case "face":
        return (
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "happy", label: "Happy" },
              { id: "neutral", label: "Neutral" },
              { id: "excited", label: "Excited" },
              { id: "cool", label: "Cool" },
              { id: "smile", label: "Smile" },
              { id: "wink", label: "Wink" },
            ].map((option) => (
              <motion.button
                key={option.id}
                onClick={() => updateCharacter("face", option.id)}
                className={`relative aspect-square rounded-2xl flex flex-col items-center justify-center transition-all ${
                  character.face === option.id
                    ? "bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg scale-105"
                    : "bg-white/80 hover:bg-white shadow-md"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <AvatarDisplay character={{ ...character, face: option.id }} />
                <span className={`text-xs font-semibold mt-1 ${character.face === option.id ? 'text-white' : 'text-gray-700'}`}>
                  {option.label}
                </span>
                {character.face === option.id && (
                  <motion.div
                    className="absolute -top-1 -right-1 bg-white rounded-full p-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <Check className="size-3 text-purple-600" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        );
      
      case "hair":
        return (
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-cyan-900 mb-2">Hair Style</h4>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "short", label: "Short" },
                  { id: "long", label: "Long" },
                  { id: "curly", label: "Curly" },
                  { id: "bun", label: "Bun" },
                  { id: "ponytail", label: "Ponytail" },
                  { id: "wavy", label: "Wavy" },
                  { id: "pixie", label: "Pixie" },
                  { id: "bob", label: "Bob" },
                  { id: "afro", label: "Afro" },
                  { id: "braids", label: "Braids" },
                  { id: "spiky", label: "Spiky" },
                  { id: "mohawk", label: "Mohawk" },
                  { id: "shaggy", label: "Shaggy" },
                  { id: "sidepart", label: "Side Part" },
                  { id: "topknot", label: "Top Knot" },
                  { id: "bald", label: "Bald" },
                ].map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => updateCharacter("hairStyle", option.id)}
                    className={`relative aspect-square rounded-2xl flex flex-col items-center justify-center transition-all ${
                      character.hairStyle === option.id
                        ? "bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg scale-105"
                        : "bg-white/80 hover:bg-white shadow-md"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AvatarDisplay character={{ ...character, hairStyle: option.id }} />
                    <span className={`text-xs font-semibold mt-1 ${character.hairStyle === option.id ? 'text-white' : 'text-gray-700'}`}>
                      {option.label}
                    </span>
                    {character.hairStyle === option.id && (
                      <motion.div
                        className="absolute -top-1 -right-1 bg-white rounded-full p-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        <Check className="size-3 text-cyan-600" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-cyan-900 mb-2">Hair Color</h4>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { id: "black", label: "Black", color: "#2C1B18" },
                  { id: "brown", label: "Brown", color: "#6F4E37" },
                  { id: "blonde", label: "Blonde", color: "#F5C34B" },
                  { id: "red", label: "Red", color: "#C1666B" },
                  { id: "gray", label: "Gray", color: "#B8B8B8" },
                  { id: "platinum", label: "Platinum", color: "#E8E8E8" },
                  { id: "auburn", label: "Auburn", color: "#A52A2A" },
                  { id: "chestnut", label: "Chestnut", color: "#954535" },
                ].map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => updateCharacter("hairColor", option.id)}
                    className={`relative aspect-square rounded-2xl flex flex-col items-center justify-center transition-all border-4 ${
                      character.hairColor === option.id
                        ? "border-cyan-600 shadow-lg scale-105"
                        : "border-gray-200 hover:border-gray-300 shadow-md"
                    }`}
                    style={{ backgroundColor: option.color }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {character.hairColor === option.id && (
                      <Check className="size-6 text-white drop-shadow-lg" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        );

      case "outfit":
        return (
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-cyan-900 mb-2">Outfit Style</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "tshirt", label: "T-Shirt" },
                  { id: "dress", label: "Dress" },
                  { id: "suit", label: "Suit" },
                  { id: "hoodie", label: "Hoodie" },
                ].map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => updateCharacter("outfit", option.id)}
                    className={`relative aspect-square rounded-2xl flex flex-col items-center justify-center transition-all ${
                      character.outfit === option.id
                        ? "bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg scale-105"
                        : "bg-white/80 hover:bg-white shadow-md"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AvatarDisplay character={{ ...character, outfit: option.id }} />
                    <span className={`text-xs font-semibold mt-1 ${character.outfit === option.id ? 'text-white' : 'text-gray-700'}`}>
                      {option.label}
                    </span>
                    {character.outfit === option.id && (
                      <motion.div
                        className="absolute -top-1 -right-1 bg-white rounded-full p-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        <Check className="size-3 text-cyan-600" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-cyan-900 mb-2">Outfit Color</h4>
              <div className="grid grid-cols-6 gap-3">
                {[
                  { id: "blue", label: "Blue", color: "#3B82F6" },
                  { id: "red", label: "Red", color: "#EF4444" },
                  { id: "green", label: "Green", color: "#10B981" },
                  { id: "purple", label: "Purple", color: "#8B5CF6" },
                  { id: "orange", label: "Orange", color: "#F97316" },
                  { id: "pink", label: "Pink", color: "#EC4899" },
                ].map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => updateCharacter("outfitColor", option.id)}
                    className={`relative aspect-square rounded-2xl flex items-center justify-center transition-all border-4 ${
                      character.outfitColor === option.id
                        ? "border-cyan-600 shadow-lg scale-105"
                        : "border-gray-200 hover:border-gray-300 shadow-md"
                    }`}
                    style={{ backgroundColor: option.color }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {character.outfitColor === option.id && (
                      <Check className="size-6 text-white drop-shadow-lg" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        );

      case "accessory":
        return (
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "none", label: "None" },
              { id: "glasses", label: "Glasses" },
              { id: "hat", label: "Hat" },
              { id: "cap", label: "Cap" },
              { id: "scarf", label: "Scarf" },
              { id: "backpack", label: "Backpack" },
            ].map((option) => (
              <motion.button
                key={option.id}
                onClick={() => updateCharacter("accessory", option.id)}
                className={`relative aspect-square rounded-2xl flex flex-col items-center justify-center transition-all ${
                  character.accessory === option.id
                    ? "bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg scale-105"
                    : "bg-white/80 hover:bg-white shadow-md"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <AvatarDisplay character={{ ...character, accessory: option.id }} />
                <span className={`text-xs font-semibold mt-1 ${character.accessory === option.id ? 'text-white' : 'text-gray-700'}`}>
                  {option.label}
                </span>
                {character.accessory === option.id && (
                  <motion.div
                    className="absolute -top-1 -right-1 bg-white rounded-full p-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <Check className="size-3 text-cyan-600" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        );

      case "skin":
        return (
          <div className="grid grid-cols-5 gap-3">
            {[
              { id: "fair", label: "Fair", color: "#FFE4D1" },
              { id: "light", label: "Light", color: "#FFDFC4" },
              { id: "tan", label: "Tan", color: "#F0C69F" },
              { id: "beige", label: "Beige", color: "#E8C4A8" },
              { id: "medium", label: "Medium", color: "#D4A574" },
              { id: "olive", label: "Olive", color: "#C8A882" },
              { id: "brown", label: "Brown", color: "#C68642" },
              { id: "caramel", label: "Caramel", color: "#B57A3D" },
              { id: "dark", label: "Dark", color: "#8D5524" },
              { id: "ebony", label: "Ebony", color: "#6B4423" },
            ].map((option) => (
              <motion.button
                key={option.id}
                onClick={() => updateCharacter("skinTone", option.id)}
                className={`relative aspect-square rounded-2xl flex items-center justify-center transition-all border-4 ${
                  character.skinTone === option.id
                    ? "border-cyan-600 shadow-lg scale-105"
                    : "border-gray-200 hover:border-gray-300 shadow-md"
                }`}
                style={{ backgroundColor: option.color }}
                whileTap={{ scale: 0.95 }}
              >
                {character.skinTone === option.id && (
                  <Check className="size-6 text-cyan-600 drop-shadow-lg" />
                )}
              </motion.button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className="absolute inset-0 z-50"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      style={{
        background: "linear-gradient(180deg, #0EA5E9 0%, #06B6D4 50%, #0891B2 100%)",
      }}
    >
      {/* Animated Wave Pattern Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waves" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
              <path d="M0,25 Q25,15 50,25 T100,25" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
              <path d="M0,35 Q25,25 50,35 T100,35" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              bottom: -50,
            }}
            animate={{
              y: [-50, -window.innerHeight - 50],
              x: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated Sea Creatures */}
      <motion.div
        className="absolute h-[150px] w-[180px] left-[-50px] top-[200px] pointer-events-none opacity-40"
        animate={{
          x: [0, 15, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img alt="" className="w-full h-full object-contain" src={imgWaveocto1} />
      </motion.div>

      <motion.div
        className="absolute h-[120px] w-[140px] right-[-40px] top-[400px] pointer-events-none opacity-40"
        animate={{
          x: [0, -12, 0],
          y: [0, 6, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <img alt="" className="w-full h-full object-contain" src={imgWaveshrimp1} />
      </motion.div>

      <motion.div
        className="absolute h-[100px] w-[120px] left-[20px] bottom-[150px] pointer-events-none opacity-40"
        animate={{
          x: [0, 10, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <img alt="" className="w-full h-full object-contain" src={imgWavecrab1} />
      </motion.div>

      {/* Header */}
      <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-4 shadow-lg border-b-4 border-cyan-300">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
          >
            <ArrowLeft className="size-5" />
          </button>
          <div className="flex-1">
            <h1 className="font-bold text-2xl tracking-wide">Crew Member Profile</h1>
            <p className="text-sm text-cyan-100">Customize your seafarer</p>
          </div>
          <Anchor className="size-7" />
        </div>
      </div>

      {/* Content */}
      <div className="relative overflow-y-auto px-4 py-6 space-y-6" style={{ height: "calc(100% - 80px)" }}>
        {/* Character Preview */}
        <motion.div
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border-4 border-cyan-200"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center">
            <motion.div
              className="relative inline-block mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <AvatarDisplay character={character} />
            </motion.div>
            
            <input
              type="text"
              value={character.name}
              onChange={(e) => updateCharacter("name", e.target.value)}
              className="text-2xl font-bold text-center text-cyan-900 bg-transparent border-b-2 border-cyan-300 focus:border-cyan-600 outline-none px-4 py-2 w-full max-w-xs"
              placeholder="Your Name"
            />
          </div>
        </motion.div>

        {/* Customization Tabs */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border-2 border-cyan-200">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { id: "face", label: "Face" },
              { id: "hair", label: "Hair" },
              { id: "outfit", label: "Outfit" },
              { id: "accessory", label: "Accessory" },
              { id: "skin", label: "Skin" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[70px] px-3 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md"
                    : "bg-white text-cyan-700 hover:bg-cyan-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Options */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-cyan-200"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderOptions()}
        </motion.div>

        {/* Tips Section */}
        <div className="bg-cyan-600/30 backdrop-blur-sm rounded-2xl p-4 border-2 border-cyan-300">
          <h3 className="font-bold text-white mb-2 flex items-center gap-2">
            <Anchor className="size-5" />
            Seafarer Tips
          </h3>
          <ul className="text-sm text-cyan-50 space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="text-cyan-200 mt-0.5">⚓</span>
              <span>Create a unique look for your ocean adventures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-200 mt-0.5">⚓</span>
              <span>Your crew member represents you on all voyages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-200 mt-0.5">⚓</span>
              <span>Customize anytime from the navigation map</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-200 mt-0.5">⚓</span>
              <span>Set sail with your personalized explorer!</span>
            </li>
          </ul>
        </div>

        {/* Save Button */}
        <motion.button
          onClick={onBack}
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg border-2 border-cyan-400 flex items-center justify-center gap-2"
          whileTap={{ scale: 0.98 }}
        >
          <Check className="size-5" />
          Set Sail & Continue Voyage
        </motion.button>

        {/* Decorative Maritime Elements */}
        <div className="text-center text-4xl py-4 space-x-4">
          <motion.span
            className="inline-block"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            ⚓
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ⛵
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            🧭
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}