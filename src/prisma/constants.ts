import { hashSync } from "bcrypt";

export const users = [
  {
    email: "alice@prisma.io",
    name: "Alice",
    password: hashSync("111111", 10),
    verified: new Date(),
    avatar: "/images/users/1.jpg",
    slogan: "Code Whisperer",
  },
  {
    email: "bob@prisma.io",
    name: "Bob",
    password: hashSync("121111", 10),
    verified: new Date(),
    avatar: "/images/users/2.jpg",
    slogan: "Pixel Master",
  },
  {
    email: "ella@prisma.io",
    name: "Ella",
    password: hashSync("113111", 10),
    verified: new Date(),
    avatar: "/images/users/3.jpg",
    slogan: "UX Queen",
  },
  {
    email: "gven@prisma.io",
    name: "Gven",
    password: hashSync("111111", 10),
    verified: new Date(),
    avatar: "/images/users/4.jpg",
  },
  {
    email: "elena@prisma.io",
    name: "Elena",
    password: hashSync("111111", 10),
    verified: new Date(),
    avatar: "/images/users/5.jpg",
    slogan: "Frontend Guru",
  },
  {
    email: "emma@prisma.io",
    name: "Emma",
    password: hashSync("111111", 10),
    verified: new Date(),
    avatar: "/images/users/6.jpg",
    slogan: "Design Thinker",
  },
  {
    email: "john@prisma.io",
    name: "John",
    password: hashSync("111111", 10),
    verified: new Date(),
    avatar: "/images/users/7.jpg",
  },
  {
    email: "sergey@prisma.io",
    name: "Sergey",
    password: hashSync("111111", 10),
    verified: new Date(),
    avatar: "/images/users/8.jpg",
    slogan: "Backend Brain",
  },
  {
    email: "gloria@prisma.io",
    name: "Gloria",
    password: hashSync("111111", 10),
    verified: new Date(),
    avatar: "/images/users/9.jpg",
    slogan: "CSS Sorcerer",
  },
  {
    email: "maxim@prisma.io",
    name: "Maxim",
    password: hashSync("111111", 10),
    verified: new Date(),
    avatar: "/images/users/10.jpg",
    slogan: "Bug Hunter",
  },
  {
    email: "tom@prisma.io",
    name: "Tom",
    password: hashSync("111111", 10),
    verified: new Date(),
    avatar: "/images/users/11.jpg",
  },
  {
    email: "peter@prisma.io",
    name: "Peter",
    password: hashSync("111111", 10),
    verified: new Date(),
    avatar: "/images/users/12.jpg",
    slogan: "React Ninja",
  },
];

export const posts = [
  {
    title: "Finally Tried VR. Here's What Changed My Mind.",
    content:
      "I used to think VR was just an expensive toy for geeks. 'You put on a headset, look around at a cartoon world... so what?' I thought. Eventually, I decided to try it myself. It completely changed my perspective. The biggest surprise? It's about 'presence,' not just graphics.When you stand on the edge of a virtual skyscraper, your brain genuinely struggles to believe it's not real. Your knees feel weak. That feeling of actually being there is the magic of VR. You're not watching a screen—you're inside it.",
    image: "/images/posts/1.jpg",
    userId: 1,
  },
  {
    title: "A cat is not a pet. It's a state of mind.",
    content:
      "A cat is a fluffy paradox on four paws. He can be gentle and independent, graceful and ridiculous, a dormouse and a night hunter. One thing is for sure: it's never boring with him. What's the paradox of your cat?",
    image: "/images/posts/2.jpg",
    userId: 1,
  },
  {
    title: "The best trip is when you're not alone.",
    content:
      "Discovering the world with someone who loves you more than anything in the world is a real happiness. New smells, long walks and lots of impressions for both of you! Where do you dream of going with your pet?",
    image: "/images/posts/3.jpg",
    userId: 2,
  },
  {
    title: "My Travel Experience in Japan",
    content:
      "From Tokyo to Kyoto — my journey across the Land of the Rising Sun.",
    image: "/images/posts/4.jpg",
    userId: 3,
  },
  {
    title: "How do workshops help programmers find jobs?",
    content:
      "If practice is important to you, pay attention to workshops – this is a training format where you immediately work on tasks under the guidance of experienced developers. They help you improve your skills and make useful acquaintances that can help you find your first job. What is a workshop? What kind of workshops are there? What is the special feature of the workshop format? Who conducts workshops and why? Why would a beginner need a workshop? How are the workshops going? Useful tips for the workshop participant How to choose the right workshop? Where can I find workshops? FAQ In this article, we will tell you in detail what a workshop is, what its benefits and features are, how to participate, and how it can help you find employment.",
    image: "/images/posts/5.jpg",
    userId: 4,
  },
  {
    title: "The Rise of AI in 2025",
    content:
      "Exploring how artificial intelligence is shaping our daily lives.",
    image: "/images/posts/6.jpg",
    userId: 1,
  },
  {
    title: "Healthy Meal Prep Ideas",
    content: "Quick, delicious, and nutritious meals to make your week easier.",
    image: "/images/posts/7.jpg",
    userId: 2,
  },
  {
    title: "Why I Switched to Linux",
    content: "My experience moving from Windows to a Linux-based system.",
    image: "/images/posts/8.jpg",
    userId: 3,
  },
  {
    title: "Understanding CSS Grid",
    content:
      "A beginner-friendly introduction to powerful layout techniques in CSS.",
    image: "/images/posts/9.jpg",
    userId: 4,
  },
  {
    title: "Top 5 Productivity Tools",
    content: "From Notion to Todoist — tools that help me stay on track.",
    image: "/images/posts/10.jpg",
    userId: 1,
  },
  {
    title: "My Daily Routine as a Developer",
    content:
      "How I manage coding, learning, and taking breaks throughout the day.",
    image: "/images/posts/11.jpg",
    userId: 2,
  },
  {
    title: "The Best Books I Read This Year",
    content: "A roundup of inspiring, educational, and entertaining reads.",
    image: "/images/posts/12.jpg",
    userId: 3,
  },
  {
    title: "Running a Blog with Next.js",
    content: "How I built my personal blog using the Next.js framework.",
    image: "/images/posts/13.jpg",
    userId: 4,
  },
  {
    title: "Photography Tips for Beginners",
    content: "Simple techniques to start taking better photos today.",
    image: "/images/posts/14.jpg",
    userId: 1,
  },
  {
    title: "What I Learned from Freelancing",
    content: "Hard truths and valuable lessons from working with clients.",
    image: "/images/posts/15.jpg",
    userId: 2,
  },
  {
    title: "React vs Vue — My Thoughts",
    content: "Comparing two of the most popular frontend frameworks.",
    image: "/images/posts/16.jpg",
    userId: 3,
  },
  {
    title: "Minimalist Desk Setup Tour",
    content: "A look at my simple and focused workspace.",
    image: "/images/posts/17.jpg",
    userId: 4,
  },
  {
    title: "Why I Love Open Source",
    content: "Giving back to the community and learning along the way.",
    image: "/images/posts/18.jpg",
    userId: 1,
  },
  {
    title: "How I Built a Weather App",
    content: "A breakdown of my weather app using APIs and React.",
    image: "/images/posts/19.jpg",
    userId: 2,
  },
  {
    title: "My Coding Playlist",
    content: "Instrumental beats and ambient music that help me focus.",
    image: "/images/posts/20.jpg",
    userId: 3,
  },
  {
    title: "Overcoming Tutorial Hell",
    content: "Why I stopped watching and started building.",
    image: "/images/posts/21.jpg",
    userId: 4,
  },
  {
    title: "The Joy of Side Projects",
    content: "How my personal projects kept me motivated and sharp.",
    image: "/images/posts/22.jpg",
    userId: 1,
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

export const follows = [
  // Подписчики пользователя 1 (кто подписан на user1)
  {
    followerId: 2, // user2 подписан
    followingId: 1, // на user1
  },
  {
    followerId: 3, // user3 подписан
    followingId: 1, // на user1
  },
  {
    followerId: 4, // user4 подписан
    followingId: 1, // на user1
  },
  // Подписки пользователя 1 (на кого подписан user1)
  {
    followerId: 1, // user1 подписан
    followingId: 2, // на user2
  },
  {
    followerId: 1, // user1 подписан
    followingId: 3, // на user3
  },
  // Другие подписки
  {
    followerId: 2, // user2 подписан
    followingId: 3, // на user3
  },
  {
    followerId: 3, // user3 подписан
    followingId: 4, // на user4
  },
];
