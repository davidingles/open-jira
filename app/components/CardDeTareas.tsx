import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { Entradas } from '../interfaces/entradas'
import { FC, useContext } from 'react';
import { DragEvent } from 'react';
import { ContextoNavbar } from '../contexto/ctxUi/ContextoNavbar';

interface Props {
  entrada: Entradas
}


export const CardDeTareas: FC<Props> = ({ entrada }) => {
  const { estadoArrastrando, estadoCanceloArrastrando} = useContext(ContextoNavbar)

  const arrastro = ( event: DragEvent<HTMLDivElement>) => {
    console.log(event);
    event.dataTransfer.setData('text', entrada._id)
    estadoArrastrando()
  }
  const canceloDrag = () => {
    estadoCanceloArrastrando()
    // todo: cancelo el drag
  }


  return (
    <>
      <Card
        sx={{ margin: 1 }}
        draggable={true}
        onDragStart={arrastro}
        onDragEnd={ canceloDrag }
      >
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
