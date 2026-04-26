import { X, Plus, Minus } from 'lucide-react'
import './Cart.css'

export default function Cart({ items, onRemove, onUpdateQuantity, onBack }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = total * 0.12
  const grandTotal = total + tax

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="close-btn" onClick={onBack}>
          <X size={24} />
        </button>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="continue-shopping" onClick={onBack}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="item-price">{item.price.toFixed(2)} TJS</p>
                </div>
                <div className="item-quantity">
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                    <Plus size={16} />
                  </button>
                </div>
                <div className="item-total">
                  {(item.price * item.quantity).toFixed(2)} TJS
                </div>
                <button
                  className="remove-btn"
                  onClick={() => onRemove(item.id)}
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>{total.toFixed(2)} TJS</span>
            </div>
            <div className="summary-row">
              <span>Tax (12%):</span>
              <span>{tax.toFixed(2)} TJS</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>{grandTotal.toFixed(2)} TJS</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
            <button className="continue-btn" onClick={onBack}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
