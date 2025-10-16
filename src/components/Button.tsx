type ButtonProps = {
  label: string;
  size?: "sm" | "md" | "lg";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ label, size = "md", onClick }: ButtonProps) => {
  const sizeClasses =
    size === "sm"
      ? "text-sm px-3 py-1"
      : size === "lg"
      ? "text-lg px-6 py-3"
      : "text-base px-4 py-2";

  return (
    <div
      data-button
      className="bg-pattern w-full flex justify-center p-1 hover:shadow-lg hover:transition-transform hover:scale-101 duration-300"
    >
      <button
        className={`bg-white w-full font-button cursor-pointer ${sizeClasses}`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
