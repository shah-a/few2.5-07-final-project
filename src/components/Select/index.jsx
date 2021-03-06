function Select(props) {
  const {
    data, name, setName, num, setNum,
  } = props;

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

  return (
    <div className="Select">
      <select
        className="px-3 py-1 mb-3 border-2 rounded w-full"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setNum(nameToNum[e.target.value]);
        }}
      >
        {options}
      </select>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`} alt={name} />
    </div>
  );
}

export default Select;
