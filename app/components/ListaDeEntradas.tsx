import { Paper, List } from '@mui/material'
import { CardDeTareas } from './CardDeTareas'
import { EntradaEstado } from '../interfaces/entradas';
import { FC, useContext, DragEvent } from 'react';
import { ContextoEntradas } from '../contexto/ctxEntries/ContextoEntradas';

interface Props {
  status: EntradaEstado  
}

export const ListaDeEntradas: FC<Props> = ({ status }) => {

  const { entradas } = useContext(ContextoEntradas)
  const entradasPorEstado = entradas.filter(entrada => entrada.estado === status)

  const sueltoDrop = ( e: DragEvent<HTMLDivElement> ) => {
    const id = e.dataTransfer.getData('text');
    console.log(id);
  }
  const dropPermitido = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  return (
    <div
      onDrop={sueltoDrop}
      onDragOver={ dropPermitido }
    >
      <Paper sx={{ height: 'calc( 100vh - 111px)', overflow: 'scroll', backgroundColor: 'transparent', color: 'var(--auxiliar1)' }}>
        <List sx={{ opacity: 1 }}>

          {entradasPorEstado.map((entrada) => (
            
            <CardDeTareas key={entrada._id} entrada={entrada} />

          ))}
        </List>
      </Paper>
    </div>
  )
}
