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
      <nav className="bg-uclablue text-white w-full h-16 font-bold text-1xl sm:flex items-center">
        {openMenu ? (
          <Image
            className="flex w-9 h-full justify-self-center pointer sm:hidden"
            src={BurgerMenu}
            alt="Burger Menu"
            priority
            onClick={handleOpenMenu}
          />
        ) : (
          <>
            <Image
              className="h-full flex justify-self-center text-center pointer w-6 sm:hidden"
              src={X}
              alt="X Menu"
              onClick={handleOpenMenu}
            />
            {!openMenu && (
              <ul className="z-10 relative bg-black w-full flex flex-col items-center pointer sm:hidden">
                <li>
                  <a href="/start">Start</a>
                </li>
                <li>
                  <a href="/dashboard">Dashboard</a>
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
            )}
          </>
        )}
        <ul className="hidden sm:w-full sm:flex">
          {/* Logo */}
          <li className="ml-6 w-full flex justify-start">
            <a href="/">Care Hands</a>
          </li>
          {/* Start and Careers */}
          <div className="w-full flex justify-center">
            <li className="mr-6">
              <a href="/start">Start</a>
            </li>
            <li className="mr-6">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="">
              <a href="/career">Careers</a>
            </li>
          </div>
          {/* Sign Up and Login */}
          <div className="w-full flex justify-end">
            <li className="mr-6">
              <a href="/signup">Sign Up</a>
            </li>
            <li className="mr-6">
              <a href="/login">Login</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
