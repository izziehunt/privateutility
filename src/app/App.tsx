import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";

const MOCKUP_W = 393;
const MOCKUP_H = 852;
const FRAME_PAD = 12;
const FULL_W = MOCKUP_W + FRAME_PAD * 2 + 4;
const FULL_H = MOCKUP_H + FRAME_PAD * 2 + 4;

function isMobileDevice() {
  return window.innerWidth <= 500;
}

export default function App() {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(isMobileDevice);

  useEffect(() => {
    const update = () => {
      setIsMobile(isMobileDevice());
      const scaleX = (window.innerWidth - 32) / FULL_W;
      const scaleY = (window.innerHeight - 32) / FULL_H;
      setScale(Math.min(scaleX, scaleY, 1));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // On a real phone — fill the screen directly, no mockup
  if (isMobile) {
    return (
      <div className="w-screen h-screen overflow-hidden">
        <SplashScreen />
      </div>
    );
  }

  // On desktop — show the iPhone mockup preview
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
      <div
        style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}
        className="relative"
      >
        {/* iPhone frame */}
        <div className="relative bg-black rounded-[60px] p-3 shadow-2xl">
          {/* Screen */}
          <div className="bg-white rounded-[48px] overflow-hidden w-[393px] h-[852px] relative">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-b-[20px] z-10" />

            {/* Content */}
            <div className="relative w-full h-full overflow-hidden">
              <SplashScreen />
            </div>
          </div>
        </div>

        {/* Power button */}
        <div className="absolute right-0 top-[200px] w-1 h-20 bg-black rounded-l" />

        {/* Volume buttons */}
        <div className="absolute left-0 top-[180px] w-1 h-12 bg-black rounded-r" />
        <div className="absolute left-0 top-[240px] w-1 h-12 bg-black rounded-r" />
      </div>
    </div>
  );
}