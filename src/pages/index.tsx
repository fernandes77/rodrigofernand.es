import { NextSeo } from 'next-seo'

import Home from 'templates/Home'

export default function home() {
  return (
    <>
      <NextSeo
        title="Home | Rodrigo Fernandes"
        description="A website made by a brazilian web developer who likes React."
        openGraph={{
          url: 'https://rodrigofernand.es/',
          title: 'Home | Rodrigo Fernandes',
          description:
            'A website made by a brazilian web developer who likes React.'
        }}
      />
      <Home />
    </>
  )
}
