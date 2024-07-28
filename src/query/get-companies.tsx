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
    title: "enedis.com",
    src: "/images/enedis.png",
  },
  {
    title: "travaux.com",
    src: "/images/travaux.png",
  },
  {
    title: "tekyn sas",
    src: "/images/tekyn.png",
  },
  {
    title: "digital virgo",
    src: "/images/digital-virgo.png",
  },
  {
    title: "docomo digital",
    src: "/images/docomo-digital.png",
  },
  {
    title: "ri7",
    src: "/images/ri7.png",
  },
  {
    title: "see-tickets",
    src: "/images/see-tickets.png",
  },
  {
    title: "formasup",
    src: "/images/formasup.png",
  },
  {
    title: "Planet-Cards",
    src: "/images/planet-cards.png",
  },
];

export const getCompanies = () => {
  return companies;
};
