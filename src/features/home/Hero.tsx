import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Hero = () => {
  return (
    <section>
      <div className="custom-screen py-28 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Construisez et développez votre prochaine idée d&apos;entreprise
            plus rapidement
          </h1>
          <p className="max-w-xl mx-auto">
            <strong className="font-bold">MKL DevOps</strong> rend le processus
            simple et efficace pour construire et développer vos applications
            SaaS, ou toute idée d&apos;entreprise.
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
            <Link
              className={cn(buttonVariants({ variant: "inverse" }))}
              href="/get-started"
            >
              Commençons ensemble
            </Link>
            <Link
              className="py-2.5 px-4 text-center rounded-lg duration-150 text-gray-700 border hover:bg-gray-50"
              href="/#cta"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
