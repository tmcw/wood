import { Material } from "./types.ts"
import { MaterialType } from "./material_type.ts"
export const whiskey = new Material("Whiskey", MaterialType.Spirit);
export const scotchWhiskey = new Material("Scotch whiskey", MaterialType.Spirit, whiskey);
export const bourbonWhiskey = new Material("Bourbon whiskey", MaterialType.Spirit, whiskey);
export const canadianWhiskey = new Material("Canadian whiskey", MaterialType.Spirit, whiskey);
export const ryeWhiskey = new Material("Rye whiskey", MaterialType.Spirit, whiskey);
export const irishWhiskey = new Material("Irish whiskey", MaterialType.Spirit, whiskey);
export const drambuie = new Material("Drambuie", MaterialType.Liqueur);
export const water = new Material("Water", MaterialType.Other);
export const sodaWater = new Material("Soda water", MaterialType.Soda);
export const gin = new Material("Gin", MaterialType.Spirit);
export const oldTomGin = new Material("Old Tom Gin", MaterialType.Spirit, gin);
export const londonDryGin = new Material("London dry gin", MaterialType.Spirit, gin);
export const whiteCrèmeDeMenthe = new Material("White crème de menthe", MaterialType.Liqueur);
export const crèmeDeMure = new Material("Crème de mure", MaterialType.Liqueur);
export const maraschino = new Material("Maraschino", MaterialType.Liqueur);
export const brandy = new Material("Brandy", MaterialType.Spirit);
export const apricotBrandy = new Material("Apricot brandy", MaterialType.Liqueur);
export const port = new Material("Port", MaterialType.Fortified);
export const calvados = new Material("Calvados", MaterialType.Spirit);
export const bitters = new Material("Bitters", MaterialType.Bitters);
export const peachBitters = new Material("Peach bitters", MaterialType.Bitters, bitters);
export const orangeBitters = new Material("Orange bitters", MaterialType.Bitters, bitters);
export const angosturaBitters = new Material("Angostura bitters", MaterialType.Bitters, bitters);
export const peychaudSBitters = new Material("Peychaud’s bitters", MaterialType.Bitters, bitters);
export const aromaticBitters = new Material("Aromatic bitters", MaterialType.Bitters, bitters);
export const lemon = new Material("Lemon", MaterialType.Fruit);
export const blackberry = new Material("Blackberry", MaterialType.Fruit);
export const raspberry = new Material("Raspberry", MaterialType.Fruit);
export const cherry = new Material("Cherry", MaterialType.Fruit);
export const pineapple = new Material("Pineapple", MaterialType.Fruit);
export const sweetRedVermouth = new Material("Sweet red vermouth", MaterialType.Fortified);
export const dryVermouth = new Material("Dry vermouth", MaterialType.Fortified);
export const cognac = new Material("Cognac", MaterialType.Spirit, brandy);
export const tripleSec = new Material("Triple sec", MaterialType.Liqueur);
export const grandMarnier = new Material("Grand Marnier", MaterialType.Liqueur, tripleSec);
export const cointreau = new Material("Cointreau", MaterialType.Liqueur, tripleSec);
export const curaçao = new Material("Curaçao", MaterialType.Liqueur, tripleSec);
export const grenadine = new Material("Grenadine", MaterialType.Syrup);
export const orangeJuice = new Material("Orange juice", MaterialType.Juice);
export const pineappleJuice = new Material("Pineapple juice", MaterialType.Juice);
export const lime = new Material("Lime", MaterialType.Fruit);
export const rum = new Material("Rum", MaterialType.Spirit);
export const cachaça = new Material("Cachaça", MaterialType.Spirit, rum);
export const absinthe = new Material("Absinthe", MaterialType.Liqueur);
export const campari = new Material("Campari", MaterialType.Liqueur);
export const fernetBranca = new Material("Fernet Branca", MaterialType.Liqueur);
export const raspberrySyrup = new Material("Raspberry syrup", MaterialType.Syrup);
export const raspberryLiqueur = new Material("Raspberry liqueur", MaterialType.Liqueur);
export const orange = new Material("Orange", MaterialType.Fruit);
export const eggYolk = new Material("Egg yolk", MaterialType.Other);
export const eggWhite = new Material("Egg white", MaterialType.Other);
export const sparklingWine = new Material("Sparkling wine", MaterialType.Base);
export const champagne = new Material("Champagne", MaterialType.Base, sparklingWine);
export const tequila = new Material("Tequila", MaterialType.Spirit);
export const whiteRum = new Material("White rum", MaterialType.Spirit, rum);
export const goldRum = new Material("Gold rum", MaterialType.Spirit, rum);
export const demeraraRum = new Material("Demerara rum", MaterialType.Spirit, rum);
export const darkRum = new Material("Dark rum", MaterialType.Spirit, rum);
export const limeJuice = new Material("Lime juice", MaterialType.Juice);
export const cream = new Material("Cream", MaterialType.Other);
export const brownCrèmeDeCacao = new Material("Brown crème de cacao", MaterialType.Liqueur);
export const whiteCrèmeDeCacao = new Material("White crème de cacao", MaterialType.Liqueur);
export const lightCream = new Material("Light cream", MaterialType.Other);
export const orangeFlowerWater = new Material("Orange flower water", MaterialType.Other);
export const vanillaExtract = new Material("Vanilla extract", MaterialType.Bitters);
export const cola = new Material("Cola", MaterialType.Soda);
export const nutmeg = new Material("Nutmeg", MaterialType.Seasoning);
export const lemonJuice = new Material("Lemon juice", MaterialType.Juice);
export const vodka = new Material("Vodka", MaterialType.Spirit);
export const gingerBeer = new Material("Ginger beer", MaterialType.Soda);
export const gingerAle = new Material("Ginger ale", MaterialType.Soda);
export const prosecco = new Material("Prosecco", MaterialType.Base, sparklingWine);
export const mint = new Material("Mint", MaterialType.Seasoning);
export const peachPurée = new Material("Peach purée", MaterialType.Other);
export const coffeeLiqueur = new Material("Coffee liqueur", MaterialType.Liqueur);
export const lilletBlanc = new Material("Lillet blanc", MaterialType.Fortified);
export const kinaLillet = new Material("Kina lillet", MaterialType.Fortified);
export const greenCrèmeDeMenthe = new Material("Green crème de menthe", MaterialType.Liqueur);
export const crèmeDeCassis = new Material("Crème de cassis", MaterialType.Liqueur);
export const amaretto = new Material("Amaretto", MaterialType.Liqueur);
export const olive = new Material("Olive", MaterialType.Fruit);
export const wine = new Material("Wine", MaterialType.Base);
export const dryWhiteWine = new Material("Dry white wine", MaterialType.Base, wine);
export const peachSchnapps = new Material("Peach schnapps", MaterialType.Liqueur);
export const cherryLiqueur = new Material("Cherry liqueur", MaterialType.Liqueur);
export const domBénédictine = new Material("DOM Bénédictine", MaterialType.Liqueur);
export const oliveJuice = new Material("Olive juice", MaterialType.Juice);
export const cranberryJuice = new Material("Cranberry juice", MaterialType.Juice);
export const grapefruitJuice = new Material("Grapefruit juice", MaterialType.Juice);
export const tomatoJuice = new Material("Tomato juice", MaterialType.Juice);
export const pepper = new Material("Pepper", MaterialType.Seasoning);
export const salt = new Material("Salt", MaterialType.Seasoning);
export const celerySalt = new Material("Celery salt", MaterialType.Seasoning);
export const sugar = new Material("Sugar", MaterialType.Seasoning);
export const simpleSyrup = new Material("Simple syrup", MaterialType.Syrup);
export const caneSugar = new Material("Cane sugar", MaterialType.Seasoning, sugar);
export const powderedSugar = new Material("Powdered sugar", MaterialType.Seasoning, sugar);
export const aperol = new Material("Aperol", MaterialType.Liqueur);
export const galliano = new Material("Galliano", MaterialType.Liqueur);
export const pisco = new Material("Pisco", MaterialType.Spirit, brandy);
export const orgeatSyrup = new Material("Orgeat syrup", MaterialType.Syrup);
export const cinnamonSyrup = new Material("Cinnamon syrup", MaterialType.Syrup);
export const agaveNectar = new Material("Agave nectar", MaterialType.Syrup);
export const coconutCream = new Material("Coconut cream", MaterialType.Other);
export const espresso = new Material("Espresso", MaterialType.Other);
export const coffee = new Material("Coffee", MaterialType.Other);
export const worcestershireSauce = new Material("Worcestershire sauce", MaterialType.Other);
export const irishCream = new Material("Irish cream", MaterialType.Liqueur);
export const falernum = new Material("Falernum", MaterialType.Liqueur);
export const tabasco = new Material("Tabasco", MaterialType.Other);
export const celery = new Material("Celery", MaterialType.Other);
export const greenChartreuse = new Material("Green Chartreuse", MaterialType.Liqueur);
export const crèmeDeViolette = new Material("Crème de violette", MaterialType.Liqueur);
export const cubanAguardiente = new Material("Cuban aguardiente", MaterialType.Spirit, rum);
export const honeySyrup = new Material("Honey syrup", MaterialType.Syrup);
export const honey = new Material("Honey", MaterialType.Other);
export const grapefruitSoda = new Material("Grapefruit soda", MaterialType.Soda);
export const amaroNonino = new Material("Amaro Nonino", MaterialType.Liqueur);
export const blendedScotchWhiskey = new Material("Blended Scotch whiskey", MaterialType.Spirit, whiskey);
export const islaySingleMaltScotch = new Material("Islay single malt scotch", MaterialType.Spirit, whiskey);
export const ginger = new Material("Ginger", MaterialType.Other);
export const candiedGinger = new Material("Candied ginger", MaterialType.Other);
export const elderflowerSyrup = new Material("Elderflower syrup", MaterialType.Syrup);
export const grappa = new Material("Grappa", MaterialType.Spirit, brandy);
export const whiteGrape = new Material("White grape", MaterialType.Fruit);
export const mezcal = new Material("Mezcal", MaterialType.Spirit);
export const overproofWhiteRum = new Material("Overproof white rum", MaterialType.Spirit, rum);
export const yellowChartreuse = new Material("Yellow chartreuse", MaterialType.Liqueur);
export const redWine = new Material("Red wine", MaterialType.Base, wine);
export const redChiliPepper = new Material("Red chili pepper", MaterialType.Fruit);
export const chamomileSyrup = new Material("Chamomile syrup", MaterialType.Syrup);
