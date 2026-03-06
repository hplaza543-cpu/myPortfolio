import { Github, Linkedin, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://www.facebook.com/DaDoodsDurogs' },
  { icon: Instagram, href: 'https://www.instagram.com/imharoldzafra/' },
  { icon: Youtube, href: 'https://www.youtube.com/@DaDoodsDurogs' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/plaza-john-harold-z-548b453a7/' },
  { icon: Github, href: 'https://github.com/hplaza543-cpu' }
];

export const TECHNICAL_SKILLS = ['HTML', 'CSS', 'JavaScript', 'Python', 'Git & GitHub', 'React', 'Node.js', 'SQL'];
export const SOFT_SKILLS = ['Problem Solving', 'Communication', 'Team Collaboration', 'Time Management', 'Adaptability', 'Leadership'];

export const PROJECTS = [
  {
    title: 'nastySFX',
    description: 'A business website project where I sell my Adobe After Effects presets and projects.',
    link: 'https://nasty-sfx.vercel.app/',
    image: 'https://picsum.photos/seed/nastysfx/600/400'
  },
  {
    title: 'Student Portfolio Website',
    description: 'A responsive personal portfolio website designed with a nature-inspired theme.',
    image: 'https://picsum.photos/seed/portfolio/600/400'
  },
  {
    title: 'Simple Calculator App',
    description: 'A functional calculator application with basic arithmetic operations and a clean UI.',
    image: 'https://picsum.photos/seed/calculator/600/400'
  },
  {
    title: 'Attendance Tracker',
    description: 'A web-based system to track student attendance and generate reports.',
    image: 'https://picsum.photos/seed/attendance/600/400'
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Advanced Programming and Web Technology',
    issuer: 'Webinar',
    date: '2025',
    image: 'https://picsum.photos/seed/cert1/800/600' 
  },
  {
    title: 'AI Unplugged Decoding the Future Intelligence',
    issuer: 'Webinar',
    date: '2025',
    image: 'https://picsum.photos/seed/cert2/800/600'
  },
  {
    title: 'Next-Gen Learning Trends in IT, AI, and the Evolving Industry Landscape',
    issuer: 'Webinar',
    date: '2025',
    image: 'https://picsum.photos/seed/cert3/800/600'
  }
];

export const RESUME_DATA = {
  name: "John Harold Z. Plaza",
  contact: "417D Brgy. San Jose Sitio IV, Mandaluyong City. | 09202245586 • hplaza543@gmail.com",
  objective: "A dedicated Computer Engineering student looking for an internship where I can enhance my technical knowledge, gain real-world experience in programming and technical support, and continuously learn new technologies.",
  education: [
    {
      school: "Rizal Technological University | Mandaluyong",
      degree: "Bachelor of Science in Computer Engineering | Expected: 2026",
      coursework: [
        "Advanced Programming",
        "Computer Organization & Architecture",
        "Computer Network & Security",
        "Operating Systems"
      ]
    },
    {
      school: "San Felipe Neri Parochial | Mandaluyong",
      degree: "STEM | 2022"
    }
  ],
  skills: [
    "Programming Foundations: Python, C++, Java, HTML, CSS (basic)",
    "Version Control & Deployment: GitHub, Vercel (basic)",
    "Desktop and laptop troubleshooting",
    "Adobe Photoshop and After Effects",
    "Basic MS Office"
  ],
  projects: [
    "Laboratory Exercises (C++): Completed foundational programming tasks focusing on basic logic and syntax as part of academic coursework.",
    "Applied basic HTML and CSS concepts in guided coursework exercises",
    "Managed the end-to-end deployment of a web project using Vercel and GitHub.",
    "Photo and video editing projects using Adobe Photoshop and After Effects"
  ],
  seminars: [
    "Advanced Programming and Web Technology",
    "Next-Gen Learning Trends in IT, AI, and the Evolving Industry Landscape",
    "Exploring The Latest Technology",
    "IoT and Embedded Systems with Applications in Machine Learning"
  ]
};
