"use client";

import Image from "next/image";
import { useState } from "react";

export const WorkedWithMe = () => {
  const [images, setImages] = useState<
    Array<{
      title: string;
      src: string;
    }>
  >([
    {
      title: "travaux.com",
      src: "/images/travaux.webp",
    },
    {
      title: "tekyn sas",
      src: "/images/tekyn.png",
    },
    {
      title: "digital virgo",
      src: "/images/digital-virgo.webp",
    },
    {
      title: "docomo digital",
      src: "/images/docomo-digital.png",
    },
    {
      title: "ri7",
      src: "/images/ri7.jpeg",
    },
    {
      title: "see-tickets",
      src: "/images/see-tickets.webp",
    },
  ]);

  return (
    <section className="pt-10">
      <div className="custom-screen">
        <h2 className="font-semibold text-sm text-gray-600 text-center">
          ILS M&apos;ONT FAIT CONFIANCE... ET VOUS QU&apos;ATTENDEZ-VOUS ?
        </h2>
        <div className="mt-6">
          <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
            {images.map((image) => (
              <li key={image.title}>
                <Image
                  alt={image.title}
                  src={image.src}
                  width={100}
                  height={100}
                  decoding="async"
                  loading="lazy"
                  className="grayscale"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
