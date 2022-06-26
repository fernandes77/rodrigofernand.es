const useNotifications = () => {
  const checkNotification = () => {
    return 'Notification' in window
  }

  const checkNotificationPromise = () => {
    if (!checkNotification()) return false

    try {
      Notification.requestPermission().then()
    } catch (e) {
      return false
    }

    return true
  }

  const getPermissions = async () => {
    if (!checkNotification()) {
      console.log('This browser does not support notifications.')
      return 'denied'
    } else {
      if (checkNotificationPromise()) {
        await Notification.requestPermission().then((permission) => {
          return permission
        })
      } else {
        await Notification.requestPermission(function (permission) {
          return permission
        })
      }
    }
  }

  const notify = (title: string, body?: string) => {
    if (checkNotification()) {
      if (Notification.permission === 'granted') {
        new Notification(title, {
          body
        })
      }
    }
  }

  return { getPermissions, notify }
}

export default useNotifications
