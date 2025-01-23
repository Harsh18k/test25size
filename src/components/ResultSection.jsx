import React from 'react';

function ResultSection({ result }) {
  if (!result) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Optimized Emergency Supply List</h2>
      <p className="text-blue-600 font-medium mb-4">
        Total Utility Score: {result.totalUtility}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Supply Name</th>
              <th className="px-4 py-2 text-left text-gray-600">Weight (kg)</th>
              <th className="px-4 py-2 text-left text-gray-600">Utility Score</th>
            </tr>
          </thead>
          <tbody>
            {result.selectedSupplies.map((supply, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{supply.name}</td>
                <td className="px-4 py-2">{supply.weight}</td>
                <td className="px-4 py-2">{supply.utility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultSection;

