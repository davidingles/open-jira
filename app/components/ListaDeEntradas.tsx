import { Paper, List } from '@mui/material'
import { CardDeTareas } from './CardDeTareas'
import { EntradaEstado } from '../interfaces/entradas';
import { FC, useContext, DragEvent } from 'react';
import { ContextoEntradas } from '../contexto/ctxEntries/ContextoEntradas';
import { ContextoNavbar } from '../contexto/ctxUi/ContextoNavbar';

const estilos1 = {
  backgroundColor: 'rgb(222,222,222,.1)',
  // transition: 'all .3s',
  border: '3px dashed var(--auxiliar2)',
  borderRadius: '10px',
}

interface Props {
  status: EntradaEstado  
}

export const ListaDeEntradas: FC<Props> = ({ status }) => {

  const { entradas, onEntradaActualizada } = useContext(ContextoEntradas)
  const { isArrastrando, estadoCanceloArrastrando } = useContext(ContextoNavbar)
  const entradasPorEstado = entradas.filter(entrada => entrada.estado === status)

  const sueltoDrop = ( e: DragEvent<HTMLDivElement> ) => {
    const id = e.dataTransfer.getData('text');
    console.log(id);

    const entrada = entradas.find(entrada => entrada._id === id)!
    entrada.estado = status
    onEntradaActualizada(entrada)
    estadoCanceloArrastrando()
  }
  const dropPermitido = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  return (
    <div
      onDrop={sueltoDrop}
      onDragOver={ dropPermitido }
      style={ isArrastrando ? estilos1 : null }
    >
      <Paper sx={{ height: 'calc( 100vh - 111px)', overflow: 'scroll', backgroundColor: 'transparent', color: 'var(--auxiliar1)' }}>
        <List sx={{ opacity: isArrastrando ? .3 : 1, transition: 'all .3s' }}>

          {entradasPorEstado.map((entrada) => (
            
            <CardDeTareas key={entrada._id} entrada={entrada} />

          ))}
        </List>
      </Paper>
    </div>
  )
}
