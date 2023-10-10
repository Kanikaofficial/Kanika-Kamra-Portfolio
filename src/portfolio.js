const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kanika Kamra | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of UI/UX",
  og: {
    title: "Kanika Kamra Portfolio",
    type: "website",
    url: "https://kanikakamra.netlify.app/home/",
  },
};

//Home Page
const greeting = {
  title: "Namaste!",
  sub: "Kanika Kamra",
  logo_name: "Kanika Kamra",
  resumeLink:
    "https://drive.google.com/file/d/1yG6AuzmFywu4s5iWTlivti1xLtS2s7_Q/view",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/Kanikaofficial",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/rohankokkula01",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/rohan0301",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@rohankokkula",
    // },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/kanika-kamra-b31736144/",
    },
    // {
    //   siteName: "HashNode",
    //   iconifyClassname: "simple-icons:hashnode",
    //   style: {
    //     color: "#2962ff",
    //   },
    //   profileLink: "",
    // },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience in working with Computer Vision using OpenCV and NLP projects(T5-Transformer & OpenAI)",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Tableau & PowerBI",
        "⚡ Experience with Text-to-speech encoders/decoders (speech synthesis) & Voice Cloning",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Data Visualization",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating interactive and insightful data visualizations using tools like Tableau and PowerBI",
        "⚡ Translating complex data into clear and engaging visual stories",
        "⚡ Designing dashboards and reports to aid decision-making",
      ],
      softwareSkills: [
        {
          skillName: "D3.js",
          fontAwesomeClassname: "fa-chart-line",
          style: {
            color: "#F9A03C",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:PowerBI",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:matplotlib",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "simple-icons:seaborn",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Data-Analysis",
      fileName: "Data Analytics",
      skills: [
        "⚡ Responsible for collecting, analyzing, and interpreting large datasets",
        "⚡ Providing actionable insights and support data-driven decision-making",
        "⚡ Performing statistical analysis, and present findings in a clear and concise manner",
        "⚡ Identifying areas for optimization and improvement",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:PowerBI",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Advanced Excel",
          fontAwesomeClassname: "simple-icons:Excel",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "HOST BEHAVIOR ANALYSIS",
      img_path: "user-behaviour-analysis.png",
      description:
        "Team Project of 5 Members | Conducted an in-depth analysis to differentiate Super Hosts from other Hosts. Identified key factors influencing Host performance and customer.decisions. Provided valuable insights for the company to develop strategies for under-performing Hosts..",
      tags: [
        {
          lang: "MySQL",
          color: "#004782",
        },
        {
          lang: "Workbench",
          color: "#303030",
        },
        {
          lang: "datasets",
          color: "#ff4b4b",
        },
        {
          lang: "Super Hosts",
          color: "#051c61",
        },
      ],
      link:
        "https://www.youtube.com/watch?v=jle1-7-cofk&ab_channel=DataMystique",
      code: "https://github.com/Kanikaofficial/Host-Behaviour-Analysis",
      linkcolor: "white",
    },
    {
      title: "XML VS TEXT COMPARISON",
      img_path: "xml-to-text.gif",
      description: `| Sole Owner| Conducted an in-depth analysis to compare XML LABELS with text file first headers. Identified discrepancies between XML labels and text file first headers.
        Implemented a process to find the closest match for each recipe headerin the
XML file.
• Corrected the recipe headers in the text file based on the XML data.
• Generated reports of missing and duplicate headers and saved them to an Excel
file.
        
        `,
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "Pandas",
          color: "#c47206",
        },
        {
          lang: "XML",
          color: "#ff4b4b",
        },
      ],
      link:
        "https://drive.google.com/file/d/1--UHxmxstsWvPI2BtNewEKFGKNTOW7pa/view",
      code: "https://github.com/Kanikaofficial/xmlVStxt-Project",
      linkcolor: "white",
    },
    {
      title: "NIFTY-50 STOCK PRICE PREDICTION PROJECT",
      img_path: "acti.gif",
      description: `
      • Conducted accurate stock price predictions for NIFTY-50 using polynomial
regression.
• Gathered and analyzed 50,000 rows of data through web. scraping.
• Developed a user-friendly webpage interface for personalized predictions.
• Integrated the with Google and Facebook Using Firebase
• Demonstrated with practical applications of AI in financial analysis and
investment optimization.
• Validated model accuracythrough historical stock data training.
      `,
      tags: [
        {
          lang: "API",
          color: "#004782",
        },
        {
          lang: "Data training",
          color: "#c47206",
        },
        {
          lang: "Polynomial Regression",
          color: "#ff4b4b",
        },
      ],
      link:
        "https://drive.google.com/file/d/1bi4ejiw-rkCWLM16_jy98HNocc45aRJn/view",
      code: "https://github.com/Kanikaofficial/Nifty_50-Project",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Content Assistant",
        subtitle: "AMAZON",
        date: "Aug 2020 - present",
        content: [
          "Responsible for making HTML code modifications and implementingenhanced ncx for various Kindle books.",
          "Handle task assignments for team members and maintain records of issues encountered while fixing books.",
          "Conduct daily reporting tasks, including data capturing, user-wise reporting, and maintaining completed book records.",
          "Completed automation projects using Python to streamline daily tasks and minimize user errors associated with manual work.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Arts(Hons)-English",
          subtitle: "University of Delhi",
          date: "2013 - 2016",
          content: ["Percentage: 65%"],
        },
        {
          title: "Central Board of Secondary Education(CBSE)",
          subtitle: "Raunaq Public School, Ganaur",
          date: "2011 - 2013",
          content: ["Precentage: 85%"],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Tableau Analyst",
      subtitle: "Tableau",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Tableau Consumer",
      subtitle: "Tableau",
      logo_path: "tabcon-01.png",
      certificate_link:
        "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Problem solving",
      subtitle: "HackerRank",
      logo_path: "problem-01.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python",
      subtitle: "HackerRank",
      logo_path: "python-01.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Certificate of Merit",
      subtitle: "Summer Analytics | IIT Guwahati",
      logo_path: "iitg-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "IITG",
      color_code: "#000000",
    },
    {
      title: "Tableau Desktop Qualified Associate",
      subtitle: "SimpliLearn",
      logo_path: "simplilearn-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Simplilearn",
      color_code: "#000000",
    },
    {
      title: "Question Generation using Transformers",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Machine Learning",
      subtitle: "Stanford University",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Data Visualization",
      subtitle: "University of Michigan",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "University of Michigan",
      color_code: "#000000",
    },
    {
      title: "Data Scientist Career Track",
      subtitle: "DataCamp",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
      alt_name: "DataCamp",
      color_code: "#000000",
    },
    {
      title: "PowerBI Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Tableau Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on LinkedIn. Feel free to reach out, and I'll respond within 24 hours. I'm here to assist you with Machine Learning, Artificial Intelligence, Data Analysis, and Open Source Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Haryana",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 99885-36242",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Kanikaofficial",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kanika-kamra-b31736144/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/c/rohanalytics",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:kamrakanikaofficial@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/kamrakanika/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
