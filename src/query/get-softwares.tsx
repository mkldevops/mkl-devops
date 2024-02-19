type Software = {
  name: string;
  logo: string;
  description: string;
};

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

export const getSoftwares = () => {
  return softwares;
};
