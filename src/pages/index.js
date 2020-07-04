import Head from 'next/head'
import styles from './index.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.hello}>
      ギポッ
      </main>

      <footer>
      </footer>

    
    </div>
  )
}
