const useNotifications = () => {
  const checkIOS = () => {
    if (typeof navigator === 'undefined') return false
    return (
      [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ].includes(navigator.platform) ||
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    )
  }

  const checkNotificationPromise = () => {
    if (checkIOS()) return false
    try {
      Notification.requestPermission().then()
    } catch (e) {
      return false
    }

    return true
  }

  const getPermissions = async () => {
    if (checkIOS()) return 'denied'
    if (!('Notification' in window)) {
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
    if (!checkIOS()) {
      new Notification(title, {
        body
      })
    }
  }

  return { checkIOS, getPermissions, notify }
}

export default useNotifications
