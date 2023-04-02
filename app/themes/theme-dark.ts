import { createTheme } from '@mui/material/'
import { grey, red } from '@mui/material/colors'

export const basicThemeDark = createTheme(
  {
    palette:
      {
        mode: 'dark',
        background:
          {
            default: 'black'
          },
        secondary:
      {
        main: '#19857b'
      },
        error:
      {
        main: red.A400
      }
      },
    components: {
      MuiAppBar: {
        defaultProps: {},
        styleOverrides: {
          root: {
            backgroundColor: 'var(--auxiliar1)',
            opacity: 1
          }
        }
      }
    }
  }
)
