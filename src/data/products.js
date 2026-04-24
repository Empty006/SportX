const baseProducts = [
  // Running & Athletic (updated with TJS prices and unique images)
  {
    id: 1,
    name: 'Pro Running Shoes',
    category: 'Running & Athletic',
    price: 749.99,
    originalPrice: 899.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    reviews: [{ author: 'John', rating: 5, text: 'Amazing shoes!' }]
  },
  {
    id: 2,
    name: 'Elite Running Shorts',
    category: 'Running & Athletic',
    price: 329.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1506629082632-401017062ee0?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 3,
    name: 'Performance Athletic Top',
    category: 'Running & Athletic',
    price: 379.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 4,
    name: 'Sport Watch Pro',
    category: 'Running & Athletic',
    price: 1799.99,
    originalPrice: 2199.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 5,
    name: 'Running Hydration Pack',
    category: 'Running & Athletic',
    price: 429.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 6,
    name: 'Compression Socks Set',
    category: 'Running & Athletic',
    price: 249.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1530128387789-4c1017266635?w=300&h=300&fit=crop',
    reviews: []
  },

  // Basketball
  {
    id: 7,
    name: 'Basketball Elite Shoes',
    category: 'Basketball',
    price: 999.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 8,
    name: 'Premium Basketball',
    category: 'Basketball',
    price: 499.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519471254914-0ea85daf6000?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 9,
    name: 'Basketball Jersey Pack',
    category: 'Basketball',
    price: 679.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 10,
    name: 'Professional Backpack',
    category: 'Basketball',
    price: 579.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 11,
    name: 'Knee Support Pad',
    category: 'Basketball',
    price: 199.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1572284478635-e9a3a8867c9c?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 12,
    name: 'Basketball Socks',
    category: 'Basketball',
    price: 149.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1530128387789-4c1017266635?w=300&h=300&fit=crop',
    reviews: []
  },

  // Soccer & Football
  {
    id: 13,
    name: 'Soccer Cleats Pro',
    category: 'Soccer & Football',
    price: 829.99,
    originalPrice: 999.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 14,
    name: 'Professional Soccer Ball',
    category: 'Soccer & Football',
    price: 379.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1540098063335-a67fbb4f66d6?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 15,
    name: 'Soccer Training Cones',
    category: 'Soccer & Football',
    price: 169.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 16,
    name: 'Goal Keeper Gloves',
    category: 'Soccer & Football',
    price: 329.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1572284478635-e9a3a8867c9c?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 17,
    name: 'Shin Guard Set',
    category: 'Soccer & Football',
    price: 249.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1530128387789-4c1017266635?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 18,
    name: 'Soccer Socks',
    category: 'Soccer & Football',
    price: 129.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop',
    reviews: []
  },

  // Tennis & Rackets
  {
    id: 19,
    name: 'Tennis Racket Pro',
    category: 'Tennis & Rackets',
    price: 1199.99,
    originalPrice: 1499.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 20,
    name: 'Professional Tennis Balls',
    category: 'Tennis & Rackets',
    price: 139.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 21,
    name: 'Tennis Shoes Premium',
    category: 'Tennis & Rackets',
    price: 849.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 22,
    name: 'Tennis Bag',
    category: 'Tennis & Rackets',
    price: 599.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 23,
    name: 'Grip Tape Set',
    category: 'Tennis & Rackets',
    price: 99.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 24,
    name: 'Tennis Wristband',
    category: 'Tennis & Rackets',
    price: 69.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1572284478635-e9a3a8867c9c?w=300&h=300&fit=crop',
    reviews: []
  },

  // Gym & Fitness
  {
    id: 25,
    name: 'Adjustable Dumbbell Set',
    category: 'Gym & Fitness',
    price: 1799.99,
    originalPrice: 2399.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 26,
    name: 'Yoga Mat Premium',
    category: 'Gym & Fitness',
    price: 399.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 27,
    name: 'Resistance Bands',
    category: 'Gym & Fitness',
    price: 199.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1583454110551-21a5d0d42b56?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 28,
    name: 'Foam Roller Pro',
    category: 'Gym & Fitness',
    price: 279.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1594381898348-846bada001ad?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 29,
    name: 'Water Bottle 1L',
    category: 'Gym & Fitness',
    price: 179.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1602143407151-7e36dd0193d7?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 30,
    name: 'Gym Gloves',
    category: 'Gym & Fitness',
    price: 149.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1572284478635-e9a3a8867c9c?w=300&h=300&fit=crop',
    reviews: []
  },

  // Cycling
  {
    id: 31,
    name: 'Mountain Bike Helmet',
    category: 'Cycling',
    price: 699.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 32,
    name: 'Professional Bike Gloves',
    category: 'Cycling',
    price: 249.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1572284478635-e9a3a8867c9c?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 33,
    name: 'Cycling Jersey Set',
    category: 'Cycling',
    price: 499.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 34,
    name: 'Bike Light Set',
    category: 'Cycling',
    price: 329.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 35,
    name: 'Repair Tool Kit',
    category: 'Cycling',
    price: 219.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab7?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 36,
    name: 'Cycling Shorts',
    category: 'Cycling',
    price: 449.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1506629082632-401017062ee0?w=300&h=300&fit=crop',
    reviews: []
  },

  // Swimming
  {
    id: 37,
    name: 'Professional Swimming Goggles',
    category: 'Swimming',
    price: 219.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561a1d?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 38,
    name: 'Racing Swimsuit',
    category: 'Swimming',
    price: 449.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 39,
    name: 'Swim Cap Premium',
    category: 'Swimming',
    price: 139.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 40,
    name: 'Pull Buoy',
    category: 'Swimming',
    price: 169.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 41,
    name: 'Kickboard Pro',
    category: 'Swimming',
    price: 199.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1530128387789-4c1017266635?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 42,
    name: 'Swim Fins',
    category: 'Swimming',
    price: 249.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1572284478635-e9a3a8867c9c?w=300&h=300&fit=crop',
    reviews: []
  },

  // Winter Sports
  {
    id: 43,
    name: 'Ski Goggles Pro',
    category: 'Winter Sports',
    price: 899.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561a1d?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 44,
    name: 'Thermal Base Layer',
    category: 'Winter Sports',
    price: 349.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 45,
    name: 'Winter Gloves',
    category: 'Winter Sports',
    price: 279.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1572284478635-e9a3a8867c9c?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 46,
    name: 'Insulated Jacket',
    category: 'Winter Sports',
    price: 1199.99,
    originalPrice: 1499.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1506529268461-3a5a4b34fb15?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 47,
    name: 'Thermal Socks Pack',
    category: 'Winter Sports',
    price: 229.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1530128387789-4c1017266635?w=300&h=300&fit=crop',
    reviews: []
  },
  {
    id: 48,
    name: 'Ski Boots',
    category: 'Winter Sports',
    price: 1699.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    reviews: []
  }
]

export function getProducts() {
  return baseProducts
}

export function getCategories() {
  const categories = ['All', ...new Set(baseProducts.map(p => p.category))]
  return categories
}

export function addReview(productId, review) {
  const product = baseProducts.find(p => p.id === productId)
  if (product) {
    if (!product.reviews) product.reviews = []
    product.reviews.push(review)
  }
}
