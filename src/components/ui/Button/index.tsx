import type { ButtonProps } from "@/types/button.types";

/** Reusable button component with customizable sizes */
const Button = ({
  label,
  size = "md",
  onClick,
  customClassName,
}: ButtonProps) => {
  const preset =
    size === "sm"
      ? "text-sm px-3 py-1"
      : size === "lg"
      ? "text-lg px-6 py-3"
      : "text-base px-4 py-2";

  const sizeClasses = size === "custom" ? customClassName ?? "" : preset;
  return (
    <div
      data-button
      className="flex justify-center bg-pattern hover:shadow-lg p-1 w-full hover:scale-101 hover:transition-transform duration-300"
    >
      <button
        type="button"
        className={`w-full cursor-pointer bg-white font-button ${sizeClasses}`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
