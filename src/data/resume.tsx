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
  url: "https://hi-amisha.vercel.app",
  location: "Austin, TX",
  locationLink: "https://www.google.com/maps/place/austin",
  description:
    "Software Engineer turned Product Designer, currently interning as a Software Engineer at Adobe. I build practical, technical products that empower people to tell their own stories. I'm pivoting toward design engineering, bridging the gap between design and code. Connect with me on LinkedIn and GitHub!",
  summary:
    "I'm a software engineer turned product designer, currently studying Computer Science at Georgia Institute of Technology. I've spent years building technical systems — from open-source research computing tools to AI-powered products. I'm now bringing that same rigor into product design, with the goal of becoming a design engineer: someone who can move fluidly between Figma and code, and who designs with an understanding of what's actually buildable.\n\nRight now, I'm interning at Adobe, where I work closely with designers to implement frontend changes — an experience that's taught me exactly what survives the handoff from design file to production, and sharpened my instinct for where design and engineering decisions actually meet.\n\nMy path here has included some unconventional turns: I was named a US Presidential Scholar in 2024 and published research in IEEE Xplore on neuromuscular robotic rehabilitation. I've also led and organized hackathons at scale — including HackGT 12, Georgia Tech's largest student-run hackathon with over 1,200 participants — and founded the first in-person hackathon in my hometown from scratch.\n\nWhat ties all of this together is the same thread I care about as a design engineer: building products and experiences that are practical, technically sound, and genuinely empower the people who use them to tell their own stories. Connect with me on LinkedIn and GitHub to see more of what I'm working on.",
  avatarUrl: "/LinkedIn2.jpg",
  skills: [
    // Design
    "User Research",
    "Usability Testing",
    "Competitive Analysis",
    "Information Architecture",

    // Design Tools
    "Figma",
    "Adobe Creative Cloud",
    "Wireframing",
    "Prototyping",
    "Component Libraries",
    "Design Systems",

    // Engineering
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "Node.js",
    "HTML/CSS",
    "Git",

    // Other
    "Generative AI",
    "MCP Servers",
    "Agile Development",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
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
        url: "https://www.linkedin.com/in/amisha-sao/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@handmade.by.amisha",
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
      company: "HexLabs, Inc.",
      href: "https://hexlabs.org/",
      badges: [],
      location: "Atlanta, Georgia",
      title: "Design Engineer",
      logoUrl: "/hexlabs.png",
      start: "November 2024",
      end: "Current",
      description:
        "Designing and building scalable web experiences with React and TypeScript for high-traffic hackathon events. Delivered the HackGT 13 website by owning information architecture, mid-to-high fidelity prototyping, and a seaside-market visual concept from initial sketches through launch. Strengthened cross-platform responsiveness to support smooth engagement across large-scale user events.",
    },
    {
      company: "Adobe",
      href: "https://www.adobe.com/",
      badges: [],
      location: "San Jose, California",
      title: "Software Engineering Intern, Marketo Engage (AI)",
      logoUrl: "/adobe.png",
      start: "May 2026",
      end: "August 2026",
      description:
        "Expanded a conversational AI skill in Adobe's Marketo Engage AI tool, enabling enterprise marketers to import and target customer data through natural language across a Python backend and React TypeScript frontend. Hardened the private-beta product ahead of launch by resolving full-stack data-import failures and driving two core backend modules to 100% test coverage. Contributed across Adobe's AI lead-scoring platform through 17 pull requests spanning backend services and the customer-facing Scoring Studio UI, including data-correctness and Adobe Spectrum alignment fixes.",
    },
    {
      company: "GT Open-Source Program Office",
      href: "https://ospo.cc.gatech.edu/vsip/",
      badges: [],
      location: "Atlanta, Georgia",
      title: "Software Engineering Intern, ARTISAN Project",
      logoUrl: "/gtospo.png",
      start: "May 2025",
      end: "August 2025",
      description:
        "Designed and deployed a ReactJS MCP chatbot that increased LLM accessibility within Cybershuttle by 300%. Collaborated with a 25-person developer team to contribute production-ready code to the Apache Foundation.",
    },
    {
      company: "Applied Research Laboratories",
      href: "https://www.arlut.utexas.edu/",
      badges: [],
      location: "Austin, Texas",
      title: "Research Apprentice",
      logoUrl: "/arl.png",
      start: "June 2024",
      end: "August 2024",
      description:
        "Reduced AI benchmark evaluation time by 50+ hours per week using LlamaIndex and DeepEval, and presented the work to over 40 researchers and members of the public at the end-of-summer symposium.",
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      href: "https://www.gatech.edu/",
      degree: "B.S./M.S. in Computer Science with a focus in HCI",
      logoUrl: "/georgiatech.png",
      start: "Aug 2024",
      end: "May 2028",
    },
  ],
  projects: [
    {
      title: "Inner Hues",
      href: "#",
      dates: "Jan 2026 - Apr 2026",
      active: true,
      description:
        "A judgment-free digital art space designed to make creative self-care feel more approachable. Led user research through 15 survey responses and 4 interviews, uncovering barriers around time and confidence, choice overload, and fear of judgment. Mapped 5 competitor apps and iterated low-to-mid-fidelity Figma prototypes based on usability testing to improve navigation and guidance clarity.",
      technologies: [
        "Figma",
        "User Research",
        "Usability Testing",
        "Competitive Analysis",
        "Prototyping",
        "Information Architecture",
      ],
      links: [],
      image: "/inner-hues.png",
    },
    {
      title: "ATTUNE",
      href: "#",
      dates: "March 2026",
      active: true,
      description:
        "A real-time conversational awareness app inspired by the Korean concept of nunchi. Designed an experience that translates emotional cues into a live heatmap and quick-insights panel, with privacy-by-design through opt-in, active-session-only voice recording and analysis focused on emotional state rather than transcript content.",
      technologies: [
        "Figma",
        "Product Design",
        "Interaction Design",
        "Privacy by Design",
        "AI",
      ],
      links: [],
      image: "/attune.png",
    },
    {
      title: "MedEase: AI-Assisted Diagnostic Workflow",
      href: "https://github.com/amishasao/Scan-Desu-Ne",
      dates: "September - October 2024",
      active: true,
      description:
        "Built an AI-assisted diagnostic workflow that allows doctors to securely upload and access PDFs, which are processed by a Retrieval-Augmented Generation model to generate differential diagnoses and key medical details for electronic health records.",
      technologies: [
        "React",
        "TypeScript",
        "MongoDB",
        "Flask",
        "RAG",
        "Generative AI",
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
    },
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
  ],
  hackathons: [
    {
      title: "SproutGT",
      dates: "April 10th - 11th, 2026",
      location: "Atlanta, Georgia",
      description:
        "Helped organize SproutGT, a start-up pitch-a-thon and design-a-thon hosted by HexLabs for over 250 Georgia Tech students. Worked behind the scenes to plan and build the event experience, supporting both the technical and operational aspects of bringing the event to life.",
      image: "/sproutgt.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://sprout.hack.gt/",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/HackGT/sproutgt2026-website",
        },
      ],
    },
    {
      title: "HackGT 12",
      dates: "September 26th - 28th, 2025",
      location: "Atlanta, Georgia",
      description:
        "Helped organize SproutGT, a start-up pitch-a-thon and design-a-thon for over 250 Georgia Tech students. Contributed to the event's digital experience and technical infrastructure while working with the HexLabs team to bring the event from planning to execution.",
      image: "/hackgt12.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://2025.hack.gt/",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/HackGT/hackgt12-website",
        },
      ],
    },
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
