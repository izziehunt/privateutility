import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import imgWaypointTagStampLogo1 from "../../assets/d0b2ffa5817ff19fdd0b9577a03cfe102a634fc3.png";
import imgWave1 from "../../assets/6299fcc3dd55ed0321a69b91da9f896e2006ed0b.png";
import imgWaveStartScreen1 from "../../assets/f480dde347a65393e3090e140ddaf00c49354530.png";
import imgWaveCrab1 from "../../assets/d27f2093a6127dd24372448631bb13b63f3b656f.png";
import MapScreen from "../../imports/Frame17-6-154";
import BostonDetails from "./BostonDetails";
import TravelJournal from "./TravelJournal";
import CharacterCustomization from "./CharacterCustomization";

export default function SplashScreen() {
  const [showStartScreen, setShowStartScreen] = useState(false);
  const [showMapScreen, setShowMapScreen] = useState(false);
  const [showBostonDetails, setShowBostonDetails] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
  const [showCharacterCustomization, setShowCharacterCustomization] = useState(false);

  useEffect(() => {
    // After wave animation completes (10 seconds), show start screen
    const timer = setTimeout(() => {
      setShowStartScreen(true);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCrabClick = () => {
    setShowMapScreen(true);
  };

  const handleBostonTagClick = () => {
    setShowBostonDetails(true);
  };

  const handleCloseBostonDetails = () => {
    setShowBostonDetails(false);
  };

  const handleJournalClick = () => {
    setShowJournal(true);
  };

  const handleJournalBack = () => {
    setShowJournal(false);
  };

  const handleCharacterClick = () => {
    setShowCharacterCustomization(true);
  };

  const handleCharacterBack = () => {
    setShowCharacterCustomization(false);
  };

  return (
    <div className="bg-white mix-blend-multiply relative size-full overflow-hidden">
      <AnimatePresence mode="wait">
        {!showStartScreen ? (
          <motion.div
            key="splash"
            className="absolute inset-0"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo - static */}
            <div className="absolute h-[887px] left-[-103px] top-0 w-[617px]" data-name="waypoint tag-stamp logo 1">
              <img 
                alt="" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                src={imgWaypointTagStampLogo1} 
              />
            </div>
            
            {/* Wave - animated to drift side to side while sliding down */}
            <motion.div
              className="absolute h-[1767px] w-[843px]"
              data-name="WAVE 1"
              animate={{
                // Slide down from top to bottom with key positions matching frames
                y: [-236, 100, 300, 572, 667, 791, 1200],
                // Drift side to side matching the frame positions
                x: [-310, -250, -200, -182, -315, -432, -500],
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                times: [0, 0.15, 0.3, 0.5, 0.65, 0.8, 1],
              }}
            >
              <img 
                alt="" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                src={imgWave1} 
              />
            </motion.div>
          </motion.div>
        ) : !showMapScreen ? (
          <motion.div
            key="start"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Start Screen with animated crab */}
            <div className="absolute h-[935px] left-[-28px] top-0 w-[446px]" data-name="wave start screen 1">
              <img 
                alt="" 
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                src={imgWaveStartScreen1} 
              />
            </div>
            <motion.button
              className="absolute h-[183px] left-[101px] top-[542px] w-[209px] cursor-pointer" 
              data-name="wave crab 1"
              onClick={handleCrabClick}
              animate={{
                y: [0, -5, 0],
                rotate: [0, -2, 2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img 
                  alt="Start exploring" 
                  className="absolute h-[511.99%] left-[-62.2%] max-w-none top-[-271.3%] w-[213.88%]" 
                  src={imgWaveCrab1} 
                />
              </div>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="map"
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <MapScreen 
              onTagClick={handleBostonTagClick} 
              onJournalClick={handleJournalClick}
              onCharacterClick={handleCharacterClick}
            />
            
            {/* Boston Details Overlay */}
            <AnimatePresence>
              {showBostonDetails && (
                <BostonDetails onClose={handleCloseBostonDetails} />
              )}
            </AnimatePresence>

            {/* Travel Journal */}
            <AnimatePresence>
              {showJournal && (
                <TravelJournal onBack={handleJournalBack} />
              )}
            </AnimatePresence>

            {/* Character Customization */}
            <AnimatePresence>
              {showCharacterCustomization && (
                <CharacterCustomization onBack={handleCharacterBack} />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}