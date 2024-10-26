import Image from "next/image";
import Old1 from "@/app/img/old1.jpg";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-3/4 mx-auto">
      <div className="w-full lg:w-1/2 p-4 text-center">
        <h1 className="text-4xl m-2">Caring for your loved ones.</h1>
        <p>
          We have the latest technology to help you care for your loved ones. In
          addition, we have a team of professionals who are ready to help you
          with any questions you may have.
        </p>
      </div>
      <div className="w-full lg:w-1/2 p-4 flex justify-center">
        <Image src={Old1} alt="Fitness Image" />
      </div>
    </div>
  );
}
