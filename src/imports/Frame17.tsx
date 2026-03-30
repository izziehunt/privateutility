import imgWavemap1 from "../assets/af7b10e410e59dda23331ac7ac7df53d43e30113.png";
import imgWaveocto1 from "../assets/0823ef1c13441622248c39898a7b5f74604a9352.png";
import imgWaveshrimp1 from "../assets/8ed6ffcdc268d308a4030ce2147c31953f0a15c1.png";
import imgWavecrab1 from "../assets/d6157abe27276ac4289d3e009849ea4c61b53793.png";
import { motion } from "motion/react";

export default function Frame() {
  return (
    <div className="bg-white mix-blend-multiply relative size-full">
      <div className="absolute h-[895px] left-[-25px] top-0 w-[427px]" data-name="wavemap 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWavemap1} />
      </div>
      <motion.div
        className="absolute h-[479px] left-[-101px] top-[691px] w-[460px]"
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
        className="absolute h-[306px] left-[9px] top-[8px] w-[294px]"
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
        className="absolute h-[361px] left-[-11px] top-[484px] w-[347px]"
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
        className="absolute flex h-[361px] items-center justify-center left-[-94px] top-[-47px] w-[347px]"
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
    </div>
  );
}