import { NextSeo } from 'next-seo'

import RandomAdvice from 'templates/_Projects/RandomAdvice'

export default function randomAdvice() {
  return (
    <>
      <NextSeo
        title="Random Advice | Rodrigo Fernandes"
        description="Be inspired by a random quote."
        openGraph={{
          url: 'https://rodrigofernand.es/projects/random-advice',
          title: 'Random Advice | Rodrigo Fernandes',
          description: 'Be inspired by a random quote.',
          images: [
            {
              url: '/img/thumbnail.png',
              alt: 'Rodrigo Fernandes personal logo'
            }
          ]
        }}
      />
      <RandomAdvice />
    </>
  )
}
