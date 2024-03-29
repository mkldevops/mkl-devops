type Testimonial = {
  name: string;
  job: string;
  picture: string;
  content: string;
  linedinLink: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Amine BEL HADJ ALI",
    job: "Full Stack Developer",
    picture:
      "https://media.licdn.com/dms/image/C5103AQEMv1mD_0lpCw/profile-displayphoto-shrink_100_100/0/1517077464982?e=1714003200&v=beta&t=oRaI9Rj9vyjvEcdB8bgfJReC86uSRhZssUc3ev5Wkes",
    content:
      "Fahari est un développeur très compétent, doté d'une bonne analyse et manifestant un engagement profond pour un code propre et le respect des meilleures pratiques. Sa curiosité technique le pousse constamment à explorer de nouvelles solutions. Sa belle personnalité et son approche ouverte facilitent les échanges au sein de l'équipe, contribuant à un environnement de travail positif et stimulant.",
    linedinLink: "https://www.linkedin.com/in/amine-belhadjali-dev/",
  },
  {
    name: "Remi FUSSIEN",
    job: "Tech enthusiast",
    picture:
      "https://media.licdn.com/dms/image/D4E03AQE-_TidBQQjWA/profile-displayphoto-shrink_100_100/0/1684238506455?e=1714003200&v=beta&t=sOXDyQ5AmCJMfIA4_2EFL_LFUU2YPRx1Qpf__HLQbIE",
    content:
      "Fahari fait parti de ces rares personnes qui arrivent à agréger l'excellence technique et le respect des valeurs humaines (tant cruciales dans une équipe). C'est une personne qui montre autant de plaisir à apprendre de ses pairs qu'à transmettre ses connaissances et le tout dans une bonne humeur constante. Cela serait avec grand plaisir que je travaillerais de nouveau avec lui sur un autre projet.",
    linedinLink: "https://www.linkedin.com/in/remi-fussien/",
  },
  {
    name: "Cyril ZILBERMAN",
    job: "Fullstack freelance developer",
    picture:
      "https://media.licdn.com/dms/image/C4D03AQHgmWp7TzHhzg/profile-displayphoto-shrink_100_100/0/1517243749500?e=1714003200&v=beta&t=M5QLAjd6n-7ZjnfRozm1iyOkzC9_Qr0VdMHTbg1eARk",
    content:
      "Fahari est un développeur sénior avec qui il fait bon travailler. Compétent et s'adapte facilement à l'équipe. Passionnémais ouvert à la critique et aux impératifs, ça a été un plaisir de collaborer avec lui où son expertise a été d'une grande aide. Je collaborerais de nouveau avec Fahari avec plaisir si cela devait se produire.",
    linedinLink: "https://www.linkedin.com/in/cyril-z-035b1124/",
  },
  {
    name: "Amine Ben Youssef",
    job: "Database expert - IT Manager",
    picture:
      "https://media.licdn.com/dms/image/D4D03AQFiJdw9Y2Yh5A/profile-displayphoto-shrink_100_100/0/1665832586241?e=1714003200&v=beta&t=SK0ZEefz8nT0OVQBOndIN6BYUNRKGsTHUYy-Vcr_vG8",
    content:
      "Ce fut un plaisir de travailler avec toi Fahari. Notre travail sur l’optimisation des appels BDD fut un succès grâce à ton implication.",
    linedinLink: "https://www.linkedin.com/in/amine-ben-youssef-72187810",
  },
  {
    name: "Seifallah Beldi",
    job: "Full Stack Developer PHP - Symfony",
    picture:
      "https://media.licdn.com/dms/image/C4E03AQFXDGUF-y96Zg/profile-displayphoto-shrink_100_100/0/1629501231102?e=1714003200&v=beta&t=8pAKzmbVT4t3SehCKZ4gOrsYHN64IvO2tvvXJYUDM_0",
    content:
      "J'ai travaillé pendant 1an et plus avec Fahari sur un projet complexe au sein de Tekyn. \nFahari est indéniablement l'un des meilleurs développeurs Symfony que j'ai rencontrés au cours de ma carrière.\nSa maîtrise de Symfony est exceptionnelle. Il excelle dans la conception et la mise en œuvre de solutions techniques complexes, résolvant efficacement les défis du développement web. Fahari a une compréhension approfondie de l'architecture Symfony, et il est capable de créer des applications web robustes et extensibles.\nEn plus de ses compétences techniques, Fahari est un collègue précieux. Il est toujours disposé à partager ses connaissances et à aider les membres de l'équipe. Sa capacité à travailler en équipe, sa communication claire et son engagement en font un atout précieux pour tout projet.\nJe recommande Fahari sans réserve en tant que développeur Symfony senior. Si vous cherchez quelqu'un pour mener à bien des projets Symfony de haut niveau, vous ne trouverez pas de meilleur candidat.",
    linedinLink: "https://www.linkedin.com/in/seifallah-beldi",
  },
];

export const getTestimonials = () => {
  return testimonials;
};
