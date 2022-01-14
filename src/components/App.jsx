import { useState, useEffect } from 'react';
import { csv } from 'd3';
import Data from './Data';
import Header from './Header';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`${import.meta.env.BASE_URL}PokeTypeMatchupData.csv`).then((csvContent) => setData(csvContent));
  }, []);

  return (
    <div className="App">
      <Header />
      <Data data={data} />
    </div>
  );
}

export default App;
