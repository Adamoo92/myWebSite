import Contack from "./components/contack";
import HomePage from "./components/homePage";

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
