import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizzza Co.</h1>
        </header>
    );
}

function Pizza(pizza) {
    return (
        <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
            <img src={pizza.photoName} alt={pizza.name} />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.soldOut ? 'Sold Out' : pizza.price}</span>
            </div>
        </li>
    );
}

function Menu() {
    const numPizzas = pizzaData.length

    return (
        <menu className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ? (
                <>
                    <p>Authentic Nepali Cuisines. 6 creative dishes to choose from. All from out stove oven, all organic, all delicious.</p>

                    <ul className="pizzas">
                        {pizzaData.map((pizza) => (
                            <Pizza
                                name={pizza.name}
                                ingredients={pizza.ingredients}
                                price={pizza.price}
                                photoName={pizza.photoName}
                                soldOut={pizza.soldOut}
                            />
                        ))}
                    </ul>
                </>
            ) : (
                <div>
                    <p>We are working on our menu.</p>
                </div>
            )}
        </menu>
    );
}

function Footer() {
    const openHours = 8;
    const closeHours = 22
    const currHours = new Date().getHours()

    const isOpen = currHours >= openHours && currHours <= closeHours;


    return (
        <footer className="footer">
            {isOpen ? (
                <div className="order">
                    <p>{new Date().toLocaleTimeString()}. We're currently open.</p>
                    <button className="btn">Order Now</button>
                </div>) : (
                <p>We are closed now.</p>
            )
            }
        </footer>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
