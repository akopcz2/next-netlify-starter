import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>KOPDENFARMS.COM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="KOPDENFARMS.COM" />
        <p className="description">
          <code>EST. 2023</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
