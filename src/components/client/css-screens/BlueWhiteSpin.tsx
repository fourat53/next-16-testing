const boxStyle = "bg-white size-24";

export default function BlueWhiteSpin() {
  return (
    <div className="w-[40vw] h-[30vw] flex items-center justify-center bg-[#4763B1]">
      <div className="relative w-fit grid grid-cols-2 gap-10 items-center justify-between">
        <div className={boxStyle} />
        <div className={boxStyle} />
        <div className={boxStyle} />
        <div className={boxStyle} />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4763B1] size-20 rotate-45 
          animate-[spin_4s_linear_infinite] ease-in-out"
        />
      </div>
    </div>
  );
}
