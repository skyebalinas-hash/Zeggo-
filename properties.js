/* ==========================================
   ZEGGO
   PROPERTY DATABASE
========================================== */

const properties = [

    {
        id: 1,
        title: "Modern Family Home",
        city: "Cebu City",
        address: "Lahug, Cebu City",
        price: 5500000,
        priceDisplay: "₱5,500,000",
        status: "sale",
        type: "House",
        category: "Residential",
        bedrooms: 3,
        bathrooms: 2,
        garage: 2,
        area: "180 sqm",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
        tags: ["modern", "family", "residential", "house", "home"],
        description: "A spacious modern family home located in a peaceful neighborhood close to schools and shopping centers."
    },

    {
        id: 2,
        title: "Luxury Beach Condo",
        city: "Mactan",
        address: "Lapu-Lapu City",
        price: 8200000,
        priceDisplay: "₱8,200,000",
        status: "sale",
        type: "Condo",
        category: "Luxury",
        bedrooms: 2,
        bathrooms: 2,
        garage: 1,
        area: "120 sqm",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
        tags: ["luxury", "beach", "ocean", "condo", "modern", "vacation"],
        description: "Luxury condominium with stunning ocean views and premium amenities."
    },

    {
        id: 3,
        title: "Affordable Apartment",
        city: "Bacolod",
        address: "Mandalagan, Bacolod City",
        price: 18000,
        priceDisplay: "₱18,000 / month",
        status: "rent",
        type: "Apartment",
        category: "Affordable",
        bedrooms: 2,
        bathrooms: 1,
        garage: 1,
        area: "75 sqm",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
        tags: ["affordable", "apartment", "rental", "student", "family"],
        description: "Comfortable and affordable apartment perfect for students, young professionals, and small families."
    },

    {
        id: 4,
        title: "Executive Townhouse",
        city: "Manila",
        address: "Quezon City",
        price: 7300000,
        priceDisplay: "₱7,300,000",
        status: "sale",
        type: "Townhouse",
        category: "Residential",
        bedrooms: 4,
        bathrooms: 3,
        garage: 2,
        area: "210 sqm",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
        tags: ["executive", "townhouse", "modern", "family", "residential"],
        description: "Elegant townhouse with spacious interiors, modern finishes, and plenty of room for a growing family."
    },

    {
        id: 5,
        title: "Residential Lot",
        city: "Davao",
        address: "Lanang, Davao City",
        price: 3000000,
        priceDisplay: "₱3,000,000",
        status: "sale",
        type: "Lot",
        category: "Residential Lot",
        bedrooms: 0,
        bathrooms: 0,
        garage: 0,
        area: "500 sqm",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
        tags: ["lot", "residential", "investment", "land", "building"],
        description: "Prime residential lot ideal for building a dream home or making a long-term property investment."
    },

    {
        id: 6,
        title: "Modern City Condo",
        city: "Cebu City",
        address: "IT Park, Cebu City",
        price: 35000,
        priceDisplay: "₱35,000 / month",
        status: "rent",
        type: "Condo",
        category: "City Living",
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        area: "60 sqm",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
        tags: ["modern", "condo", "city", "rental", "IT Park", "professional"],
        description: "Modern condo located in the heart of Cebu IT Park, ideal for professionals and city living."
    },

    {
        id: 7,
        title: "Spacious Family Villa",
        city: "Iloilo City",
        address: "Jaro, Iloilo City",
        price: 9800000,
        priceDisplay: "₱9,800,000",
        status: "sale",
        type: "House",
        category: "Luxury",
        bedrooms: 5,
        bathrooms: 4,
        garage: 3,
        area: "320 sqm",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
        tags: ["villa", "luxury", "family", "large", "house", "modern"],
        description: "A spacious five-bedroom family villa with large living areas, multiple bathrooms, and generous parking."
    },

    {
        id: 8,
        title: "Affordable City Condo",
        city: "Pasig",
        address: "Ortigas Center, Pasig City",
        price: 28000,
        priceDisplay: "₱28,000 / month",
        status: "rent",
        type: "Condo",
        category: "Affordable",
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        area: "48 sqm",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
        tags: ["affordable", "condo", "rental", "city", "Ortigas"],
        description: "Affordable city condominium near offices, restaurants, transportation, and shopping centers."
    },

    {
        id: 9,
        title: "Beachfront Family House",
        city: "Lapu-Lapu City",
        address: "Punta Engaño, Lapu-Lapu City",
        price: 12500000,
        priceDisplay: "₱12,500,000",
        status: "sale",
        type: "House",
        category: "Beach Property",
        bedrooms: 4,
        bathrooms: 3,
        garage: 2,
        area: "260 sqm",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80",
        tags: ["beach", "beachfront", "ocean", "family", "luxury", "house"],
        description: "Beautiful beachfront family home with relaxing surroundings and easy access to the sea."
    },

    {
        id: 10,
        title: "Starter Townhouse",
        city: "Cavite",
        address: "Imus, Cavite",
        price: 4200000,
        priceDisplay: "₱4,200,000",
        status: "sale",
        type: "Townhouse",
        category: "Affordable",
        bedrooms: 3,
        bathrooms: 2,
        garage: 1,
        area: "110 sqm",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
        tags: ["affordable", "townhouse", "starter", "family", "house"],
        description: "Practical starter townhouse designed for young families looking for an affordable home."
    },

    {
        id: 11,
        title: "Premium Commercial Lot",
        city: "Davao City",
        address: "Matina, Davao City",
        price: 15000000,
        priceDisplay: "₱15,000,000",
        status: "sale",
        type: "Lot",
        category: "Commercial Lot",
        bedrooms: 0,
        bathrooms: 0,
        garage: 0,
        area: "800 sqm",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        tags: ["commercial", "lot", "investment", "business", "land"],
        description: "Large commercial lot suitable for a business establishment, commercial building, or long-term investment."
    },

    {
        id: 12,
        title: "Modern Makati Apartment",
        city: "Makati",
        address: "Poblacion, Makati City",
        price: 45000,
        priceDisplay: "₱45,000 / month",
        status: "rent",
        type: "Apartment",
        category: "Premium Rental",
        bedrooms: 2,
        bathrooms: 2,
        garage: 1,
        area: "90 sqm",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
        tags: ["modern", "apartment", "rental", "Makati", "premium", "city"],
        description: "Modern apartment in Makati with convenient access to restaurants, offices, entertainment, and transportation."
    },

    {
        id: 13,
        title: "Large Farm Lot",
        city: "Bacolod",
        address: "Silay, Negros Occidental",
        price: 6500000,
        priceDisplay: "₱6,500,000",
        status: "sale",
        type: "Lot",
        category: "Farm Lot",
        bedrooms: 0,
        bathrooms: 0,
        garage: 0,
        area: "2,000 sqm",
        image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=900&q=80",
        tags: ["farm", "lot", "land", "investment", "agricultural", "large"],
        description: "Large piece of land suitable for agricultural use, a private retreat, or a long-term land investment."
    },

    {
        id: 14,
        title: "Luxury Modern House",
        city: "Quezon City",
        address: "New Manila, Quezon City",
        price: 18500000,
        priceDisplay: "₱18,500,000",
        status: "sale",
        type: "House",
        category: "Luxury",
        bedrooms: 5,
        bathrooms: 5,
        garage: 3,
        area: "400 sqm",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
        tags: ["luxury", "modern", "house", "family", "premium", "large"],
        description: "High-end modern residence with spacious interiors, premium finishes, multiple bedrooms, and large parking."
    },

    {
        id: 15,
        title: "Cozy Student Apartment",
        city: "Cebu City",
        address: "Banilad, Cebu City",
        price: 15000,
        priceDisplay: "₱15,000 / month",
        status: "rent",
        type: "Apartment",
        category: "Affordable",
        bedrooms: 1,
        bathrooms: 1,
        garage: 0,
        area: "45 sqm",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
        tags: ["student", "affordable", "apartment", "rental", "cozy"],
        description: "Cozy and affordable apartment suitable for students or young professionals."
    },

    {
        id: 16,
        title: "Ocean View Condo",
        city: "Cebu City",
        address: "South Road Properties, Cebu City",
        price: 6800000,
        priceDisplay: "₱6,800,000",
        status: "sale",
        type: "Condo",
        category: "Luxury",
        bedrooms: 2,
        bathrooms: 2,
        garage: 1,
        area: "105 sqm",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
        tags: ["ocean", "view", "condo", "luxury", "modern", "investment"],
        description: "Stylish condominium with beautiful ocean views and convenient access to major areas of Cebu City."
      },

   // keep your existing properties above

   {
    id: 17,

    title: "Elegant Family House",

    city: "Iloilo City",

    address: "Jaro, Iloilo City",

    price: 4200000,

    priceDisplay: "₱4,200,000",

    status: "sale",

    type: "House",

    bedrooms: 4,

    bathrooms: 3,

    garage: 2,

    area: "200 sqm",

    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",

    description: "A spacious four-bedroom family house with modern interiors, a large living area, and a peaceful residential setting.",

    category: "Family Home",

    tags: ["house", "family", "modern", "spacious", "luxury"]
},

{
    id: 18,

    title: "Cozy Rental House",

    city: "Bacolod",

    address: "Mansilingan, Bacolod City",

    price: 25000,

    priceDisplay: "₱25,000 / month",

    status: "rent",

    type: "House",

    bedrooms: 3,

    bathrooms: 2,

    garage: 1,

    area: "140 sqm",

    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",

    description: "A comfortable three-bedroom rental house suitable for families looking for a quiet neighborhood.",

    category: "Family Home",

    tags: ["house", "family", "rental", "affordable", "spacious"]
},

{
    id: 19,

    title: "Luxury City Condo",

    city: "Manila",

    address: "Makati City",

    price: 9500000,

    priceDisplay: "₱9,500,000",

    status: "sale",

    type: "Condo",

    bedrooms: 3,

    bathrooms: 2,

    garage: 1,

    area: "135 sqm",

    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",

    description: "Premium city condominium with elegant interiors, excellent views, and convenient access to business districts.",

    category: "Luxury Condo",

    tags: ["condo", "luxury", "modern", "city", "investment"]
},

{
    id: 20,

    title: "Affordable City Condo",

    city: "Iloilo City",

    address: "Mandurriao",

    price: 28000,

    priceDisplay: "₱28,000 / month",

    status: "rent",

    type: "Condo",

    bedrooms: 2,

    bathrooms: 2,

    garage: 1,

    area: "85 sqm",

    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",

    description: "Modern two-bedroom condominium ideal for professionals, students, or small families.",

    category: "City Condo",

    tags: ["condo", "rental", "modern", "affordable", "city"]
},

{
    id: 21,

    title: "Student Apartment",

    city: "Cebu City",

    address: "Guadalupe, Cebu City",

    price: 15000,

    priceDisplay: "₱15,000 / month",

    status: "rent",

    type: "Apartment",

    bedrooms: 2,

    bathrooms: 1,

    garage: 1,

    area: "65 sqm",

    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",

    description: "Affordable apartment close to schools, restaurants, and public transportation.",

    category: "Student Apartment",

    tags: ["apartment", "rental", "student", "affordable", "city"]
},

{
    id: 22,

    title: "Modern Apartment Suite",

    city: "Davao City",

    address: "Matina, Davao City",

    price: 22000,

    priceDisplay: "₱22,000 / month",

    status: "rent",

    type: "Apartment",

    bedrooms: 3,

    bathrooms: 2,

    garage: 1,

    area: "95 sqm",

    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",

    description: "Bright modern apartment with three bedrooms and convenient access to shopping and dining areas.",

    category: "Modern Apartment",

    tags: ["apartment", "rental", "modern", "family", "spacious"]
},

{
    id: 23,

    title: "Premium Townhouse",

    city: "Cebu City",

    address: "Banilad, Cebu City",

    price: 6800000,

    priceDisplay: "₱6,800,000",

    status: "sale",

    type: "Townhouse",

    bedrooms: 4,

    bathrooms: 3,

    garage: 2,

    area: "190 sqm",

    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",

    description: "Stylish four-bedroom townhouse with spacious interiors, modern finishes, and secure parking.",

    category: "Premium Townhouse",

    tags: ["townhouse", "luxury", "modern", "family", "spacious"]
},

{   
   id: 24,

    title: "Affordable Townhouse Rental",

    city: "Quezon City",

    address: "Novaliches, Quezon City",

    price: 30000,

    priceDisplay: "₱30,000 / month",

    status: "rent",

    type: "Townhouse",

    bedrooms: 3,

    bathrooms: 2,

    garage: 1,

    area: "125 sqm",

    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",

    description: "Comfortable townhouse rental with three bedrooms, a private garage, and convenient city access.",

    category: "Townhouse Rental",

    tags: ["townhouse", "rental", "family", "affordable", "city"]
},

{
    id: 25,

    title: "Ready for Move-In House",

    city: "Silay City",

    address: "Near Magic Land, Silay City",

    price: 1550000,

    priceDisplay: "₱1,550,000 Promo",

    originalPrice: 1750000,

    promoDiscount: 200000,

    status: "sale",

    type: "House",

    category: "Affordable Family Home",

    bedrooms: 2,

    bathrooms: 1,

    garage: 0,

    area: "49 sqm",

    lotArea: "79 sqm",

    image: "https://www.camella.com.ph/wp-content/uploads/2020/06/2016_Camella_Property-for-Sale_Camella_Bacolod-Gallery_1-758x500.jpg",

    description: "Ready-for-move-in house near Magic Land, Silay City. Features 2 bedrooms, 1 toilet and bath, 49 sqm floor area, 79 sqm lot area, fence and gate, laundry area, floor tiles, and room divisions. Transfer of title is included.",

    tags: [
        "house",
        "family",
        "affordable",
        "ready to move in",
        "silay",
        "silay city",
        "2 bedrooms",
        "near magic land",
        "fenced",
        "laundry area",
        "lot",
        "sale"
    ]
}

];


    
