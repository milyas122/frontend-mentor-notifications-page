import React, { MouseEventHandler } from "react";

type NotificationHeaderProps = {
  markAllAsRead: MouseEventHandler<HTMLButtonElement>;
  unreadCount: number;
};

const NotificationHeader: React.FC<NotificationHeaderProps> = ({
  markAllAsRead,
  unreadCount,
}) => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="font-extrabold ">
          <span className="md:text-xl">Notifications</span>
          <span className="bg-primary-blue text-natural-white px-[10px] py-[2px] ml-2 rounded-[4px]">
            {unreadCount}
          </span>
        </div>
        <div>
          <button
            onClick={markAllAsRead}
            className="text-natural-dark-grayish-blue hover:text-primary-blue text-sm"
          >
            Mark all as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationHeader;
