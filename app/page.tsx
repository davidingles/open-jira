'use client'

import { Box } from '@mui/material'
import { GridMesa } from './components/GridMesa'

const PageHome = () => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Box sx={{ padding: '10px 20px' }}>
        <GridMesa />
      </Box>
    </Box>
  )
}

export default PageHome
