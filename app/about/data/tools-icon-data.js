// skill icon
import PhotoshopSVG from "../../../public/image/about/tools/icon/photoshop.svg";
import IllustratorSVG from "../../../public/image/about/tools/icon/illustrator.svg";
import AfterEffectSVG from "../../../public/image/about/tools/icon/after effect.svg";
import FigmaSVG from "../../../public/image/about/tools/icon/figma.svg";
import FramerSVG from "../../../public/image/about/tools/icon/framer.svg";
import BlenderSVG from "../../../public/image/about/tools/icon/blender.svg";
import AffinitySVG from "../../../public/image/about/tools/icon/affinity.svg";

export const iconLists = [
  { name: "photoshop", src: PhotoshopSVG, background: "#5EC9FA", rate: 9 },
  { name: "illustrator", src: IllustratorSVG, background: "#FF9B61", rate: 9 },
  {
    name: "after effect",
    src: AfterEffectSVG,
    background: "#A876FF",
    rate: 7.5,
  },
  { name: "figma", src: FigmaSVG, background: "#FF6480", rate: 9.5 },
  { name: "framer", src: FramerSVG, background: "#A6D263", rate: 9.2 },
  { name: "blender", src: BlenderSVG, background: "#FBBF24", rate: 7.5 },
  { name: "affinity", src: AffinitySVG, background: "#8BDCD3", rate: 8.8 },
];

// left btn
export const topBarBtnColor = ["#FE5F57", "#FEBC2D", "#2AC840"];

// right btn
const MinusSvg = () => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M6 14H22" stroke="#0E0E0F" strokeWidth="3" />
    </svg>
  );
};

const SquareSvg = () => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect
        x="5.5"
        y="5.5"
        width="17"
        height="17"
        rx="1"
        stroke="#0E0E0F"
        strokeWidth="3"
      />
    </svg>
  );
};

const MultiSvg = () => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9983 16.1196L7.12132 22.9965L5 20.8752L11.8769 13.9982L5.00002 7.12132L7.12134 5L13.9983 11.8769L20.8752 5L22.9965 7.12132L16.1196 13.9982L22.9965 20.8752L20.8752 22.9965L13.9983 16.1196Z"
        fill="#0E0E0F"
      />
    </svg>
  );
};

export const topBarRightBtn = [
  { name: "minus", icon: <MinusSvg /> },
  { name: "minus", icon: <SquareSvg /> },
  { name: "minus", icon: <MultiSvg /> },
];

// other skills
export const otherSkillsList = [
  { name: "lottie", rate: 6 },
  { name: "motion", rate: 8 },
  { name: "use-gesture", rate: 5 },
  { name: "react-three", rate: 2 },
  { name: "spline", rate: 4 },
  { name: "rive", rate: 7 },
];
