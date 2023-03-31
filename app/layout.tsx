'use client'
import './globals.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { basicThemeLight, basicThemeDark } from './themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  })
{
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" />
        <title>AUX</title>
        <link
          rel='shortcut icon'
          href='/svg/iconoAuxiliar.svg'
        />
      </head>

      <body>
        <ThemeProvider theme={basicThemeDark}>
          <CssBaseline />
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
