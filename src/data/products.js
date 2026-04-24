const products = [
  // Running & Athletic
  {
    id: 1,
    name: 'Pro Running Shoes',
    category: 'Running & Athletic',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    reviews: [{ author: 'John', rating: 5, text: 'Amazing shoes!' }]
  },
  {
    id: 2,
    name: 'Elite Running Shorts',
    category: 'Running & Athletic',
    price: 49.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1506629082632-401017062ee0?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 3,
    name: 'Performance Athletic Top',
    category: 'Running & Athletic',
    price: 59.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 4,
    name: 'Sport Watch Pro',
    category: 'Running & Athletic',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 5,
    name: 'Running Hydration Pack',
    category: 'Running & Athletic',
    price: 79.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    reviews: []
  },

  // Basketball
  {
    id: 6,
    name: 'Basketball Elite Shoes',
    category: 'Basketball',
    price: 169.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 7,
    name: 'Premium Basketball',
    category: 'Basketball',
    price: 89.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519471254914-0ea85daf6000?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 8,
    name: 'Basketball Jersey Pack',
    category: 'Basketball',
    price: 119.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 9,
    name: 'Professional Backpack',
    category: 'Basketball',
    price: 99.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 10,
    name: 'Knee Support Pad',
    category: 'Basketball',
    price: 39.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    reviews: []
  },

  // Soccer & Football
  {
    id: 11,
    name: 'Soccer Cleats Pro',
    category: 'Soccer & Football',
    price: 139.99,
    originalPrice: 189.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 12,
    name: 'Professional Soccer Ball',
    category: 'Soccer & Football',
    price: 69.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1540098063335-a67fbb4f66d6?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 13,
    name: 'Soccer Training Cones',
    category: 'Soccer & Football',
    price: 29.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 14,
    name: 'Goal Keeper Gloves',
    category: 'Soccer & Football',
    price: 59.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1572284478635-e9a3a8867c9c?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 15,
    name: 'Shin Guard Set',
    category: 'Soccer & Football',
    price: 44.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1530128387789-4c1017266635?w=300&h=300&fit=crop',
    reviews: []
  },

  // Tennis & Rackets
  {
    id: 16,
    name: 'Tennis Racket Pro',
    category: 'Tennis & Rackets',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 17,
    name: 'Professional Tennis Balls',
    category: 'Tennis & Rackets',
    price: 24.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 18,
    name: 'Tennis Shoes Premium',
    category: 'Tennis & Rackets',
    price: 149.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 19,
    name: 'Tennis Bag',
    category: 'Tennis & Rackets',
    price: 109.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 20,
    name: 'Grip Tape Set',
    category: 'Tennis & Rackets',
    price: 19.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop',
    reviews: []
  },

  // Gym & Fitness
  {
    id: 21,
    name: 'Adjustable Dumbbell Set',
    category: 'Gym & Fitness',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 22,
    name: 'Yoga Mat Premium',
    category: 'Gym & Fitness',
    price: 69.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 23,
    name: 'Resistance Bands',
    category: 'Gym & Fitness',
    price: 34.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1583454110551-21a5d0d42b56?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 24,
    name: 'Foam Roller Pro',
    category: 'Gym & Fitness',
    price: 49.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1594381898348-846bada001ad?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 25,
    name: 'Water Bottle 1L',
    category: 'Gym & Fitness',
    price: 29.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1602143407151-7e36dd0193d7?w=300&h=300&fit=crop',
    reviews: []
  },

  // Cycling
  {
    id: 26,
    name: 'Mountain Bike Helmet',
    category: 'Cycling',
    price: 119.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 27,
    name: 'Professional Bike Gloves',
    category: 'Cycling',
    price: 44.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1572284478635-e9a3a8867c9c?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 28,
    name: 'Cycling Jersey Set',
    category: 'Cycling',
    price: 89.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 29,
    name: 'Bike Light Set',
    category: 'Cycling',
    price: 59.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 30,
    name: 'Repair Tool Kit',
    category: 'Cycling',
    price: 39.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab7?w=300&h=300&fit=crop',
    reviews: []
  },

  // Swimming
  {
    id: 31,
    name: 'Professional Swimming Goggles',
    category: 'Swimming',
    price: 39.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561a1d?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 32,
    name: 'Racing Swimsuit',
    category: 'Swimming',
    price: 79.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 33,
    name: 'Swim Cap Premium',
    category: 'Swimming',
    price: 24.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 34,
    name: 'Pull Buoy',
    category: 'Swimming',
    price: 29.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 35,
    name: 'Kickboard Pro',
    category: 'Swimming',
    price: 34.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1530128387789-4c1017266635?w=300&h=300&fit=crop',
    reviews: []
  },

  // Winter Sports
  {
    id: 36,
    name: 'Ski Goggles Pro',
    category: 'Winter Sports',
    price: 149.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561a1d?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 37,
    name: 'Thermal Base Layer',
    category: 'Winter Sports',
    price: 59.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 38,
    name: 'Winter Gloves',
    category: 'Winter Sports',
    price: 49.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1572284478635-e9a3a8867c9c?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 39,
    name: 'Insulated Jacket',
    category: 'Winter Sports',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1506529268461-3a5a4b34fb15?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 40,
    name: 'Thermal Socks Pack',
    category: 'Winter Sports',
    price: 39.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1530128387789-4c1017266635?w=300&h=300&fit=crop',
    reviews: []
  }
]

export function getProducts() {
  return products
}

export function getCategories() {
  const categories = ['All', ...new Set(products.map(p => p.category))]
  return categories
}

export function addReview(productId, review) {
  const product = products.find(p => p.id === productId)
  if (product) {
    if (!product.reviews) product.reviews = []
    product.reviews.push(review)
  }
}
