"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import Link from "next/link";
import { redirect } from "next/navigation";
import { MouseEvent } from "react";

export type MenuHeaderProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

export const MenuHeader = ({ isMenuOpen, closeMenu }: MenuHeaderProps) => {
  const goTo = (
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) => {
    event.stopPropagation();
    closeMenu();
    redirect(event.currentTarget.href);
  };

  return (
    <div
      className={cn(
        "flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block",
        isMenuOpen ? null : "hidden"
      )}
    >
      <ul className="text-gray-700 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:text-gray-600 md:font-medium">
        <li className="duration-150 hover:text-gray-900" key="features">
          <Link
            className="block"
            href="/#features"
            onClick={(event) => goTo(event)}
          >
            Nos atouts
          </Link>
        </li>
        <li className="duration-150 hover:text-gray-900" key="toolkit">
          <Link
            className="block"
            href="/#toolkit"
            onClick={(event) => goTo(event)}
          >
            Nos technologies
          </Link>
        </li>
        <li className="duration-150 hover:text-gray-900" key="testimonials">
          <Link
            className="block"
            href="/#testimonials"
            onClick={(event) => goTo(event)}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className={cn(buttonVariants({ variant: "inverse" }))}
            href="/get-started"
            onClick={(event) => goTo(event)}
          >
            Let&apos;s work
          </Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  );
};
