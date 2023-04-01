import { useContext } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import { ContextoNavbar } from '../contexto/ctxUi/ContextoNavbar'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

export const Navbar = () => {
  const { openSideBar } = useContext(ContextoNavbar)

  return (
    <AppBar position='sticky' elevation={2}>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' onClick={openSideBar}>
          <MenuOpenIcon sx={{ width: '3rem', height: '3rem' }} />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Auxiliar
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
