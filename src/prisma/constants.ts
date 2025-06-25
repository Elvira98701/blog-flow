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
    title: "Why is Go so weird",
    content:
      "Growth does not begin with a grade, but with an internal demand for development, new areas of responsibility and systematic thinking. There is no single recipe for an ideal architecture — the readability and liveliness of the project are important. Soft skills are no less important than hard skills, especially in distributed teams. You can switch to Go from any language — there is no big difference. But the transition itself will require not only experience, but also flexibility of thinking. Product thinking strengthens the developer and helps them speak the same language as the business. The oddities of Go are the compromises behind which conscious design stands. LLM is a useful tool that is useful to integrate into the workflow with due care. Composition in Go is not a limitation, but an opportunity to design easier. Reliability is achieved not only by the code, but also by the culture in the team.",
    image: "/images/posts/1.jpg",
    userId: 1,
    published: true,
  },
  {
    title: "Who is a Data Analyst and how do I become one?",
    content:
      "A data analyst analyzes data and helps businesses make informed decisions based on the data. In this review, we'll look at exactly what he does, what specializations are available, and what skills are needed for the job. Let's talk about career growth and look at the training roadmap.",
    image: "/images/posts/2.jpg",
    userId: 1,
    published: true,
  },
  {
    title: "How to Learn JavaScript",
    content:
      "JavaScript is the most popular language among developers in 2022, according to a GitHub study, and it has a very large knowledge base. It is important not to get lost in it. Let's figure out how to start learning JavaScript from scratch and not get confused by the abundance of information.",
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
    title: "How do workshops help programmers find jobs?",
    content:
      "If practice is important to you, pay attention to workshops – this is a training format where you immediately work on tasks under the guidance of experienced developers. They help you improve your skills and make useful acquaintances that can help you find your first job. What is a workshop? What kind of workshops are there? What is the special feature of the workshop format? Who conducts workshops and why? Why would a beginner need a workshop? How are the workshops going? Useful tips for the workshop participant How to choose the right workshop? Where can I find workshops? FAQ In this article, we will tell you in detail what a workshop is, what its benefits and features are, how to participate, and how it can help you find employment.",
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
