import { createTheme } from '@mui/material/'
import { grey, red } from '@mui/material/colors'

export const basicThemeDark = createTheme(
  {
    palette:
      {
        mode: 'dark',
        background:
          {
            default: grey[900]
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
