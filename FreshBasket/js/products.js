// Product catalogue.
// Prices are illustrative demo prices in Indian rupees.

const PRODUCTS = [

    // =========================
    // FRUITS
    // =========================

    {
        id: 1,
        name: "Red Apples",
        category: "Fruits",
        unit: "4 pcs · approx. 500 g",
        price: 129,
        oldPrice: 159,
        offer: true,
        image: "images/products/product-1.jpg"
    },

    {
        id: 2,
        name: "Bananas",
        category: "Fruits",
        unit: "6 pcs · approx. 500 g",
        price: 45,
        oldPrice: 55,
        offer: true,
        image: "images/products/product-2.jpg"
    },

    {
        id: 3,
        name: "Sweet Oranges",
        category: "Fruits",
        unit: "4 pcs · approx. 600 g",
        price: 79,
        oldPrice: 99,
        offer: true,
        image: "images/products/product-3.jpg"
    },

    {
        id: 4,
        name: "Green Grapes",
        category: "Fruits",
        unit: "500 g pack",
        price: 89,
        oldPrice: 99,
        offer: true,
        image: "images/products/product-4.jpg"
    },

    {
        id: 5,
        name: "Fresh Mangoes",
        category: "Fruits",
        unit: "2 pcs · seasonal",
        price: 119,
        oldPrice: 139,
        offer: true,
        image: "images/products/product-5.jpg"
    },

    {
        id: 6,
        name: "Papaya",
        category: "Fruits",
        unit: "1 pc · approx. 1 kg",
        price: 59,
        oldPrice: 69,
        offer: false,
        image: "images/products/product-6.jpg"
    },

    {
        id: 7,
        name: "Fresh Strawberries",
        category: "Fruits",
        unit: "200 g pack",
        price: 99,
        oldPrice: 119,
        offer: false,
        image: "images/products/product-7.jpg"
    },

    {
        id: 8,
        name: "Pomegranates",
        category: "Fruits",
        unit: "2 pcs",
        price: 109,
        oldPrice: 129,
        offer: false,
        image: "images/products/product-8.jpg"
    },


    // =========================
    // VEGETABLES
    // =========================

    {
        id: 9,
        name: "Tomatoes",
        category: "Vegetables",
        unit: "500 g pack",
        price: 28,
        oldPrice: 35,
        offer: true,
        image: "images/products/product-9.jpg"
    },

    {
        id: 10,
        name: "Potatoes",
        category: "Vegetables",
        unit: "1 kg",
        price: 35,
        oldPrice: 40,
        offer: true,
        image: "images/products/product-10.jpg"
    },

    {
        id: 11,
        name: "Red Onions",
        category: "Vegetables",
        unit: "1 kg",
        price: 42,
        oldPrice: 49,
        offer: true,
        image: "images/products/product-11.jpg"
    },

    {
        id: 12,
        name: "Carrots",
        category: "Vegetables",
        unit: "500 g pack",
        price: 39,
        oldPrice: 45,
        offer: false,
        image: "images/products/product-12.jpg"
    },

    {
        id: 13,
        name: "Cucumber",
        category: "Vegetables",
        unit: "500 g pack",
        price: 25,
        oldPrice: 30,
        offer: false,
        image: "images/products/product-13.jpg"
    },

    {
        id: 14,
        name: "Green Capsicum",
        category: "Vegetables",
        unit: "2 pcs",
        price: 35,
        oldPrice: 42,
        offer: false,
        image: "images/products/product-14.jpg"
    },

    {
        id: 15,
        name: "Cauliflower",
        category: "Vegetables",
        unit: "1 pc",
        price: 39,
        oldPrice: 45,
        offer: false,
        image: "images/products/product-15.jpg"
    },

    {
        id: 16,
        name: "Brinjal",
        category: "Vegetables",
        unit: "500 g pack",
        price: 32,
        oldPrice: 38,
        offer: false,
        image: "images/products/product-16.jpg"
    },


    // =========================
    // LEAFY VEGETABLES
    // =========================

    {
        id: 17,
        name: "Spinach",
        category: "Leafy Vegetables",
        unit: "1 bunch",
        price: 20,
        oldPrice: 25,
        offer: true,
        image: "images/products/product-17.jpg"
    },

    {
        id: 18,
        name: "Coriander Leaves",
        category: "Leafy Vegetables",
        unit: "1 bunch",
        price: 15,
        oldPrice: 18,
        offer: true,
        image: "images/products/product-18.jpg"
    },

    {
        id: 19,
        name: "Mint Leaves",
        category: "Leafy Vegetables",
        unit: "1 bunch",
        price: 15,
        oldPrice: 18,
        offer: false,
        image: "images/products/product-19.jpg"
    },

    {
        id: 20,
        name: "Curry Leaves",
        category: "Leafy Vegetables",
        unit: "1 small pack",
        price: 12,
        oldPrice: 15,
        offer: false,
        image: "images/products/product-20.jpg"
    },

    {
        id: 21,
        name: "Amaranth Greens",
        category: "Leafy Vegetables",
        unit: "1 bunch",
        price: 22,
        oldPrice: 25,
        offer: false,
        image: "images/products/product-21.jpg"
    },

    {
        id: 22,
        name: "Fenugreek Leaves",
        category: "Leafy Vegetables",
        unit: "1 bunch",
        price: 20,
        oldPrice: 24,
        offer: false,
        image: "images/products/product-22.jpg"
    },


    // =========================
    // DAIRY PRODUCTS
    // =========================

    {
        id: 23,
        name: "Full Cream Milk",
        category: "Dairy",
        unit: "500 ml",
        price: 32,
        oldPrice: 35,
        offer: true,
        image: "images/products/product-23.jpg"
    },

    {
        id: 24,
        name: "Plain Curd",
        category: "Dairy",
        unit: "400 g tub",
        price: 38,
        oldPrice: 42,
        offer: true,
        image: "images/products/product-24.jpg"
    },

    {
        id: 25,
        name: "Paneer",
        category: "Dairy",
        unit: "200 g pack",
        price: 89,
        oldPrice: 99,
        offer: true,
        image: "images/products/product-25.jpg"
    },

    {
        id: 26,
        name: "Butter",
        category: "Dairy",
        unit: "100 g pack",
        price: 58,
        oldPrice: 65,
        offer: false,
        image: "images/products/product-26.jpg"
    },

    {
        id: 27,
        name: "Cheddar Cheese",
        category: "Dairy",
        unit: "200 g pack",
        price: 119,
        oldPrice: 135,
        offer: false,
        image: "images/products/product-27.jpg"
    },

    {
        id: 28,
        name: "Fresh Ghee",
        category: "Dairy",
        unit: "200 ml jar",
        price: 149,
        oldPrice: 169,
        offer: false,
        image: "images/products/product-28.jpg"
    },

    {
        id: 29,
        name: "Buttermilk",
        category: "Dairy",
        unit: "500 ml",
        price: 25,
        oldPrice: 30,
        offer: false,
        image: "images/products/product-29.jpg"
    },

    {
        id: 30,
        name: "Greek Yogurt",
        category: "Dairy",
        unit: "150 g cup",
        price: 45,
        oldPrice: 50,
        offer: false,
        image: "images/products/product-30.jpg"
    }

];