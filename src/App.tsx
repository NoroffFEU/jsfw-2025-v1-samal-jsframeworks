import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "@/features/layout/components/Footer";
import Header from "@/features/layout/components/Header";
import Cart from "./features/shoppingCart/components/Cart";
import { ShoppingCartProvider } from "./features/shoppingCart/context/CartContext";

/** Root app component with layout structure and shopping cart provider */
export default function App() {
  return (
    <ShoppingCartProvider>
      <div className={`fixed top-0 right-0 z-50 flex justify-end`}>
        <Cart />
      </div>
      <div className="relative flex flex-col m-auto min-h-dvh container">
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
