import { useEffect } from "react";
import { toast } from "react-toastify";

const Success = () => {
  useEffect(() => {
    toast.success(
      "Thank you for your purchase! Your order has been successfully placed."
    );
  }, []);
  return (
    <div className="container mx-auto p-4 h-full bg-white">
      <h1 className="text-3xl font-bold mb-4">Checkout Success</h1>
      <div className="w-full min-h-70 bg-green-300 flex flex-col justify-center items-center">
        <p className="text-xl font-bold">
          Thank you for your purchase! Your order has been successfully placed.
        </p>
      </div>
      <div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Order Summary</h4>
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
