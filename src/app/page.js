"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "60%", left: "55%" });
  const router = useRouter();

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 80);
    const randomLeft = Math.floor(Math.random() * 80);

    setNoPosition({
      top: randomTop + "%",
      left: randomLeft + "%",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-red-200 overflow-hidden">

      {!opened ? (
        <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-6">
            💖 Open My Heart 💖
          </h1>
          <button
            onClick={() => setOpened(true)}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg"
          >
            Touch Here ❤️
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-6">
            I am ready to share my life long journey with you 💍
          </h1>
          <p className="text-xl mb-10 text-white font-semibold drop-shadow-md">
            Can you join with me?
          </p>


          <div className="flex justify-center gap-10 relative">

            {/* YES Button → Navigate */}
            <button
              onClick={() => router.push("/thankyou")}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg"
            >
              Yes 💖
            </button>

            {/* NO Button */}
            <button
              onMouseEnter={moveNoButton}
              style={{
                position: "absolute",
                top: noPosition.top,
                left: noPosition.left,
              }}
              className="bg-gray-500 text-white px-6 py-3 rounded-full text-lg transition-all duration-300"
            >
              No 😅
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
