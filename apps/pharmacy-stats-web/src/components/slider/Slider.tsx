import React, {FC} from 'react';
import SliderMUI from '@mui/material/Slider';
import {Box} from '@mui/material';
import {months} from '@/constants/months';
import {mark} from '@/components/slider/interfaces';

import * as styles from './Slider.styles';

interface SliderProps {
  minDistance: number;
  value: number[];
  marks: mark[];
  min: number;
  max: number;
  onChange: (value: number[]) => void;
}
const Slider: FC<SliderProps> = ({
  minDistance,
  value,
  marks,
  min,
  max,
  onChange = () => {},
}) => {
  const valuetext = (value: number) => {
    return months[value.toString()];
  };

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      onChange([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      onChange([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };
  return (
    <Box width="290px">
      <SliderMUI
        min={min}
        max={max}
        step={minDistance}
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        valueLabelFormat={valuetext}
        disableSwap
        marks={marks}
        size="medium"
        sx={styles.slider}
      />
    </Box>
  );
};

export default Slider;
