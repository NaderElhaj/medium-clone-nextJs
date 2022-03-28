import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import {sanityClient} from '../sanity'
import { Post } from '../typing'

interface Props {
    posts : [Post]
}

const Home = ( {posts}:Props) => {
  console.log(posts)
  return (
    <div >
      <>
      
      
      </>
      <Head>
        <title>Medium</title>
      </Head>
      <Header />
      <div className='flex max-w-7xl bg-yellow-400 mx-auto items-center px-20 py-32 pt justify-between border-y space-x-5  w- bg-viole rounded  border-black'>
        <div className='flex-col items-start'>
          <h2 className='text-4xl font-semibold'><span className='underline'>Medium</span> is a place to <br /> write, read and <br />connect</h2>
          <p>It's easy and free to post your thinking on any topic and connect with millions of users</p>
        </div>
        <h1 className='text-9xl font-roboto font-extrabold'>M</h1>
      </div>
    </div>
  )
}

export const getServerSideProps = async () =>{
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
    name,
    image
  } ,
  description,
mainImage,
slug
  }`

  const posts = await sanityClient.fetch(query) ; 

  return {
    props : {
      posts,
    }
  }
  
}

export default Home
