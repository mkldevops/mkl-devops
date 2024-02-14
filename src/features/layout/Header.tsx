import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container">
      <nav className="bg-white w-full md:static md:text-sm ">
        <div className="custom-screen items-center mx-auto md:flex">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <Image
                src="/blinder.svg"
                width="120"
                height="50"
                alt="Blinder logo"
              />
            </Link>
            <div className="md:hidden">
              <Button
                role="button"
                aria-label="Open the menu"
                className="text-gray-500 hover:text-gray-800"
              >
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
              </Button>
            </div>
          </div>
          <div className="flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block hidden">
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
                  className="py-2.5 px-4 text-center rounded-lg duration-150 block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline"
                  href="/get-started"
                >
                  Let&apos;s work
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
