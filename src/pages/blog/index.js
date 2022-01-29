/* eslint-disable no-undef */
import fs from 'fs'

import { buildAlgoliaIndexes } from 'utils/buildAlgoliaIndexes'
import { generateRss } from 'utils/generateRSS'
import { generateSitemap } from 'utils/generateSitemap'
import { getAllPosts } from 'utils/getPosts'

import Blog from 'templates/Blog'

export default function blog({ posts }) {
  return <Blog posts={posts} />
}

export async function getStaticProps() {
  const posts = getAllPosts()

  if (process.env.NODE_ENV !== 'development') {
    await generateSitemap(posts)

    const rss = await generateRss(posts)
    fs.writeFileSync('./public/feed.xml', rss)

    await buildAlgoliaIndexes(posts)
  }

  return {
    props: {
      posts
    }
  }
}
