import '../styles/globals.css'
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';
function MyApp({ Component, pageProps }) {
  return (
    // This is how we pass the data to every single component inside the braces
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />

      </Layout>



    </StateContext>

  )

}

export default MyApp
