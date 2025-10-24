export type CartPopupProps = {
	isOpen: boolean;
	onClose: () => void;
};

export interface CartItemProps {
	id: string;
	title: string;
	price: number;
	quantity: number;
	image: {
		url: string;
		alt: string;
	};
	discountedPrice: number;
}

export interface CartItemProps {
	item: CartItemProps;
	onIncrease: () => void;
	onDecrease: () => void;
	onRemove: () => void;
}

export type CartItem = {
	id: string;
	quantity: number;
};

export type CartProviderProps = {
	children: React.ReactNode;
};

export type CartContextType = {
	cartItems: CartItem[];
	getQuantity: (id: string) => number;
	increaseItem: (id: string) => void;
	decreaseItem: (id: string) => void;
	removeItem: (id: string) => void;
};
