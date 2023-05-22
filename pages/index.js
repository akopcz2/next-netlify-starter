import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styled from 'styled-components';

import bg from '../public/farmland.jpg'

const Wrapp = styled.div`

    &::after{
        display: block;
        content: '';
        background-image: url(${bg.src});
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-size: cover;
        z-index: 0;
        opacity: 0.2;
    }

`


export default function Home() {
  
  return (
    <div>
      <Wrapp>
        <Head>
          <title>KOPDENFARMS.COM</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main style={{"height":"100vh"}}>
          <Header title="KOPDENFARMS.COM" />
          <p>
            <code>EST. 2023</code>
          </p>
        </main>

      {/* <Footer /> */}
      </Wrapp>
    </div>
  )
}
