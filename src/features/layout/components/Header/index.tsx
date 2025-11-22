import { NavLink } from "react-router-dom";
import BasketIcon from "@/assets/basket.svg?react";
import { CONTACT_PAGE_URL, HOME_PAGE_URL } from "@/config/constants";
import { useShoppingCart } from "@/features/shoppingCart/context/CartContext";

const link = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded ${isActive ? "bg-black text-white" : "hover:bg-gray-200"}`;

/** Main navigation header with cart icon and badge */
export default function Header() {
  const { totalItems, openCart, closeCart, isOpen } = useShoppingCart();

  return (
    <header className="flex justify-between items-center bg-white/90 backdrop-blur shadow mb-4 p-4 sticky top-0 z-20">
      <NavLink
        to={HOME_PAGE_URL}
        className="font-logo text-gray-800 text-3xl"
        end
      >
        Zeebra
      </NavLink>
      <nav className="flex gap-4 items-center">
        <NavLink to={HOME_PAGE_URL} className={link} end>
          Home
        </NavLink>
        <NavLink to={CONTACT_PAGE_URL} className={link}>
          Contact
        </NavLink>
        <button
          type="button"
          aria-label="Open basket"
          className="p-1 rounded hover:bg-gray-100 relative"
          onClick={() => {
            isOpen ? closeCart() : openCart();
          }}
        >
          <BasketIcon className="w-6 h-6 cursor-pointer" />
          <div className="bg-black text-white rounded-full absolute -top-1 -right-1 px-1 text-sm font-semibold">
            {totalItems}
          </div>
        </button>
      </nav>
    </header>
  );
}
