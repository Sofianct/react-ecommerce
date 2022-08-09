import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "./App.css";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DrawerContext from "./context/DrawerContext";
import CartContext from "./context/Cartcontext";
import AppRouter from "./routes/routes";
import Cart from "./components/Cart/Cart";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContext>
        <DrawerContext>
          <Header />
          <Cart />
          <AppRouter />
          <Footer />
        </DrawerContext>
      </CartContext>
    </QueryClientProvider>
  );
}

//init json server: npx json-server --watch -p 3333 ./src/DB/db.json

export default App;
