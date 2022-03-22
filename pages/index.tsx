import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Medium</title>
      </Head>
      <Header />
      <div className='flex max-w-7xl bg-yellow-400 mx-auto items-center px-20 py-32 justify-between border-y border-black'>
        <div className='flex-col items-start'>
          <h2 className='text-4xl font-semibold'><span className='underline'>Medium</span> is a place to <br /> write, read and <br />connect</h2>
          <p>It's easy and free to post your thinking on any topic and connect with millions of users</p>
        </div>
        <h1 className='text-9xl font-roboto font-extrabold'>M</h1>
      </div>
    </div>
  )
}

export default Home
