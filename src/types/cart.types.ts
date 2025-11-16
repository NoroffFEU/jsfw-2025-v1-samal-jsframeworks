export type CartBarProps = {
	isOpen: boolean;
};

export interface CartItem {
	id: string;
	quantity: number;
	title: string;
	price: number;
	imageUrl: string;
	discount?: number;
}

export interface CartContextType {
	cartItems: CartItem[];
	removeFromCart: (id: string) => void;
	increaseQuantity: (
		id: string,
		title: string,
		price: number,
		imageUrl: string,
		quantity?: number,
	) => void;
	decreaseQuantity: (id: string) => void;
	getItemQuantity: (id: string) => number;
	totalItems: number;
	openCart: () => void;
	closeCart: () => void;
	isOpen: boolean;
	toggleCart: () => void;
}

export interface CartItemProps {
	item: CartItem;
	onIncrease: () => void;
	onDecrease: () => void;
	onRemove: () => void;
}
