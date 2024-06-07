import { Box, Container } from '@mui/material'
import React from 'react'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Container
        maxWidth="lg" sx={{ mt: 4, mb: 4, bgcolor:"#000" }}>
        {children}
      </Container>
    </Box>
  )
}