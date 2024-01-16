import {
  HiOutlineShoppingCart,
  HiOutlineDocumentText,
  HiOutlineSquares2X2,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

import {
  LiaUserCogSolid,
  LiaUserFriendsSolid,
  LiaCartPlusSolid,
} from "react-icons/lia";

export const workinHours = [
  {
    day: "Monday",
    hours: "Closed",
  },
  {
    day: "Tusday",
    hours: "09:00-00:00",
  },
  {
    day: "Wednesday",
    hours: "09:00-00:00",
  },
  {
    day: "Thursday",
    hours: "09:00-00:00",
  },
  {
    day: "Friday",
    hours: "09:00-01:00",
  },
  {
    day: "Saturday",
    hours: "09:00-01:00",
  },
  {
    day: "Sunday",
    hours: "09:00-01:00",
  },
];

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "Menu", href: "/menu" },
  { title: "Contact", href: "/contact" },
  { title: "About", href: "/about" },
  {
    title: (
      <HiOutlineShoppingCart className="w-6 h-6 cursor-pointer link_hover " />
    ),
    href: "/cart",
  },
];

export const dashboardMenuLinksAdmin = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <HiOutlineCog6Tooth className="ml-3 h-6 w-6" />,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: <LiaCartPlusSolid className="ml-3 h-6 w-6" />,
  },
  {
    title: "Categories",
    href: "/categories",
    icon: <HiOutlineSquares2X2 className="ml-3 h-6 w-6" />,
  },
  {
    title: "Pizza Menu",
    href: "/dash-menu",
    icon: <HiOutlineDocumentText className="ml-3 h-6 w-6" />,
  },
  {
    title: "Users",
    href: "/users",
    icon: <LiaUserFriendsSolid className="ml-3 h-6 w-6" />,
  },
  {
    title: "User Profile",
    href: "/user-profile",
    icon: <LiaUserCogSolid className="ml-3 h-6 w-6" />,
  },
];

export const dashboardMenuLinksUser = [
  {
    title: "Orders",
    href: "/orders",
    icon: <LiaCartPlusSolid className="ml-3 h-6 w-6" />,
  },
  {
    title: "User Profile",
    href: "/user-profile",
    icon: <LiaUserCogSolid className="ml-3 h-6 w-6" />,
  },
];
