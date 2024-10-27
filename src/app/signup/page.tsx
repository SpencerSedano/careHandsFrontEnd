"use client";

import Image from "next/image";
import SignUpImage from "@/app/img/signup.jpg";
import Navbar from "@/app/components/Navbar";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  console.log(name, lastname, email, password);

  return (
    <>
      <Navbar />
      <div className="w-full h-dvh sm:flex items-center justify-center">
        <div className="hidden sm:block w-1/2 h-1/2 flex justify-center">
          <Image className=" w-96" src={SignUpImage} alt="Sign Up Image" />
        </div>

        <div className="w-full h-[calc(100vh-128px)] flex flex-col justify-center justify-center items-center place-self-center sm:w-1/2 sm:justify-center ">
          <h1 className="text-4xl font-bold">Create an account</h1>
          <p className="mt-6 mb-6">
            Already have an account?{" "}
            <a className="pointer text-sky-500" href="/login">
              Log in
            </a>
          </p>

          <form className="flex flex-col w-48">
            <input
              className="p-4"
              type="text"
              name="name"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="p-4"
              type="text"
              name="lastname"
              placeholder="Last name"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="p-4"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="p-4"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="p-4 mt-2 border">Create account</button>
          </form>
        </div>
      </div>
    </>
  );
}
