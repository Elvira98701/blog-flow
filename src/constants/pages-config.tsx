import { LayoutDashboard, ScrollText, UserRoundPen, Users } from "lucide-react";

export const pagesConfig = [
  {
    id: 1,
    name: "Dashboard",
    link: "",
    icon: <LayoutDashboard size={18} />,
  },
  {
    id: 2,
    name: "Profile",
    link: "/profile",
    icon: <UserRoundPen size={18} />,
  },
  {
    id: 3,
    name: "Feed",
    link: "/feed",
    icon: <ScrollText size={18} />,
  },
  {
    id: 4,
    name: "Users",
    link: "/users",
    icon: <Users size={18} />,
  },
];
