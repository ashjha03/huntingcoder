import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import styles from '../styles/Blog.module.css'

const Blog = (props) => {
  // console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs)
  // useEffect(() => {
    
  // },[])
  return (
    <div className={styles.main}>
      <div className={styles.blogHead}>
        <h2>Popular Blogs</h2>
      </div>
        {blogs.map(blogitem => {
          return <div key={blogitem.slug} className={styles.blogs}>
            <Link href={`/blogpost/${blogitem.slug}`} className={styles.blog}>
              <h3>{blogitem.title}</h3>
              <p className={styles.blogp}>{blogitem.content.substr(0, 150)}</p>
            </Link>
          </div>
        })}
    </div>
  )
}

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs');
  let allBlogs = await data.json();
      
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog