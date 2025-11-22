import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { CartContextType, CartItem } from "@/types/cart.types";

const ShoppingCartContext = createContext<CartContextType | undefined>(
  undefined
);

/** Hook to access shopping cart context and functionality */
export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};

export const ShoppingCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart", []);

  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  /** Get the quantity of a specific item in the cart */
  const getItemQuantity = (id: string) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  /** Add a new item to cart or increase quantity by 1 if it already exists */
  const increaseQuantity = (
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    quantity?: number
  ) => {
    if (!id || !title || price < 0) {
      console.error("Invalid product data provided to increaseQuantity");
      return;
    }

    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [
          ...currItems,
          {
            id,
            title: title || "",
            price: price || 0,
            imageUrl: imageUrl || "",
            quantity: quantity || 1,
          },
        ];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  /** Decrease item quantity by 1, remove from cart if quantity reaches 0 */
  const decreaseQuantity = (id: string) => {
    if (!id) {
      console.error("Invalid product ID provided to decreaseQuantity");
      return;
    }

    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  /** Remove an item completely from the cart regardless of quantity */
  const removeFromCart = (id: string) => {
    if (!id) {
      console.error("Invalid product ID provided to removeFromCart");
      return;
    }

    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  /** Calculate the total price of all items in the cart */
  const getTotalPrice = () => {
    try {
      return cartItems
        .reduce((total, item) => {
          const itemTotal = (item.price || 0) * (item.quantity || 0);
          return total + itemTotal;
        }, 0)
        .toFixed(2);
    } catch (error) {
      console.error("Error calculating total price:", error);
      return "0.00";
    }
  };

  /** Clear all items from the cart */
  const removeAllFromCart = () => {
    setCartItems([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        removeAllFromCart,
        totalItems,
        openCart,
        closeCart,
        isOpen,
        toggleCart,
        getTotalPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
