import React, {FC, ReactNode} from 'react';
import './Bar.styles.css';
import {Tooltip, Zoom} from '@mui/material';
interface BarProps {
  x: number;
  y: number;
  width: number;
  height: number;
  tooltip: ReactNode;
}
const Bar: FC<BarProps> = ({x, y, width, height, tooltip}) => {
  return (
    <>
      <linearGradient
        gradientTransform="rotate(0, 0.5, 0.5)"
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="fill"
      >
        <stop
          stopColor="hsl(187, 100%, 50%)"
          stopOpacity="1"
          offset="0%"
        ></stop>
        <stop
          stopColor="hsl(221, 100%, 50%)"
          stopOpacity="1"
          offset="100%"
        ></stop>
      </linearGradient>
      <Tooltip
        title={tooltip}
        placement="top"
        arrow
        TransitionComponent={Zoom}
        TransitionProps={{timeout: 300}}
        slotProps={{
          tooltip: {sx: {fontSize: '16px'}},
        }}
      >
        <rect x={x} y={y} width={width} height={height} fill="url(#fill)" />
      </Tooltip>
    </>
  );
};

export default Bar;
