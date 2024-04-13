const NotificationHeader = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="font-extrabold ">
          <span className="md:text-xl">Notifications</span>
          <span className="bg-primary-blue text-natural-white px-[10px] py-[2px] ml-2 rounded-[4px]">
            3
          </span>
        </div>
        <div>
          <button
            onClick={() => {
              console.log("clicked");
            }}
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
