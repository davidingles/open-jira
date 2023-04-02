'use client'
import { Grid, Card, CardHeader, CardContent, Typography } from '@mui/material'
import { ListaDeEntradas } from './ListaDeEntradas'

export const GridMesa = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc( 100vh - 100px)' }}>
          <CardHeader title='Pendientes' />
          <CardContent>
            <Typography variant='h3' color='secondary'>
              <ListaDeEntradas />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc( 100vh - 100px)' }}>
          <CardHeader title='En Progreso' />
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc( 100vh - 100px)' }}>
          <CardHeader title='Completadas' />
        </Card>
      </Grid>
    </Grid>
  )
}
