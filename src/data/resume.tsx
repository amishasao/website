import { Icons } from "@/components/icons";
import { url } from "inspector";
import {
  CodeIcon,
  HomeIcon,
  icons,
  NotebookIcon,
  PencilLine,
} from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Amisha Sao",
  initials: "AS",
  url: "https://dillion.io",
  location: "Austin, TX",
  locationLink: "https://www.google.com/maps/place/austin",
  description:
    "Machine Learning Researcher & Computer Science Student. Passionate about innovation in soft robotics and generative AI. I'm always exploring new opportunities and sharing insights. Connect with me on LinkedIn and GitHub!",
  summary:
    "In the summer of 2023, I shifted my focus from embedded systems to machine learning and artificial intelligence, while continuing my work to improve technology accessibility. My journey has been shaped by notable achievements such as being named a US Presidential Scholar in 2024 and publishing a paper in IEEE Xplore. I have participated in unique educational experiences, including Sewa International's Design to Lead program, where I worked with Dr. Anurag Mairal, and projects like creating a robotic rehab glove and developing an LSTM neural network for patient movement prediction.\n\nMy professional experience includes a role as a Research Apprentice at UT Austin’s Applied Research Laboratories, where I developed Python scripts to evaluate machine learning models and worked on projects like an AI Document Scanner App. I have also been actively involved in hackathons, leading projects from marketplace websites to health and habit tracker apps.\n\nFrom creating the first in-person hackathon in my city to engaging with experts in the field, I am driven to grow in the niche academic field of Human-Computer Interaction (HCI). In the future, I aim to be an HCI researcher, refining technology and broadening its connection with humanity. Connect with me on LinkedIn and GitHub to explore more about my work and interests!",
  avatarUrl: "/LinkedIn2.jpg",
  skills: [
    "Python",
    "Java",
    "React",
    "Next.js",
    "Typescript",
    "HTML/CSS",
    "Javascript",
    "React Native",
    "MATLAB",
    "MongoDB",
    "LaTeX",
    "Machine Learning",
    "Generative AI",
    "HCI",
    "UI/UX Design",
    "Figma",
    "Git",
    "Arduino",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "asao6@gatech.edu",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/amishasao",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amisha-sao-384b71256/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mintysao@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "GT Open Source Program Office",
      href: "https://ospo.cc.gatech.edu/vsip/",
      badges: [],
      location: "Remote",
      title: "Open Source Software Development Engineer",
      logoUrl: "/gtospo.png",
      start: "May 2025",
      end: "Current",
      description:
        "Working on Cybershuttle as a part of Apache Airavata. Cybershuttle is a research computing platform powered by Apache Airavata, designed to streamline access to High-Performance Computing (HPC), cloud computing, and containerized environments for researchers.",
    },
    {
      company: "UT Applied Research Labs",
      href: "https://www.arlut.utexas.edu/",
      badges: [],
      location: "Austin, Texas",
      title: "Signal and Information Sciences Laboratory Apprentice",
      logoUrl: "/arl.png",
      start: "June 2024",
      end: "August 2024",
      description:
        "Generative AI is rapidly changing how workforces operate, including at research labs such as ARL:UT. This project is focused on exploring use-cases of Generative AI tooling--such as self-hosted large language models--to enhance productivity, while taking into account practical constraints based on available computing resources and data security. The goal of this work is to build working prototypes for selected use-cases along with an assessment of best practices for their dissemination and use.",
    },
    {
      company: "Cambridge Centre for International Research",
      badges: [],
      href: "https://cambridge-research.org/",
      location: "London, UK (Remote)",
      title: "Independent Student Researcher",
      logoUrl: "/ccir.jpg",
      start: "June 2023",
      end: "September 2023",
      description:
        "Learned about Bio-Inspired Robotics and the implementations of machine learning in their usage. Worked under Dr. Thomas George Thuruthel to create a Long Short Term Memory (LSTM) recurrent neural network in MATLAB for automated prediction of patient movement during neuromuscular robotic rehabilitation.",
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      href: "https://www.gatech.edu/",
      degree: "Bachelor's Degree in Computer Science (BS)",
      logoUrl: "/georgiatech.png",
      start: "2024",
      end: "2027",
    },
    {
      school: "Round Rock High School",
      href: "https://rrhs.roundrockisd.org/",
      degree: "High School Diploma",
      logoUrl: "/rrhs.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Robosense",
      href: "https://projectboard.world/isef/project/ebed009-robosense",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Created a robotic rehabilitation glove using an Arduino, FSR pressure sensors, and servo motors, and deployed onto Arduino Nano microcontroller using C. Used Python libraries (such as pandas and Matplotlib) to create real time pressure and angle data charts over time.",
      technologies: [
        "Arduino",
        "Python",
        "MATLAB",
        "Machine Learning",
        "LaTeX",
      ],
      links: [
        {
          type: "Website",
          href: "https://projectboard.world/isef/project/ebed009-robosense",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/amishasao/RoboSense",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Paper",
          href: "https://ieeexplore.ieee.org/document/10535001",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "/robotic_glove.jpg",
      // video:
      //   "https://drive.google.com/file/d/1NCbcirvq_JSgbozvSGO2aEisYVNlSZDX/view?usp=sharing",
    },
    {
      title: "Educational Website Research",
      href: "https://amishasao.github.io/hci-research-user-testing/",
      dates: "Aug 2023 - May 2024",
      active: true,
      description:
        "Designed a study to determine the effects of educational website design on high school student questionnaire-based learning, and received over 40 form responses. Developed a user testing website using React.js, Vite.js, and React Bootstrap and deployed project on GitHub pages. Wrote a research paper, documenting the important aspects of the research process using LaTeX.",
      technologies: [
        "Typescript",
        "Bootstrap",
        "TailwindCSS",
        "Vite.js",
        "LaTeX",
      ],
      links: [
        {
          type: "Website",
          href: "https://amishasao.github.io/hci-research-user-testing/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Paper",
          href: "https://drive.google.com/file/d/1uZGHmMy-lPIal55efTwuqo_eHZyuxg2n/view?usp=sharing",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "/hci_user_testing.png",
      // video:
      //   "https://drive.google.com/file/d/1NCbcirvq_JSgbozvSGO2aEisYVNlSZDX/view?usp=sharing",
    },
    {
      title: "MedEase: AI-Assisted Diagnostic Workflow",
      href: "https://github.com/amishasao/Scan-Desu-Ne",
      dates: "September - October 2024",
      active: true,
      description:
        "Built a website for doctors to securely upload and access PDFs, which are processed by a Retrieval-Augmented Generation Large Language Model (RAG-LLM) to generate differential diagnoses and key medical details for Electronic Health Records (EHRs). Our platform includes secure login, fast access to uploaded PDFs, and uses MongoDB for user data, RAG vector storage, and PDF management.",
      technologies: [
        "React",
        "Astro",
        "TypeScript",
        "Flask",
        "Next.js",
        "MongoDB Atlas",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/1129Chengyuan/EMR-Automatic",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Devpost",
          href: "https://devpost.com/software/medease-ai-assisted-diagnostic-workflow",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/medease.png",
      // video:
      //   "https://drive.google.com/file/d/1NCbcirvq_JSgbozvSGO2aEisYVNlSZDX/view?usp=sharing",
    },
    {
      title: "TouchingGrass",
      href: "https://github.com/BigTurtle8/mobile-apps-final-project/",
      dates: "April 2024 - May 2024",
      active: true,
      description:
        "Developed a BeReal app to encourage individuals to go outdoors more often. The app allows users to take, store, and edit pictures using filters (that can be bought) every 24 hours.",
      technologies: ["React Native", "CSS", "JavaScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/BigTurtle8/mobile-apps-final-project/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/TouchingGrass.jpg",
      // video: "",
    },
  ],
  hackathons: [
    {
      title: "HackGTeeny 2025",
      dates: "March 1st, 2025",
      location: "Atlanta, Georgia",
      description:
        "First hackathon I helped organize as a part of HexLabs! HackGTeeny is a series of one-hour workshops for first & second year students eager to learn key computer science concepts, with a special focus on skills useful for hackathons.",
      image: "/hackgteeny.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://teeny.hack.gt/",
        },
      ],
    },
    {
      title: "HackGT 11",
      dates: "September 27th - 29th, 2024",
      location: "Atlanta, Georgia",
      description:
        "Created MedEase: AI-Assisted Diagnostic Workflow, a web app that allows doctors to effortlessly upload (and access existing) pdf files, which will then be fed to a Retrieval-Augmented Generation Large Language Model (RAG-LLM), producing a differential diagnosis along with important relevant medical information that can be directly input into an Electronic Health Record (EHR) system. Implemented MongoDB to store user information, a Retreival Augmented Generation vector database, and PDF storage. Won Best Use of MongoDB!",
      image: "/hackgt.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/1129Chengyuan/EMR-Automatic",
        },
        {
          title: "Slides",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://docs.google.com/presentation/d/1hA0bs-OQc87yaPZexGPD_frk19eKW3RXsY7Ab57O6TA/edit?usp=sharing",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/medease-ai-assisted-diagnostic-workflow",
        },
        {
          title: "Video Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=2s-sg1melAo",
        },
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://med-ease.co/",
        },
      ],
    },
    {
      title: "HackMIT",
      dates: "September 14th - 15th, 2024",
      location: "Cambridge, Massachusetts",
      description:
        "Developed Turtle Tutor, an AI-integrated tutoring web app using ReactJS, PyFlask, and OpenAI models, which allowed students to tutor an AI to learn concepts.",
      image: "/hackmit.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/LeoneVi/HackMIT24",
        },
        {
          title: "Slides",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://slidesgo.com/editor/share/9d043947-4182-49de-97b3-b97e59463940?embed=0&expires=1728746644&signature=bfae7adb980a576f6433b97ad6e1f1c8a003b3789f2f25b447fd80d8b4f362b0#rs=link",
        },
        {
          title: "Ballot",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ballot.hackmit.org/project/dqdxe-jccgd-gxldb-shnhd",
        },
      ],
    },
    {
      title: "Outernet",
      dates: "July 28th - 31st, 2023",
      location: "Cabot, Vermont",
      description:
        "Developed a responsive personality quiz using React which allowed all Outernet attendees to get a comprehensive personality assessment.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAApVBMVEVHcExlRBNlRBNlRBJkQg9kQg9lRBNlRBNeOwBZNABrUCt1XkBlRBNlSiOsnIXZv5n31KT71Z3+0ItlRBO+rJP2vWX0uFtlRBOXhm/3x33zxZXutorusX/ro2ridQDhcgDtrnrplUnjpYXYe1/IPwHtrHPdjnTSp4/Zc1POtp+YmXV2eEN1dD2qrI2hooG2tp3ExbCIjWK2wcR+laVbeYpqg5Gsws9Axi3aAAAAGHRSTlMASY7W7/8SoP////+h////////Dv///xp73d0GAAABVklEQVR4AYWTBZJlMQhFsZAv47r/3Y1L23shBLp+u+eWUwcHhFvhQZAHwY1uAMVgTELIwBzV7AFALHIngvuIu8DHf6XUIQh5YUrn1vu73zfA1z/ydi3Iy+4iwtl2ZN/89w/fr4CPR7IP4eU14kWEzOPtcDr1N78vAdZ9Gf1tJlsFgKYD8X/hfmrjAiB9Z2Lvg2xzWVGuGvRXXf9ZAILmhrW/C8WAzAIdESiN/hUbKxpCpT1KTQ2UmzY9ybB5nkZDKBsp9pZKUE24GBRgC+rxX7uvHbFqFcGxlZKhwTDICLsvnO7NGlLVam+YsHAUAgeB6DR6xjjSA8Blo1J8m5UEL4bpnB4NF+lua0fRKspCsWVgvKghB4yFwod5MyxauZIQFybXC8AkRh/h0cYcsHmKaZHTNqeDmo56vqzpuqcHMz+5+dFOzn7+OPPXu5Bqu/O8lDfPO3v/c8sWhk5C5mqMAAAAAElFTkSuQmCC",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/linkai101/outernet-personality-quiz",
        },
      ],
    },
    {
      title: "Rock Hacks",
      dates: "November 11th - 13th, 2022",
      location: "Round Rock, Texas",
      description:
        "Pioneered the first hackathon in Round Rock, Texas in under 90 days, over $2,000 in sponsorship, and with over 30 middle and high school participants.",
      icon: "public",
      image: "/rockhacks.png",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Rock-Hacks/rockhacks",
        },
        {
          title: "Pictures",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://photos.app.goo.gl/7abUWbbb9Lei1cDF7",
        },
      ],
    },
    {
      title: "AutumnHacks 2022",
      dates: "September 10th - 12th, 2022",
      location: "Online",
      description:
        "Developed a cross-platform app in React Native, which tracks personal health data and provides useful insights.",
      image: "/autumnhacks.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "Assemble",
      dates: "August 5th - 8th, 2022",
      location: "San Francisco, California",
      description:
        "Developed an eCommerce platform with Stripe integration using React JS and Tailwind CSS, which allowed users to buy bad-looking designs.",
      image: "https://assemble.hackclub.com/invert.png",
      win: "Top 10 Most Popular Projects",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/amishasao/DesignZilla",
        },
      ],
    },
    {
      title: "Mbrlla Hacks",
      dates: "August 1st, 2022 - Ongoing",
      location: "Online",
      description:
        "Helped develop website FAQ section for hackathon for Nicholas T.'s YouTube Discord community using React.",
      image: "/mbrlla.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/MbrllaHacks",
        },
      ],
    },
    {
      title: "HackJA Spring 2021",
      dates: "June 5th - 6th, 2021",
      location: "Online",
      description:
        "Developed a website that demonstrated the workflow of college students teaching high school students programming as an internship opportunity supervised by tech companies. Won Best Entrepreneurial Hack!",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/527/351/datas/medium_square.png",
      win: "Best Entrepreneurial Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [],
    },
  ],
} as const;
