import React from "react";
import "./App.css";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DrawerContext from "./context/DrawerContext";
import CartContext from "./context/Cartcontext";
import AppRouter from "./routes/routes";
import Cart from "./components/Cart/Cart";
import Logincontext from "./context/LoginContext";

function App() {
  return (
    <Logincontext>
      <CartContext>
        <DrawerContext>
          <Header />
          <Cart />
          <AppRouter />
          <Footer />
        </DrawerContext>
      </CartContext>
    </Logincontext>
  );
}

//init json server: npx json-server --watch -p 3333 ./src/DB/db.json

export default App;
