import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { Entradas } from '../interfaces/entradas'
import { FC } from 'react';

interface Props {
  entrada: Entradas
}


export const CardDeTareas:FC<Props> = ( { entrada }) => {
  return (
    <>
      <Card sx={{ margin: 1 }}>
        <CardActionArea>
          <CardContent>
            <Typography sx={{ whiteSpace: 'pre-line' }}>
              {entrada.descripcion}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 3 }}>
            <Typography variant='body2' color='green'>
              {entrada.fechaCreacion}
            </Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  )
}
