import { useContext } from 'react'
import { Drawer, Typography, Box, List, Divider, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'
import AddLocationIcon from '@mui/icons-material/AddLocation'
import CategoryIcon from '@mui/icons-material/Category'
import { ContextoNavbar } from '../contexto/ctxUi/ContextoNavbar'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import ListIcon from '@mui/icons-material/List';


const menuItems = ['Inicio', 'Contacto', 'Nostros', 'Servicios', 'Productos']
const list1 = {
  padding: '.5rem'
}

export const SideBar = () => {
  const { menuLateral, closeSideBar } = useContext(ContextoNavbar)

  return (
    <Drawer
      anchor='left'
      open={menuLateral}
      onClose={() => closeSideBar()}
    >
      <Box sx={{ paddingRight: '2rem' }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Button onClick={closeSideBar}>
            <ListIcon sx={{ width: '3rem', height: '3rem' }} />
          </Button>
          <Divider />
        </Box>
        <List>
          {menuItems.map((item, i) => (
            <ListItem key={i + 1} style={list1}>
              <ListItemIcon>
                {item === 'email'
                  ? <ForwardToInboxIcon style={{ marginLeft: '10px' }} />
                  : item === 'Contacto'
                    ? <AddLocationIcon style={{ marginLeft: '10px' }} />
                    : item === 'Productos'
                      ? <CategoryIcon style={{ marginLeft: '10px' }} />
                      : null}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <ListItem style={list1}>
          <ListItemIcon>
            <ForwardToInboxIcon style={{ marginLeft: '10px' }} />
          </ListItemIcon>
          <ListItemText primary='email' />
        </ListItem>
      </Box>
    </Drawer>
  )
}
