import { createTheme } from '@mui/material/'
import { grey, red } from '@mui/material/colors'

export const basicThemeLight = createTheme(
  {
    palette:
      {
        mode: 'light',
        background:
          {
            default: grey[900]
          },
        primary:
      {
        main: '#4A148C'
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

    }
  }
)
