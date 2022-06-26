import { useEffect, useState } from 'react'

import useNotifications from 'hooks/useNotifications'

import * as S from './styles'

const PomodoroNotifications = () => {
  const { getPermissions } = useNotifications()

  const [isShown, setIsShown] = useState<boolean>(true)

  useEffect(() => {
    if (Notification.permission === 'granted') {
      setIsShown(false)
    } else {
      setIsShown(true)
    }
  }, [])

  const onClick = async () => {
    await getPermissions()

    if (['granted', 'denied'].includes(Notification.permission)) {
      setIsShown(false)
    }
  }

  return (
    <S.Wrapper onClick={() => onClick()}>
      {isShown && 'Enable Notifications'}
    </S.Wrapper>
  )
}

export default PomodoroNotifications
