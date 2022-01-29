import BlogPost from 'templates/BlogPost'

import { getPostBySlug, getAllPosts } from 'utils/getPosts'
import markdownToHtml from 'utils/markdownToHtml'

export default function post(post) {
  return <BlogPost post={post} />
}

export const getStaticPaths = async () => {
  const posts = getAllPosts()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug
  const post = getPostBySlug(slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      ...post,
      content
    }
  }
}
