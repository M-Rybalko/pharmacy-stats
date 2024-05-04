import React, {FC, useEffect, useState} from 'react';
import {PaymentStats} from '@/types/PaymentStats';
import {calculateSizes} from './utils';
import Bar from '@/components/charts/bar-chart-block/bar-chart/components/bar/Bar';
import {PaymentBarHeight} from './types';
import {months} from '@/constants/months';
import {useAnimate} from 'framer-motion';

interface ChartProps {
  data: PaymentStats;
  slider: number[];
}
const BarChart: FC<ChartProps> = ({data, slider}) => {
  const [scope, animate] = useAnimate();

  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (scope.current) {
        const rect = scope.current.getBoundingClientRect();
        if (rect !== undefined) {
          setContainerWidth(rect.width);
          setContainerHeight(rect.height);
        }
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    animate(scope.current, {y: [200, 0], opacity: [0, 1]}, {duration: 0.5});
  }, [slider]);

  const bars: PaymentBarHeight = calculateSizes(
    data,
    containerHeight,
    containerWidth
  );
  const chartWidth: number = bars[0].width * bars.length;
  const margin: number = (containerWidth - chartWidth) / bars.length;
  let x = 2;
  let y = containerHeight;

  let highest = 0;
  bars.map(bar => {
    if (bar.price > highest) {
      highest = bar.price;
    }
  });
  highest = highest / 0.85 / 1000000;
  const measures: number[] = [];
  for (let i = 0; i <= 100; i += 20) {
    measures.push(highest * (i / 100));
  }
  return (
    <svg
      viewBox={`0 0 ${containerWidth} ${containerHeight}`}
      width="100%"
      height="100%"
      ref={scope}
      className="chart"
    >
      {measures.map((measure, index) => (
        <rect
          key={index}
          x={2}
          y={(containerHeight * index) / 5}
          width="100%"
          height={1}
          fill={'#555'}
        ></rect>
      ))}
      {bars.map((bar, index) => {
        const barX = x;
        x += bar.width + margin;
        y = containerHeight - bar.height;
        return (
          <Bar
            key={index}
            x={barX}
            y={y}
            width={bar.width}
            height={bar.height}
            tooltip={
              <>
                Місяць: {months[bar.month]} <br />
                Сума: {bar.price} грн.
              </>
            }
          />
        );
      })}
    </svg>
  );
};
export default BarChart;
