import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CHECKOUT_PAGE_URL } from "@/config/constants";
import { useShoppingCart } from "@/features/shoppingCart/context/CartContext";

/** Shopping cart sidebar with item management and checkout navigation */
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
		<>
			{/* Backdrop overlay */}
			<button
				type="button"
				className="top-0 left-0 z-40 fixed bg-black/50 w-full h-full"
				onClick={closeCart}
				aria-label="Close cart"
			/>
			{/* Cart sidebar */}
			<div
				className={`top-0 right-0 z-50 fixed flex h-[100vh] w-[100%] justify-end shadow-lg transition-transform duration-300 ease-in-out
        ${isOpen ? "visible" : "invisible opacity-0"} `}
				style={{ pointerEvents: "none" }}
			>
				<div
					className="flex flex-col justify-between bg-white p-8 w-[24rem] 2xs:w-[24rem] md:w-[35rem] h-full"
					style={{ pointerEvents: "auto" }}
				>
					<div>
						<div className="flex justify-between items-center mb-8 align-center">
							<h2 className="font-heading text-2xl">
								Your Cart ({totalItems})
							</h2>
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
						<div className="h-full overflow-y-auto">
							<ul>
								{cartItems.map((item) => (
									<li key={item.id} className="mb-2 pb-4 border-b">
										<div className="flex justify-between">
											<div className="flex justify-center items-center bg-gray-100 w-38 h-28">
												<img
													className="bg-center w-full h-full object-cover"
													src={item.imageUrl}
													alt={item.title}
												/>
											</div>
											<div className="flex flex-col justify-between items-start gap-2 p-2 w-full">
												<span className="font-heading">{item.title}</span>
												<span className="font-heading">
													${(item.price * item.quantity).toFixed(2)}
												</span>

												<div className="flex items-center gap-2">
													<button
														type="button"
														className="hover:bg-gray-100 active:bg-gray-200 px-3 py-1 text-black cursor-pointer"
														onClick={() => {
															decreaseQuantity(item.id);
														}}
													>
														-
													</button>
													<span>{item.quantity}</span>
													<button
														type="button"
														className="hover:bg-gray-100 active:bg-gray-200 px-3 py-1 text-black cursor-pointer"
														onClick={() =>
															increaseQuantity(
																item.id,
																item.title,
																item.price,
																item.imageUrl,
															)
														}
													>
														+
													</button>
												</div>
											</div>
											<div className="flex flex-col justify-start items-center px-2">
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
					<div className="flex flex-col items-start mt-4">
						<h3 className="mt-4 font-heading text-xl">
							Total: ${getTotalPrice()}
						</h3>
						{cartItems.length > 0 && (
							<button
								type="button"
								className="flex justify-center items-center bg-black hover:bg-gray-800 w-full h-[3rem] text-white cursor-pointer"
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
		</>
	);
};

export default Cart;
