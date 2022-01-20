import { useState, useEffect } from 'react';
import { csv } from 'd3';
import Header from './Header';
import Select from './Select';
import Display from './Display';

function App() {
  const [data, setData] = useState(undefined);
  const [name, setName] = useState('Leafeon');
  const [num, setNum] = useState('470');

  const types = [
    'Normal', 'Fire', 'Water',
    'Electric', 'Grass', 'Ice',
    'Fighting', 'Poison', 'Ground',
    'Flying', 'Psychic', 'Bug',
    'Rock', 'Ghost', 'Dragon',
    'Dark', 'Steel', 'Fairy',
  ];

  const cleanRow = (d) => {
    const dataRow = d;
    dataRow.Number = dataRow.Number.slice(1);
    types.map((type) => {
      dataRow[type] = +dataRow[type].slice(1);
      return null;
    });
    return dataRow;
  };

  useEffect(() => {
    csv(`${import.meta.env.BASE_URL}PokeTypeMatchupData.csv`, cleanRow).then((csvContent) => setData(csvContent));
  }, []);

  return (
    <div className="App max-w-5xl mx-auto">
      <Header />
      <div className="p-10 grid lg:grid-cols-2 grid-cols-1 place-items-center">
        {data && <Select data={data} name={name} setName={setName} num={num} setNum={setNum} />}
        {data && <Display data={data} types={types} name={name} num={num} />}
      </div>
    </div>
  );
}

export default App;
