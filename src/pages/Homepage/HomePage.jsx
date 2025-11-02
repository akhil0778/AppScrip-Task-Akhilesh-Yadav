import React, { useState, useEffect } from "react";
import "./HomePage.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import productsData from "../../data/products"; // 👈 import local data

const HomePage = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [showSort, setShowSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [idealFor, setIdealFor] = useState("All");

  useEffect(() => {
    setFilteredProducts(productsData);
  }, []);

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setShowSort(false);

    let sorted = [...filteredProducts];
    if (option === "PRICE : HIGH TO LOW") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === "PRICE : LOW TO HIGH") {
      sorted.sort((a, b) => a.price - b.price);
    }
    setFilteredProducts(sorted);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setIdealFor(value);
    if (value === "All") setFilteredProducts(productsData);
    else {
      const filtered = productsData.filter(
        (p) => p.category.toLowerCase() === value.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  const sortOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  return (
    <div className="home-container">
      <div className="filter-bar">
        <div className="left">
          <span>{filteredProducts.length} ITEMS</span>
          <button className="toggle-btn" onClick={() => setShowFilter(!showFilter)}>
            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>

        <div className="right">
          <div className="sort-selected" onClick={() => setShowSort(!showSort)}>
            {selectedSort} <span className="arrow">˅</span>
          </div>
          {showSort && (
            <ul className="sort-dropdown">
              {sortOptions.map((opt) => (
                <li key={opt} onClick={() => handleSortSelect(opt)}>
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="content-layout">
        {showFilter && (
          <div className="sidebar">
            <h4>IDEAL FOR</h4>
            <select value={idealFor} onChange={handleFilter}>
              <option>All</option>
              <option>Men</option>
              <option>Women</option>
              <option>Baby & Kids</option>
            </select>

            <h4>FABRIC</h4>
            <select>
              <option>All</option>
              <option>Cotton</option>
              <option>Polyester</option>
              <option>Silk</option>
            </select>
          </div>
        )}

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
