import { NextSeo } from 'next-seo'

import Pomodoro from 'templates/_Projects/Pomodoro'

export default function contact() {
  return (
    <>
      <NextSeo
        title="Pomodoro | Rodrigo Fernandes"
        description="Increase your productivity with the Pomodoro technique."
        openGraph={{
          url: 'https://rodrigofernand.es/projects/pomodoro',
          title: 'Pomodoro | Rodrigo Fernandes',
          description: 'Increase your productivity with the Pomodoro technique.'
        }}
      />
      <Pomodoro />
    </>
  )
}
