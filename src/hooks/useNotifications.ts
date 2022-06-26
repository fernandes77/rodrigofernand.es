import { useEffect, useRef, useState } from 'react'

const useNotifications = () => {
  const [isPermittedNotify, setIsPermittedNotify] = useState<boolean>(false)

  useEffect(() => {
    setIsPermittedNotify(Notification.permission === 'granted')
  }, [])

  const getPermissions = () => {
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications.')
    } else {
      Notification.requestPermission().then((permission) => {
        setIsPermittedNotify(permission === 'granted')
      })
    }
  }

  const notify = (message: string) => {
    return new Notification(message)
  }

  return { isPermittedNotify, setIsPermittedNotify, getPermissions, notify }
}

export default useNotifications
