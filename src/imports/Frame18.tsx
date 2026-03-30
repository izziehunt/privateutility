import imgWavemap1 from "../assets/af7b10e410e59dda23331ac7ac7df53d43e30113.png";
import imgWaveocto1 from "../assets/0823ef1c13441622248c39898a7b5f74604a9352.png";
import imgWaveshrimp1 from "../assets/8ed6ffcdc268d308a4030ce2147c31953f0a15c1.png";
import imgWavecrab1 from "../assets/d6157abe27276ac4289d3e009849ea4c61b53793.png";
import imgWaveBostonTag1 from "../assets/b51e75b846b165b8c3a5201d7f1e678ff2d29d2f.png";

export default function Frame() {
  return (
    <div className="bg-white mix-blend-multiply relative size-full">
      <div className="absolute h-[895px] left-[-25px] top-0 w-[427px]" data-name="wavemap 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWavemap1} />
      </div>
      <div className="absolute h-[479px] left-[-101px] top-[691px] w-[460px]" data-name="waveocto 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaveocto1} />
      </div>
      <div className="absolute h-[306px] left-[9px] top-[8px] w-[294px]" data-name="waveocto 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaveocto1} />
      </div>
      <div className="absolute h-[361px] left-[-11px] top-[484px] w-[347px]" data-name="waveshrimp 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaveshrimp1} />
      </div>
      <div className="absolute flex h-[361px] items-center justify-center left-[-94px] top-[-47px] w-[347px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[361px] relative w-[347px]" data-name="waveshrimp 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaveshrimp1} />
          </div>
        </div>
      </div>
      <div className="absolute h-[376px] left-[101px] top-[421px] w-[361px]" data-name="wavecrab 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWavecrab1} />
      </div>
      <div className="absolute flex h-[120.412px] items-center justify-center left-[227px] top-[343px] w-[84.56px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[15.82deg]">
          <div className="h-[109px] relative w-[57px]" data-name="WaveBoston Tag 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaveBostonTag1} />
          </div>
        </div>
      </div>
    </div>
  );
}