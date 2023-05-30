import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/images/logo.png";
import { PrimaryButton } from "./button/button";

export default function Header() {
  return (
    <header>
      <div>
        <div>
          <div>
            <Image src={logo} alt="Logo" />
          </div>
          <div>
            <ul>
              <li>
                <Link href="#">Demos</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Pages</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <PrimaryButton txt={"Get Started Free"} />
        </div>
      </div>
    </header>
  );
}
