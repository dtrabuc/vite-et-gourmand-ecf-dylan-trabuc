// Base de données des menus
const lesMenus = [
    {
        id: 1,
        nom: "Menu Prestige",
        categorie: "premium",
        prix: 49.50,
        personnesMin: 10,
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500",
        description: "Un menu d'exception pour vos événements les plus raffinés",
        tags: ["Premium", "Gastronomique"],
        plats: {
            entrees: ["Foie gras mi-cuit", "Saint-Jacques poêlées"],
            plats: ["Filet de bœuf Rossini", "Homard grillé"],
            desserts: ["Macaron Paris-Brest", "Millefeuille vanille"]
        }
    },
    {
        id: 2,
        nom: "Menu Végétarien Délice",
        categorie: "vegetarien",
        prix: 35.00,
        personnesMin: 8,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        description: "Des saveurs végétales raffinées et créatives",
        tags: ["Végétarien", "Bio"],
        plats: {
            entrees: ["Gaspacho de tomates anciennes", "Salade quinoa avocat"],
            plats: ["Risotto aux champignons", "Tarte fine légumes du soleil"],
            desserts: ["Tiramisu vegan", "Tarte citron meringuée"]
        }
    },
    {
        id: 3,
        nom: "Menu Cocktail Chic",
        categorie: "premium",
        prix: 42.00,
        personnesMin: 15,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500",
        description: "Parfait pour vos réceptions debout élégantes",
        tags: ["Cocktail", "Premium"],
        plats: {
            entrees: ["Mini burgers gourmets", "Verrines saumon fumé"],
            plats: ["Brochettes de poulet mariné", "Crevettes sauce curry"],
            desserts: ["Mini éclairs", "Verrines fruits rouges"]
        }
    }
];

// Avis clients
const lesAvis = [
    { id: 1, auteur: "Marie L.", note: 5, commentaire: "Service impeccable et plats délicieux !", date: "2026-01-15" },
    { id: 2, auteur: "Pierre D.", note: 5, commentaire: "Nos invités ont adoré le menu Prestige", date: "2026-01-10" },
    { id: 3, auteur: "Sophie M.", note: 4, commentaire: "Excellente qualité, livraison à l'heure", date: "2026-01-05" }
];

// Commandes (pour la page compte)
const mesCommandes = [
    {
        id: "CMD-001",
        idMenu: 1,
        titreMenu: "Menu Prestige",
        date: "2026-02-15",
        heure: "19:00",
        personnes: 15,
        prixTotal: 742.50,
        statut: "confirmed",
        adresse: "123 rue de la République",
        ville: "Paris"
    },
    {
        id: "CMD-002",
        idMenu: 3,
        titreMenu: "Menu Cocktail Chic",
        date: "2026-03-20",
        heure: "18:30",
        personnes: 20,
        prixTotal: 840.00,
        statut: "pending",
        adresse: "45 avenue des Champs",
        ville: "Lyon"
    },
    {
        id: "CMD-003",
        idMenu: 2,
        titreMenu: "Menu Végétarien Délice",
        date: "2025-12-10",
        heure: "12:00",
        personnes: 12,
        prixTotal: 420.00,
        statut: "delivered",
        adresse: "78 boulevard Victor Hugo",
        ville: "Marseille"
    }
];
