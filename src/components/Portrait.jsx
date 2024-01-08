import React from "react";

const Portrait = () => {
  return (
    <div className=" p-8 ">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Receipt</h2>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Transaction ID: <span className="font-semibold">123456789</span>
        </p>
        <p className="text-sm text-gray-600">
          Date: <span className="font-semibold">2024-01-08</span>
        </p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Product: <span className="font-semibold">Widget X</span>
        </p>
        <p className="text-sm text-gray-600">
          Price: <span className="font-semibold">$19.99</span>
        </p>
        <p className="text-sm text-gray-600">
          Quantity: <span className="font-semibold">2</span>
        </p>
        <p className="text-sm text-gray-600">
          Total: <span className="font-semibold">$39.98</span>
        </p>
      </div>

      <hr className="my-4" />

      <div className="mb-4">
        <p className="text-lg font-semibold">Total Amount: $39.98</p>
      </div>

      <div className="text-center mt-8">
        <p className="text-xs text-gray-600">Thank you for your purchase!</p>
      </div>
    </div>
  );
};

export default Portrait;
