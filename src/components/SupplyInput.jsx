import React, { useState } from 'react';

function SupplyInput({ addSupply, supplies, deleteSupply, editSupply }) {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [utility, setUtility] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !weight || !utility) {
      alert('Please fill all fields');
      return;
    }
    if (editingId !== null) {
      editSupply(editingId, { name, weight: Number(weight), utility: Number(utility) });
      setEditingId(null);
    } else {
      addSupply({ name, weight: Number(weight), utility: Number(utility) });
    }
    setName('');
    setWeight('');
    setUtility('');
  };

  const startEdit = (supply) => {
    setName(supply.name);
    setWeight(supply.weight.toString());
    setUtility(supply.utility.toString());
    setEditingId(supply.id);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Emergency Supply</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Supply Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Utility Score"
            value={utility}
            onChange={(e) => setUtility(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <button 
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          {editingId !== null ? 'Update Emergency Supply' : 'Add Emergency Supply'}
        </button>
      </form>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">Emergency Supply List</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Supply Name</th>
              <th className="px-4 py-2 text-left text-gray-600">Weight (kg)</th>
              <th className="px-4 py-2 text-left text-gray-600">Utility Score</th>
              <th className="px-4 py-2 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {supplies.map((supply) => (
              <tr key={supply.id} className="border-b">
                <td className="px-4 py-2">{supply.name}</td>
                <td className="px-4 py-2">{supply.weight}</td>
                <td className="px-4 py-2">{supply.utility}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <button 
                    onClick={() => startEdit(supply)}
                    className="bg-amber-500 text-white py-1 px-2 rounded text-sm mr-2 hover:bg-amber-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => deleteSupply(supply.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded text-sm hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SupplyInput;

