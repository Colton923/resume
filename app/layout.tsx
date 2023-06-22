import 'styles/globals.scss'
import { Orbitron } from 'next/font/google'

interface Props {
  children: React.ReactNode
}

const orbitron = Orbitron({ subsets: ['latin'], display: 'swap' })

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={orbitron.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Colton's Resume" />
        <meta name="author" content="Colton McClintock - Webdev Solutions LLC" />
        <meta name="keywords" content="Colton's Resume" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <title>{`Colton's Resume`}</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
