import type { Project, Skill, Certificate, Award } from './types';
import { JavascriptIcon, ReactIcon, NodejsIcon, TailwindCssIcon, TypescriptIcon, FigmaIcon, CIcon, CppIcon, PythonIcon, HtmlIcon, CssIcon, MySqlIcon, GitIcon, DockerIcon, FastApiIcon, FlaskIcon } from './components/icons/TechIcons';

export const PROFILE_DATA = {
    name: "Yaswanth Yerra",
    title: "Aspiring Software Developer | Web Developer & Problem-Solver",
    introduction: "Pursuing B.Tech in Information Technology at M.V.G.R. College Of Engineering, Vizianagaram (Expected Graduation: 2026). Passionate about developing scalable web applications, exploring new technologies, and problem-solving with creative and clean code.",
    photo: "/MyPhoto.png",
    bio: "Hello! I'm Yaswanth, currently pursuing my B.Tech in Information Technology. I'm passionate about developing scalable web applications, exploring new technologies, and solving complex problems with creative code. I actively contribute to open-source projects on GitHub and have collaborated on team projects during college hackathons, focusing on Agile workflows and version control using Git.",
    githubUrl: "https://github.com/Yaswanth9347",
    linkedinUrl: "https://www.linkedin.com/in/yaswanth-yerra-58467633a/",
    resumeUrl: "https://drive.google.com/drive/u/0/folders/14bvvyDhyuumswNaIq17JIREGYq8s1baX",
    email: "yaswanthyerra2025@gmail.com",
};

export const SKILLS_DATA: Skill[] = [
    { name: 'C', icon: CIcon },
    { name: 'C++', icon: CppIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'HTML', icon: HtmlIcon },
    { name: 'CSS', icon: CssIcon },
    { name: 'JavaScript', icon: JavascriptIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'MySQL', icon: MySqlIcon },
    { name: 'Git', icon: GitIcon },
    { name: 'Docker', icon: DockerIcon },
    { name: 'FastAPI', icon: FastApiIcon },
    { name: 'Flask', icon: FlaskIcon },
];

export const PROJECTS_DATA: Project[] = [
    {
        title: "Multilingual Voice Bot",
        image: "https://picsum.photos/seed/project1/600/400",
        description: "A voice-enabled chatbot supporting multiple languages. Developed an intelligent speech interaction system for real-time multilingual communication using Google Cloud APIs, Dialogflow, and FastAPI, improving accessibility.",
        tags: ["Python", "Dialogflow", "FastAPI", "Google Cloud"],
        liveUrl: "#",
        repoUrl: "https://github.com/Yaswanth9347/Multilingual_voice_bot"
    },
    {
        title: "ClarkAI-Assistant",
        image: "https://picsum.photos/seed/project5/600/400",
        description: "A voice-enabled personal AI assistant inspired by Jarvis, built with the LiveKit Agents framework. It features a conversational, sarcastic persona and integrates with Google APIs and Home Assistant for hands-free automation.",
        tags: ["Python", "LiveKit", "Google Cloud", "AI/ML", "Async"],
        liveUrl: "#",
        repoUrl: "https://github.com/Yaswanth9347/ClarkAI-Assistant"
    },
    {
        title: "Sentiment Analysis of Social Media Tweets",
        image: "https://picsum.photos/seed/project4/600/400",
        description: "A system to classify social media tweets into Positive, Negative, Neutral, or Irrelevant sentiments using ML and NLP. Features a Flask API for real-time prediction and a Streamlit dashboard for analysis.",
        tags: ["Python", "Flask", "Streamlit", "Scikit-learn", "NLP"],
        liveUrl: "#",
        repoUrl: "https://github.com/Yaswanth9347/social_media_sentiment_analysis"
    },
    {
        title: "Medical Store Management",
        image: "https://picsum.photos/seed/project3/600/400",
        description: "A comprehensive Flask web app to manage inventory, sales, and customer data with MySQL. Designed with robust error handling and reporting to streamline operations, reduce manual errors, and improve data accuracy.",
        tags: ["Flask", "MySQL", "Python", "REST APIs"],
        liveUrl: "#",
        repoUrl: "https://github.com/Yaswanth9347/Medical_Management"
    }
];

export const CERTIFICATES_DATA: Certificate[] = [
    {
        title: "On-Site Internship Completion",
        issuer: "OmniqAI Pvt. Ltd.",
        year: "2025",
        url: "https://drive.google.com/drive/u/0/folders/1OoFmOuKzqurhLHcLhaTZv4NwF_do_INX"
    }
];

export const AWARDS_DATA: Award[] = [
    {
        title: "Internship Excellence Award",
        issuer: "OmniqAI Pvt. Ltd.",
        year: "2025",
        description: "Awarded for outstanding performance in the sprint.",
        link: "/Yaswanth Sprint Award.pdf",
    }
];
