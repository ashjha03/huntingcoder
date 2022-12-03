import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HUNTING CODER</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
        HUNTING CODER
        </h1>

        <p className={styles.description}>
          A Blog for hunting coders by hunting coder
        </p>

        <div className={styles.blogSection}>
          <div className={styles.blogHead}>
            <h1>Popular Blogs</h1>
          </div>
          <div className={styles.blogs}>
            <div className={styles.blog}>
              <h2>How to learn JavaScript in 2022?</h2>
              <p>JavaScript is the language used to design logic for the web.</p>
            </div>
            <div className={styles.blog}>
              <h2>How to learn JavaScript in 2022?</h2>
              <p>JavaScript is the language used to design logic for the web.</p>
            </div>
            <div className={styles.blog}>
              <h2>How to learn JavaScript in 2022?</h2>
              <p>JavaScript is the language used to design logic for the web.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
