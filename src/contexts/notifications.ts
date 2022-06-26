import { createContext } from 'react'

type NotificationsContext = {
  isPermittedNotify: boolean
  setIsPermittedNotify: React.Dispatch<React.SetStateAction<boolean>>
  getPermissions: () => void
  notify: (message: string) => Notification
}

export const initialNotifications: NotificationsContext = {
  isPermittedNotify: false,
  setIsPermittedNotify: () => {},
  getPermissions: () => {},
  notify: (message) => new Notification(message)
}

const NotificationsContext =
  createContext<NotificationsContext>(initialNotifications)

export default NotificationsContext
