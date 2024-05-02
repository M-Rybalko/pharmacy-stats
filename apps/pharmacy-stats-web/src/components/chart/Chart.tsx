import React, {FC, useEffect, useRef, useState} from 'react';
import {PaymentStats} from '@/types/PaymentStats';
import {calculateSizes} from '@/components/chart/utils';
import Bar from '@/components/chart/components/bar/Bar';
import {PaymentBarHeight} from '@/components/chart/types';
import {months} from '@/constants/months';

interface ChartProps {
  data: PaymentStats;
}
const Chart: FC<ChartProps> = ({data}) => {
  const containerRef = useRef<SVGSVGElement>(null);

  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
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

  const bars: PaymentBarHeight = calculateSizes(
    data,
    containerHeight,
    containerWidth
  );
  const chartWidth: number = bars[0].width * bars.length;
  const margin: number = (containerWidth - chartWidth) / bars.length;
  let x = 0;
  let y = containerHeight;

  return (
    <svg
      viewBox={'0 0 100% 100%'}
      width="100%"
      height="100%"
      ref={containerRef}
    >
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
export default Chart;
