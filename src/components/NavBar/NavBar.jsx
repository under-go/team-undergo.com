import Link from "next/link";

import Mobile from "@/modules/DeviceDisplayOptions/Mobile";
import PC from "@/modules/DeviceDisplayOptions/PC";
import Darkmode from "./Darkmode/Darkmode";

export default function NavBar() {
  return (
    <div>
      <PC>
        <div className="fixed w-full backdrop-blur border-b flex justify-center py-3 dark:border-b dark:border-b-zinc-500 transition-colors duration-300">
          <div className="w-2/3 flex items-center justify-between">
            <Link href="/">
              <h1 className="font-extrabold text-xl dark:text-zinc-200 transition-colors duration-300">
                Team Undergo
              </h1>
            </Link>
            <div className="flex items-center gap-8">
              <div className="flex items-center text-lg dark:text-zinc-200 transition-colors duration-300">
                <Darkmode />
              </div>
              <Link href="about-us">
                <p className="bg-gray-800 text-white py-1 px-3 rounded-full dark:bg-zinc-200 dark:text-black transition-colors duration-300">
                  About Us
                </p>
              </Link>
            </div>
          </div>
        </div>
      </PC>
      <Mobile></Mobile>
    </div>
  );
}
