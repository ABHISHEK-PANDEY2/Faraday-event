import React from "react";

function Countdown({ eventTitle }) {
  return (
    <div className="text-center -mt-24 w-full md:max-w-[420px]">
      <h1 className="text-4xl font-bold md:text-left">{eventTitle}</h1>

      <div className="bg-white px-8 py-8 shadow-md">
        <div className="flex justify-between ">
          <div className="flex flex-col justify-center text-2xl font-bold">
            09
            <span className="text-xs font-normal">Days</span>
          </div>
          <div className="flex flex-col justify-center text-2xl font-bold">
            09
            <span className="text-xs font-normal">Hours</span>
          </div>
          <div className="flex flex-col justify-center text-2xl font-bold">
            09
            <span className="text-xs font-normal">Minutes</span>
          </div>
          <div className="flex flex-col justify-center text-2xl font-bold">
            09
            <span className="text-xs font-normal">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;