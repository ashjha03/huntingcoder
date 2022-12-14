import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {

  // console.log(styles)
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="nextjs, huntingcoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='/sc.js' strategy="lazyOnload"></Script> */}

      <main className={styles.main}>
        <div className={styles.imagewrap}>
          {/* <Image className={styles.myImg} src="/homeimg.jfif" width={237} height={158}/> */}
          <img className={styles.myImg} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" width={237} height={158} alt="hunting coder" />
        </div>
        <h1 className={styles.title}>
          <span className='dummy'>&lt;HuntingCoder/&gt;</span>
        </h1>


        {/* <div className={`${styles1.con} ${styles2.con}`}> */}
        <div>
          <h2 className={styles.h2}>Latest Blogs</h2>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error voluptatum impedit!</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p className={styles.p}>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
