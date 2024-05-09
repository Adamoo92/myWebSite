import React from "react";

function DetailLine() {
  return (
    <div className="w-2 flex justify-end relative">
      <div className="absolute w-[3px] h-full bg-ownBlack before:block before:absolute before:w-2 before:h-1/3 before:bg-ownBlack before:right-0 after:block after:w-0 after:h-0 after:border-solid after:border-0 after:border-r-8 after:border-b-8  after:border-transparent after:border-r-ownBlack after:absolute after:right-0 after:top-1/3" />
    </div>
  );
}

export default DetailLine;
