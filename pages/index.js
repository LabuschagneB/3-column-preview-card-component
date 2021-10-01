import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontent Mentor | 3-column-exersise</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Learn <a href="https://nextjs.org">Next.js!</a>
        </h1>
        
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <Image src="/icon-sedans.svg" alt="Icon Sedans Car" width={64} height={40} />
            <h2>Sedans</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
          <Image src="/icon-suvs.svg" alt="Icon Suvs Car" width={64} height={40} />
            <h2>Suvs</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          ><Image src="/icon-luxury.svg" alt="Icon Luxury Car" width={64} height={40} />
            <h2>Luxury</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
      </main>

      {
      /* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/icon-luxury.svg" alt="Vercel Logo" width={64} height={40} />
          </span>
        </a>
      </footer> */
      }
    </div>
  )
}
