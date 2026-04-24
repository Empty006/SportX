import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryFilter from './components/CategoryFilter'
import ProductGrid from './components/ProductGrid'
import Cart from './components/Cart'
import { getProducts, getCategories } from './data/products'
import './App.css'

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems')
    return saved ? JSON.parse(saved) : []
  })
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showCart, setShowCart] = useState(false)
  const [notification, setNotification] = useState('')

  const categories = getCategories()
  const products = getProducts()
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  // Persist favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    showNotification(`${product.name} added to cart!`)
  }

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      )
    }
  }

  const toggleFavorite = (productId) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const showNotification = (msg) => {
    setNotification(msg)
    setTimeout(() => setNotification(''), 3000)
  }

  return (
    <div className="app">
      <Navbar 
        cartCount={cartItems.length} 
        onCartClick={() => setShowCart(!showCart)}
      />
      
      {notification && <div className="notification">{notification}</div>}
      
      {showCart ? (
        <Cart
          items={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onBack={() => setShowCart(false)}
        />
      ) : (
        <main>
          <Hero />
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
          <ProductGrid
            products={filteredProducts}
            onAddToCart={addToCart}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        </main>
      )}
    </div>
  )
}
