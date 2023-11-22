import Head from 'next/head'
import '../styles/resete.css'
export default function App({ Component, pageProps }) {
  return <div> <Component {...pageProps} />
  <Head>
    <title>Cardápio Restaurante</title>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
</style>
  </Head>
  </div>
}
