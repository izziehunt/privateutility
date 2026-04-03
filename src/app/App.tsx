import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";

const DESIGN_W = 393;
const DESIGN_H = 852;
const FRAME_PAD = 12;
const FULL_W = DESIGN_W + FRAME_PAD * 2 + 4;
const FULL_H = DESIGN_H + FRAME_PAD * 2 + 4;

interface MobileLayout {
  scale: number;
  offsetX: number;
  offsetY: number;
}

export default function App() {
  const [desktopScale, setDesktopScale] = useState(1);
  const [mobileLayout, setMobileLayout] = useState<MobileLayout>({ scale: 1, offsetX: 0, offsetY: 0 });
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 500);

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth <= 500;
      setIsMobile(mobile);

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (mobile) {
        // Scale to COVER: fill every pixel, clip any overflow
        const scale = Math.max(vw / DESIGN_W, vh / DESIGN_H);
        const scaledW = DESIGN_W * scale;
        const scaledH = DESIGN_H * scale;
        // Center any overflow
        const offsetX = (vw - scaledW) / 2;
        const offsetY = (vh - scaledH) / 2;
        setMobileLayout({ scale, offsetX, offsetY });
      } else {
        const scaleX = (vw - 32) / FULL_W;
        const scaleY = (vh - 32) / FULL_H;
        setDesktopScale(Math.min(scaleX, scaleY, 1));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // On a real phone — scale to fill the entire screen
  if (isMobile) {
    return (
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", background: "#3b52c8" }}>
        <div
          style={{
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scale(${mobileLayout.scale})`,
            transformOrigin: "top left",
            position: "absolute",
            left: mobileLayout.offsetX,
            top: mobileLayout.offsetY,
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
        <div className="relative bg-black rounded-[60px] p-3 shadow-2xl">
          <div className="bg-white rounded-[48px] overflow-hidden w-[393px] h-[852px] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-b-[20px] z-10" />
            <div className="relative w-full h-full overflow-hidden">
              <SplashScreen />
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-[200px] w-1 h-20 bg-black rounded-l" />
        <div className="absolute left-0 top-[180px] w-1 h-12 bg-black rounded-r" />
        <div className="absolute left-0 top-[240px] w-1 h-12 bg-black rounded-r" />
      </div>
    </div>
  );
}