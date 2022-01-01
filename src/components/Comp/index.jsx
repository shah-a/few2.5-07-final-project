import useD3 from '../../hooks/useD3';

const index = ({ data }) => {
  const renderFn = (container) => {
    container.select('.Comp')
      .selectAll('div')
      .data([5, 6, 2, 8, 4, 9, 1, 4, 9, 1])
      .enter()
      .append('div')
      .text((d) => `$${d.toFixed(2)}`)
      .style('padding', '1em')
      .style('background', 'linear-gradient(to left, #e66465, #9198e5)')
      .style('margin', '1px')
      .style('color', 'white')
      .style('width', (d) => `${(d / 10) * 100}%`)
      .style('height', '3rem')
      .style('border-radius', '3rem')
      .style('font-family', 'helvetica, sans-serif')
      .style('font-size', (d) => `${d * 5}px`)
      .style('opacity', (d) => `${d / 10}`);
  };

  return (
    <div className="Comp">
      <div
        className="container"
        ref={useD3(renderFn, [data.length])}
      />
    </div>
  );
};

export default index;
