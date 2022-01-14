import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
// import useD3 from '../../hooks/useD3';

function Display(props) {
  const {
    data, types, name, num,
  } = props;

  const ref = useRef();

  const row = data.filter((d) => d.Name === name)[0];

  useEffect(() => {
    console.log('rendering');

    d3.select(ref.current)
      .append('p')
      .text('asdf');

    // d3.select(ref.current)
    //   .selectAll('p')
    //   .data(data)
    //   .enter()
    //   .append('p')
    //   // .text((d) => `#${d.Number}: ${d.Name}`);
    //   .text((d) => (d.Name === name ? `#${d.Number}: ${d.Name}` : null));
  }, [data.length, name]);

  return (
    <div className="Display">
      <div ref={ref} />
    </div>
  );
}

export default Display;
