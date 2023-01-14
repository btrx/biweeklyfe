import '../styles/globals.css'
import { Rowdies } from '@next/font/google'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome);

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
