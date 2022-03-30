import React from 'react'
import {useRouter} from 'next/router'
import { Post } from '../../typing'
import {sanityClient} from '../../sanity'
import { GetStaticProps} from 'next'
interface Props {
    post : Post
}

function Post({post}:Props) {

    const router = useRouter()
    const slug = router.query
    console.log(post)

  return (
    <main>Post {post.slug.current} </main>
  )
}

export default Post

export const getStaticPaths = async () =>{
    const query = `*[_type == "post"]{
        _id,
        slug {
          current
        }
      } `

    const posts = await sanityClient.fetch(query)
   const paths = posts.map((post:Post) =>({
       params :{
            slug : post.slug.current
       }
   }))

    return{
        paths,
        fallback : 'blocking'
    }
    
}

export const getStaticProps : GetStaticProps = async ({params})=>{
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author -> {
        name,
        image
      },
      'comments':*[
        _type == "comment"&&
        post.ref == ^._id &&
        approve == true],
      description,
      mainImage,
      slug,
      body
      } `

      const post = await sanityClient.fetch(query,{
          slug:params?.slug
      })

      if(!post){
          return {
              notFound:true
          }
      }
      
          return {
              props :{
                  post
                },
                revalidate: 
                 60   
                
          }
      
      

}