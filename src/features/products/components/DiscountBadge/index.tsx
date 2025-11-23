interface PercentageCalcProps {
  size: string;
  originalPrice: number;
  discountedPrice: number;
}

/** Calculate and display discount percentage badge */
const PercentageCalc = ({
  size,
  originalPrice,
  discountedPrice,
}: PercentageCalcProps) => {
  const preset =
    size === "sm" ? "text-sm" : size === "md" ? "text-md" : "text-xl";
  const percentage = Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  );
  if (percentage <= 0) return null;
  return (
    <p
      className={`w-fit bg-black px-2 py-1 font-heading font-bold text-white ${preset}`}
    >
      {percentage}%
    </p>
  );
};

export default PercentageCalc;
