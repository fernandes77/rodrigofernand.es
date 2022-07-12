/* eslint-disable no-undef */
import fs from 'fs'
import { NextSeo } from 'next-seo'

import { buildAlgoliaIndexes } from 'utils/buildAlgoliaIndexes'
import { generateRss } from 'utils/generateRSS'
import { generateSitemap } from 'utils/generateSitemap'
import { getAllPosts } from 'utils/getPosts'

import Blog from 'templates/Blog'

export default function blog({ posts }) {
  return (
    <>
      <NextSeo
        title="Blog | Rodrigo Fernandes"
        description="A blog made by a brazilian web developer who likes React."
        openGraph={{
          url: 'https://rodrigofernand.es/blog',
          title: 'Blog | Rodrigo Fernandes',
          description:
            'A blog made by a brazilian web developer who likes React.',
          images: [
            {
              url: '/img/thumbnail.png',
              alt: 'Rodrigo Fernandes personal logo'
            }
          ]
        }}
      />
      <Blog posts={posts} />
    </>
  )
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
