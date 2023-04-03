
import { Box, Button, TextField } from '@mui/material'
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone'
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone'
import { ChangeEvent, useState, useContext } from 'react';
import { ContextoEntradas } from '../contexto/ctxEntries/ContextoEntradas';
import { ContextoNavbar } from '../contexto/ctxUi/ContextoNavbar';

export const NuevaEntrada = () => {

  const { addTarea } = useContext(ContextoEntradas)
  const { isAdding, setIsAdding} = useContext(ContextoNavbar)

  // const [isAdding, setIsAdding] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)
  const textChange = ( event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const onSave = () => {
    if (inputValue.trim().length <= 0) return
    console.log(inputValue)
    addTarea(inputValue)
    setInputValue('')
    setTouched(false)
  }
  const onCancel = () => {
    setIsAdding(true)
    setInputValue('')
    setTouched(false)
  }
  return (
    <div>
      {
        isAdding
          ? (
            <Button
              sx={{ mt: 2, mb: 2 }}
              startIcon={<AddCircleOutlineTwoToneIcon />}
              variant='outlined'
              fullWidth
              onClick={() => setIsAdding(false)}
            >
              Nueva Tarea
            </Button>
            )
          : (
            <div>
              <TextField
                fullWidth
                sx={{ mt: 2, mb: 2 }}
                placeholder='Nueva entrada'
                autoFocus
                multiline
                label='Nueva entrada'
                error={inputValue.trim().length <= 0 && touched}
                helperText={ inputValue.trim().length <= 0 && touched && 'El campo no puede estar vacío'}
                value={inputValue}
                onChange={textChange}
                onBlur={() => setTouched(true)}
              />
              <Box display='flex' justifyContent='space-between'>
                <Button
                  sx={{ mb:2, ml:2 }}
                  variant='outlined'
                  onClick={onCancel}
                >
                  Cancelar
                </Button>
                <Button
                  sx={{ mb:2, mr:2 }}
                  variant='outlined'
                  color='secondary'
                  endIcon={<SaveTwoToneIcon />}
                  onClick={onSave}
                >
                  Guardar
                </Button>
              </Box>
            </div>
            )
      }
    </div>
  )
}
