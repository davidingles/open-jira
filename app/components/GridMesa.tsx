'use client'
import { Grid, Card, CardHeader, Typography } from '@mui/material'
import { ListaDeEntradas } from './ListaDeEntradas'
import { NuevaEntrada } from './NuevaEntrada'

export const GridMesa = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc( 100vh - 222px)' }}>
          <CardHeader title='Pendientes' />
          <NuevaEntrada />
          <Typography variant='h3' color='secondary'>
            <ListaDeEntradas status='en progreso' />
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc( 100vh - 222px)' }}>
          <CardHeader title='En Progreso' />
          <Typography variant='h3' color='secondary'>
            <ListaDeEntradas status='pendiente' />
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc( 100vh - 222px)' }}>
          <CardHeader title='Completadas' />
          <Typography variant='h3' color='secondary'>
            <ListaDeEntradas status='terminado' />
          </Typography>
        </Card>
      </Grid>
    </Grid>
  )
}
