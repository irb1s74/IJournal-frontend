import { createTheme } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    filter: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', '-apple-system', 'sans-serif'].join(','),
    h5: {
      fontWeight: 'bold'
    }
  },

  palette: {
    primary: {
      main: '#29253C'
    },
    secondary: {
      main: '#DA4A5E'
    },
    background: {
      default: '#FCFBFE'
    },

    // text: {
    //     primary: '#040B11'
    // },
    //

    // Buttons
    action: {
      // active: '#DA4A5E', // default состояние
      // hover: "#DA4A5E", //hover
      // disabled: '#E0E0E0'// выключено
      // disabledBackground:"#DA4A5E"
    }
    //

    // hr
    // divider:{
    //
    // }
  },

  components: {
    MuiButton: {
      styleOverrides: {},
      variants: [
        {
          props: { variant: 'text' },
          style: {
            color: '#DA4A5E'
          }
        },
        {
          props: { variant: 'filter' },
          style: {
            textTransform: 'none',
            color: '#29253C'
          }
        },
        {
          props: {
            variant: 'filter',
            color: 'secondary'
          },
          style: {
            backgroundColor: '#F3F3F3'
          }
        }
      ]
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          marginBottom: '15px'
        }
      },
      variants: [
        {
          props: { selected: true },
          style: {
            textDecoration: 'none',
            color: '#DA4A5E'
          }
        }
      ]
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          fontSize: '24px',
          minWidth: '38px'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&.Mui-selected': {
            color: '#DA4A5E'
          }
        }
      }
    }
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
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    }
  }
});

export default theme;
