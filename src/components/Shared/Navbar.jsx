"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];
  return (
    <nav className="bg-teal-500 text-white px-10 h-12 flex justify-between items-center">
      <h6 className="text-2xl italic">Next-Hero V15.2.1</h6>
      <ul className="flex justify-between items-center space-x-4 text-lg">
        {links?.map((link) => (
          <Link
            key={link.path}
            className={`${pathName == link.path && "underline font-semibold"}`}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <button className="p-1 px-4 rounded-2xl bg-red-400">
        <Link href="/login">Login</Link>
      </button>
    </nav>
  );
};

export default Navbar;
