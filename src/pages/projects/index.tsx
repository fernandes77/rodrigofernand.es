import { NextSeo } from 'next-seo'

import Projects from 'templates/_Projects/Projects'

export default function contact() {
  return (
    <>
      <NextSeo
        title="Projects | Rodrigo Fernandes"
        description="Checkout some of the projects that I made for this website."
        openGraph={{
          url: 'https://rodrigofernand.es/',
          title: 'Projects | Rodrigo Fernandes',
          description:
            'Checkout some of the projects that I made for this website.',
          images: [
            {
              url: 'https://rodrigofernand.es/img/thumbnail.png',
              alt: 'Rodrigo Fernandes personal logo'
            }
          ]
        }}
      />
      <Projects />
    </>
  )
}
