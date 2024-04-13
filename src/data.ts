import markProfile from "./assets/images/avatar-mark-webber.webp";
import angelaProfile from "./assets/images/avatar-angela-gray.webp";
import jacobProfile from "./assets/images/avatar-jacob-thompson.webp";
import rizkyProfile from "./assets/images/avatar-rizky-hasanuddin.webp";
import kimberlyProfile from "./assets/images/avatar-kimberly-smith.webp";
import nathanProfile from "./assets/images/avatar-nathan-peterson.webp";
import annaProfile from "./assets/images/avatar-anna-kim.webp";
import postImage from "./assets/images/image-chess.webp";
export const notifications = [
  {
    id: 1,
    profile: markProfile,
    name: "Mark Webber",
    content: "reacted to your recent post My first tournament today!",
    time: "1m ago",
    unread: true,
  },
  {
    id: 2,
    profile: angelaProfile,
    name: "Angela Gray",
    content: "followed you",
    time: "5m ago",
    unread: true,
  },
  {
    id: 3,
    profile: jacobProfile,
    name: "Jacob Thompson",
    content: "has joined your group Chess Club",
    time: "1 day ago",
    unread: true,
  },
  {
    id: 4,
    profile: rizkyProfile,
    name: "Rizky Hasanuddin",
    content: "sent you a private message",
    time: "5 days ago",
    unread: false,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game.",
  },
  {
    id: 5,
    profile: kimberlyProfile,
    name: "Kimberly Smith",
    content: "comment on your picture",
    time: "1 week ago",
    unread: false,
    postImage: postImage,
  },
  {
    id: 6,
    profile: nathanProfile,
    name: "Nathan Peterson",
    content:
      "reacted to your recent post 5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    unread: false,
  },
  {
    id: 7,
    profile: annaProfile,
    name: "Anna Kim",
    content: "left the group Chess Club",
    time: "2 weeks ago",
    unread: false,
  },
];
