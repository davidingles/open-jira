'use client'

import { Button, Typography, Box } from '@mui/material'

const PageHome = () => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Box sx={{ padding: '10px 20px' }}>
        <Button variant='contained'>Button</Button>
        <Typography variant='h3' color='secondary'>Typography</Typography>
      </Box>
    </Box>
  )
}

export default PageHome
