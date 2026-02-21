import { useNavigate } from "react-router-dom";
import {
	CHECKOUT_SUCCESS_PAGE_URL,
	DRIVER_SNACKS_RATE,
	ELECTRICITY_RATE,
	SHIPPING_DIESEL_RATE,
	SHIPPING_RATE,
	TAX_RATE,
} from "@/config/constants";
import { useShoppingCart } from "@/features/shoppingCart/context/CartContext";

/** Checkout page with shipping form and order summary */
export const Checkout = () => {
	const navigate = useNavigate();
	const {
		cartItems,
		getTotalPrice,
		removeFromCart,
		increaseQuantity,
		decreaseQuantity,
		removeAllFromCart,
	} = useShoppingCart();

	return (
		<>
			{cartItems.length === 0 ? (
				<p>Your cart is empty. Please add items to proceed to checkout.</p>
			) : (
				<div className="bg-blue-50 pb-10! h-full card container">
					<h1 className="mb-6 font-heading text-3xl">Checkout</h1>
					<div className="gap-8 grid grid-cols-1 md:grid-cols-[1fr_1fr] m-auto">
						<div className="flex flex-col gap-2 w-full">
							<h2 className="mb-2 font-bold">Shipping information</h2>
							<div>
								<form className="flex flex-col gap-4">
									<div>
										<label htmlFor="fullName">Full Name *</label>
										<input
											name="fullName"
											type="text"
											placeholder="Full Name"
											className="mt-2 p-2 border border-gray-300 rounded-md w-full"
										/>
									</div>
									<div>
										<label htmlFor="email">Email address *</label>
										<input
											name="email"
											type="email"
											placeholder="Email address"
											className="mt-2 p-2 border border-gray-300 rounded-md w-full"
										/>
									</div>
									<div>
										<label htmlFor="phone">Phone Number *</label>
										<input
											name="phone"
											type="tel"
											placeholder="Phone Number"
											className="mt-2 p-2 border border-gray-300 rounded-md w-full"
										/>
									</div>
									<div>
										<label htmlFor="address">Address *</label>
										<input
											name="address"
											type="text"
											placeholder="Address"
											className="mt-2 p-2 border border-gray-300 rounded-md w-full"
										/>
									</div>
									<div>
										<label htmlFor="city">City *</label>
										<input
											name="city"
											type="text"
											placeholder="City"
											className="mt-2 p-2 border border-gray-300 rounded-md w-full"
										/>
									</div>
									<div>
										<input type="checkbox" name="terms" />
										<label htmlFor="terms" className="ml-2">
											I agree to the terms and conditions *
										</label>
									</div>
								</form>
							</div>
						</div>
						<div className="flex flex-col gap-8 container">
							<h2 className="mb-2 font-bold">Review your cart</h2>
							<div
								className={`flex flex-col gap-2 max-h-68 overflow-y-auto ${
									cartItems.length > 2
										? "border-b border-gray-300 pb-4 shadow-[inset_0_-7px_20px_-12px_rgba(0,0,0,0.4)]"
										: ""
								}`}
							>
								{cartItems.map((item) => (
									<div className="flex border-gray-300 border-b" key={item.id}>
										<div className="flex flex-row gap-2 p-2 w-full">
											<div>
												<img
													className="w-28 h-28 object-cover"
													src={item.imageUrl}
													alt={item.title}
												/>
											</div>{" "}
											<div>
												<h3 className="font-heading">{item.title}</h3>
												<p>
													Quantity: <span>{item.quantity}</span>
												</p>
												<p>
													Price: <span>${item.price}</span>
												</p>
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
										</div>
										<div>
											<button
												onClick={() => removeFromCart(item.id)}
												type="button"
												className="p-2 cursor-pointer"
											>
												<i
													className="fa-solid fa-xmark fa-lg"
													style={{ color: "#ef3434" }}
												></i>
											</button>
										</div>
									</div>
								))}
							</div>
							<div className="flex flex-col items-start gap-3 mt-4">
								<span>
									Tax ${(parseFloat(getTotalPrice()) * TAX_RATE).toFixed(2)}
								</span>
								<span>
									Shipping $
									{(parseFloat(getTotalPrice()) * SHIPPING_RATE).toFixed(2)}
								</span>
								<span>
									Shipping Diesel $
									{(parseFloat(getTotalPrice()) * SHIPPING_DIESEL_RATE).toFixed(
										2,
									)}
								</span>
								<span>
									Snacks for driver $
									{(parseFloat(getTotalPrice()) * DRIVER_SNACKS_RATE).toFixed(
										2,
									)}
								</span>
								<span>
									Electricity $
									{(parseFloat(getTotalPrice()) * ELECTRICITY_RATE).toFixed(2)}
								</span>

								<span className="mt-3 font-bold text-lg">
									Total: ${getTotalPrice()}
								</span>
							</div>
							<div className="flex justify-end w-full">
								<button
									type="button"
									className="flex justify-center items-center bg-black hover:bg-gray-800 w-full h-[3rem] text-white cursor-pointer"
									onClick={(e) => {
										e.preventDefault();
										removeAllFromCart();
										navigate(CHECKOUT_SUCCESS_PAGE_URL);
									}}
								>
									Place Order
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
