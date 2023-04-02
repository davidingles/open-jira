import { Paper, List } from '@mui/material'

const paper1 = {
  height: 'calc(100vh - 64px)',
  overflow: 'scroll',
  backgroundColor: 'transparent'
}

export const ListaDeEntradas = () => {
  return (
    <div>
      <Paper sx={{ paper1 }}>
        <List sx={{ opacity: 1 }}>
          <h1>item</h1>
          <h1>item</h1>
          <h1>item</h1>
          <h1>item</h1>
          <h1>item</h1>
          <h1>item</h1>
          <h1>item</h1>
          <h1>item</h1>
          <h1>item</h1>
          <h1>item</h1>
          <h1>item</h1>
          <h1>item</h1>
        </List>
      </Paper>
    </div>
  )
}
