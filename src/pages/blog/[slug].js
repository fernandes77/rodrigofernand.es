import { NextSeo } from 'next-seo'

import BlogPost from 'templates/BlogPost'

import { getPostBySlug, getAllPosts } from 'utils/getPosts'
import markdownToHtml from 'utils/markdownToHtml'

export default function post(post) {
  return (
    <>
      <NextSeo
        title={`${post.frontmatter.title} - Rodrigo Fernandes`}
        description={post.frontmatter.description}
        openGraph={{
          url: `https://rodrigofernand.es/${post.slug}`,
          title: `${post.frontmatter.title} - Rodrigo Fernandes`,
          description: post.frontmatter.description,
          images: [
            {
              url: `https://rodrigofernand.es${post.frontmatter.image}`,
              alt: `${post.frontmatter.title}`
            }
          ]
        }}
      />
      <BlogPost post={post} />
    </>
  )
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
