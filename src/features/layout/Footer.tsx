import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container">
      <div className="custom-screen pt-10">
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p className="text-gray-600">
            © 2024 MKL Devops. All rights reserved.
          </p>
          <div className="flex items-center gap-x-6 text-gray-400 mt-6">
            <Link
              href="https://github.com/mkldevops"
              aria-label="Github"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "inverse" }),
                "rounded-full p-2"
              )}
            >
              <Github size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/fahari"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "inverse" }),
                "rounded-full p-2"
              )}
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://twitter.com/hamada_fahari"
              aria-label="social media"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "inverse" }),
                "rounded-full p-2"
              )}
            >
              <Twitter size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
