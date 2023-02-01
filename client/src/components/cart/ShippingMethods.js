import React from "react";

const ShippingMethods = ({ shippingMethods, onChange, selectedMethod }) => {
  return (
    <select value={selectedMethod} onChange={onChange} className="block p-2 text-gray-600 w-full text-sm">
      {shippingMethods.map((method) => (
        <option key={method.id} value={method.id}>
          {method.name} (${method.cost})
        </option>
      ))}
    </select>
  );
};

export default ShippingMethods;