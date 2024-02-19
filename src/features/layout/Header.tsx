"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuHeader } from "./MenuHeader";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-primary-foreground fixed z-30 w-full">
      <nav className="container w-full md:static md:text-sm">
        <div className="custom-screen items-center mx-auto md:flex">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className="flex flex-col">
              <Image
                src="/images/logo-text.png"
                width={80}
                height={20}
                alt="MKL Devops logo"
              />
            </Link>
            <div className="md:hidden">
              <Button
                role="button"
                aria-label="Open the menu"
                variant="link"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {!isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="h-6 w-6"
                  >
                    <path
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                )}
              </Button>
            </div>
          </div>
          <MenuHeader isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        </div>
      </nav>
    </header>
  );
}
