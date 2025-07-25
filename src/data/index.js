export const dataTechTags = [
  {
    name: 'HTML5'
  },
  {
    name: 'CSS3'
  },
  {
    name: 'JavaScript'
  },
  {
    name: 'React'
  },
  {
    name: 'Redux'
  },
  {
    name: 'Jest'
  },
  {
    name: 'Tailwind CSS'
  },
  {
    name: 'SASS'
  },
  {
    name: 'Docker'
  },
  {
    name: 'Git'
  }
];

export const dataCanvasGeneral = [
  {
    name: 'HTML5',
    url: 'https://developer.mozilla.org/fr/docs/Web/HTML'
  },
  {
    name: 'CSS3',
    url: 'https://developer.mozilla.org/fr/docs/Web/CSS'
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/'
  },
  {
    name: 'SASS',
    url: 'https://sass-lang.com/'
  },
  {
    name: 'Accessibilité',
    url: 'https://fr.wikipedia.org/wiki/Accessibilité_du_web'
  },
  {
    name: 'Récit utilisateur',
    url: 'https://fr.wikipedia.org/wiki/Récit_utilisateur'
  },
  {
    name: "Cas d'utilisation",
    url: "https://fr.wikipedia.org/wiki/Cas_d'utilisation"
  },
  {
    name: 'Kanban',
    url: 'https://fr.wikipedia.org/wiki/Kanban'
  },
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript'
  },
  {
    name: 'React',
    url: 'https://fr.react.dev/'
  },
  {
    name: 'Redux',
    url: 'https://redux.js.org/'
  },
  {
    name: 'Jest',
    url: 'https://jestjs.io/fr/'
  },
  {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/fr-fr'
  },
  {
    name: 'MariaDB',
    url: 'https://mariadb.org/'
  },
  {
    name: 'NodeJS',
    url: 'https://nodejs.org/en'
  },
  {
    name: 'Express.js',
    url: 'https://expressjs.com/'
  },
  {
    name: 'Sequelize',
    url: 'https://sequelize.org/'
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com/'
  },
  {
    name: 'REST',
    url: 'https://fr.wikipedia.org/wiki/Representational_state_transfer'
  },
  {
    name: 'JSON',
    url: 'https://fr.wikipedia.org/wiki/JavaScript_Object_Notation'
  },
  {
    name: 'WordPress',
    url: 'https://fr.wordpress.org/'
  },
  {
    name: 'Git',
    url: 'https://git-scm.com/'
  },
  {
    name: 'npm',
    url: 'https://www.npmjs.com/'
  }
];

export const dataProjects = [
  {
    personal: [
      {
        name: "La bataille",
        description: {
          text: "Projet de jeu de carte « La bataille » réalisé à titre personnel. Permet de jouer contre l’ordinateur à une version simplifiée de la bataille avec un jeu de 32 cartes.",
          li: [
            {
              content: "",
              sublevel: []
            }
          ]
        },
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript"
        ],
        links: {
          github: {
            frontend: {
              text: "GitHub",
              url: "https://github.com/VGrolleau/war-card-game"
            },
            backend: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "Site La bataille",
              url: "https://virginiegrolleau.com/sites/jeux/war-card-game/index.html"
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/bataille.png"
      },
      {
        name: "Promenade en forêt",
        description: {
          text: "Projet d’histoire dont vous êtes le héros réalisé à titre personnel. Elle permet de s’évader dans une histoire fantastique unique où on se promène en forêt. Mais il arrive qu’en empruntant un chemin ou un autre on puisse se retrouver bien ennuyés…",
          li: [
            {
              content: "",
              sublevel: []
            }
          ]
        },
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Écriture d’une histoire",
          "Réflexion sur la cartographie de la promenade"
        ],
        links: {
          github: {
            frontend: {
              text: "GitHub",
              url: "https://github.com/VGrolleau/forest-game"
            },
            backend: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "Site Promenade en forêt",
              url: "https://virginiegrolleau.com/sites/jeux/forest-game/index.html"
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/promenade-en-foret.png"
      },
      {
        name: "Casse-briques",
        description: {
          text: "Projet de jeu du casse-briques réalisé à titre personnel. Possibilité de mettre en pause le jeu, de couper et remettre le son.La raquette est manipulable à la souris comme au clavier(touches fléchées).",
          li: [
            {
              content: "",
              sublevel: []
            }
          ]
        },
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Algorithmique"
        ],
        links: {
          github: {
            frontend: {
              text: "GitHub",
              url: "https://github.com/VGrolleau/casse-briques"
            },
            backend: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "Site Casse-briques",
              url: "https://virginiegrolleau.com/sites/jeux/casse-briques/index.html"
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/casse-briques.png"
      },
      {
        name: "Memory panda",
        description: {
          text: "Projet personnel de jeu de mémoire sous forme de paires de cartes à retrouver avec des animaux comme personnages. Comprend un compte des points lorsque les paires sont assemblées, un décompte lorsqu’on se trompe, et contient une surprise musicale lors de la victoire.",
          li: [
            {
              content: "",
              sublevel: []
            }
          ]
        },
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Formulaire",
          "Intégration de vidéo youtube dans une fenêtre modale"
        ],
        links: {
          github: {
            frontend: {
              text: "GitHub",
              url: "https://github.com/VGrolleau/memory-panda"
            },
            backend: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "Site Memory panda",
              url: "https://virginiegrolleau.com/sites/jeux/memory-panda/index.html"
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/memory-panda.png"
      }
    ],
    openclassrooms: [
      {
        name: "HRNet",
        description: {
          text: "Projet basé sur une application web interne qui gère les dossiers des employés d’une grande société financière. L’objectif est de mettre à jour le site, à savoir le passer de JQuery à React. Voici un récapitulatif des principales tâches:",
          li: [
            {
              content: "Convertir l’ensemble du projet en React.",
              sublevel: []
            },
            {
              content: "Convertir l’un des quatre plugins jQuery actuels en React. Remplacer les 3 plugins jQuery restants par des composants React soit en les codant, soit en les important depuis des libraires existantes.",
              sublevel: []
            },
            {
              content: "Effectuer des tests de performance Lighthouse en comparant l’ancienne et la nouvelle application.",
              sublevel: []
            }
          ]
        },
        skills: [
          "Passage d’une application JQuery en React",
          "Choix du design le plus approprié en fonction du logo",
          "Système de gestion d’état Redux",
          "Mise en place d’un Back-End avec Express, Sequelize et base de données MariaDB",
          "Transformation de plugins JQuery (sélection de date, fenêtre modale et tableau) en React via des composants existants",
          "Transformation du plugin JQuery de menu déroulant en React via sa création",
          "Publication du plugin créé sur npm"
        ],
        links: {
          github: {
            frontend: {
              text: "Frontend",
              url: "https://github.com/VGrolleau/p14-hrnet-v2-front"
            },
            backend: {
              text: "Backend",
              url: "https://github.com/VGrolleau/p14-hrnet-v2-back"
            },
            other: {
              text: "Composant menu déroulant",
              url: "https://github.com/VGrolleau/dropdown-menu-component"
            }
          },
          site: {
            app: {
              text: "",
              url: ""
            },
            other: {
              text: "npm menu déroulant",
              url: "https://www.npmjs.com/package/dropdown-menu-component"
            }
          }
        },
        imageURL: "assets/images/projects/HRnet.png"
      },
      {
        name: "ArgentBank",
        description: {
          text: "Projet basé sur le site d’une nouvelle banque qui démarre et essaie de percer dans le secteur. Le but est de mettre en place son application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil. Le développement se découpe en 2 phases :",
          li: [
            {
              content: "Phase 1 : Authentification des utilisateurs :",
              sublevel: [
                "Créer l’application complète et responsive en React.",
                "Utiliser Redux pour gérer le state."
              ]
            },
            {
              content: "Phase 2 : Transactions :",
              sublevel: [
                "Fournir un document décrivant les API proposées pour les transactions, en suivant les directives de Swagger."
              ]
            }
          ]
        },
        skills: [
          "Redux toolkit",
          "Gestion des Issues GitHub",
          "Fichier YAML utilisant la syntaxe Swagger et spécifiant les endpoints de l’API pour la phase « transactions »"
        ],
        links: {
          github: {
            frontend: {
              text: "Frontend",
              url: "https://github.com/VGrolleau/p13-argentbank-frontend"
            },
            backend: {
              text: "Backend",
              url: "https://github.com/VGrolleau/P13-ArgentBank-API"
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/argentBank.png"
      },
      {
        name: "SportSee",
        description: {
          text: "Projet basé sur le site d’une startup de coaching sportif. L’objectif est de développer la nouvelle version de la page profil de l’utilisateur. Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées. Pour ce faire, il faut intégrer des graphiques D3 ou Recharts (mon choix pour ce projet) sur l’activité sportive de l’utilisateur. Concernant les données, il faut réaliser les calls vers le back-end en NodeJS. Pour gérer ces appels, il faut utiliser soit Fetch (mon choix), soit Axios, et les réaliser en dehors des composants React via un service à part. Le site doit également disposer d’une classe de modélisation des données pour s’assurer de les formater correctement. Enfin, il faut bien documenter le code, via des capsules et des PropTypes dans ce dernier, mais également via le Readme.",
          li: [
            {
              content: "",
              sublevel: []
            }
          ]
        },
        skills: [
          "Intégration de graphiques (Recharts)",
          "Réalisation d’un mock des données de l’API",
          "Réalisation des calls HTTP / appels API pour récupérer des données (service à part)",
          "Création d’une classe de modélisation",
          "Documentation (Readme, capsules de code)"
        ],
        links: {
          github: {
            frontend: {
              text: "Frontend",
              url: "https://github.com/VGrolleau/P12-SportSee-Front"
            },
            backend: {
              text: "Backend",
              url: "https://github.com/VGrolleau/P12-SportSee-Back"
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/sportSee.png"
      },
      {
        name: "Kasa",
        description: {
          text: "Projet basé sur une plateforme web de location d’appartements entre particuliers. Le but est de démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma(responsives) et toutes les infos données. Quelques précisions sur les fonctionnalités du site: ",
          li: [
            {
              content: "Pour le défilement des photos dans la galerie (composant Gallery) :",
              sublevel: [
                "Si l’utilisateur se trouve à la première image et qu’il clique sur « image précédente », la galerie affiche la dernière image.",
                "Inversement, quand l’image affichée est la dernière de la galerie, si l’utilisateur clique sur « image suivante », la galerie affiche la première image.",
                "S’il n’y a qu’une seule image, les boutons « suivant » et « précédent » ainsi que la numérotation n’apparaissent pas."
              ]
            },
            {
              content: "La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.",
              sublevel: []
            },
            {
              content: "Collapse : Par défaut, les Collapse sont fermés à l’initialisation de la page.",
              sublevel: [
                "Si le Collapse est ouvert, le clic de l’utilisateur permet de le fermer.",
                "Inversement, si le Collapse est fermé, un clic permet de l’ouvrir."
              ]
            }
          ]
        },
        skills: [
          "React (composants, hook)",
          "React router",
          "SASS"
        ],
        links: {
          github: {
            frontend: {
              text: "Frontend",
              url: "https://github.com/VGrolleau/kasa"
            },
            backend: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "Site Kasa",
              url: "https://vgrolleau.github.io/kasa/"
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/kasa.png"
      },
      {
        name: "Learn@Home",
        description: {
          text: "Projet basé sur une application de soutien scolaire permettant aux élèves et aux bénévoles d’une association de communiquer plus facilement. L’objectif est de cadrer le projet puis de coordonner tous les développements. Pour ce faire, il faut réaliser les diagrammes de cas d’usage pour chacune des fonctionnalités majeures de chaque page, les user stories avec critère(s) d’acceptation pour chacune des fonctionnalités, les maquettes du site avec un design simple et au moins une maquette par page, et un Kanban découpant le projet.",
          li: [
            {
              content: "",
              sublevel: []
            }
          ]
        },
        skills: [
          "Diagrammes de cas d’usage",
          "User stories",
          "Création de maquettes (Figma)",
          "Kanban"
        ],
        links: {
          github: {
            frontend: {
              text: "",
              url: ""
            },
            backend: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/learnAtHome.png"
      },
      {
        name: "Billed",
        description: {
          text: "Projet basé sur une application de note de frais. Le but est, dans un premier temps, de débugger le parcours administrateur, et tester et débugger entièrement le parcours employé de l’application. Pour ce faire, il faut utiliser Chrome Debugger. Dans un second temps, il faut tester le site via Jest et réaliser son plan de tests End-to-End.",
          li: [
            {
              content: "",
              sublevel: []
            }
          ]
        },
        skills: [
          "Rapports de test containers",
          "Rapports de test views",
          "Rapports de couverture Jest",
          "Plan de tests End-to-End"
        ],
        links: {
          github: {
            frontend: {
              text: "Frontend",
              url: "https://github.com/VGrolleau/Billed-app-FR-Front"
            },
            backend: {
              text: "Backend",
              url: "https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-back"
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/billed.png"
      },
      {
        name: "Les petits plats",
        description: {
          text: "Projet basé sur un site de recettes de cuisine à l’instar de Marmiton ou 750g. L’objectif est de développer une fonctionnalité de recherche et de filtre, tout en respectant le design défini à la lettre. Pour cela, le site doit être fait en se basant sur des use cases, en planifiant 2 versions de l’algorithme de la fonctionnalité de recherche, et en renseignant le document d’investigation de fonctionnalité. Des tests JSBen.ch pour le comparatif de performance ont bien évidemment dû être effectués.",
          li: [
            {
              content: "",
              sublevel: []
            }
          ]
        },
        skills: [
          "Compréhension de fiches de cas d’utilisation (Use cases)",
          "Planification de 2 versions de la fonctionnalité de recherche",
          "Boucles natives (while, for…)",
          "Programmation fonctionnelle avec les méthodes de l’objet array (foreach, filter, map, reduce)",
          "Remplissage du document d’investigation de fonctionnalité",
          "Algorigramme",
          "Implémentation des 2 versions de la fonctionnalité de recherche",
          "Test de performance JsBen.ch"
        ],
        links: {
          github: {
            frontend: {
              text: "Frontend",
              url: "https://github.com/VGrolleau/les-petits-plats"
            },
            backend: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "Site Les petits plats",
              url: "https://vgrolleau.github.io/les-petits-plats/"
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/les-petits-plats.png"
      },
      {
        name: "FishEye",
        description: {
          text: "Projet basé sur un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux. Le but est de construire un prototype fonctionnel en HTML, CSS et JavaScript, avec pour priorité absolue l’accessibilité; il doit donc être utilisable par les lecteurs d’écran. Le site utilise également le pattern Factory Method.",
          li: [
            {
              content: "",
              sublevel: []
            }
          ]
        },
        skills: [
          "Import de données JSON",
          "Promesses Fetch",
          "Accessibilité(aria - label, AChecker)",
          "Pattern Factory Method",
          "Fenêtre modale",
          "Lightbox",
          "Système de likes et de tri",
          "ESlint"
        ],
        links: {
          github: {
            frontend: {
              text: "Frontend",
              url: "https://github.com/VGrolleau/Front-End-Fisheye"
            },
            backend: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "Site FishEye",
              url: "https://vgrolleau.github.io/Front-End-Fisheye/"
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/fisheye.png"
      },
      {
        name: "GameOn",
        description: {
          text: "Projet basé sur un site de jeux vidéos. L’objectif est de terminer la partie front- end responsive du site en JavaScript (à savoir la landing page), de bien documenter son code, et de tester manuellement ce dernier.",
          li: [
            {
              content: "",
              sublevel: []
            }
          ]
        },
        skills: [
          "Travail sur un repo GitHub forké",
          "JavaScript",
          "Commentaires dans le code",
          "Tests manuels pour les fonctionnalités, les entrées de formulaire et l’affichage responsive"
        ],
        links: {
          github: {
            frontend: {
              text: "Frontend",
              url: "https://github.com/VGrolleau/GameOn-website-FR"
            },
            backend: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "Site GameOn",
              url: "https://vgrolleau.github.io/GameOn-website-FR/"
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/gameOn.png"
      },
      {
        name: "Ohmyfood",
        description: {
          text: "Projet basé sur un site répertoriant les menus de restaurants gastronomiques. L’objectif est de développer ce site 100% mobile et d’y intégrer 4 menus à partir d’un brief. On doit également y trouver des animations CSS comme un loader au chargement de la page.",
          li: [
            {
              content: "",
              sublevel: []
            }
          ]
        },
        skills: [
          "Effets graphiques et animations CSS(loader)",
          "Responsive mobile, tablette, ordinateur",
          "Validateurs HTML et CSS du W3C",
          "Compatibilité avec les dernières versions ordinateur de Chrome et Firefox",
          "Versioning GitHub"
        ],
        links: {
          github: {
            frontend: {
              text: "Frontend",
              url: "https://github.com/VGrolleau/VirginieGrolleau_3_02032022"
            },
            backend: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "Site Ohmyfood",
              url: "https://vgrolleau.github.io/VirginieGrolleau_3_02032022/"
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/ohmyfood.png"
      },
      {
        name: "Booki",
        description: {
          text: "Projet basé sur un site permettant aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Les hébergements peuvent également être filtrés par thématique, par exemple leur budget ou leur ambiance. Le but est de créer un prototype en intégrant la maquette en HTML et CSS grâce à un design basé sur les principes du Material Design.",
          li: [
            {
              content: "",
              sublevel: []
            }
          ]
        },
        skills: [
          "HTML (Comprendre et intégrer une maquette)",
          "CSS (Normalize.css, Flexbox)",
          "Validateur HTML et CSS du W3C"
        ],
        links: {
          github: {
            frontend: {
              text: "",
              url: ""
            },
            backend: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "Site Booki",
              url: "https://virginiegrolleau.com/sites/openclassrooms/booki/index.html"
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/booki.png"
      }
    ],
    freelance: [
      {
        name: "Collectif Mélusine",
        description: {
          text: "Site vitrine du Collectif Mélusine, tiers-lieux à Lusignan et dont je suis bénévole.",
          li: [
            {
              content: "",
              sublevel: []
            }
          ]
        },
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript"
        ],
        links: {
          github: {
            frontend: {
              text: "",
              url: ""
            },
            backend: {
              text: "",
              url: ""
            },
            other: {
              text: "",
              url: ""
            }
          },
          site: {
            app: {
              text: "Site Collectif",
              url: "https://collectifmelusine.org/"
            },
            other: {
              text: "",
              url: ""
            }
          }
        },
        imageURL: "assets/images/projects/collectif.png"
      }
    ]
  }
]
