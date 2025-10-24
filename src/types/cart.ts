export type CartSidebarProps = {
	isOpen: boolean
	onClose: () => void
}

export interface CartItemType {
	id: string
	title: string
	price: number
	quantity: number
	image: {
		url: string
		alt: string
	}
	discountedPrice: number
}

export interface CartContextType {
	items: CartItemType[]
	addItem: (item: CartItemType) => void
	updateAmount: (id: string, amount: number) => void
	removeItem: (id: string) => void
	clearCart: () => void
	hasItem: (id: string) => boolean
	totalItems: number
	totalSaved: number
	totalPrice: number
}

export interface CartItemProps {
	item: CartItemType
	onIncrease: () => void
	onDecrease: () => void
	onRemove: () => void
}
