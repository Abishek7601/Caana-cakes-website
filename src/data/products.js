import blackForest from "../assets/cakes/black-forest.webp";
import blueBerry from "../assets/cakes/blueberry.webp";
import butterScotch from "../assets/cakes/butter-scotch.jpeg";
import caramel from "../assets/cakes/caramel.jpg";
import chocolateTruffle from "../assets/cakes/chocolate-truffle.jpeg";
import oreo from "../assets/cakes/oreo.webp";
import redVelvet from "../assets/cakes/red velvet.webp";
import strawberry from "../assets/cakes/strawberry.jpg";
import vanilla from "../assets/cakes/vanilla.jpg";
import whiteForest from "../assets/cakes/white-forest.jpg";



import biscoffBrownie from "../assets/brownies/biscoff brownie.jpg";
import caramelBrownie from "../assets/brownies/caramel brownie.jpeg";
import chocolateBrownie from "../assets/brownies/chocolate brownie.jpeg";
import hazelnutBrownie from "../assets/brownies/hazelnut brownie.jpeg";
import oreoBrownie from "../assets/brownies/oreo brownie.jpeg";
import redVelvetBrownie from "../assets/brownies/red velvet brownie.jpeg";
import tripleChocolateBrownie from "../assets/brownies/triple chocolate brownie.jpg";
import walnutBrownie from "../assets/brownies/walnut brownie.jpeg";



import almondCookies from "../assets/cookies/almond cookies.jpg";
import biscoffCookies from "../assets/cookies/biscoff cookies.jpeg";
import butterCookies from "../assets/cookies/butter cookies.jpg";
import chocolateChipsCookies from "../assets/cookies/chocolate chips cookies.jpeg";
import doubleChocolateCookies from "../assets/cookies/double chocolate cookies.jpg";
import pistachioCookies from "../assets/cookies/pistachio cookies.jpeg";
import redVelvetCookies from "../assets/cookies/red velvet cookies.jpg";

export const cakes = [
{
    id:1,
    name:"Chocolate Truffle",
    image:chocolateTruffle,
    prices:{
        half:450,
        one:900,
        oneHalf:1350,
        two:1800,
    },
    rating:4.9,
    description:"Rich chocolate cake layered with smooth chocolate ganache and finished with a luxurious truffle glaze.",
},
{
    id:2,
    name:"Black Forest",
    image:blackForest,
    prices:{
        half:350,
        one:700,
        oneHalf:1050,
        two:1400,
    },
    rating:4.8,
    description:"Classic chocolate sponge layered with whipped cream, cherry filling and delicate chocolate shavings.",
},
{
    id:3,
    name:"Blueberry Cake",
    image:blueBerry,
    prices:{
        half:450,
        one:900,
        oneHalf:1350,
        two:1800,
    },
    rating:4.8,
    description:"Soft vanilla cake filled with creamy blueberry layers and topped with a refreshing blueberry glaze.",
},
{
    id:4,
    name:"Butterscotch",
    image:butterScotch,
    prices:{
        half:350,
        one:700,
        oneHalf:1050,
        two:1400
    },
    rating:4.7,
    description: "Soft vanilla sponge covered with creamy butterscotch frosting and crunchy caramelized nuts.",
},
{
    id:5,
    name:" Salted Caramel",
    image:caramel,
    prices:{
        half:350,
        one:700,
        oneHalf:1050,
        two:1400,
    },
    rating:4.7,
    description: "Moist caramel cake combined with silky cream and a rich salted caramel drizzle.",
},
{
    id:6,
    name:"Oreo Delight",
    image:oreo,
    prices:{
        half:400,
        one:800,
        oneHalf:1200,
        two:1600,
    },
    rating:4.8,
    description: "Decadent chocolate cake blended with Oreo cream and crunchy cookie pieces for a delightful finish.",
},
{
    id:7,
    name:"Red Velvet",
    image:redVelvet,
    prices:{
        half:450,
        one:900,
        oneHalf:1350,
        two:1800,
    },
    rating:4.9,
    description: "Soft red velvet sponge layered with creamy cheese frosting for a perfectly balanced sweet and tangy taste.",
},
{
    id:8,
    name:"Strawberry Bliss",
    image:strawberry,
    prices:{
        half:350,
        one:900,
        oneHalf:1350,
        two:1800,
    },
    rating:4.9,
    description: "Fresh strawberry-infused cake layered with creamy frosting and a delicious strawberry filling.",
},
{
    id:9,
    name:"Vanilla Dream",
    image:vanilla,
    prices:{
        half:300,
        one:600,
        oneHalf:900,
        two:1200,
    },
    rating:4.6,
    description: "Light and fluffy vanilla sponge with smooth cream layers, perfect for simple and elegant celebrations.",
},
{
    id:10,
    name:"White Forest",
    image:whiteForest,
    prices:{
        half:350,
        one:700,
        oneHalf:1050,
        two:1400,
    },
    rating:4.8,
    description: "Delicate vanilla sponge layered with fresh cream, cherries and fine white chocolate curls.",
}
];


/*  Brownies */

export const brownies = [
    {
        id: 101,
        name: "Chocolate Brownie",
        image: chocolateBrownie,
        rating: 4.9,
        description: "Rich and fudgy chocolate brownie made with premium cocoa and dark chocolate.",
        prices: {
            100: 120,
            250: 280,
            500: 500,
            1000: 900,
        },
    },

        {
        id: 102,
        name: "Walnut Brownie",
        image: walnutBrownie,
        rating: 4.8,
        description: "Fudgy chocolate brownie loaded with crunchy roasted walnuts.",
        prices: {
            100: 140,
            250: 320,
            500: 580,
            1000: 1000,
        },
    },

        {
        id: 103,
        name: "Triple Chocolate Brownie",
        image: tripleChocolateBrownie,
        rating: 5.0,
        description:
            "An indulgent brownie made with three layers of rich chocolate goodness.",

        prices: {
            100: 160,
            250: 350,
            500: 650,
            1000: 1150,
        },
    },

        {
        id: 104,
        name: "Caramel Brownie",
        image: caramelBrownie,
        rating: 4.8,
        description:
            "Soft chocolate brownie finished with delicious caramel swirls.",

        prices: {
            100: 150,
            250: 330,
            500: 600,
            1000: 1050,
        },
    },

        {
        id: 105,
        name: "Red Velvet Brownie",
        image: redVelvetBrownie,
        rating: 4.9,
        description:
            "Velvety red chocolate brownie with a soft and rich texture.",

        prices: {
            100: 150,
            250: 340,
            500: 620,
            1000: 1100,
        },
    },

        {
        id: 106,
        name: "Oreo Brownie",
        image: oreoBrownie,
        rating: 4.9,
        description:
            "Fudgy chocolate brownie topped with crunchy Oreo pieces.",

        prices: {
            100: 140,
            250: 320,
            500: 580,
            1000: 1000,
        },
    },

        {
        id: 107,
        name: "Hazelnut Brownie",
        image: hazelnutBrownie,
        rating: 4.8,
        description:
            "Premium chocolate brownie with roasted hazelnuts and chocolate chunks.",

        prices: {
            100: 170,
            250: 380,
            500: 700,
            1000: 1250,
        },
    },

        {
        id: 108,
        name: "Biscoff Brownie",
        image: biscoffBrownie,
        rating: 5.0,
        description:
            "Decadent brownie topped with creamy Biscoff spread and biscuit crumbs.",

        prices: {
            100: 180,
            250: 400,
            500: 750,
            1000: 1350,
        },
    },
];



export const cookies = [

    {
        id: 201,
        name: "Classic Chocolate Chip Cookies",
        image: chocolateChipsCookies,
        rating: 4.9,
        description:
            "Soft and buttery cookies loaded with delicious chocolate chips.",
        prices: {
            100: 100,
            250: 230,
            500: 430,
            1000: 800,
        },
    },

    {
        id: 202,
        name: "Double Chocolate Cookies",
        image: doubleChocolateCookies,
        rating: 4.9,
        description:
            "Rich chocolate cookies filled with chocolate chips for extra indulgence.",
        prices: {
            100: 120,
            250: 280,
            500: 520,
            1000: 950,
        },
    },

    {
        id: 203,
        name: "Butter Cookies",
        image:  butterCookies,
        rating: 4.8,
        description:
            "Classic buttery cookies with a delicate and melt-in-the-mouth texture.",
        prices: {
            100: 90,
            250: 210,
            500: 390,
            1000: 720,
        },
    },

    {
        id: 204,
        name: "Red Velvet Cookies",
        image: redVelvetCookies,
        rating: 4.9,
        description:
            "Soft red velvet cookies with a rich chocolate flavour and creamy finish.",
        prices: {
            100: 130,
            250: 300,
            500: 560,
            1000: 1000,
        },
    },



    {
        id: 205,
        name: "Biscoff Cookies",
        image: biscoffCookies,
        rating: 5.0,
        description:
            "Premium cookies with a delicious Biscoff flavour and crunchy biscuit pieces.",
        prices: {
            100: 140,
            250: 330,
            500: 620,
            1000: 1150,
        },
    },

    {
        id: 206,
        name: "Pistachio Cookies",
        image: pistachioCookies,
        rating: 4.9,
        description:
            "Buttery cookies made with premium pistachios for a rich nutty flavour.",
        prices: {
            100: 150,
            250: 350,
            500: 650,
            1000: 1200,
        },
    },

    {
        id: 207,
        name: "Almond Cookies",
        image: almondCookies,
        rating: 4.8,
        description:
            "Crunchy almond cookies made with roasted almonds and premium ingredients.",
        prices: {
            100: 130,
            250: 300,
            500: 560,
            1000: 1050,
        },
    },

];