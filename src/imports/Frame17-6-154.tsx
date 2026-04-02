import imgWavemap1 from "../assets/af7b10e410e59dda23331ac7ac7df53d43e30113.png";
import imgWaveocto1 from "../assets/0823ef1c13441622248c39898a7b5f74604a9352.png";
import imgWaveshrimp1 from "../assets/8ed6ffcdc268d308a4030ce2147c31953f0a15c1.png";
import imgWavecrab1 from "../assets/d6157abe27276ac4289d3e009849ea4c61b53793.png";
import imgWaveBostonTag1 from "../assets/b51e75b846b165b8c3a5201d7f1e678ff2d29d2f.png";
import imgWaveLAXTag1 from "../assets/waveLAXtag.png";
import imgWaveNYCTag1 from "../assets/waveNYCtag.png";
import imgWaveCustomization from "../assets/wavecharactericon.png";
import imgWaveBook from "../assets/wavebookicon.png";
import { motion } from "motion/react";

interface Frame17Props {
  onTagClick?: () => void;
  onLAXTagClick?: () => void;
  onNYCTagClick?: () => void;
  onJournalClick?: () => void;
  onCharacterClick?: () => void;
}

export default function Frame({ onTagClick, onLAXTagClick, onNYCTagClick, onJournalClick, onCharacterClick }: Frame17Props) {
  return (
    <div className="bg-white mix-blend-multiply relative size-full">
      <div className="absolute h-[895px] left-[-25px] top-0 w-[427px]" data-name="wavemap 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWavemap1} />
      </div>
      <motion.div
        className="absolute h-[479px] left-[-71px] top-[721px] w-[460px]"
        data-name="waveocto 1"
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaveocto1} />
      </motion.div>
      <motion.div
        className="absolute h-[306px] left-[39px] top-[38px] w-[294px]"
        data-name="waveocto 2"
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaveocto1} />
      </motion.div>
      <motion.div
        className="absolute h-[361px] left-[19px] top-[514px] w-[347px]"
        data-name="waveshrimp 1"
        animate={{
          x: [0, 18, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaveshrimp1} />
      </motion.div>
      <motion.div
        className="absolute flex h-[361px] items-center justify-center left-[-64px] top-[-17px] w-[347px]"
        animate={{
          x: [0, -10, 0],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[361px] relative w-[347px]" data-name="waveshrimp 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaveshrimp1} />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute h-[376px] left-[101px] top-[421px] w-[361px]"
        data-name="wavecrab 1"
        animate={{
          x: [0, -15, 0],
          y: [0, 5, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWavecrab1} />
      </motion.div>
      
      {/* Boston Tag - clickable and animated */}
      <motion.button
        className="absolute flex h-[120.412px] items-center justify-center left-[227px] top-[343px] w-[84.56px] cursor-pointer"
        onClick={onTagClick}
        animate={{
          y: [0, -3, 0],
          rotate: [15.82, 17, 15.82],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex-none rotate-[15.82deg]">
          <div className="h-[109px] relative w-[57px]" data-name="WaveBoston Tag 1">
            <img alt="Boston destination" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaveBostonTag1} />
          </div>
        </div>
      </motion.button>

      {/* LAX Tag - left side of map */}
      <motion.button
        className="absolute flex h-[120.412px] items-center justify-center left-[52px] top-[390px] w-[84.56px] cursor-pointer"
        onClick={onLAXTagClick}
        animate={{
          y: [0, -3, 0],
          rotate: [-12, -10.5, -12],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.7,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex-none rotate-[-12deg]">
          <div className="h-[109px] relative w-[57px]" data-name="WaveLAX Tag 1">
            <img alt="Los Angeles destination" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaveLAXTag1} />
          </div>
        </div>
      </motion.button>

      {/* NYC Tag - upper right of map */}
      <motion.button
        className="absolute flex h-[120.412px] items-center justify-center left-[260px] top-[290px] w-[84.56px] cursor-pointer"
        onClick={onNYCTagClick}
        animate={{
          y: [0, -3, 0],
          rotate: [10, 11.5, 10],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.1,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex-none rotate-[10deg]">
          <div className="h-[109px] relative w-[57px]" data-name="WaveNYC Tag 1">
            <img alt="New York destination" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaveNYCTag1} />
          </div>
        </div>
      </motion.button>

      {/* Character Customization Button - Fixed in upper left */}
      <motion.button
        className="absolute left-[30px] top-[30px] z-40 cursor-pointer bg-transparent border-none p-0"
        onClick={onCharacterClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={imgWaveCustomization} alt="Character customization" className="w-[70px] h-[70px] object-contain object-left-top" />
      </motion.button>

      {/* Travel Journal Button - Fixed in lower right */}
      <motion.button
        className="absolute right-6 bottom-6 z-40 cursor-pointer bg-transparent border-none p-0"
        onClick={onJournalClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={imgWaveBook} alt="Travel Journal" className="w-[70px] h-[70px] object-contain" />
      </motion.button>
    </div>
  );
}