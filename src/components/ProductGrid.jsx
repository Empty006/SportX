import ProductCard from './ProductCard'
import './ProductGrid.css'

export default function ProductGrid({ products, onAddToCart, onToggleFavorite, favorites }) {
  return (
    <section className="products-section">
      {products.length === 0 ? (
        <div className="no-products">
          <p>No products found in this category.</p>
        </div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
              isFavorited={favorites.includes(product.id)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
