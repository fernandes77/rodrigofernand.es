import { NextSeo } from 'next-seo'

import Projects from 'templates/Projects'

export default function contact() {
  return (
    <>
      <NextSeo
        title="Projects | Rodrigo Fernandes"
        description="Checkout some of the projects that I made for this website."
        openGraph={{
          url: 'https://rodrigofernand.es/projects',
          title: 'Projects | Rodrigo Fernandes',
          description:
            'Checkout some of the projects that I made for this website.'
        }}
      />
      <Projects />
    </>
  )
}
