"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [navData, setNavData] = useState(false);

  return (
    <div className="flex place-items-center justify-between py-6 lg:px-28 px-10 relative ">
      <section
        id="logo"
        className="flex place-items-center gap-4 cursor-pointer"
      >
        <Image src="/logo.png" alt="logo" height={60} width={60} />
        <p className="uppercase font-extrabold  text-xl">Fitnesxia</p>
      </section>

      <section
        id="menu-button"
        className={`absolute ${
          navData ? "visible" : "hidden"
        }  right-20 lg:right-0 lg:top-0 top-20 z-[9999999] flex-col lg:flex-row  lg:relative lg:flex place-items-center gap-10`}
      >
        <div className="flex lg:flex-row flex-col place-items-center gap-5">
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

      <section
        id="menu-button"
        className="cursor-pointer lg:hidden"
        onClick={() => setNavData(true)}
      >
        <Icon icon="material-symbols:menu" fontSize={28} />
      </section>
    </div>
  );
};
