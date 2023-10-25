import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navber3() {
  return (
    <div className="flex items-center justify-between p-2 px-20 shadow-sm border-b-[1px] ">
      <Link href="/">
        <Image src="/logo.png" alt="" height={150} width={150} />
      </Link>
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
