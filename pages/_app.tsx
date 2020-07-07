import React, { FC }  from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import '../public/css/app.css'

const App: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <div>
      <Head>
        <title>Sketch - Chiaki Uehira</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default App