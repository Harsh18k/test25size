import React from 'react';

function CapacityInput({ capacity, setCapacity }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Set Transportation Capacity</h2>
      <div className="flex items-center">
        <input
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(Number(e.target.value))}
          className="flex-grow px-3 py-2 border border-gray-300 rounded"
        />
        <span className="ml-2 text-gray-600">kg</span>
      </div>
    </div>
  );
}

export default CapacityInput;

