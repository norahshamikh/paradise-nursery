import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", price: 25, category: "Air Purifying", image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b6e?w=400" },
  { id: 2, name: "Peace Lily", price: 30, category: "Air Purifying", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
  { id: 3, name: "Spider Plant", price: 20, category: "Air Purifying", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c1e6?w=400" },
  { id: 4, name: "Areca Palm", price: 45, category: "Air Purifying", image: "https://images.unsplash.com/photo-1597055181300-a8c9bfe7f5c4?w=400" },
  { id: 5, name: "Rubber Plant", price: 35, category: "Air Purifying", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
  { id: 6, name: "Boston Fern", price: 28, category: "Air Purifying", image: "https://images.unsplash.com/photo-1597055181449-2c5b2f3f8c6b?w=400" },

  { id: 7, name: "Aloe Vera", price: 18, category: "Succulents", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
  { id: 8, name: "Echeveria", price: 15, category: "Succulents", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400" },
  { id: 9, name: "Jade Plant", price: 22, category: "Succulents", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
  { id: 10, name: "Haworthia", price: 19, category: "Succulents", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400" },
  { id: 11, name: "String of Pearls", price: 27, category: "Succulents", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
  { id: 12, name: "Zebra Plant", price: 24, category: "Succulents", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },

  { id: 13, name: "Monstera", price: 50, category: "Tropical Plants", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400" },
  { id: 14, name: "Calathea", price: 38, category: "Tropical Plants", image: "https://images.unsplash.com/photo-1597055181300-a8c9bfe7f5c4?w=400" },
  { id: 15, name: "Bird of Paradise", price: 65, category: "Tropical Plants", image: "https://images.unsplash.com/photo-1597055181449-2c5b2f3f8c6b?w=400" },
  { id: 16, name: "Philodendron", price: 32, category: "Tropical Plants", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
  { id: 17, name: "Fiddle Leaf Fig", price: 55, category: "Tropical Plants", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
  { id: 18, name: "Anthurium", price: 42, category: "Tropical Plants", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Air Purifying",
    "Succulents",
    "Tropical Plants"
  ];

  return (
    <div className="product-page" id="plants">

      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </div>
      </nav>

      <header className="products-header">
        <h1>Our Houseplants</h1>
        <p>Bring nature and beauty into your home.</p>
      </header>

      {categories.map((category) => (
        <section key={category} className="plant-category">
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <div className="plant-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />

                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>

                    <button
                      onClick={() => dispatch(addToCart(plant))}
                      disabled={isAdded}
                    >
                      {isAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;