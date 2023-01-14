import '../styles/globals.css'
import { Rowdies } from '@next/font/google'

const poppins = Rowdies({
  style: ['normal'],
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})


export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
      <footer />
    </>
  )
}
