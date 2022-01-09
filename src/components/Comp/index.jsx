import { useState } from 'react';
import useD3 from '../../hooks/useD3';

const index = ({ data }) => {
  const [pokemon, setPokemon] = useState('Bulbasaur');

  const pokemonOptions = data.map((d) => (
    <option
      key={d.Name}
      value={d.Name}
    >
      {`${d.Number}: ${d.Name}`}
    </option>
  ));

  const renderData = (d3Container) => {
    d3Container.selectAll('p')
      .data(data)
      .enter()
      .append('p')
      .text((d) => `${d.Number}: ${d.Name}`);
  };

  return (
    <div className="Comp m-5">
      <select
        className="px-3 py-1 mb-3 border-2 rounded"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      >
        {pokemonOptions}
      </select>
      <div ref={useD3(renderData, [data.length])} />
    </div>
  );
};

export default index;
