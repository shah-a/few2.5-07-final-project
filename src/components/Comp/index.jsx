import useD3 from '../../hooks/useD3';

const index = ({ data }) => {
  const renderFn = (d3Container) => {
    d3Container.selectAll('div')
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
      .style('font-family', 'helvetica, sans-serif');
  };

  return (
    <div className="Comp">
      <div ref={useD3(renderFn, [data.length])} />
    </div>
  );
};

export default index;
