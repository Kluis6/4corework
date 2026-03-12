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
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <nav className="w-full bg-black sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-3 md:px-2">
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
              <div className="bg-[#84AF00] flex justify-center items-center size-9 rounded">
                <IoMenu className="text-white text-2xl" />
              </div>
            </DrawerTrigger>
            <DrawerContent >
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>
                  Set your daily activity goal.
                </DrawerDescription>
              </DrawerHeader>
              <div className="no-scrollbar overflow-y-auto px-4"></div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </>
  );
}
