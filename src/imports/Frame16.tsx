import imgWaveStartScreen1 from "../assets/f480dde347a65393e3090e140ddaf00c49354530.png";
import imgWaveCrab1 from "../assets/d27f2093a6127dd24372448631bb13b63f3b656f.png";

export default function Frame() {
  return (
    <div className="bg-white mix-blend-multiply relative size-full">
      <div className="absolute h-[935px] left-[-28px] top-0 w-[446px]" data-name="wave start screen 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaveStartScreen1} />
      </div>
      <div className="absolute h-[183px] left-[101px] top-[542px] w-[209px]" data-name="wave crab 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[511.99%] left-[-62.2%] max-w-none top-[-271.3%] w-[213.88%]" src={imgWaveCrab1} />
        </div>
      </div>
    </div>
  );
}