import { Raleway } from "next/font/google";
import DetailLine from "./components/detailLine";
import Contack from "./components/contack";
import HomePage from "./components/homePage";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: "800",
  style: ["normal", "italic"],
});

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <HomePage />
      </div>
      <Contack />
    </>
  );
}
