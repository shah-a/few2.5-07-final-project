import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Display(props) {
  const {
    data, types, name, num,
  } = props;

  const ref = useRef();
  const width = 475;
  const height = 475;
  const margin = 50;
  const row = data.filter((d) => d.Name === name)[0];

  useEffect(() => {
    const svg = d3.select(ref.current);

    svg.selectAll('*').remove();

    const xScale = d3.scaleLinear()
      .domain([0, 4])
      .range([margin, width - margin])
      .nice();

    const yScale = d3.scaleBand()
      .domain(types)
      .rangeRound([margin, height - margin])
      .padding(0.125);

    const colourScale = d3.scaleOrdinal()
      .domain([0, 0.25, 0.5, 1, 2, 4])
      .range(['', '#c4b5fd', '#7dd3fc', '#6ee7b7', '#fdba74', '#f87171']);

    const xAxis = d3.axisBottom(xScale)
      .tickFormat(d3.format('.2f'))
      .ticks(5)
      .tickValues([0, 0.25, 0.5, 1, 2, 4]);

    const yAxis = d3.axisLeft(yScale);

    svg.append('g')
      .attr('transform', `translate(0, ${height - margin})`)
      .call(xAxis);

    svg.append('g')
      .attr('transform', `translate(${margin}, 0)`)
      .call(yAxis);

    svg.append('g')
      .selectAll('rect')
      .data(types)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', margin + 1)
      .attr('y', (d) => yScale(d))
      .attr('width', (d) => xScale(row[d]) - xScale(0))
      .attr('height', yScale.bandwidth())
      .attr('fill', (d) => colourScale(row[d]));
  }, [name, num]);

  return (
    <div className="Display flex flex-col justify-center">
      <svg width={475} height={475} ref={ref} />
    </div>
  );
}

export default Display;
