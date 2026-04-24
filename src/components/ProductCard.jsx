import { ShoppingCart, Heart } from 'lucide-react'
import { useState } from 'react'
import './ProductCard.css'

export default function ProductCard({ product, onAddToCart, onToggleFavorite, isFavorited }) {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    onAddToCart(product)
    setTimeout(() => setIsAdding(false), 600)
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/260x260?text=' + encodeURIComponent(product.name)
          }}
        />
        <div className="product-overlay">
          <button
            className={`cart-btn ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
          >
            <ShoppingCart size={20} />
            <span>{isAdding ? 'Added!' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <button
            className={`favorite-btn ${isFavorited ? 'active' : ''}`}
            onClick={() => onToggleFavorite(product.id)}
            aria-label="Toggle favorite"
          >
            <Heart size={18} />
          </button>
        </div>

        <p className="product-category">{product.category}</p>

        <div className="product-rating">
          <div className="stars">
            {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="rating-count">({product.reviews?.length || 0})</span>
        </div>

        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="product-original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  )
}
