import { useState, useEffect } from 'react';
import { csv } from 'd3';
import Comp from './Comp';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv('/PokeTypeMatchupData.csv').then((csvContent) => setData(csvContent));
  }, []);

  return (
    <div className="App min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-zinc-200">
      <Comp data={data} />
    </div>
  );
}

export default App;
