'use client'
import './globals.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { basicThemeLight, basicThemeDark } from './themes'
import { Navbar } from './components/Navbar'
import { SideBar } from './components/SideBar'
import { ProviderNavbar } from './contexto/ctxUi/ProviderNavbar'

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
        <ProviderNavbar>
          <ThemeProvider theme={basicThemeDark}>
            <CssBaseline />
              <Navbar />
              <SideBar />
              {children}
          </ThemeProvider>
        </ProviderNavbar>
      </body>
    </html>
  )
}
