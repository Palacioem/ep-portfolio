import {
    IconCodeCircle2,
    IconSelector,
    IconBrandAzure,
    IconBrandNodejs,
    IconBrandReact,
    IconBrandMongodb,
    IconBrandZulip,
    IconBrandRevolut,
    IconChartScatter,
    IconPyramid,
    IconBrandCpp,
    IconBrandThreads,
    IconAccessPoint,
    IconBrandPython,
    IconFlame,
    IconCropLandscape,
    IconBrandDjango,
    IconFileTypeSql,
    IconHtml
  } from '@tabler/icons-react';

export type data = {
    image: string;
    title: string;
    description: string;
    link: string;
    tech: string[]
    icons: React.ElementType[];
}

export const projectData = [{
    image:"/images/LogiTask.PNG",
    title:"Logi-Task",
    description:"A full-stack web application to streamline client management, automating scheduling and service tracking for small businesses",
    content:"ASK TO SEE DEMO",
    link:"https://github.com/Palacioem",
    tech:['Django','React(Vite,Typescript)','PostgreSQL','Azure'],
    icons:[IconBrandDjango,IconCodeCircle2,IconSelector,IconBrandAzure]
    },{
    image:"/images/Capture.PNG",
    title:"AniSync",
    description:"full-stack web app enabling users to discover, save, and sync anime songs to their Spotify playlists",
    content:"Anime + Sync",
    link:"https://github.com/Palacioem/AniPlaylist-",
    tech:['Express','React(Vite,Typescript)','MongoDB'],
    icons:[IconBrandNodejs,IconBrandReact,IconBrandMongodb]
    },
    {
    image:"/images/threads.png",
    title:"Huffman-Hero",
    description:"Developed a multithreaded C++ application for efficient text compression and decompression using Huffman coding. Implemented parallelized decoding with POSIX threads to optimize performance, dynamically generating encoding schemes from input files and accurately reconstructing original messages.",
    content:"POSIX THREADS",
    link:"https://github.com/Palacioem/Huffman-Hero",
    tech:['C++','GCC','POSIX Threads'],
    icons:[IconBrandCpp,IconAccessPoint,IconBrandThreads]
    },
    {
    image:"/images/coming_soon.jpg",
    title:"ZKImage",
    description:"ZeroSnap is a privacy-preserving image verification platform that uses zero-knowledge proofs (ZKPs) to cryptographically prove that an image has not been altered since its creation — without revealing the image contents or sensitive metadata.",
    content:"CRYPTOGRAPHY",
    link:"https://github.com/Palacioem",
    tech:['SnarkJS','Express','React(Vite,Typescript)'],
    icons:[IconBrandZulip,IconBrandNodejs,IconBrandReact]
    },
    {
    image:"/images/d2_time_series.gif",
    title:"Helios",
    description:"visualizing and quantifying solar flare intensity through advanced statistical and computational methods, offering insights into both temporal and spatial patterns of solar flare activity.",
    content:"DATA VISUALIZATION",
    link:"https://github.com/Palacioem",
    tech:['R','ggplot2','dplyr'],
    icons:[IconBrandRevolut,IconChartScatter,IconPyramid]
    },
    {
    image:"/images/Figure_1.png",
    title:"Fraid_MLP",
    description:"Built a neural network-based system to detect fraudulent bank transactions using real-world financial data. The model was trained on preprocessed and normalized transaction records, with attention to imbalanced class distribution using class weighting and evaluation metrics like recall, F1-score, and AUC-ROC. Feature engineering included one-hot encoding for categorical variables and MinMax scaling for continuous features. The system was evaluated with rigorous metrics and visualized using confusion matrices and precision-recall curves.",
    content:"NEURAL NETWORKS",
    link:"https://github.com/Palacioem/Helios-",
    tech:['Python','Pytorch','Panda'],
    icons:[IconBrandPython,IconFlame,IconCropLandscape]
    },
    {
    image:"/images/login.png",
    title:"Fuel Visionary",
    description:
    "This was my first full-stack web development project, built collaboratively with a team using Git and GitHub. The project focused on learning how to work in a version-controlled team environment, manage branches, handle merge conflicts, and follow a collaborative development workflow. Through this experience, I deepened my understanding of backend and frontend integration, user authentication, and database-driven web apps. I also gained hands-on experience with RESTful API design, user interface development, and state management",
    content:"FIRST FULL STACK PROJECT",
    link:"https://github.com/moisespal/FuelVisionary",
    tech:['Django','SQLite','HTML/CSS/JS'],
    icons:[IconBrandDjango,IconFileTypeSql,IconHtml]
    },
    {
    image:"/images/TBAjpg.jpg",
    title:"TBA",
    description:"To be Determined",
    content:"COMING SOON",
    link:"https://github.com/Palacioem",
    tech:['N/A','?','SOON'],
    icons:[IconBrandNodejs,IconBrandReact,IconBrandMongodb]
    },
    {
    image:"/images/TBAjpg.jpg",
    title:"TBA",
    description:"To be Determined",
    content:"COMING SOON",
    link:"https://github.com/Palacioem",
    tech:['N/A','?','SOON'],
    icons:[IconBrandNodejs,IconBrandReact,IconBrandMongodb]
    },

    
    
]