"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { IoClose, IoMenu } from "react-icons/io5";

import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "quem somos", href: "#somos" },
  { name: "o que fazemos", href: "#fazemos" },
  { name: "clientes", href: "#clientes" },
  { name: "ebooks", href: "#ebooks" },
  { name: "Contato", href: "#contatos" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Ajusta a "janela" de detecção
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observa todas as seções que têm um ID correspondente aos links
    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <nav className="w-full bg-black sticky top-0 z-50">
        <div className=" flex items-center justify-between py-2 sm:py-4 px-4">
          <div className="relative">
            <Image src="/logo.png" alt="Logo" width={100} height={50} />
          </div>
          <ul className="md:flex space-x-4 text-white hidden ">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm sm:text-base text-white uppercase font-light px-1 transition-colors duration-300 hover:bg-[#84AF00]  ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-[#84AF00] " 
                      : "" 
                  }`}
                 
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Drawer direction="left">
            <DrawerTrigger asChild className="md:hidden flex">
              <div className="bg-[#84AF00] flex justify-center items-center size-10 rounded">
                <IoMenu className="text-white text-3xl" />
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="flex flex-row gap-1 w-full">
                <div className="w-full">
                  <DrawerTitle className="text-base">4CO</DrawerTitle>
                  <DrawerDescription>
                    Comunicação e cultura organizacional
                  </DrawerDescription>
                </div>

                <DrawerClose asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Submit"
                    className="size-10"
                  >
                    <IoClose className="size-7" />
                  </Button>
                </DrawerClose>
              </DrawerHeader>
              <div className="no-scrollbar overflow-y-auto px-4">
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#"
                      className={`text-sm sm:text-base uppercase font-light px-1 hover:bg-[#84AF00] `}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`text-sm md:text-base uppercase font-light px-1 hover:bg-[#84AF00]  `}
                    >
                      quem somos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`text-sm md:text-base uppercase font-light px-1 hover:bg-[#84AF00]  `}
                    >
                      o que fazemos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`text-sm md:text-base uppercase font-light px-1 hover:bg-[#84AF00]  `}
                    >
                      clientes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`text-sm md:text-base uppercase font-light px-1 hover:bg-[#84AF00] `}
                    >
                      ebooks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`text-xs md:text-base uppercase font-light px-1 hover:bg-[#84AF00] `}
                    >
                      contato
                    </Link>
                  </li>
                </ul>
              </div>
              <DrawerFooter className="flex flex-row justify-center items-center gap-4">
                <Link
                  href="#"
                  className=" outline p-1 rounded hover:bg-gray-200 active:bg-gray-300"
                >
                  <TiSocialLinkedin className="text-4xl" />
                </Link>
                <Link
                  href="#"
                  className=" outline p-1 rounded hover:bg-gray-200 active:bg-gray-300"
                >
                  <TiSocialFacebook className="text-4xl" />
                </Link>
                <Link
                  href="#"
                  className=" outline p-1 rounded hover:bg-gray-200 active:bg-gray-300"
                >
                  <TiSocialInstagram className="text-4xl" />
                </Link>
                <Link
                  href="#"
                  className=" outline p-1 rounded hover:bg-gray-200 active:bg-gray-300"
                >
                  <TiSocialYoutube className="text-4xl" />
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </>
  );
}
