export type ButtonProps = {
	label: string;
	size?: "custom" | "sm" | "md" | "lg";
	customClassName?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
