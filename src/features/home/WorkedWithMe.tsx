"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { getCompanies } from "@/src/query/get-companies";
import Image from "next/image";

export const WorkedWithMe = () => {
  return (
    <section className="pt-10">
      <div className="custom-screen">
        <h2 className="font-semibold text-sm text-gray-600 text-center">
          ILS M&apos;ONT FAIT CONFIANCE... ET VOUS QU&apos;ATTENDEZ-VOUS ?
        </h2>
        <div className="mt-6">
          <div className="max-w-2xl sm:text-center md:mx-auto">
            <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
              {getCompanies().map((image) => (
                <li key={image.title}>
                  <Image
                    alt={image.title}
                    src={image.src}
                    width={100}
                    height={100}
                    decoding="async"
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
