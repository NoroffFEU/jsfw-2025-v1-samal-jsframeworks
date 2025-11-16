import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Cart from "./components/Cart";
import { ShoppingCartProvider } from "./contex/CartContext";

export default function App() {
  return (
    <ShoppingCartProvider>
      <div className="fixed top-0 right-0 flex justify-end z-50">
        <Cart />
      </div>
      <div className="flex flex-col min-h-dvh m-auto container relative">
        <Header />

        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ShoppingCartProvider>
  );
}
