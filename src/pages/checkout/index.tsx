import { useNavigate } from "react-router-dom";
import { CHECKOUT_SUCCESS_PAGE_URL } from "@/config/constants";
import { useShoppingCart } from "@/features/shoppingCart/context/CartContext";

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
				<div className="card container h-full bg-blue-50 pb-10!">
					<h1 className="text-3xl font-heading mb-6">Checkout</h1>
					<div className="m-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
						<div className="flex flex-col gap-2 w-full ">
							<h2 className="mb-2 font-bold">Shipping information</h2>
							<div>
								<form className="flex flex-col gap-4">
									<div>
										<label htmlFor="fullName">Full Name *</label>
										<input
											name="fullName"
											type="text"
											placeholder="Full Name"
											className="border border-gray-300 w-full mt-2 rounded-md p-2"
										/>
									</div>
									<div>
										<label htmlFor="email">Email address *</label>
										<input
											name="email"
											type="email"
											placeholder="Email address"
											className="border border-gray-300 w-full mt-2 rounded-md p-2"
										/>
									</div>
									<div>
										<label htmlFor="phone">Phone Number *</label>
										<input
											name="phone"
											type="tel"
											placeholder="Phone Number"
											className="border border-gray-300 w-full mt-2 rounded-md p-2"
										/>
									</div>
									<div>
										<label htmlFor="address">Address *</label>
										<input
											name="address"
											type="text"
											placeholder="Address"
											className="border border-gray-300 w-full mt-2 rounded-md p-2"
										/>
									</div>
									<div>
										<label htmlFor="city">City *</label>
										<input
											name="city"
											type="text"
											placeholder="City"
											className="border border-gray-300 w-full mt-2 rounded-md p-2"
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
						<div className="flex flex-col container gap-8 ">
							<h2 className="mb-2 font-bold">Review your cart</h2>
							<div
								className={`flex flex-col gap-2 max-h-68 overflow-y-auto ${
									cartItems.length > 2
										? "border-b border-gray-300 pb-4 shadow-[inset_0_-7px_20px_-12px_rgba(0,0,0,0.4)]"
										: ""
								}`}
							>
								{cartItems.map((item) => (
									<div className="flex border-b border-gray-300" key={item.id}>
										<div className="p-2 flex gap-2 flex-row w-full">
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
									Tax ${(parseFloat(getTotalPrice()) * 0.3).toFixed(2)}
								</span>
								<span>
									Shipping ${(parseFloat(getTotalPrice()) * 0.02).toFixed(2)}
								</span>
								<span>
									Shipping Diesel $
									{(parseFloat(getTotalPrice()) * 0.01).toFixed(2)}
								</span>
								<span>
									Snacks for driver $
									{(parseFloat(getTotalPrice()) * 0.01).toFixed(2)}
								</span>
								<span>
									Electricity ${(parseFloat(getTotalPrice()) * 0.05).toFixed(2)}
								</span>

								<span className="font-bold text-lg mt-3">
									Total: ${getTotalPrice()}
								</span>
							</div>
							<div className="w-full flex justify-end">
								<button
									type="button"
									className="bg-black text-white hover:bg-gray-800 w-full h-[3rem] flex items-center justify-center cursor-pointer"
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
