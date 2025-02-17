import React from "react";

function Footer() {
  return (
    <footer className="m-10 pt-32 text-center">
      <div className="md:flex justify-around  space-y-10 md:space-y-0">
        <p className="text-white md:text-xl">
          Develobed by :{" "}
          <a
            className="text-orange-500 hover:underline"
            href="https://personal-page-azure-sigma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Omar Albaz
          </a>
        </p>
        <div className="flex gap-4 items-center justify-center md:gap-10 text-white">
          <a
            className="border-[2px] rounded-full text-center px-3 py-2 hover:text-black hover:bg-white hover:border-black
            duration-1000 font-semibold hover:[animation-play-state:paused] animate-[bounce_1s_ease-in-out_infinite]"
            href="https://x.com/omaralbaz444"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            className="border-[2px] rounded-full text-center p-2 hover:text-red-700 hover:bg-white hover:border-red-700
            duration-1000 font-semibold hover:[animation-play-state:paused] animate-[bounce_1.1s_ease-in-out_infinite]"
            href="https://github.com/omar96163?tab=overview&from=2024-12-01&to=2024-12-31"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gh
          </a>
          <a
            className="border-[2px] rounded-full text-center px-3 py-2 hover:text-blue-700 hover:bg-white hover:border-blue-700
            duration-1000 font-semibold hover:[animation-play-state:paused] animate-[bounce_1.2s_ease-in-out_infinite]"
            href="https://www.linkedin.com/in/omar-albaz-29b72b272/"
            target="_blank"
            rel="noopener noreferrer"
          >
            in
          </a>
        </div>
      </div>
      <p className="text-white mt-16">
        &copy; {new Date().getFullYear()}{" "}
        <strong className="text-orange-500">Film Galaxy</strong> All rights
        reserved
      </p>
    </footer>
  );
}
export default Footer;
