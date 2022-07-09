import { NextSeo } from 'next-seo'

import Pomodoro from 'templates/Projects/Pomodoro'

export default function contact() {
  return (
    <>
      <NextSeo
        title="Pomodoro | Rodrigo Fernandes"
        description="Increase your productivity with the Pomodoro technique."
        openGraph={{
          url: 'https://rodrigofernand.es/pomodoro',
          title: 'Pomodoro | Rodrigo Fernandes',
          description: 'Increase your productivity with the Pomodoro technique.'
        }}
      />
      <Pomodoro />
    </>
  )
}
