import React, {FC} from 'react';
import {Tooltip, Zoom} from '@mui/material';
import {CompanyHeight} from '@/components/charts/stacked-chart-block/stacked-chart/types';
import {months} from '@/constants/months';

interface StackedBarProps {
  x: number;
  y: number;
  width: number;
  month: string;
  companies: CompanyHeight[];
}
const StackedBar: FC<StackedBarProps> = ({x, y, width, month, companies}) => {
  return (
    <>
      {companies.map((company, index) => {
        const blueShade = 255 - index * 19;
        const barY = y;
        y += company.height;
        return (
          <Tooltip
            key={index}
            title={
              <>
                Компанія: {company.name} <br />
                Оплат на суму: {company.price.toFixed(2)} грн. <br />
                Місяць: {months[month]}
              </>
            }
            placement="top"
            arrow
            TransitionComponent={Zoom}
            TransitionProps={{timeout: 300}}
            slotProps={{
              tooltip: {sx: {fontSize: '16px'}},
            }}
          >
            <rect
              x={x}
              y={barY}
              width={width}
              height={company.height}
              fill={`rgba(10, 0, ${blueShade}, 1)`}
              stroke="black"
              strokeWidth="1"
            />
          </Tooltip>
        );
      })}
    </>
  );
};

export default StackedBar;
