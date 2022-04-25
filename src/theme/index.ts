import { createTheme } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    filter: true;
  }

  interface Palette {
    neutral: {
      main: string;
    };
  }

  interface PaletteOptions {
    neutral: {
      main: string;
    };
  }
}
const palette = createTheme({
  typography: {
    fontFamily: ['Montserrat', '-apple-system', 'sans-serif'].join(','),
    subtitle1: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 'bold',
    },
  },

  palette: {
    primary: {
      main: '#29253C',
    },
    secondary: {
      main: '#DA4A5E',
    },
    background: {
      default: '#FCFBFE',
    },

    // text: {
    //   // primary: '#FFF',
    // },

    // Buttons
    action: {
      // active: '#5C5A56', // default состояние
      // hover: '#F15A24',
      // disabled: '#E0E0E0'// выключено
      // disabledBackground:"#DA4A5E"
    },
    //

    // hr
    // divider:{
    //
    // }
  },
});

const theme = createTheme(palette, {
  components: {
    MuiButton: {
      styleOverrides: {},
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: '#FFF',
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: palette.palette.secondary.main,
          },
        },
        {
          props: { variant: 'filter' },
          style: {
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: palette.palette.primary.main,
          },
        },
        {
          props: {
            variant: 'filter',
            color: 'secondary',
          },
          style: {
            color: '#FFF',
          },
        },
      ],
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          marginBottom: '15px',
          // color: palette.palette.secondary.main,
        },
      },
      variants: [
        {
          props: { selected: true },
          style: {
            color: palette.palette.secondary.main,
          },
        },
      ],
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          fontSize: '24px',
          minWidth: '38px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: '600',
          '&.Mui-selected': {
            color: palette.palette.primary.main,
          },
        },
      },
    },
  },

  transitions: {
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

export default theme;
