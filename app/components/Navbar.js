import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center justify-between pt-10">
      <ul className="flex">
        <Link href="/">
          <li className="mx-4 p-5 pt-3 font-semibold text-base">Home</li>
        </Link>

        <Link href="/about">
          <li className="mx-4  p-5 pt-3 font-semibold text-base">About</li>
        </Link>
        <Link href="/blog">
          <li className="mx-4  p-5 pt-3 font-semibold text-base">Blog</li>
        </Link>
        <Link href="/contact">
          <li className="mx-4  p-5 pt-3 font-semibold text-base">
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
