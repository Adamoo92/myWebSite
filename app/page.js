import { Rethink_Sans } from "next/font/google";
import DetailLine from "./components/detailLine";
import Button from "./components/button";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "800",
  style: "italic",
});

export default function Home() {
  return (
    <div className="text-ownBlack w-full h-full flex justify-center items-center">
      <div>
        <div className="title flex gap-8">
          <DetailLine />
          <div
            className={`${rethinkSans.className} text-[110px] leading-[90px] uppercase select-none`}
          >
            <h2>Welcome to</h2>
            <h2>my website</h2>
          </div>
        </div>
        <Button>Read More</Button>
      </div>
    </div>
  );
}
