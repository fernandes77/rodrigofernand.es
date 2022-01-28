import Prismic from '@prismicio/client'

import { Client } from '../../../utils/prismicHelpers'
import Blog, { BlogProps } from 'templates/Blog'
import { PostProps } from 'templates/BlogPost'

export default function blog({ posts }: BlogProps) {
  return <Blog posts={posts} />
}

export async function getStaticProps() {
  const data = await Client().query(
    Prismic.Predicates.at('document.type', 'blog_post')
  )

  const posts: PostProps[] = []
  data.results.forEach((post) =>
    posts.push({
      uid: post.uid ? post.uid : '',
      thumbnail: {
        url: post.data.thumbnail.url,
        alt: post.data.thumbnail.alt
      },
      title: post.data.title,
      date: post.data.date,
      description: post.data.description,
      content: post.data.content
    })
  )
  posts.sort((a, b) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dateA: any = new Date(a.date)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dateB: any = new Date(b.date)
    return dateB - dateA
  })

  return {
    props: {
      posts
    }
  }
}
