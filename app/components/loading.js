"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Loading() {
  return (
    <div className="loading w-full h-full flex justify-center items-center text-ownBlack">
      <div className="flex flex-col items-center gap-3">
        <Player
          autoplay
          loop
          src="https://lottie.host/d2a43247-d6ab-4c2b-a8cf-6d2a1365b830/gqX1kCKOpo.json"
          style={{ width: 96, height: 96 }}
        />
        <p className="text-black font-sans font-medium text-base">
          Loading ...
        </p>
      </div>
    </div>
  );
}
