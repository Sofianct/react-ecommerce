import React from "react";
import "./App.css";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DrawerContext from "./context/DrawerContext";
import CartContext from "./context/Cartcontext";
import AppRouter from "./routes/routes";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartContext>
      <DrawerContext>
        <Header />
        <Cart />
        <AppRouter />
        <Footer />
      </DrawerContext>
    </CartContext>
  );
}

//init json server: npx json-server --watch -p 3333 ./src/DB/db.json

export default App;
