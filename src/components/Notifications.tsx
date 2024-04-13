import { notifications } from "../data";
import NotificationHeader from "./NotificationHeader";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  return (
    <div className="w-full bg-natural-white md:max-w-[690px] md:max-h-[850px] px-4 md:px-6 py-6">
      {/* notification header   */}
      <NotificationHeader />
      {/* notification      */}
      <div className="flex flex-col gap-2 mt-5">
        {notifications.map((notification) => (
          <NotificationItem notification={notification} key={notification.id} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
