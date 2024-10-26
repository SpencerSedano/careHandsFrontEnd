"use client";

import { useState } from "react";
import Image from "next/image";
import BurgerMenu from "@/app/svg/burgerMenu.svg";
import X from "@/app/svg/x.svg";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(true);

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
    console.log("you clicked it");
  }

  return (
    <>
      <nav className="w-full h-24 font-bold text-2xl m-4 flex items-center">
        {openMenu ? (
          <Image
            className="w-8 sm:hidden"
            src={BurgerMenu}
            alt="Burger Menu"
            priority
            onClick={handleOpenMenu}
          />
        ) : (
          <>
            <ul className="sm:hidden">
              <Image
                className="w-8 sm:hidden"
                src={X}
                alt="X Menu"
                onClick={handleOpenMenu}
              />
              <li>
                <a href="/">Care Hands</a>
              </li>
              <li>
                <a href="/start">Start</a>
              </li>
              <li>
                <a href="/career">Career</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </>
        )}
        <ul className="hidden sm:w-full sm:flex sm:justify-evenly">
          <li>
            <a href="/">Care Hands</a>
          </li>
          <li>
            <a href="/start">Start</a>
          </li>
          <li>
            <a href="/career">Career</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
