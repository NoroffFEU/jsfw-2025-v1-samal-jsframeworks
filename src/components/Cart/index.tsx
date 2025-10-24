import type { CartItemType } from "@/types/cart";

interface CartProps {
  items: CartItemType[];
  onRemove: (id: string) => void;
  isOpen?: boolean;
}



const Cart = ({ items, onRemove, isOpen }: CartProps) => {
  return (
    <div
      className={`w-[30rem] h-[45rem] p-4 flex items-center flex-col justify-start shadow-2xl gap-6 bg-white overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <h2 className="text-2xl self-start font-heading mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-2 border-b w-full py-4"
          >
            <div className="flex items-center">
              <img
                src={item.image.url}
                alt={item.image.alt}
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  {item.quantity} x ${item.price}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
