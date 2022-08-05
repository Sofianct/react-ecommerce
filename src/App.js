import React from "react";
import "./App.css";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DrawerContext from "./context/DrawerContext";
import CartContext from "./context/Cartcontext";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/routes";

function App() {
  return (
    <CartContext>
      <DrawerContext>
        <Router>
          <Header />
          <AppRouter />
          <Footer />
        </Router>
      </DrawerContext>
    </CartContext>
  );
}

//init json server: npx json-server --watch -p 3333 db.json

export default App;
