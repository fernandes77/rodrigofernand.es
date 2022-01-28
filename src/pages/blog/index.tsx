import Prismic from '@prismicio/client'

import { Client } from '../../../utils/prismicHelpers'
import Blog, { BlogProps } from 'templates/Blog'
import { PostProps } from 'templates/BlogPost'

export default function blog({ posts }: BlogProps) {
  return <Blog posts={posts} />
}

export async function getStaticProps() {
  return {}
}
