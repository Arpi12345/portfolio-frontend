// Mock data for Arpita Raj's Portfolio

export const profileData = {
  name: "Arpita Raj",
  title: "Full Stack Web Developer",
  summary: "Full Stack Web Developer skilled in MERN stack with projects in Spotify Clone, Quora Clone, and Wanderlust App. Certified with 18+ Google Cloud Skills Boost badges in AI/ML, MLOps, GCP, Data & Analytics.",
  email: "arpi59815@gmail.com",
  phone: "+91-7992370930",
  github: "https://github.com/Arpi12345",
  portfolio: "https://dev-portfolio-209.preview.emergentagent.com",
  cloudProfile: "https://www.cloudskillsboost.google/public_profiles/your-profile",
  resume: "/resume/arpita-raj-resume.pdf"
};

export const skills = {
  languages: ["HTML", "CSS", "JavaScript", "Java", "C", "SQL"],
  frontend: ["React.js", "Tailwind CSS", "Bootstrap", "Material UI"],
  backend: ["Node.js", "Express.js", "EJS", "REST APIs"],
  database: ["MongoDB", "SQL"],
  tools: ["Git", "GitHub", "Redux"],
  cloud: ["Google Cloud Platform", "Vertex AI", "Generative AI", "MLOps"]
};

export const projects = [
  {
    id: 1,
    title: "Wanderlust – Travel Listing Web App",
    description: "A comprehensive travel listing platform with CRUD operations, user authentication, and responsive design. Users can browse, create, and manage travel listings.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    github: "https://github.com/Arpi12345/wanderlust",
    live: "https://wanderlust-2-no14.onrender.com/listings",
    featured: true
  },
  {
    id: 2,
    title: "Spotify Clone",
    description: "A responsive music player interface replicating Spotify's design and functionality with clean UI and smooth user experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Arpi12345/spotify-clone",
    live: null,
    featured: true
  },
  {
    id: 3,
    title: "Quora Clone",
    description: "A Q&A platform clone with routing, forms, and backend logic. Features include user posts, questions, and answers functionality.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/Arpi12345/quora-clone",
    live: null,
    featured: true
  },
  {
    id: 4,
    title: "Delta Projects",
    description: "Collection of web development projects showcasing various frontend and backend technologies.",
    techStack: ["HTML", "CSS", "JavaScript", "React.js"],
    github: "https://github.com/Arpi12345/delta-project",
    live: null,
    featured: false
  },
  {
    id: 5,
    title: "Mini Project (CSS Showcase)",
    description: "A creative CSS project demonstrating advanced styling techniques and responsive design principles.",
    techStack: ["HTML", "CSS"],
    github: "https://github.com/Arpi12345/Mini-project-css",
    live: null,
    featured: false
  }
];

export const certifications = {
  googleCloud: {
    totalBadges: 18,
    categories: [
      {
        name: "AI/ML",
        badges: 5,
        description: "Machine Learning, AI Platform, AutoML"
      },
      {
        name: "Generative AI",
        badges: 4,
        description: "Vertex AI, Generative AI Studio"
      },
      {
        name: "MLOps",
        badges: 3,
        description: "ML Pipelines, Model Deployment"
      },
      {
        name: "GCP Services",
        badges: 4,
        description: "Compute Engine, Cloud Storage, BigQuery"
      },
      {
        name: "Data & Analytics",
        badges: 2,
        description: "Data Engineering, Analytics"
      }
    ],
    profileUrl: "https://www.cloudskillsboost.google/public_profiles/your-profile"
  },
  other: [
    {
      name: "Delta Full Stack Web Development Program",
      issuer: "Apna College",
      year: "2024",
      description: "Comprehensive full-stack development program covering MERN stack"
    }
  ]
};

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "LN Mishra Institute of Economic Development & Social Change, Patna",
    year: "2016–2019",
    grade: "67%"
  },
  {
    degree: "XII (Senior Secondary)",
    institution: "Mahant Hanuman Sharan College, Patna",
    year: "2016",
    grade: "60%"
  },
  {
    degree: "X (Secondary)",
    institution: "Patna Central School",
    year: "2013",
    grade: "8.2 CGPA"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Project Reviewer",
    role: "Technical Lead",
    content: "Arpita's work on the Wanderlust project demonstrated excellent full-stack development skills and attention to detail.",
    avatar: "AR"
  },
  {
    id: 2,
    name: "Course Instructor",
    role: "Delta Program",
    content: "Outstanding performance in the full-stack development program. Shows great promise in MERN stack development.",
    avatar: "CI"
  }
];