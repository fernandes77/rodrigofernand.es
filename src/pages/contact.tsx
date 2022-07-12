import { NextSeo } from 'next-seo'

import Contact from 'templates/Contact'

export default function contact() {
  return (
    <>
      <NextSeo
        title="Contact | Rodrigo Fernandes"
        description="Send me a message if you have a project or any other inquiry."
        openGraph={{
          url: 'https://rodrigofernand.es/contact',
          title: 'Contact | Rodrigo Fernandes',
          description:
            'Send me a message if you have a project or any other inquiry.',
          images: [
            {
              url: '/img/thumbnail.png',
              alt: 'Rodrigo Fernandes personal logo'
            }
          ]
        }}
      />
      <Contact />
    </>
  )
}
