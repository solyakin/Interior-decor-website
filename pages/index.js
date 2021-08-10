import Head from 'next/head'
import LandingPage from '../components/LandingPage/landingPage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>iHome Decor | interior design made easy form our professional touch</title>
        <meta name="description" content="interior design made easy form our professional touch" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <LandingPage/>
      </main>

        
    </div>
  )
}
