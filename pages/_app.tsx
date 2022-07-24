import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../state/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
}

export default MyApp
