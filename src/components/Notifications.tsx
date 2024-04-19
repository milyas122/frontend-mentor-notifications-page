import { useState } from "react";

import { notifications, unreadNotifications } from "../data";
import NotificationHeader from "./NotificationHeader";
import NotificationItem, { NotificationProp } from "./NotificationItem";

const Notifications = () => {
  const [notificationsList, setNotificationsList] =
    useState<NotificationProp[]>(notifications);
  const [unreadNotificationList, setUnreadNotificationList] =
    useState<NotificationProp[]>(unreadNotifications);

  const [unreadCount, setUnreadCount] = useState(unreadNotifications.length);

  function markAllAsRead() {
    setNotificationsList([...unreadNotifications, ...notificationsList]);
    setUnreadNotificationList([]);
    setUnreadCount(0);
  }

  return (
    <div className="w-full bg-natural-white md:max-w-[690px] md:max-h-[850px] px-4 md:px-6 py-6">
      {/* notification header   */}
      <NotificationHeader
        markAllAsRead={markAllAsRead}
        unreadCount={unreadCount}
      />
      {/* notification      */}
      <div className="flex flex-col gap-2 mt-5">
        {unreadNotificationList.map((notification) => (
          <NotificationItem
            notification={notification}
            key={notification.id}
            unread={true}
          />
        ))}
        {notificationsList.map((notification) => (
          <NotificationItem
            notification={notification}
            key={notification.id}
            unread={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
