import { GetStaticProps, GetStaticPaths } from 'next'
import Prismic from '@prismicio/client'

import BlogPost, { PostProps } from 'templates/BlogPost'
import Client from '../../../utils/prismicHelpers'

export default function uidBlog(props: PostProps) {
  return <BlogPost {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await Client().query(
    Prismic.Predicates.at('document.type', 'blog_post'),
    { orderings: '[my.post.date desc]' }
  )

  type BlogPostsPath = {
    params: {
      uid: string | undefined
    }
  }

  const blogPostsPaths: BlogPostsPath[] = []

  posts.results.map((post) => {
    blogPostsPaths.push({ params: { uid: post.uid } })
  })

  return {
    paths: blogPostsPaths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (typeof context.params?.uid === 'string') {
    const post = await Client().getByUID('blog_post', context.params.uid, {
      lang: 'en-us'
    })

    console.log(post)

    return {
      props: {
        uid: post.uid,
        date: post.data.date,
        title: post.data.title,
        description: post.data.description,
        content: post.data.content
      }
    }
  }

  return {
    props: {}
  }
}
