import React from "react";

const SplitLineShapeTop = () => {
  return (
    <svg width="100" height="32" viewBox="0 0 100 32" fill="none">
      <path d="M0 6H28L50 28L72 6H100" stroke="black" strokeWidth="2" />
      <path d="M0 12H42L50 20L58 12H100" stroke="black" strokeWidth="2" />
      <path d="M45 9L50 4L55 9L50 14L45 9Z" fill="black" />
    </svg>
  );
};

const SplitLineShapeBottom = () => {
  return (
    <svg width="64" height="24" viewBox="0 0 64 24" fill="none">
      <path d="M0 12H16" stroke="#0E0E0F" strokeWidth="2" />
      <path d="M48 12H64" stroke="#0E0E0F" strokeWidth="2" />
      <path
        d="M28 12L38 2L48 12L38 22L28 12Z"
        stroke="#0E0E0F"
        strokeWidth="2"
      />
      <path
        d="M16 12L26 2L36 12L26 22L16 12Z"
        stroke="#0E0E0F"
        strokeWidth="2"
      />
      <path d="M58 12L61 9L64 12L61 15L58 12Z" fill="#0E0E0F" />
      <path d="M0 12L3 9L6 12L3 15L0 12Z" fill="#0E0E0F" />
    </svg>
  );
};

function SplitLine(props) {
  return (
    <div
      className={`flex flex-row w-full h-[13px]  relative  ${
        props.top
          ? "items-start before:border-b-2 before:border-b-ownBlack after:border-b-2 after:border-b-ownBlack"
          : "items-end before:border-t-2 before:border-t-ownBlack after:border-t-2 after:border-t-ownBlack"
      } before:block before:h-[13px] before:flex-1  after:block after:h-[13px] after:flex-1 `}
    >
      <div className="flex-none">
        {props.top ? (
          <SplitLineShapeTop />
        ) : props.bottom ? (
          <SplitLineShapeBottom />
        ) : (
          <SplitLineShapeBottom />
        )}
      </div>
    </div>
  );
}

export default SplitLine;
