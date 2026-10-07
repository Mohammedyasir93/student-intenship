export default function SearchBar({ search, onSearch, category, onCategoryChange, location, onLocationChange, categories, locations }) {
  return (
    <div className="filter-bar" role="search">
      <label className="search-field">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <span className="visually-hidden">Search by job title or company</span>
        <input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search roles or companies" />
      </label>
      <label className="select-field">
        <span className="visually-hidden">Filter by category</span>
        <select value={category} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="">All categories</option>
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <label className="select-field">
        <span className="visually-hidden">Filter by location</span>
        <select value={location} onChange={(event) => onLocationChange(event.target.value)}>
          <option value="">All locations</option>
          {locations.map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
    </div>
  );
}