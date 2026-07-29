export type Category = "Plats" | "Boissons" | "Desserts";

export interface MenuItem {
  id: number;
  nom: string;
  description: string;
  prix: string;
  categorie: Category;
  image: string;
}

export const MENU: MenuItem[] = [
  { id: 1, nom: "Foutou Banane Sauce Graine", description: "Pâte de banane plantain pilée, servie avec une riche sauce graine à l'huile de palme, viande ou poisson.", prix: "2 500 FCFA", categorie: "Plats", image: "🍛" },
  { id: 2, nom: "Alloco Œufs", description: "Bananes plantain frites, œufs durs, sauce tomate pimentée maison.", prix: "1 800 FCFA", categorie: "Plats", image: "🍌" },
  { id: 3, nom: "Attiéké Poisson Braisé", description: "Poisson braisé, attiéké, alloco (banane plantain frite), légumes sautés et piment.", prix: "3 200 FCFA", categorie: "Plats", image: "🐟" },
  { id: 4, nom: "Chicken Tenders & Frites", description: "Poulet pané croustillant, frites maison, sauce ketchup et mayonnaise.", prix: "3 200 FCFA", categorie: "Plats", image: "🍗" },
  { id: 5, nom: "Garba", description: "Attiéké, thon frit, sauce tomate-oignon fraîche et piment — le classique ivoirien.", prix: "3 000 FCFA", categorie: "Plats", image: "🐠" },
  { id: 6, nom: "Foutou Banane", description: "Pâte de banane plantain pilée traditionnelle, servie nature ou accompagnée d'une sauce au choix.", prix: "2 200 FCFA", categorie: "Plats", image: "🍚" },
  { id: 7, nom: "Placali Sauce Kopé", description: "Pâte de manioc fermentée, servie avec sauce kopé (sauce claire aux feuilles et poisson fumé).", prix: "2 200 FCFA", categorie: "Plats", image: "🥘" },
  { id: 8, nom: "Eau Minérale Kirène", description: "Eau minérale naturelle, source de Bonoua.", prix: "500 FCFA", categorie: "Boissons", image: "💧" },
  { id: 9, nom: "Jus Naturel", description: "Jus de fruits frais pressés — fraise, mangue, orange.", prix: "À partir de 1 000 FCFA", categorie: "Boissons", image: "🧃" },
  { id: 10, nom: "Zomkom", description: "Boisson traditionnelle rafraîchissante à base de gingembre et céréales.", prix: "À partir de 1 000 FCFA", categorie: "Boissons", image: "🍶" },
  { id: 11, nom: "Bissap", description: "Infusion glacée d'hibiscus, parfumée à la menthe.", prix: "À partir de 1 000 FCFA", categorie: "Boissons", image: "🍷" },
  { id: 12, nom: "Gnanmankou", description: "Jus de gingembre citronné, frais et tonifiant.", prix: "À partir de 1 000 FCFA", categorie: "Boissons", image: "🫚" },
  { id: 13, nom: "Sodas", description: "Coca-Cola, Fanta, Sprite, Nestea — boissons gazeuses fraîches, au choix. Canette 500 F • 1,5L 1 500 F", prix: "500 - 1 500 FCFA", categorie: "Boissons", image: "🥤" },
  { id: 14, nom: "Bière (Heineken / Beaufort)", description: "Bière blonde bien fraîche, au choix.", prix: "600 FCFA", categorie: "Boissons", image: "🍺" },
  { id: 15, nom: "Jack Daniel's (70cl)", description: "Whiskey Tennessee Sour Mash, Old No. 7.", prix: "20 400 FCFA", categorie: "Boissons", image: "🥃" },
  { id: 16, nom: "Cody's (canette)", description: "Bière export importée d'Allemagne, 5,4%.", prix: "500 FCFA", categorie: "Boissons", image: "🍻" },
  { id: 17, nom: "Crêpe au Chocolat", description: "Crêpe roulée garnie et nappée de sauce chocolat maison.", prix: "500 FCFA", categorie: "Desserts", image: "🥞" },
  { id: 18, nom: "Dèguè", description: "Semoule de mil au lait caillé, parfumée et rafraîchissante.", prix: "500 FCFA", categorie: "Desserts", image: "🍮" },
  { id: 19, nom: "Yaourt Maison", description: "Yaourt onctueux et crémeux, préparé maison.", prix: "500 FCFA", categorie: "Desserts", image: "🍦" },
  { id: 20, nom: "Galette", description: "Beignets frits dorés et croustillants, moelleux à l'intérieur.", prix: "500 FCFA", categorie: "Desserts", image: "🍩" },
  { id: 21, nom: "Gâteau Coco", description: "Biscuits croustillants à la noix de coco, dorés à la friture.", prix: "500 FCFA", categorie: "Desserts", image: "🥥" },
  { id: 22, nom: "Caramel Croquant", description: "Croquants sucrés à la cacahuète, cassés en morceaux gourmands.", prix: "100 FCFA", categorie: "Desserts", image: "🍬" }
];

export const WHATSAPP_NUMBER = "2250594979530";
