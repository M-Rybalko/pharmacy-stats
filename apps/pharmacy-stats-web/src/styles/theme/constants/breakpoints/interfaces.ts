import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    mobileSemiMedium: true;
    mobileMedium: true;
    tablet: true;
    desktop: true;
    desktopMedium: true;
    desktopLarge: true;
  }
}
