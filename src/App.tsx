import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "@/features/layout/components/Footer";
import Header from "@/features/layout/components/Header";
import Cart from "./features/shoppingCart/components/Cart";
import { ShoppingCartProvider } from "./features/shoppingCart/context/CartContext";

export default function App() {
  return (
    <ShoppingCartProvider>
      <div className={`fixed top-0 right-0 flex justify-end z-50`}>
        <Cart />
      </div>
      <div className="flex flex-col min-h-dvh m-auto container relative">
        <Header />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </ShoppingCartProvider>
  );
}
