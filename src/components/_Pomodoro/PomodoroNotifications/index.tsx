import { useContext } from 'react'

import Switch from 'components/Switch'

import NotificationsContext from 'contexts/notifications'

import * as S from './styles'

const PomodoroNotifications = () => {
  const { isPermittedNotify, setIsPermittedNotify, getPermissions } =
    useContext(NotificationsContext)

  const onToggle = (value) => {
    if (Notification.permission === 'granted') {
      setIsPermittedNotify(value)
    } else {
      getPermissions()
    }
  }

  return (
    <S.Wrapper>
      <S.Notifications>Notifications</S.Notifications>
      <S.TurnOnOff>
        <Switch value={isPermittedNotify} onToggle={onToggle} />
      </S.TurnOnOff>
    </S.Wrapper>
  )
}

export default PomodoroNotifications
