import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Display(props) {
  const {
    data, types, name, num,
  } = props;

  const ref = useRef();

  const row = data.filter((d) => d.Name === name)[0];

  useEffect(() => {
    const div = d3.select(ref.current);

    div.selectAll('*').remove();

    div.selectAll('p')
      .data(types)
      .enter()
      .append('p')
      .text((d) => `${d}: ${row[d]}`);
  }, [name, num]);

  return (
    <div className="Display">
      {/* <svg width={width} height={height} ref={ref} /> */}
      <div ref={ref} />
    </div>
  );
}

export default Display;
