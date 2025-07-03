'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const defaultImage = 'https://res.cloudinary.com/dm3j4u2pn/image/upload/v1751584497/670855f8-acf0-44e2-bf06-8f4cc39b1a8f.png';

    const dishes = [
      // Entradas
      {
        name: 'Ensalada César',
        description: 'Lechuga fresca con aderezo César y crutones',
        image: defaultImage,
        price: 4500,
        category: 'entree',
        ingredients: 'Lechuga, crutones, queso, aderezo',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Sopa de Verduras',
        description: 'Sopa caliente con vegetales de estación',
        image: defaultImage,
        price: 3800,
        category: 'entree',
        ingredients: 'Zanahoria, papa, apio, cebolla',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Bruschettas',
        description: 'Pan tostado con tomate y albahaca',
        image: defaultImage,
        price: 4000,
        category: 'entree',
        ingredients: 'Pan, tomate, albahaca, ajo',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },

      // Platos principales
      {
        name: 'Lasaña Boloñesa',
        description: 'Lasaña tradicional con carne y queso',
        image: defaultImage,
        price: 8500,
        category: 'main course',
        ingredients: 'Pasta, carne, queso, tomate',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Pollo al Curry',
        description: 'Pollo en salsa de curry con arroz',
        image: defaultImage,
        price: 7900,
        category: 'main course',
        ingredients: 'Pollo, curry, arroz, crema',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Filete de Salmón',
        description: 'Salmón a la plancha con ensalada',
        image: defaultImage,
        price: 9900,
        category: 'main course',
        ingredients: 'Salmón, limón, ensalada',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },

      // Postres
      {
        name: 'Tiramisú',
        description: 'Postre italiano con café y mascarpone',
        image: defaultImage,
        price: 4500,
        category: 'dessert',
        ingredients: 'Café, mascarpone, bizcocho',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Helado Artesanal',
        description: 'Helado de vainilla con salsa de chocolate',
        image: defaultImage,
        price: 3500,
        category: 'dessert',
        ingredients: 'Leche, azúcar, vainilla, chocolate',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Cheesecake',
        description: 'Tarta de queso con base de galleta',
        image: defaultImage,
        price: 4700,
        category: 'dessert',
        ingredients: 'Queso crema, galleta, azúcar',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },

      // Bebidas
      {
        name: 'Jugo Natural',
        description: 'Jugo de naranja recién exprimido',
        image: defaultImage,
        price: 2500,
        category: 'beverage',
        ingredients: 'Naranja, hielo',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Coca-Cola',
        description: 'Bebida gaseosa fría',
        image: defaultImage,
        price: 2000,
        category: 'beverage',
        ingredients: 'Agua carbonatada, azúcar',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Té Helado',
        description: 'Té frío con limón',
        image: defaultImage,
        price: 2200,
        category: 'beverage',
        ingredients: 'Té, limón, azúcar',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },

      // Snacks
      {
        name: 'Papas Fritas',
        description: 'Porción de papas fritas crujientes',
        image: defaultImage,
        price: 3000,
        category: 'snack',
        ingredients: 'Papa, sal, aceite',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Nuggets de Pollo',
        description: '6 piezas de nuggets con salsa',
        image: defaultImage,
        price: 4500,
        category: 'snack',
        ingredients: 'Pollo, pan rallado, aceite',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Aros de Cebolla',
        description: 'Aros crujientes con salsa BBQ',
        image: defaultImage,
        price: 4200,
        category: 'snack',
        ingredients: 'Cebolla, pan rallado, salsa BBQ',
        aviable: true,
        isActive: true,
        createdAt: now,
        updatedAt: now
      },
    ];

    return queryInterface.bulkInsert('dishes', dishes, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('dishes', null, {});
  }
};
