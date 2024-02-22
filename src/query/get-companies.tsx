interface Company {
  title: string;
  src: string;
}

const companies: Company[] = [
  {
    title: "Olympique de Marseille",
    src: "/images/om.png",
  },
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
];

export const getCompanies = () => {
  return companies;
};
