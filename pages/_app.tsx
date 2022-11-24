import '../styles/globals.css'
import "reflect-metadata"
import type { AppProps } from 'next/app'

import Layout from '../components/layout'

function MicroSaaSMaker({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MicroSaaSMaker
