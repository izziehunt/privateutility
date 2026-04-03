import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";

const DESIGN_W = 393;
const DESIGN_H = 852;
const FRAME_PAD = 12;
const FULL_W = DESIGN_W + FRAME_PAD * 2 + 4;
const FULL_H = DESIGN_H + FRAME_PAD * 2 + 4;

export default function App() {
  const [desktopScale, setDesktopScale] = useState(1);
  const [mobileScale, setMobileScale] = useState(1);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 500);

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth <= 500;
      setIsMobile(mobile);

      if (mobile) {
        // Scale to COVER the viewport — fill every pixel, clip any overflow
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        setMobileScale(Math.max(vw / DESIGN_W, vh / DESIGN_H));
      } else {
        const scaleX = (window.innerWidth - 32) / FULL_W;
        const scaleY = (window.innerHeight - 32) / FULL_H;
        setDesktopScale(Math.min(scaleX, scaleY, 1));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // On a real phone — scale to fill the screen completely
  if (isMobile) {
    return (
      <div
        style={{ width: "100vw", height: "100dvh", overflow: "hidden", position: "relative" }}
      >
        <div
          style={{
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scale(${mobileScale})`,
            transformOrigin: "top center",
            position: "absolute",
            left: "50%",
            translate: "-50%",
          }}
        >
          <SplashScreen />
        </div>
      </div>
    );
  }

  // On desktop — show the iPhone mockup preview
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
      <div
        style={{ transform: `scale(${desktopScale})`, transformOrigin: "center center" }}
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