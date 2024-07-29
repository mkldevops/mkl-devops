type Testimonial = {
  id: number;
  name: string;
  job: string;
  picture: string;
  content: string;
  linedinLink: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amine BEL HADJ ALI",
    job: "Full Stack Developer",
    picture: "/images/amine-bel-hadj-ali.jpeg",
    content:
      "Fahari est un développeur très compétent, doté d'une bonne analyse et manifestant un engagement profond pour un code propre et le respect des meilleures pratiques. Sa curiosité technique le pousse constamment à explorer de nouvelles solutions. Sa belle personnalité et son approche ouverte facilitent les échanges au sein de l'équipe, contribuant à un environnement de travail positif et stimulant.",
    linedinLink: "https://www.linkedin.com/in/amine-belhadjali-dev/",
  },
  {
    id: 2,
    name: "Remi FUSSIEN",
    job: "Tech enthusiast",
    picture: "/images/remi-fussien.jpeg",
    content:
      "Fahari fait parti de ces rares personnes qui arrivent à agréger l'excellence technique et le respect des valeurs humaines (tant cruciales dans une équipe). C'est une personne qui montre autant de plaisir à apprendre de ses pairs qu'à transmettre ses connaissances et le tout dans une bonne humeur constante. Cela serait avec grand plaisir que je travaillerais de nouveau avec lui sur un autre projet.",
    linedinLink: "https://www.linkedin.com/in/remi-fussien/",
  },
  {
    id: 3,
    name: "Cyril ZILBERMAN",
    job: "Fullstack freelance developer",
    picture: "/images/cyril-zilberman.jpeg",
    content:
      "Fahari est un développeur sénior avec qui il fait bon travailler. Compétent et s'adapte facilement à l'équipe. Passionnémais ouvert à la critique et aux impératifs, ça a été un plaisir de collaborer avec lui où son expertise a été d'une grande aide. Je collaborerais de nouveau avec Fahari avec plaisir si cela devait se produire.",
    linedinLink: "https://www.linkedin.com/in/cyril-z-035b1124/",
  },
  {
    id: 4,
    name: "Amine Ben Youssef",
    job: "Database expert - IT Manager",
    picture: "/images/amine-ben-youssef.jpeg",
    content:
      "Ce fut un plaisir de travailler avec toi Fahari. Notre travail sur l’optimisation des appels BDD fut un succès grâce à ton implication.",
    linedinLink: "https://www.linkedin.com/in/amine-ben-youssef-72187810",
  },
  {
    id: 5,
    name: "Seifallah Beldi",
    job: "Full Stack Developer PHP - Symfony",
    picture: "/images/seifallah-beldi.jpeg",
    content:
      "J'ai travaillé pendant 1an et plus avec Fahari sur un projet complexe au sein de Tekyn. \nFahari est indéniablement l'un des meilleurs développeurs Symfony que j'ai rencontrés au cours de ma carrière.\nSa maîtrise de Symfony est exceptionnelle. Il excelle dans la conception et la mise en œuvre de solutions techniques complexes, résolvant efficacement les défis du développement web. Fahari a une compréhension approfondie de l'architecture Symfony, et il est capable de créer des applications web robustes et extensibles.\nEn plus de ses compétences techniques, Fahari est un collègue précieux. Il est toujours disposé à partager ses connaissances et à aider les membres de l'équipe. Sa capacité à travailler en équipe, sa communication claire et son engagement en font un atout précieux pour tout projet.\nJe recommande Fahari sans réserve en tant que développeur Symfony senior. Si vous cherchez quelqu'un pour mener à bien des projets Symfony de haut niveau, vous ne trouverez pas de meilleur candidat.",
    linedinLink: "https://www.linkedin.com/in/seifallah-beldi",
  },
  {
    id: 6,
    name: "Timothée Olivar",
    job: "Développeur Senior PHP-Symfony",
    picture: "/images/timothee-olivar.jpeg",
    content:
      "Fahari est un très bon développeur senior expérimenté qui sait apporter son expertise, notamment en PHP/Symfony mais également dans beaucoup de domaine ou il excelle.\nToujours à la pointe des dernières technologies et versions des langages il sait transmettre sa passion et ses connaissances pour améliorer, former et accompagner toute une équipe dans la réussite d'un projet.\nJ'ai beaucoup appris à ses côtés, tant au niveau technique que humain, et je retravaillerai avec lui avec grand plaisir !mSi vous cherchez quelqu'un de fiable et compétent pour vous aider à réussir votre projet et vous accompagner, alors ne cherchez plus ;)",
    linedinLink: "https://www.linkedin.com/in/timothee-olivar",
  },
  {
    id: 7,
    name: "William Sauvage",
    job: "Fondateur École Ri7",
    picture: "/images/william-sauvage.jpeg",
    content:
      "Je recommande vivement Fahari autant techniquement qu’humainement. Que ce soit en tant que développeur, DevOps ou formateur. Je te remercie Fahari pour ton sérieux et ta bienveillance auprès de mes étudiants.",
    linedinLink: "https://www.linkedin.com/in/timothee-olivar",
  },
];

export const getTestimonials = () => {
  return testimonials;
};
