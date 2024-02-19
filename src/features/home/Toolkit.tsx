import Image from "next/image";
import "./Toolkit.css";
import { getSoftwares } from "@/src/query/get-softwares";

export const Toolkit = () => {
  return (
    <section className="py-16 ">
      <div
        id="toolkit"
        className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"
      >
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Optimisez votre potentiel avec les outils de référence
          </h2>
          <p>Découvrez nos indispensables préférés, sélectionnés pour vous</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {getSoftwares().map((software) => (
              <li className="flex gap-x-4" key={software.name}>
                <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                  <Image
                    alt={software.name}
                    src={software.logo}
                    width="24"
                    height="24"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {software.name}
                  </h4>
                  <p className="mt-3">{software.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
