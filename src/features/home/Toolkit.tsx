import Image from "next/image";
import "./Toolkit.css";

type Software = {
  name: string;
  logo: string;
  description: string;
};

export const Toolkit = () => {
  const softwares: Software[] = [
    {
      name: "React.js",
      logo: "/images/react.svg",
      description:
        "Pour créer des interfaces utilisateur interactives à la fois simples et efficaces.",
    },
    {
      name: "Next.js",
      logo: "/images/nextjs.svg",
      description:
        "Un framework React.js qui fournit des fonctionnalités prêtes à l'emploi, accelérant le développement.",
    },
    {
      name: "Tailwind CSS",
      logo: "/images/tailwindcss.svg",
      description:
        "Un framework CSS utilitaire pour la création rapide d'interfaces utilisateur.",
    },
    {
      name: "Vercel",
      logo: "/images/vercel.svg",
      description:
        "Une plateforme cloud qui permet aux développeurs d'héberger des applications web simples et complexes.",
    },
    {
      name: "Figma",
      logo: "/images/figma.svg",
      description:
        "Une application de conception d'interface utilisateur permettant de créer des prototypes, des maquettes et des designs.",
    },
    {
      name: "Symfony",
      logo: "/images/symfony.svg",
      description:
        "Un framework PHP back-end pour la création d'applications web.",
    },
    {
      name: "PostgreSQL",
      logo: "/images/postgresql.svg",
      description:
        "Un système de gestion de base de données relationnelle rapide et robuste.",
    },
    {
      name: "Docker",
      logo: "/images/docker.svg",
      description:
        "Une plateforme open-source pour automatiser le déploiement d'applications dans des conteneurs logiciels.",
    },
  ];

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
            {softwares.map((software) => (
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
