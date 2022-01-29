import BlogPost, { PostProps } from 'templates/BlogPost'

import { getPostBySlug, getAllPosts } from 'utils/getPosts'
import markdownToHtml from 'utils/markdownToHtml'

export default function post(/* post */) {
  /* return <BlogPost post={post} /> */
  return <h1>hi</h1>
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

  const allPosts = getAllPosts()
  const currentPostIndex = allPosts.findIndex((p) => p.slug === slug)
  const nextPost = allPosts[currentPostIndex - 1] ?? null
  const prevPost = allPosts[currentPostIndex + 1] ?? null

  return {
    props: {
      ...post,
      content,
      nextPost,
      prevPost
    }
  }
}
