import { useState } from "react";

type Notification = {
  id: number;
  profile: string;
  name: string;
  content: string;
  time: string;
  unread: boolean;
  message?: string;
  postImage?: string;
};

type NotificationItemProps = {
  notification: Notification;
  key: number;
};

const NotificationItem = ({ notification, key }: NotificationItemProps) => {
  const [unread, setUnread] = useState(notification.unread);

  const unreadStyle = unread && "bg-natural-light-grayish-100";

  const renderMessage = (
    <div
      className={`border border-natural-light-grayish-300 rounded-md p-4 mt-2 cursor-pointer hover:bg-natural-light-grayish-300`}
    >
      <p className="text-[13px] md:text-sm text-natural-dark-grayish-blue">
        {notification?.message}
      </p>
    </div>
  );
  return (
    <div
      key={key}
      className={`flex px-4 py-3 md:py-4 ${unreadStyle} rounded-md cursor-pointer hover:bg-natural-light-grayish-100`}
    >
      {/* profile pic */}
      <div className="min-w-[44px] mr-5">
        <img
          src={notification.profile}
          alt={notification.name}
          className="size-11"
        />
      </div>
      {/* content */}
      <div>
        <p className="text-xs">
          <span className="font-bold text-sm">{notification.name} </span>
          <span className="text-natural-dark-grayish-blue md:text-sm">
            {notification.content}
          </span>
          {notification.unread && (
            <span className="bg-primary-red w-2 h-2 rounded-lg inline-block ml-2"></span>
          )}
        </p>
        <span className="text-natural-dark-grayish-blue text-xs md:text-sm">
          {notification.time}
        </span>
        {notification?.message && renderMessage}
      </div>

      {/* post image */}
      {notification?.postImage && (
        <div className="ml-4 md:ml-auto  min-w-9">
          <img
            src={notification.postImage}
            alt="post"
            className="size-9 md:size-10"
          />
        </div>
      )}
      {/* end of post image */}
    </div>
  );
};

export default NotificationItem;
