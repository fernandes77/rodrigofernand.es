import Prismic from '@prismicio/client'

import Blog, { BlogProps } from 'templates/Blog'
import { PostProps } from 'templates/BlogPost'

export default function blog() {
  return <Blog />
}

export async function getStaticProps() {
  return { props: {} }
}
