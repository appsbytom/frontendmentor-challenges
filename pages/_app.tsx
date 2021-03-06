import { AppProps } from 'next/app'
import Head from 'next/head'

import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Frontend Mentor Challenges</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
