import imgWaypointTagStampLogo1 from "../assets/d0b2ffa5817ff19fdd0b9577a03cfe102a634fc3.png";
import imgWave1 from "../assets/6299fcc3dd55ed0321a69b91da9f896e2006ed0b.png";

export default function Frame() {
  return (
    <div className="bg-white mix-blend-multiply relative size-full">
      <div className="absolute h-[887px] left-[-103px] top-0 w-[617px]" data-name="waypoint tag-stamp logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWaypointTagStampLogo1} />
      </div>
      <div className="absolute h-[1537px] left-[-166px] top-[-80px] w-[733px]" data-name="WAVE 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWave1} />
      </div>
    </div>
  );
}