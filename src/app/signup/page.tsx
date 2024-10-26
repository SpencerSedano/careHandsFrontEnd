import Image from "next/image";
import SignUpImage from "@/app/img/signup.jpg";
import Navbar from "@/app/components/Navbar";

export default function Signup() {
  return (
    <>
      <Navbar />
      <div className="w-full h-dvh flex items-center justify-center">
        <div className="w-1/2 h-1/2 flex justify-center">
          <Image className="w-96" src={SignUpImage} alt="Sign Up Image" />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center">
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
            />
            <input
              className="p-4"
              type="text"
              name="lastname"
              placeholder="Last name"
              required
            />
            <input
              className="p-4"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="p-4"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <button className="p-4 mt-2 border">Create account</button>
          </form>
        </div>
      </div>
    </>
  );
}
