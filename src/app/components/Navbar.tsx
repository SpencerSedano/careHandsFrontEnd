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
      <nav
        className={
          openMenu
            ? "bg-uclablue text-white w-full h-32 font-bold text-1xl sm:flex items-center"
            : "bg-uclablue text-white w-full h-32 font-bold text-1xl sm:flex items-center"
        }
      >
        {openMenu ? (
          <Image
            className="flex grow h-10 pointer sm:hidden"
            src={BurgerMenu}
            alt="Burger Menu"
            priority
            onClick={handleOpenMenu}
          />
        ) : (
          <>
            <Image
              className="flex justify-self-center pointer w-6 sm:hidden"
              src={X}
              alt="X Menu"
              onClick={handleOpenMenu}
            />
            <ul className="w-full flex flex-col items-center pointer sm:hidden">
              <li>
                <a href="/start">Start</a>
              </li>
              <li>
                <a href="/career">Careers</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
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
            <a href="/career">Careers</a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
