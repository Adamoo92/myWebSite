import MovePng from "@/public/image/about/graphicLogo/frameUI/move.png";
import PenPng from "@/public/image/about/graphicLogo/frameUI/pen.png";
import PencilPng from "@/public/image/about/graphicLogo/frameUI/pencil.png";
import FillPng from "@/public/image/about/graphicLogo/frameUI/fill.png";
import ImagePng from "@/public/image/about/graphicLogo/frameUI/image.png";
import RoundedRectPng from "@/public/image/about/graphicLogo/frameUI/roundedRect.png";
import EllipsePng from "@/public/image/about/graphicLogo/frameUI/ellipse.png";
import TextPng from "@/public/image/about/graphicLogo/frameUI/text.png";
import MeasurePng from "@/public/image/about/graphicLogo/frameUI/measure.png";
import ZoomPng from "@/public/image/about/graphicLogo/frameUI/zoom.png";
import AddSvg from "@/public/image/about/graphicLogo/frameUI/add.svg";
import SubtractSvg from "@/public/image/about/graphicLogo/frameUI/subtract.svg";
import IntersectSvg from "@/public/image/about/graphicLogo/frameUI/intersect.svg";
import CombineSvg from "@/public/image/about/graphicLogo/frameUI/combine.svg";
import DivideSvg from "@/public/image/about/graphicLogo/frameUI/divide.svg";
import Localization from "@/public/image/about/graphicLogo/frameUI/localization.svg";
import Settings from "@/public/image/about/graphicLogo/frameUI/settings.svg";
import Preview from "@/public/image/about/graphicLogo/frameUI/preview.svg";
import AihuxiSvg from "@/public/image/about/graphicLogo/logo/aihuxi.svg";
import AikayouSvg from "@/public/image/about/graphicLogo/logo/aikayou.svg";
import AishunyouSvg from "@/public/image/about/graphicLogo/logo/aishunyou.svg";
import ChengxinSvg from "@/public/image/about/graphicLogo/logo/chengxin.svg";
import DelinSvg from "@/public/image/about/graphicLogo/logo/delin.svg";
import DilongxinbaoSvg from "@/public/image/about/graphicLogo/logo/dilongxinbao.svg";
import JunbijingSvg from "@/public/image/about/graphicLogo/logo/junbijing.svg";
import NvixsSvg from "@/public/image/about/graphicLogo/logo/nvixs.svg";
import PaimuSvg from "@/public/image/about/graphicLogo/logo/paimu.svg";
import QifengSvg from "@/public/image/about/graphicLogo/logo/qifeng.svg";
import Senlinmofang1Svg from "@/public/image/about/graphicLogo/logo/senlinmofang_1.svg";
import Senlinmofang2Svg from "@/public/image/about/graphicLogo/logo/senlinmofang_2.svg";
import Senlinmofang3Svg from "@/public/image/about/graphicLogo/logo/senlinmofang_3.svg";
import VicmkSvg from "@/public/image/about/graphicLogo/logo/vicmk.svg";
import YanyuSvg from "@/public/image/about/graphicLogo/logo/yanyu.svg";
import ZavosSvg from "@/public/image/about/graphicLogo/logo/zavos.svg";

export const menuRight = [Localization, Settings, Preview];

export const tools = [
  { name: "move", text: "移动", src: MovePng },
  { name: "pen", text: "钢笔", src: PenPng },
  { name: "pencil", text: "铅笔", src: PencilPng },
  { name: "fill", text: "填充", src: FillPng },
  { name: "image", text: "图像", src: ImagePng },
  { name: "roundedRect", text: "矩形", src: RoundedRectPng },
  { name: "ellipse", text: "圆形", src: EllipsePng },
  { name: "text", text: "文字", src: TextPng },
  { name: "measure", text: "测量", src: MeasurePng },
  { name: "zoom", text: "缩放", src: ZoomPng },
];
export const shape = [AddSvg, SubtractSvg, IntersectSvg, CombineSvg, DivideSvg];

export const logoPosition = [
  {
    name: "aishunyou",
    width: 160,
    height: 80,
    left: 90,
    top: 90,
    rotate: 8,
    src: AishunyouSvg,
  },
  {
    name: "aihuxi",
    width: 160,
    height: 90,
    left: 190,
    bottom: 50,
    rotate: -6,
    src: AihuxiSvg,
  },
  {
    name: "qifeng",
    width: 160,
    height: 110,
    left: 30,
    bottom: 120,
    rotate: -7,
    src: QifengSvg,
  },
  {
    name: "senlinmofang_1",
    width: 140,
    height: 140,
    left: 200,
    bottom: 180,
    rotate: 13,
    src: Senlinmofang1Svg,
  },
  {
    name: "senlinmofang_2",
    width: 140,
    height: 140,
    right: 190,
    top: 260,
    rotate: -16,
    src: Senlinmofang2Svg,
  },
  {
    name: "senlinmofang_3",
    width: 140,
    height: 140,
    right: 185,
    bottom: 185,
    rotate: -14,
    src: Senlinmofang3Svg,
  },
  {
    name: "vicmk",
    width: 140,
    height: 140,
    left: 630,
    top: 120,
    rotate: -12,
    src: VicmkSvg,
  },
  {
    name: "delin",
    width: 180,
    height: 120,
    left: 380,
    bottom: 90,
    rotate: 10,
    src: DelinSvg,
  },
  {
    name: "dilongxinbao",
    width: 180,
    height: 90,
    right: 55,
    bottom: 70,
    rotate: 8,
    src: DilongxinbaoSvg,
  },
  {
    name: "aikayou",
    width: 140,
    height: 140,
    left: 100,
    top: 260,
    rotate: -12,
    src: AikayouSvg,
  },
  {
    name: "yanyu",
    width: 160,
    height: 80,
    right: 60,
    top: 180,
    rotate: -13,
    src: YanyuSvg,
  },
  {
    name: "chengxin",
    width: 180,
    height: 120,
    left: 406,
    top: 95,
    rotate: 7,
    src: ChengxinSvg,
  },
  {
    name: "junbijing",
    width: 140,
    height: 140,
    right: 120,
    top: 20,
    rotate: 10,
    src: JunbijingSvg,
  },
  {
    name: "nvixs",
    width: 140,
    height: 140,
    right: 280,
    bottom: 40,
    rotate: 16,
    src: NvixsSvg,
  },
  {
    name: "zavos",
    width: 140,
    height: 140,
    right: 30,
    bottom: 250,
    rotate: 11,
    src: ZavosSvg,
  },
  {
    name: "paimu",
    width: 120,
    height: 120,
    left: 240,
    top: 180,
    rotate: -30,
    src: PaimuSvg,
  },
];
