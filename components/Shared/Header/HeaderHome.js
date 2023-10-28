"use client";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeaderHome() {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navBg, setNavBg] = useState(false);
  // console.log(lastScrollY);

  const controlNavber = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };
  // Navber scroll end

  useEffect(() => {
    if (window.scrollY > 200) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", controlNavber);
    return () => {
      window.removeEventListener("scroll", controlNavber);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`w-full flex justify-center z-40 fixed top-0 transition-transform duration-300 px-4 mx-auto text-white shadow-lg  ${show} ${
        navBg ? "bg-black/75" : ""
      } `}
    >
      <div
        className={`max-w-[1600px] h-[50px] w-full  transition-transform duration-200 mx-auto  flex items-center justify-between  ${
          navBg ? "" : "bg-transparent"
        }`}
      >
        <Link href="/">
          <Image src="/logo.png" alt="" height={150} width={150} />
        </Link>
        <div className="hidden lg:flex gap-5">
          <h2 className="hover:bg-yellow-500 py-1 px-3 rounded-full hover:text-white cursor-pointer duration-300">
            About Us
          </h2>
          <Link
            href="/products"
            className="hover:bg-yellow-500 duration-300 py-1 px-3 rounded-full hover:text-white cursor-pointer"
          >
            Auto Listing
          </Link>
          {/* <h2 className="hover:bg-blue-500 p-2 px-3 rounded-full hover:text-white cursor-pointer ">
            WHAT WE OFFER
          </h2> */}
          <h2 className="hover:bg-yellow-500 duration-300 py-1 px-3 rounded-full hover:text-white cursor-pointer ">
            Get In Touch
          </h2>
          <h2 className="hover:bg-yellow-500 duration-300 py-1 px-3 rounded-full hover:text-white cursor-pointer ">
            Our Services
          </h2>
          <Link
            href="/addproduct"
            className="hover:bg-yellow-500 duration-300 py-1 px-3 rounded-full hover:text-white cursor-pointer "
          >
            Dashboard
          </Link>
        </div>
        {/* <UserButton afterSignOutUrl="/" /> */}
      </div>
    </div>
  );
}
