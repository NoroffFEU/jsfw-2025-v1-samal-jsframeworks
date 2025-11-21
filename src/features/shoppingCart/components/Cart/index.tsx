import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CHECKOUT_PAGE_URL } from "@/config/constants";
import { useShoppingCart } from "@/features/shoppingCart/context/CartContext";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    closeCart,
    totalItems,
    isOpen,
    getTotalPrice,
  } = useShoppingCart();

  if (!isOpen) return null;

  return (
    <div
      className={`cart-parent flex justify-end shadow-lg transition-transform duration-300 ease-in-out h-[100vh] 
        ${isOpen ? "visible" : "invisible opacity-0"} `}
    >
      <div className="bg-white p-8 flex flex-col justify-between h-full md:w-[35rem]">
        <div>
          <div className="flex justify-between align-center items-center mb-8">
            <h2 className="text-2xl font-heading">Your Cart ({totalItems})</h2>
            <button
              type="button"
              onClick={() => {
                closeCart();
              }}
              className="cursor-pointer"
            >
              <i className="fa-solid fa-xmark fa-2xl"></i>
            </button>
          </div>
        </div>
        {cartItems.length === 0 ? (
          <div className="flex justify-center items-center">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="overflow-y-auto h-full">
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="mb-2 border-b pb-4">
                  <div className="flex justify-between">
                    <div className="bg-gray-100 flex items-center justify-center w-38 h-28">
                      <img
                        className="object-cover bg-center w-full h-full"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex flex-col justify-between items-start w-full p-2 gap-2">
                      <span className="font-heading ">{item.title}</span>
                      <span className="font-heading ">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>

                      <div className="flex gap-2 items-center">
                        <button
                          type="button"
                          className="py-1 px-3 text-black hover:bg-gray-100 active:bg-gray-200 cursor-pointer"
                          onClick={() => {
                            decreaseQuantity(item.id);
                          }}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          className=" py-1 px-3 text-black hover:bg-gray-100 active:bg-gray-200 cursor-pointer"
                          onClick={() =>
                            increaseQuantity(
                              item.id,
                              item.title,
                              item.price,
                              item.imageUrl
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center justify-start px-2">
                      <button
                        type="button"
                        className="text-red-600 cursor-pointer"
                        onClick={() => {
                          removeFromCart(item.id);
                          toast.info(`${item.title} removed from cart`);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-4 flex flex-col items-start  ">
          <h3 className="text-xl font-heading mt-4">
            Total: ${getTotalPrice()}
          </h3>
          {cartItems.length > 0 && (
            <button
              type="button"
              className=" bg-black text-white hover:bg-gray-800 w-full h-[3rem] flex items-center justify-center cursor-pointer"
              onClick={() => {
                closeCart();
                navigate(CHECKOUT_PAGE_URL);
              }}
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
