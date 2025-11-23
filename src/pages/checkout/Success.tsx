import { useEffect } from "react";
import { toast } from "react-toastify";

const Success = () => {
  useEffect(() => {
    toast.success(
      "Thank you for your purchase! Your order has been successfully placed."
    );
  }, []);

  return (
    <div className="bg-white mx-auto p-4 h-full container">
      <h1 className="mb-4 font-bold text-3xl">Checkout Success</h1>
      <div className="flex flex-col justify-center items-center bg-green-300 p-8 w-full min-h-[24rem]">
        <p className="font-bold text-xl">
          Thank you for your purchase! Your order has been successfully placed.
        </p>
      </div>
      <div>
        <div className="bg-gray-50 mt-6 p-4 rounded-lg">
          <h4 className="mb-3 font-semibold text-lg">Order Summary</h4>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Order Number:</span> #ORD-
              {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
            <p>
              <span className="font-medium">Order Date:</span>{" "}
              {new Date().toLocaleDateString()}
            </p>
            <p>
              <span className="font-medium">Estimated Delivery:</span>{" "}
              {new Date(
                Date.now() + 7 * 24 * 60 * 60 * 1000
              ).toLocaleDateString()}
            </p>
            <p>
              <span className="font-medium">Status:</span>{" "}
              <span className="text-green-600">Processing</span>
            </p>
            <h3>Your order details will be sent to your email shortly.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
