import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const useD3 = (renderFn, dependencies) => {
  const ref = useRef();
  useEffect(() => {
    renderFn(d3.select(ref.current));
  }, dependencies);
  return ref;
};

export default useD3;
