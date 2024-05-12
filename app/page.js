import { Raleway } from "next/font/google";
import DetailLine from "./components/detailLine";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: "800",
  style: ["normal", "italic"],
});

export default function Home() {
  return (
    <div className="text-ownBlack w-full h-full flex justify-center items-center">
      <div>
        <div className="title flex gap-8">
          <DetailLine />
          <div
            className={`${raleway.className} text-8xl italic uppercase select-none`}
          >
            <h1>Welcome to</h1>
            <h1>my website</h1>
          </div>
        </div>
        {/* <Button>Read More</Button> */}
      </div>
    </div>
  );
}
