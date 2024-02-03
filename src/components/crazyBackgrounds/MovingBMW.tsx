import React from "react";

const MovingBMW = ({ additionalClasses }: { additionalClasses: string }) => {
  return (
    <div className={`fixed w-full h-full -z-10 ${additionalClasses}`}>
      <video
        autoPlay
        loop
        muted
        className="w-full absolute h-full object-cover -z-[1]"
      >
        <source src={"/bmw2.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};

export default MovingBMW;
