import { ShoppingCart, Menu } from 'lucide-react'
import './Navbar.css'

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">SportX</span>
          </div>
        </div>
        
        <div className="navbar-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </div>

        <button className="cart-button" onClick={onCartClick}>
          <ShoppingCart size={24} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </nav>
  )
}
