export default function BeigeFlower() {
  return (
    <div className="col-span-2 flex items-center justify-center gap-4">
      <div className="relative w-[40vw] h-[30vw] flex items-center justify-center bg-[#936928] overflow-hidden">
        <div>
          <div className="z-10 size-60 bg-white/90 rounded-full" />
          <div className="absolute -translate-y-32 left-13 size-60 rounded-full bg-[#6e480a]/70" />
          <div className="absolute -translate-y-32 right-13 size-60 rounded-full bg-[#6e480a]/70" />
          <div className="absolute top-1/2 -translate-y-[calc(50%-33px)] left-22 size-60 rounded-full bg-white/80" />
          <div className="absolute top-1/2 -translate-y-[calc(50%-33px)] right-22 size-60 rounded-full bg-white/80" />
        </div>
      </div>
      <div className="relative w-[40vw] h-[30vw] flex items-center justify-center bg-[#936928] overflow-hidden">
        <div className="flex items-center justify-center absolute h-60 w-30 mt-16 mr-40 -rotate-45">
          <div className="w-60 h-full bg-[#6e480a] rounded-l-full" />
          <div className="w-60 h-full bg-[#6e480a] rounded-r-full" />
        </div>
        <div className="flex items-center justify-center absolute h-60 w-30 mt-16 ml-40  rotate-45">
          <div className="w-60 h-full bg-[#6e480a] rounded-l-full" />
          <div className="w-60 h-full bg-[#6e480a] rounded-r-full" />
        </div>
        <div className="flex items-center justify-center absolute h-60 w-30">
          <div className="w-60 h-full bg-white rounded-l-full" />
          <div className="w-60 h-full bg-white rounded-r-full" />
        </div>
      </div>
    </div>
  );
}
