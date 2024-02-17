import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import Link from "next/link";

export type MenuHeaderProps = {
  isMenuOpen: boolean;
};

export const MenuHeader = ({ isMenuOpen }: MenuHeaderProps) => {
  console.log(isMenuOpen);

  return (
    <div
      className={cn(
        "flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block",
        isMenuOpen ? "hidden" : null
      )}
    >
      <ul className="text-gray-700 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:text-gray-600 md:font-medium">
        <li className="duration-150 hover:text-gray-900">
          <Link className="block" href="/#features">
            Features
          </Link>
        </li>
        <li className="duration-150 hover:text-gray-900">
          <Link className="block" href="/#toolkit">
            Our toolkit
          </Link>
        </li>
        <li className="duration-150 hover:text-gray-900">
          <Link className="block" href="/#testimonials">
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className={cn(buttonVariants({ variant: "inverse" }))}
            href="/get-started"
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
