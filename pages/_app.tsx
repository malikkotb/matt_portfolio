import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// corresponds layout page in app router
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
