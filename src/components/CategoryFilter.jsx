import './CategoryFilter.css'

export default function CategoryFilter({ categories, selected, onChange }) {
  return (
    <section className="category-filter">
      <h2>Shop by Category</h2>
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selected === category ? 'active' : ''}`}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  )
}
