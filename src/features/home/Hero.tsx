import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="mb-5">
      <div className="container text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Construisez et développez vos futurs projets avec nous.
          </h1>
          <p className="max-w-xl mx-auto">
            Avec <strong className="font-bold">MKL DevOps</strong>, le processus
            devient plus simple et efficace dans la construction et le
            développement de vos applications SaaS, ou toute idée
            d&apos;entreprise.
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
            <Link
              className={cn(buttonVariants({ variant: "inverse" }))}
              href="/get-started"
            >
              Construisons
            </Link>
            <Link
              className={cn(buttonVariants({ variant: "outline" }))}
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
