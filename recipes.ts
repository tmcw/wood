interface Ingredient {
  unit: Unit;
  amount: number;
  name: MaterialName;
}

enum Unit {
  CL,
  Tsp,
  Dash,
  Slice,
  Whole,
  Sprig,
  Wedge,
  Twist,
  Cube,
  Drop,
  Peel,
  Zest,
  // TODO: why do I have "None"?
  None,
  Spear,
  Leaves,
  Splash,
}

export interface RawRecipe {
  name: string;
  description: string;
  ingredients: Ingredient[];
  optionalIngredients?: Ingredient[];
  glass: string;
  video?: string;
}

enum MaterialType {
  "Spirit",
  "Liqueur",
  "Bitters",
  "Fruit",
  "Fortified",
  "Juice",
  "Soda",
  "Syrup",
  "Other",
  "Base",
  "Seasoning",
}

export interface RawMaterial {
  name: string;
  type: MaterialType;
  parent?: string;
  id: number;
}

export interface Material extends RawMaterial {
  inlinks: RawRecipe;
}

type MaterialName = (typeof rawMaterials)[number]["name"];

export const rawMaterials = [
  { "name": "Whiskey", "type": "Spirit", "id": 0 },
  {
    "name": "Scotch whiskey",
    "type": "Spirit",
    "parent": "whiskey",
    "id": 1,
  },
  {
    "name": "Bourbon whiskey",
    "type": "Spirit",
    "parent": "whiskey",
    "id": 2,
  },
  {
    "name": "Canadian whiskey",
    "type": "Spirit",
    "parent": "whiskey",
    "id": 3,
  },
  { "name": "Rye whiskey", "type": "Spirit", "parent": "whiskey", "id": 4 },
  { "name": "Irish whiskey", "type": "Spirit", "parent": "whiskey", "id": 5 },
  { "name": "Drambuie", "type": "Liqueur", "id": 6 },
  { "name": "Water", "type": "Other", "id": 7 },
  { "name": "Soda water", "type": "Soda", "id": 8 },
  { "name": "Gin", "type": "Spirit", "id": 9 },
  { "name": "Old Tom Gin", "type": "Spirit", "parent": "gin", "id": 10 },
  { "name": "London dry gin", "type": "Spirit", "parent": "gin", "id": 11 },
  { "name": "White crème de menthe", "type": "Liqueur", "id": 12 },
  { "name": "Crème de mure", "type": "Liqueur", "id": 13 },
  { "name": "Maraschino", "type": "Liqueur", "id": 14 },
  { "name": "Brandy", "type": "Spirit", "id": 15 },
  { "name": "Apricot brandy", "type": "Liqueur", "id": 16 },
  { "name": "Port", "type": "Fortified", "id": 17 },
  { "name": "Calvados", "type": "Spirit", "id": 18 },
  { "name": "Bitters", "type": "Bitters", "id": 19 },
  {
    "name": "Peach bitters",
    "type": "Bitters",
    "parent": "bitters",
    "id": 20,
  },
  {
    "name": "Orange bitters",
    "type": "Bitters",
    "parent": "bitters",
    "id": 21,
  },
  {
    "name": "Angostura bitters",
    "type": "Bitters",
    "parent": "bitters",
    "id": 22,
  },
  {
    "name": "Peychaud’s bitters",
    "type": "Bitters",
    "parent": "bitters",
    "id": 23,
  },
  {
    "name": "Aromatic bitters",
    "type": "Bitters",
    "parent": "bitters",
    "id": 24,
  },
  { "name": "Lemon", "type": "Fruit", "id": 25 },
  { "name": "Blackberry", "type": "Fruit", "id": 26 },
  { "name": "Raspberry", "type": "Fruit", "id": 27 },
  { "name": "Cherry", "type": "Fruit", "id": 28 },
  { "name": "Pineapple", "type": "Fruit", "id": 29 },
  { "name": "Sweet red vermouth", "type": "Fortified", "id": 30 },
  { "name": "Dry vermouth", "type": "Fortified", "id": 31 },
  { "name": "Cognac", "type": "Spirit", "parent": "brandy", "id": 32 },
  { "name": "Triple sec", "type": "Liqueur", "id": 33 },
  {
    "name": "Grand Marnier",
    "type": "Liqueur",
    "parent": "tripleSec",
    "id": 34,
  },
  { "name": "Cointreau", "type": "Liqueur", "parent": "tripleSec", "id": 35 },
  { "name": "Curaçao", "type": "Liqueur", "parent": "tripleSec", "id": 36 },
  { "name": "Grenadine", "type": "Syrup", "id": 37 },
  { "name": "Orange juice", "type": "Juice", "id": 38 },
  { "name": "Pineapple juice", "type": "Juice", "id": 39 },
  { "name": "Lime", "type": "Fruit", "id": 40 },
  { "name": "Cachaça", "type": "Spirit", "parent": "rum", "id": 41 },
  { "name": "Absinthe", "type": "Liqueur", "id": 42 },
  { "name": "Campari", "type": "Liqueur", "id": 43 },
  { "name": "Fernet Branca", "type": "Liqueur", "id": 44 },
  { "name": "Raspberry syrup", "type": "Syrup", "id": 45 },
  { "name": "Raspberry liqueur", "type": "Liqueur", "id": 46 },
  { "name": "Orange", "type": "Fruit", "id": 47 },
  { "name": "Egg yolk", "type": "Other", "id": 48 },
  { "name": "Egg white", "type": "Other", "id": 49 },
  {
    "name": "Champagne",
    "type": "Base",
    "parent": "sparklingWine",
    "id": 50,
  },
  { "name": "Tequila", "type": "Spirit", "id": 51 },
  { "name": "Rum", "type": "Spirit", "id": 52 },
  { "name": "White rum", "type": "Spirit", "parent": "rum", "id": 53 },
  { "name": "Gold rum", "type": "Spirit", "parent": "rum", "id": 54 },
  { "name": "Demerara rum", "type": "Spirit", "parent": "rum", "id": 55 },
  { "name": "Dark rum", "type": "Spirit", "parent": "rum", "id": 56 },
  { "name": "Lime juice", "type": "Juice", "id": 57 },
  { "name": "Cream", "type": "Other", "id": 58 },
  { "name": "Brown crème de cacao", "type": "Liqueur", "id": 59 },
  { "name": "White crème de cacao", "type": "Liqueur", "id": 60 },
  { "name": "Light cream", "type": "Other", "id": 61 },
  { "name": "Orange flower water", "type": "Other", "id": 62 },
  { "name": "Vanilla extract", "type": "Bitters", "id": 63 },
  { "name": "Cola", "type": "Soda", "id": 64 },
  { "name": "Nutmeg", "type": "Seasoning", "id": 65 },
  { "name": "Lemon juice", "type": "Juice", "id": 66 },
  { "name": "Vodka", "type": "Spirit", "id": 67 },
  { "name": "Ginger beer", "type": "Soda", "id": 68 },
  { "name": "Ginger ale", "type": "Soda", "id": 69 },
  { "name": "Prosecco", "type": "Base", "parent": "sparklingWine", "id": 70 },
  { "name": "Mint", "type": "Seasoning", "id": 71 },
  { "name": "Peach purée", "type": "Other", "id": 72 },
  { "name": "Coffee liqueur", "type": "Liqueur", "id": 73 },
  { "name": "Lillet blanc", "type": "Fortified", "id": 74 },
  { "name": "Kina lillet", "type": "Fortified", "id": 75 },
  { "name": "Green crème de menthe", "type": "Liqueur", "id": 76 },
  { "name": "Crème de cassis", "type": "Liqueur", "id": 77 },
  { "name": "Amaretto", "type": "Liqueur", "id": 78 },
  { "name": "Olive", "type": "Fruit", "id": 79 },
  { "name": "Wine", "type": "Base", "id": 80 },
  { "name": "Dry white wine", "type": "Base", "parent": "wine", "id": 81 },
  { "name": "Sparkling wine", "type": "Base", "id": 82 },
  { "name": "Peach schnapps", "type": "Liqueur", "id": 83 },
  { "name": "Cherry liqueur", "type": "Liqueur", "id": 84 },
  { "name": "DOM Bénédictine", "type": "Liqueur", "id": 85 },
  { "name": "Olive juice", "type": "Juice", "id": 86 },
  { "name": "Cranberry juice", "type": "Juice", "id": 87 },
  { "name": "Grapefruit juice", "type": "Juice", "id": 88 },
  { "name": "Tomato juice", "type": "Juice", "id": 89 },
  { "name": "Pepper", "type": "Seasoning", "id": 90 },
  { "name": "Salt", "type": "Seasoning", "id": 91 },
  { "name": "Celery salt", "type": "Seasoning", "id": 92 },
  { "name": "Sugar", "type": "Seasoning", "id": 93 },
  { "name": "Simple syrup", "type": "Syrup", "id": 94 },
  { "name": "Cane sugar", "type": "Seasoning", "parent": "sugar", "id": 95 },
  {
    "name": "Powdered sugar",
    "type": "Seasoning",
    "parent": "sugar",
    "id": 96,
  },
  { "name": "Aperol", "type": "Liqueur", "id": 97 },
  { "name": "Galliano", "type": "Liqueur", "id": 98 },
  { "name": "Pisco", "type": "Spirit", "parent": "brandy", "id": 99 },
  { "name": "Orgeat syrup", "type": "Syrup", "id": 100 },
  { "name": "Cinnamon syrup", "type": "Syrup", "id": 101 },
  { "name": "Agave nectar", "type": "Syrup", "id": 102 },
  { "name": "Coconut cream", "type": "Other", "id": 103 },
  { "name": "Espresso", "type": "Other", "id": 104 },
  { "name": "Coffee", "type": "Other", "id": 105 },
  { "name": "Worcestershire sauce", "type": "Other", "id": 106 },
  { "name": "Irish cream", "type": "Liqueur", "id": 107 },
  { "name": "Falernum", "type": "Liqueur", "id": 108 },
  { "name": "Tabasco", "type": "Other", "id": 109 },
  { "name": "Celery", "type": "Other", "id": 110 },
  { "name": "Green Chartreuse", "type": "Liqueur", "id": 111 },
  { "name": "Crème de violette", "type": "Liqueur", "id": 112 },
  {
    "name": "Cuban aguardiente",
    "type": "Spirit",
    "parent": "rum",
    "id": 113,
  },
  { "name": "Honey syrup", "type": "Syrup", "id": 114 },
  { "name": "Honey", "type": "Other", "id": 115 },
  { "name": "Grapefruit soda", "type": "Soda", "id": 116 },
  { "name": "Amaro Nonino", "type": "Liqueur", "id": 117 },
  {
    "name": "Blended Scotch whiskey",
    "type": "Spirit",
    "parent": "whiskey",
    "id": 118,
  },
  {
    "name": "Islay single malt scotch",
    "type": "Spirit",
    "parent": "whiskey",
    "id": 119,
  },
  { "name": "Ginger", "type": "Other", "id": 120 },
  { "name": "Candied ginger", "type": "Other", "id": 121 },
  { "name": "Elderflower syrup", "type": "Syrup", "id": 122 },
  { "name": "Grappa", "type": "Spirit", "parent": "brandy", "id": 123 },
  { "name": "White grape", "type": "Fruit", "id": 124 },
  { "name": "Mezcal", "type": "Spirit", "id": 125 },
  {
    "name": "Overproof white rum",
    "type": "Spirit",
    "parent": "rum",
    "id": 126,
  },
  { "name": "Yellow chartreuse", "type": "Liqueur", "id": 127 },
  { "name": "Red wine", "type": "Base", "parent": "wine", "id": 128 },
  { "name": "Red chili pepper", "type": "Fruit", "id": 129 },
  { "name": "Chamomile syrup", "type": "Syrup", "id": 130 },
] as const;

rawMaterials satisfies readonly RawMaterial[];

export const materials = rawMaterials.map((material) => {
  return {
    ...material,
    inlinks: new Set([]),
  };
});

export const recipes = rawRecipes.map((recipe) => {
  const rec = {
    ...recipe,
  };
  const ingredients = recipe.ingredients.map((ingredient) => {
    const link = materials.find((mat) => {
      return mat.name === ingredient.name;
    })!;
    link.inlinks.add(rec);
    return {
      ...ingredient,
      link,
    };
  });
  rec.ingredients = ingredients;
  return rec;
});
