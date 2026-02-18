import type { Metadata, Viewport } from 'next'
import { Inter, Merriweather } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Seminario - Cuestionarios de las Escrituras',
  description:
    'Cuestionarios del Seminario de La Iglesia de Jesucristo de los Santos de los Últimos Días. Estudia el Antiguo Testamento, Nuevo Testamento, Libro de Mormón y Doctrina y Convenios.',
}

export const viewport: Viewport = {
  themeColor: '#2e5a88',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${_inter.variable} ${_merriweather.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
