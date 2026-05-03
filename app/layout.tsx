import type { Metadata, Viewport } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { PageTransition } from '@/components/page-transition'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Mi Seminario e Instituto',
  description:
    'Cuestionarios interactivos de Seminario e Instituto de La Iglesia de Jesucristo de los Santos de los Últimos Días. Estudia el Antiguo Testamento, Nuevo Testamento, Libro de Mormón, Doctrina y Convenios y más.',
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
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}