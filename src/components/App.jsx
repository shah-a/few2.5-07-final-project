import { useState, useEffect } from 'react';
import { csv } from 'd3';
import Data from './Data';
import Header from './Header';

function App() {
  const [data, setData] = useState([]);

  const types = [
    'Normal', 'Fire', 'Water',
    'Electric', 'Grass', 'Ice',
    'Fighting', 'Poison', 'Ground',
    'Flying', 'Psychic', 'Bug',
    'Rock', 'Ghost', 'Dragon',
    'Dark', 'Steel', 'Fairy',
  ];

  const row = (d) => {
    const dataRow = d;
    dataRow.Number = dataRow.Number.slice(1);
    types.map((type) => {
      dataRow[type] = +dataRow[type].slice(1);
      return null;
    });
    return dataRow;
  };

  useEffect(() => {
    csv(`${import.meta.env.BASE_URL}PokeTypeMatchupData.csv`, row).then((csvContent) => setData(csvContent));
  }, []);

  return (
    <div className="App">
      <Header />
      <Data data={data} />
    </div>
  );
}

export default App;
