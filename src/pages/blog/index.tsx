import Prismic from '@prismicio/client'

import { Client } from '../../../utils/prismicHelpers'
import Blog, { BlogProps } from 'templates/Blog'
import { PostProps } from 'templates/BlogPost'

export default function blog() {
  return <Blog />
}

export async function getStaticProps() {
  return { props: {} }
}
