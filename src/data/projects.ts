import { ProjectItem } from "../types";


export const projectsData: ProjectItem[] = [
  {
    title: "AI Vs Human Text Detection",
    description:
      "A project that aims to raise awareness of the potential risks of AI-generated text.",
    image: "Gemini_Generated_Image_59r2tu59r2tu59r2.jpeg",
    tech: ["Keras", "Python", "TensorFlow", "Transformers", "Spacy", "Word2Vec"],
    github: "https://github.com/vikramjothikmateti/AI_vs_Human_Text_Detection",
    
    details: {
      problem:
        "Recently, the quick progress of artificial intelligence (AI) has changed different parts of our daily routines, including virtual assistants and automated content creation. As AI advances, the capacity to generate human-like text has created doubts about the genuineness and reality of information.",
      solution:
        "This project explores the techniques used to distinguish between human generated and AI generated text, emphasizing the importance of neural network models in this classification.",
      features: [
        "Neural network models",
        "AI-powered text matching",
        "LSTM, RNN, FFN, Transformers",
        "DistBert, TinyBert, Word2Vec",
      ],
      impact: "Detecting AI-generated text can help social media platforms and news outlets identify and combat fake news more effectively. Journalism: Journalists can use this technology to fact-check articles and ensure that the content they publish is human-written and not AI-generated, maintaining the credibility of their publications.",
    },
  },
  {
    title: "Face Verification Based Attendance System",
    description: "An automated attendance system that uses face verification to track student attendance.",
    image: "atten.webp",
    tech: ["Pyhton", "HTML", "CSS", "SQLite", "OpenCV", "JavaScript"],
    github: "https://github.com/vikramjothikmateti/Face_Verification_based_Attendance_system",

    details: {
      problem: "Traditional attendance systems are time-consuming and error-prone",
      solution:
        "Developed a face verification system that automates the attendance process",
      features: [
        "Attendence U.I.",
        "Custom availability rules",
        "Admin Portal",
        "Multi Class Attendence",
      ],
      impact: "Reduced Attendence scheduling time by 60% for students, A Face Verification-Based Attendance System enhances efficiency by automating attendance tracking with minimal manual intervention. It improves accuracy and prevents fraud, ensuring only authorized individuals are recorded. Additionally, it saves time and offers a seamless, tech-driven solution for managing attendance in workplaces and institutions",
    },
  },
  {
    title: "E-Commerce Clothing Store",
    description: "A fully functional e-commerce clothing store",
    image: "e-commers.webp",
    tech: ["HTML", "CSS", "JavaScript", "Python", "SCSS", "Django"],
    github: "https://github.com/vikramjothikmateti/e-commerce-website",

    details: {
      problem: "Complex enterprise tools for e-commerce companies",
      solution:
        "Created a fully functional e-commerce clothing store with a clean and modern design",
      features: [
        "Product filtering",
        "Product sorting",
        "Product search",
        "Shopping cart",
      ],
      impact: "Helping small businesses manage their e-commerce operations. E-commerce clothing stores revolutionize shopping by offering convenience, a wide selection, and personalized recommendations, enhancing customer satisfaction. They empower small businesses to reach global markets, reducing overhead costs. However, they also face challenges like returns management and environmental concerns from fast fashion",
    },
  },
  {
    title: "Airline System",
    description: "Airline reservation system",
    image: "airline.webp",
    tech: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
    github: "https://github.com/vikramjothikmateti/Airline-System",

    details: {
      problem: "Complex enterprise tools for airline companies",
      solution:
        "Created a simple airline reservation system with a clean and modern design",
      features: [
        "Markdown support",
        "Daily prompts",
        "Mood tracking",
        "Privacy-focused design",
      ],
      impact: "An airline management system streamlines operations, enhancing efficiency in booking, scheduling, and resource allocation. It improves customer experience through seamless reservations and real-time updates while reducing operational costs. By integrating data analytics, it supports better decision-making and boosts overall profitability.",
    },
  },
  {
    title: "Heart Signal Processing",
    description: "This project aims to develop an advanced deep learning model for the classification and diagnosis of heart diseases through automated analysis of heartbeat sounds. By leveraging state-of-the-art machine learning techniques, we seek to create a robust, accurate, and efficient diagnostic tool for healthcare professionals.",
    image: "heart.webp",
    tech: ["HTML", "CSS", "Python", "Django"],
    github: "https://github.com/vikramjothikmateti/heart-signal-processing",

    details: {
      problem: "",
      solution:
        "Developed a sophisticated deep learning model for heart sound classification Create a reliable diagnostic tool for heart disease detection Implement advanced feature extraction and data augmentation techniques Ensure high performance and generalizability of the model",
      features: [
        "Heart sound classification",
        "Advanced feature extraction",
        "Data augmentation",
        "High performance and generalizability",
      ],
      impact: " By leveraging state-of-the-art machine learning techniques, we seek to create a robust, accurate, and efficient diagnostic tool for healthcare professionals.",
    },
  },
  {
    title: "Drowsiness Detector",
    description: "An OpenCV Drowsiness Detector using Python and Dlib is a real-time system that monitors eye movements and facial landmarks to detect driver drowsiness, leveraging computer vision techniques for enhanced safety. It combines OpenCV for image processing and Dlib for facial landmark detection.",
    image: "drownizess.webp",
    tech: ["Python", "OpenCV", "Dlib"],
    github: "https://github.com/vikramjothikmateti/drowziness",

    details: {
      problem: "Drowsy driving is a leading cause of road accidents",
      solution:
        "Developed a real-time drowsiness detection system using OpenCV and Dlib",
      features: [
        "Real-time drowsiness detection",
        "Facial landmark detection",
        "OpenCV for image processing",
        "Dlib for facial landmark detection",
      ],
      impact: " Enhanced Road Safety: The project helps reduce accidents caused by driver fatigue by detecting early signs of drowsiness in real time.Accessible Technology: By leveraging Python and Dlib, it provides a cost-effective and easily deployable solution for various industries. Improved Productivity: Ensures sa fer working environments for long-haul drivers and machine operators, minimizing downtime and hazards.",
    },
  }
];
