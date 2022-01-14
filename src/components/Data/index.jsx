import { useState } from 'react';
import useD3 from '../../hooks/useD3';

function Data({ data }) {
  const [name, setName] = useState('Leafeon');
  const [num, setNum] = useState('470');

  const nameToNum = data.reduce((acc, d) => {
    acc[d.Name] = d.Number;
    return acc;
  }, {});

  const options = data.map((d) => (
    <option
      key={d.Name}
      value={d.Name}
    >
      {`#${d.Number}: ${d.Name}`}
    </option>
  ));

  const renderFn = (d3Container) => {
    d3Container.selectAll('p')
      .data(data)
      .enter()
      .append('p')
      .text((d) => `#${d.Number}: ${d.Name}`);
  };

  return (
    <div className="Data m-5">
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`} alt={name} />
      <select
        className="px-3 py-1 mb-3 border-2 rounded"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setNum(nameToNum[e.target.value]);
        }}
      >
        {options}
      </select>
      <div ref={useD3(renderFn, [data.length])} />
    </div>
  );
}

export default Data;
