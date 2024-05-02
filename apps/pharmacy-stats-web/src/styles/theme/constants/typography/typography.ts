import {TypographyOptions} from '@mui/material/styles/createTypography';
import {Fira_Sans} from 'next/font/google';

export const firaSans = Fira_Sans({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
});

const typography: TypographyOptions = {
  fontFamily: firaSans.style.fontFamily,
};

export default typography;
