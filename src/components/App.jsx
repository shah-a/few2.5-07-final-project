import { useState, useEffect } from 'react';
import { csv } from 'd3';
import Comp from './Comp';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`${import.meta.env.BASE_URL}PokeTypeMatchupData.csv`).then((csvContent) => setData(csvContent));
  }, []);

  return (
    <div className="App">
      <Comp data={data} />
    </div>
  );
}

export default App;
