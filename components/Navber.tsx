import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Navber() {
  return (
    <div className="flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px] ">
      <Image src="/logo.png" alt="" height={100} width={100} />
      <div className="hidden md:flex gap-5">
        <h2 className="hover:bg-blue-500 p-2 px-3 rounded-full hover:text-white cursor-pointer ">
          Home
        </h2>
        <h2 className="hover:bg-blue-500 p-2 px-3 rounded-full hover:text-white cursor-pointer ">
          History
        </h2>
        <h2 className="hover:bg-blue-500 p-2 px-3 rounded-full hover:text-white cursor-pointer ">
          Content
        </h2>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
