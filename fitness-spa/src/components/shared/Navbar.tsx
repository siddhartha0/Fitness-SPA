"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navbarData = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "css Challenge",
    path: "/css-challenge",
  },
  {
    id: 3,
    title: "Program",
    path: "#",
  },
  {
    id: 4,
    title: "Membership",
    path: "#",
  },
  {
    id: 5,
    title: "Testimonials",
    path: "#",
  },
];

export const Navbar = () => {
  const path = usePathname();
  return (
    <div className="flex place-items-center justify-between py-6 px-28">
      <section
        id="logo"
        className="flex place-items-center gap-4 cursor-pointer"
      >
        <Image src="/logo.png" alt="logo" height={60} width={60} />
        <p className="uppercase font-extrabold  text-xl">Fitnesxia</p>
      </section>
      <section id="menu-button" className="flex place-items-center gap-10">
        <div className="flex place-items-center gap-5">
          {navbarData.map((menu) => (
            <Link
              href={menu.path}
              className={`capitalize ${
                menu.path === path ? "text-active-red" : ""
              }`}
              key={menu.id}
            >
              {menu.title}
            </Link>
          ))}
        </div>
        <button className="flex bg-red rounded-lg capitalize font-semibold py-2 px-6">
          sign up
        </button>
      </section>
    </div>
  );
};
