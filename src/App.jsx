import React, { useState } from 'react';
import SupplyInput from './components/SupplyInput';
import CapacityInput from './components/CapacityInput';
import ResultSection from './components/ResultSection';
import { knapsack } from './utils/knapsack';

function App() {
  const [supplies, setSupplies] = useState([]);
  const [capacity, setCapacity] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const addSupply = (supply) => {
    setSupplies([...supplies, { ...supply, id: Date.now() }]);
  };

  const deleteSupply = (id) => {
    setSupplies(supplies.filter(supply => supply.id !== id));
  };

  const editSupply = (id, updatedSupply) => {
    setSupplies(supplies.map(supply => supply.id === id ? { ...updatedSupply, id } : supply));
  };

  const optimizeSupplies = () => {
    if (supplies.length === 0) {
      setError('Please add some supplies before optimizing.');
      return;
    }
    if (capacity <= 0) {
      setError('Please set a valid capacity before optimizing.');
      return;
    }
    setError('');
    const optimizedResult = knapsack(supplies, capacity);
    setResult(optimizedResult);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Emergency Disaster Relief Supply Optimization
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <SupplyInput 
              addSupply={addSupply} 
              supplies={supplies} 
              deleteSupply={deleteSupply}
              editSupply={editSupply}
            />
          </div>
          <div>
            <CapacityInput capacity={capacity} setCapacity={setCapacity} />
            <button 
              onClick={optimizeSupplies}
              className="w-full bg-red-600 text-white py-2 px-4 rounded mt-6 hover:bg-red-700 transition-colors"
            >
              Optimize Emergency Supplies
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <ResultSection result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

