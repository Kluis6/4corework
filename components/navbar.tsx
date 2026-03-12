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
import { ArrowUpIcon } from "@hugeicons/core-free-icons";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";

export default function Navbar() {
  return (
    <>
      <nav className="w-full bg-black sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-2 sm:py-4 px-3 md:px-2">
          <div className="relative">
            <Image src="/logo.png" alt="Logo" width={100} height={50} />
          </div>
          <ul className="lg:flex space-x-4 text-white hidden ">
            <li>
              <Link
                href="#"
                className={`text-sm sm:text-base uppercase font-normal px-1 transition-colors duration-200 hover:bg-[#84AF00] active:bg-green-500 `}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`text-sm md:text-base uppercase font-normal px-1 transition-colors duration-200 hover:bg-[#84AF00] active:bg-green-500 `}
              >
                quem somos
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`text-sm md:text-base uppercase font-normal px-1 transition-colors duration-200 hover:bg-[#84AF00] active:bg-green-500 `}
              >
                o que fazemos
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`text-sm md:text-base uppercase font-normal px-1 transition-colors duration-200 hover:bg-[#84AF00] active:bg-green-500 `}
              >
                clientes
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`text-sm md:text-base uppercase font-normal px-1 transition-colors duration-200 hover:bg-[#84AF00] active:bg-green-500 `}
              >
                ebooks
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`text-xs md:text-base uppercase font-normal px-1 transition-colors duration-200 hover:bg-[#84AF00] active:bg-green-500 `}
              >
                contato
              </Link>
            </li>
          </ul>
          <Drawer direction="left">
            <DrawerTrigger asChild className="lg:hidden flex">
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
                      className={`text-sm sm:text-base uppercase font-normal px-1 hover:bg-[#84AF00] `}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`text-sm md:text-base uppercase font-normal px-1 hover:bg-[#84AF00]  `}
                    >
                      quem somos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`text-sm md:text-base uppercase font-normal px-1 hover:bg-[#84AF00]  `}
                    >
                      o que fazemos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`text-sm md:text-base uppercase font-normal px-1 hover:bg-[#84AF00]  `}
                    >
                      clientes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`text-sm md:text-base uppercase font-normal px-1 hover:bg-[#84AF00] `}
                    >
                      ebooks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`text-xs md:text-base uppercase font-normal px-1 hover:bg-[#84AF00] `}
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
