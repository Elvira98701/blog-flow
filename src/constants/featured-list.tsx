import {
  ChartSpline,
  MessageCircle,
  StickyNote,
  UserPen,
  UserRoundPlus,
  Newspaper,
} from "lucide-react";

export const featuredList = [
  {
    id: 1,
    title: "Analytics and statistics",
    description:
      "Keep track of the growth: views, comments, subscriber activity — all in one place.",
    icon: <ChartSpline />,
  },
  {
    id: 2,
    title: "Subscribers are under control",
    description:
      "Manage your audience, see who subscribed, and build a community around your blog.",
    icon: <UserRoundPlus />,
  },
  {
    id: 3,
    title: "Creating and editing posts",
    description:
      "Write, edit and update your posts without unnecessary clicks. As simple as possible.",
    icon: <StickyNote />,
  },
  {
    id: 4,
    title: "Comments and feedback",
    description:
      "Communicate with readers directly on the blog: collect feedback and support discussions.",
    icon: <MessageCircle />,
  },
  {
    id: 5,
    title: "Personal profile",
    description:
      "Change your avatar, slogan, and personal information so that your blog reflects you.",
    icon: <UserPen />,
  },
  {
    id: 6,
    title: "Feed of posts and users",
    description:
      "Explore posts from other creators, follow users, and stay updated with fresh content in the main feed.",
    icon: <Newspaper />,
  },
];
