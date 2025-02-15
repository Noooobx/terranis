const eventsData = {
  "Technical Events": [
    {
      title: "Debugging in Python",
      date: "March 5, 2025",
      location: "Auditorium",
      contact: "John Doe - 9876543210",
      formLink: "#",
      description:
        "Test your debugging skills by identifying and fixing errors in Python programs within a time limit.",
      image:
        "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
    },
    {
      title: "Code with ChatGPT",
      date: "April 12, 2025",
      location: "Computer Lab",
      contact: "Alice - 9876543211",
      formLink: "#",
      description:
        "Use ChatGPT as your coding assistant to solve programming challenges efficiently.",
      image:
        "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
    },
    {
      title: "Fast Coding in C",
      date: "May 10, 2025",
      location: "Cyber Lab",
      contact: "David - 9876543216",
      formLink: "#",
      description:
        "Showcase your speed and accuracy in writing optimized C programs under a time constraint.",
      image:
        "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
    },
    {
      title: "Schrödinger's Program",
      date: "June 1, 2025",
      location: "Tech Park",
      contact: "Emma - 9876543217",
      formLink: "#",
      description:
        "Solve coding problems where the output isn't always predictable, testing your logical reasoning and adaptability.",
      image:
        "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
    },
    {
      title: "Shuffle Code",
      date: "July 15, 2025",
      location: "Innovation Hub",
      contact: "Michael - 9876543218",
      formLink: "#",
      description:
        "Rearrange shuffled pieces of code into a working program within a given time frame.",
      image:
        "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
    },
    {
      title: "Swap Code",
      date: "August 20, 2025",
      location: "Main Hall",
      contact: "Sophia - 9876543219",
      formLink: "#",
      description:
        "Write half a program and then swap with another participant to complete each other's code.",
      image:
        "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
    },
  ],
//   "Inter-Department Events": [
//     {
//       title: "Logo Quiz (Offline)",
//       date: "March 15, 2025",
//       location: "Main Hall",
//       contact: "Michael - 9876543212",
//       formLink: "#",
//       description:
//         "Test your knowledge by identifying logos from various industries.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//     {
//       title: "Poster Presentation (Offline)",
//       date: "March 22, 2025",
//       location: "Seminar Hall",
//       contact: "Emily - 9876543213",
//       formLink: "#",
//       description:
//         "Showcase your creativity and ideas through a well-designed poster presentation.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//     {
//       title: "Problem Solving (Offline)",
//       date: "April 5, 2025",
//       location: "Innovation Hub",
//       contact: "Nathan - 9876543214",
//       formLink: "#",
//       description:
//         "Engage in analytical and logical problem-solving challenges.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//     {
//       title: "Photography (Online)",
//       date: "May 18, 2025",
//       location: "Online Submission",
//       contact: "Olivia - 9876543215",
//       formLink: "#",
//       description: "Submit your best photographs based on the given theme.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//     {
//       title: "Aptitude Test (Offline)",
//       date: "June 10, 2025",
//       location: "Exam Hall",
//       contact: "Sophia - 9876543220",
//       formLink: "#",
//       description: "Assess your aptitude skills with challenging questions.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//     {
//       title: "Spell-B (Offline)",
//       date: "June 25, 2025",
//       location: "Library Hall",
//       contact: "Daniel - 9876543221",
//       formLink: "#",
//       description:
//         "Compete in a spelling contest to test your vocabulary skills.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//     {
//       title: "Geoguessr LBSCEK",
//       date: "July 5, 2025",
//       location: "Tech Hall",
//       contact: "Ethan - 9876543222",
//       formLink: "#",
//       description:
//         "Use your geographical knowledge to guess locations accurately.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//     {
//       title: "Tech Memes",
//       date: "July 20, 2025",
//       location: "Online Submission",
//       contact: "Lily - 9876543223",
//       formLink: "#",
//       description: "Create and submit the funniest tech-related memes.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//     {
//       title: "Non-Stop Talking Challenge",
//       date: "August 10, 2025",
//       location: "Auditorium",
//       contact: "Ryan - 9876543224",
//       formLink: "#",
//       description:
//         "Talk for 2 minutes without hesitating or stopping on a given topic.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//     {
//       title: "Write Disadvantages of Social Media (Online)",
//       date: "August 25, 2025",
//       location: "Online Submission",
//       contact: "Sophia - 9876543225",
//       formLink: "#",
//       description:
//         "Submit a well-structured write-up on the disadvantages of social media.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//   ],
//   "Year-wise Events": [
//     {
//       title: "Debugging in C",
//       date: "March 5, 2025",
//       location: "Computer Lab",
//       contact: "Daniel - 9876543220",
//       formLink: "#",
//       description:
//         "Enhance your debugging skills in C with real-world problem-solving challenges.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//     {
//       title: "Guess the Output in Python",
//       date: "April 12, 2025",
//       location: "Tech Hub",
//       contact: "Sophia - 9876543221",
//       formLink: "#",
//       description: "Test your Python knowledge by predicting program outputs.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//     {
//       title: "Data Structures Quiz in Mentee Meter",
//       date: "May 10, 2025",
//       location: "Online",
//       contact: "Liam - 9876543222",
//       formLink: "#",
//       description:
//         "Participate in an interactive data structures quiz on Mentee Meter.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//     {
//       title: "Kon Banega Crorepati",
//       date: "June 1, 2025",
//       location: "Auditorium",
//       contact: "Emma - 9876543223",
//       formLink: "#",
//       description:
//         "A quiz competition inspired by KBC, testing knowledge across various domains.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//     {
//       title: "Suggestions for Changes Required in B.Tech Syllabus (Online)",
//       date: "June 20, 2025",
//       location: "Online Submission",
//       contact: "Olivia - 9876543224",
//       formLink: "#",
//       description:
//         "Submit your valuable suggestions for improving the B.Tech syllabus.",
//       image:
//         "https://thinkexam.com/blog/wp-content/uploads/2022/04/Coding-Hackathon_1-1.jpg",
//     },
//   ],
};

export default eventsData;
