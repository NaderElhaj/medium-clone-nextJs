import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import {sanityClient, urlFor} from '../sanity'
import { Post } from '../typing'

interface Props {
    posts : [Post]
}

const Home = ( {posts}:Props) => {
  return (
    <div >
      <Head>
        <title>Medium</title>
      </Head>
      <Header />


      <div className='flex max-w-7xl mb-40 bg-yellow-400 mx-auto items-center px-20 py-32 pt justify-between border-y space-x-5   bg-viole rounded  border-black'>
        <div className='flex-col items-start'>
          <h2 className='text-4xl font-semibold'><span className='underline'>Medium</span> is a place to <br /> write, read and <br />connect</h2>
          <p>It's easy and free to post your thinking on any topic and connect with millions of users</p>
        </div>
        <h1 className='text-9xl font-roboto font-extrabold'>M</h1>
      </div>

      {/* Posts Section */}
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 p-2'  >
      {posts.map(post => (
        <Link key={post._id} href={`/post/${post.slug.current}`} >
          <div className='border rounded-lg group cursor-pointer overflow-hidden'>
          
            <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out '
             src={urlFor(post.mainImage).url()!}
              alt="main Image" />

            <div className='flex justify-between p-5 bg-white'>
              <div>
                <p className='text-lg font-bold '>{post.title} </p>
                <p className='text-xs'>{post.description}</p>
              </div>
            <img alt="avatar" className='w-12 h-12 rounded-full' src={urlFor(post.author.image).url()!}  />
            </div>
          </div>
        </Link>
      ))}
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
