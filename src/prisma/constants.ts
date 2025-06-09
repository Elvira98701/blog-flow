import { hashSync } from "bcrypt";

export const users = [
  {
    email: "alice@prisma.io",
    name: "Alice",
    password: hashSync("111111", 10),
    verified: new Date(),
    avatar: "/images/users/1.jpg",
  },
  {
    email: "bob@prisma.io",
    name: "Bob",
    password: hashSync("121111", 10),
    verified: new Date(),
    avatar: "/images/users/2.jpg",
  },
  {
    email: "ella@prisma.io",
    name: "Ella",
    password: hashSync("113111", 10),
    verified: new Date(),
    avatar: "/images/users/3.jpg",
  },
  {
    email: "gven@prisma.io",
    name: "Gven",
    password: hashSync("111111", 10),
    verified: new Date(),
    avatar: "/images/users/4.jpg",
  },
];

export const posts = [
  {
    title: "First Post",
    content: "This is the first post content.",
    image: "/images/posts/1.jpg",
    userId: 1,
    published: true,
  },
  {
    title: "Second Post",
    content: "Another post by Alice.",
    image: "/images/posts/2.jpg",
    userId: 1,
    published: true,
  },
  {
    title: "How to Learn JavaScript",
    content:
      "Start with the basics and build real projects to strengthen your knowledge.",
    image: "/images/posts/3.jpg",
    userId: 2,
    published: true,
  },
  {
    title: "My Travel Experience in Japan",
    content:
      "From Tokyo to Kyoto — my journey across the Land of the Rising Sun.",
    image: "/images/posts/4.jpg",
    userId: 3,
    published: true,
  },
  {
    title: "10 Tips for Better Sleep",
    content:
      "Avoid screens before bed, establish a routine, and more advice for deep rest.",
    image: "/images/posts/5.jpg",
    userId: 4,
    published: true,
  },
  {
    title: "The Rise of AI in 2025",
    content:
      "Exploring how artificial intelligence is shaping our daily lives.",
    image: "/images/posts/6.jpg",
    userId: 1,
    published: true,
  },
  {
    title: "Healthy Meal Prep Ideas",
    content: "Quick, delicious, and nutritious meals to make your week easier.",
    image: "/images/posts/7.jpg",
    userId: 2,
    published: true,
  },
  {
    title: "Why I Switched to Linux",
    content: "My experience moving from Windows to a Linux-based system.",
    image: "/images/posts/8.jpg",
    userId: 3,
    published: true,
  },
  {
    title: "Understanding CSS Grid",
    content:
      "A beginner-friendly introduction to powerful layout techniques in CSS.",
    image: "/images/posts/9.jpg",
    userId: 4,
    published: true,
  },
  {
    title: "Top 5 Productivity Tools",
    content: "From Notion to Todoist — tools that help me stay on track.",
    image: "/images/posts/10.jpg",
    userId: 1,
    published: true,
  },
  {
    title: "My Daily Routine as a Developer",
    content:
      "How I manage coding, learning, and taking breaks throughout the day.",
    image: "/images/posts/11.jpg",
    userId: 2,
    published: true,
  },
  {
    title: "The Best Books I Read This Year",
    content: "A roundup of inspiring, educational, and entertaining reads.",
    image: "/images/posts/12.jpg",
    userId: 3,
    published: true,
  },
  {
    title: "Running a Blog with Next.js",
    content: "How I built my personal blog using the Next.js framework.",
    image: "/images/posts/13.jpg",
    userId: 4,
    published: true,
  },
  {
    title: "Photography Tips for Beginners",
    content: "Simple techniques to start taking better photos today.",
    image: "/images/posts/14.jpg",
    userId: 1,
    published: true,
  },
  {
    title: "What I Learned from Freelancing",
    content: "Hard truths and valuable lessons from working with clients.",
    image: "/images/posts/15.jpg",
    userId: 2,
    published: true,
  },
  {
    title: "React vs Vue — My Thoughts",
    content: "Comparing two of the most popular frontend frameworks.",
    image: "/images/posts/16.jpg",
    userId: 3,
    published: true,
  },
  {
    title: "Minimalist Desk Setup Tour",
    content: "A look at my simple and focused workspace.",
    image: "/images/posts/17.jpg",
    userId: 4,
    published: true,
  },
  {
    title: "Why I Love Open Source",
    content: "Giving back to the community and learning along the way.",
    image: "/images/posts/18.jpg",
    userId: 1,
    published: true,
  },
  {
    title: "How I Built a Weather App",
    content: "A breakdown of my weather app using APIs and React.",
    image: "/images/posts/19.jpg",
    userId: 2,
    published: true,
  },
  {
    title: "My Coding Playlist",
    content: "Instrumental beats and ambient music that help me focus.",
    image: "/images/posts/20.jpg",
    userId: 3,
    published: true,
  },
  {
    title: "Overcoming Tutorial Hell",
    content: "Why I stopped watching and started building.",
    image: "/images/posts/21.jpg",
    userId: 4,
    published: true,
  },
  {
    title: "The Joy of Side Projects",
    content: "How my personal projects kept me motivated and sharp.",
    image: "/images/posts/22.jpg",
    userId: 1,
    published: true,
  },
];

export const comments = [
  {
    content: "Very helpful article!",
    postId: 1,
    userId: 2,
  },
  {
    content: "Thanks, that clarified a lot.",
    postId: 1,
    userId: 3,
  },
  {
    content: "Interesting perspective, I agree.",
    postId: 2,
    userId: 4,
  },
  {
    content: "Add more examples, that would be great!",
    postId: 3,
    userId: 1,
  },
  {
    content: "Awesome, I want to visit Japan too.",
    postId: 4,
    userId: 2,
  },
  {
    content: "Never thought about it that way, thanks!",
    postId: 5,
    userId: 3,
  },
  {
    content: "This post is fire 🔥",
    postId: 6,
    userId: 2,
  },
  {
    content: "I support every word you said.",
    postId: 7,
    userId: 4,
  },
  {
    content: "Well explained!",
    postId: 8,
    userId: 1,
  },
  {
    content: "Great, saved it to bookmarks.",
    postId: 9,
    userId: 3,
  },
];

export const likes = [
  { postId: 1, userId: 2 },
  { postId: 2, userId: 3 },
  { postId: 3, userId: 4 },
  { postId: 4, userId: 1 },
  { postId: 5, userId: 2 },
  { postId: 6, userId: 3 },
  { postId: 7, userId: 1 },
  { postId: 8, userId: 4 },
  { postId: 9, userId: 2 },
  { postId: 10, userId: 3 },
];

export const subscribers = [
  {
    subscriberId: 2,
    subscribedToId: 1,
  },
  {
    subscriberId: 3,
    subscribedToId: 1,
  },
  {
    subscriberId: 4,
    subscribedToId: 1,
  },
  {
    subscriberId: 1,
    subscribedToId: 2,
  },
  {
    subscriberId: 1,
    subscribedToId: 3,
  },
  {
    subscriberId: 2,
    subscribedToId: 3,
  },
  {
    subscriberId: 3,
    subscribedToId: 4,
  },
];
