import Tomato from 'components/Tomato'
import { MessageSquare } from 'components/Icons/MessageSquare'

import theme from 'styles/theme'

const projectList = [
  {
    slug: '/pomodoro',
    icon: <Tomato completed />,
    name: 'GTA IV Pomodoro',
    description:
      'A pomodoro timer, but every time you complete 25 minutes a "mission completed" sound is played.'
  },
  {
    slug: '/random-advice',
    icon: <MessageSquare color={theme.colors.secondary} />,
    name: 'Random Advice',
    description: 'Generates a random piece of advice from an unknown author.'
  }
]

export default projectList
