import Frame17 from "../imports/Frame17";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 p-8">
      {/* iPhone 17 mockup */}
      <div className="relative">
        {/* iPhone frame */}
        <div className="relative bg-black rounded-[60px] p-3 shadow-2xl">
          {/* Screen */}
          <div className="bg-white rounded-[48px] overflow-hidden w-[393px] h-[852px] relative">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-b-[20px] z-10" />
            
            {/* Content - Splash Screen */}
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