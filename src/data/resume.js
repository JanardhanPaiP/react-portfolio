const resume = {
  name: 'Janardhan Pai',
  title: 'Full Stack Developer | .NET Core | React | Azure | AI & GenAI',
  summary:
    'Senior Software Developer with 10 years in IT, including 5 years in software development focused on backend engineering with hands-on front-end work. Building intelligent, scalable systems for industrial automation with .NET Core, Python, React and Azure.',
  about: {
    paragraphs: [
      'I am an IT professional with 10 years of industry experience, including 5 years in software development specializing in backend engineering with hands-on front-end development. I currently work as an R&D Engineer – Senior Software Developer at ABB, building scalable and efficient solutions for industrial automation.',
      'Earlier in my career I contributed to Hitachi Energy and L&T Technology Services, designing and implementing robust software systems. I am passionate about AI and Generative AI, and actively upskilling in LLMs, agentic AI systems and cloud-based AI solutions.',
    ],
    stats: [
      { value: '10+', label: 'Years in IT' },
      { value: '5+', label: 'Years in software development' },
      { value: '3', label: 'Leading organizations' },
      { value: '2+', label: 'AI / ML certifications' },
    ],
    facts: [
      { label: 'Based in', value: 'Karnataka, India' },
      { label: 'Currently', value: 'Senior Software Developer, ABB' },
      { label: 'Focus', value: '.NET Core, React, Azure, GenAI' },
      { label: 'Languages', value: 'English' },
      { label: 'Work mode', value: 'On-site / Hybrid' },
    ],
    interests: ['Generative AI', 'Agentic AI', 'LLMs', 'Cloud architecture', 'Industrial automation'],
  },
  contact: {
    email: '',
    phone: '',
    location: 'Karnataka, India',
    linkedin: 'https://www.linkedin.com/in/janardhan-pai-bab1439b/',
    github: '',
  },
  skills: [
    { category: 'Programming & Frameworks', items: ['Python', 'C#', '.NET Framework', '.NET Core'] },
    { category: 'Architecture & Principles', items: ['Design Patterns', 'SOLID Principles', 'Microservices', 'HLD / LLD'] },
    { category: 'Web & API', items: ['FastAPI', 'REST API', '.NET Core Web API', 'Microsoft Graph'] },
    { category: 'Messaging & Integration', items: ['RabbitMQ', 'Azure Service Bus'] },
    { category: 'Frontend', items: ['React.js', 'TypeScript', 'JavaScript', 'Micro Front End'] },
    { category: 'Databases', items: ['Cosmos DB', 'SQL Server', 'SQLite'] },
    { category: 'Automation & DevOps', items: ['Robot Framework', 'Azure DevOps', 'Git'] },
    { category: 'AI & GenAI', items: ['Azure OpenAI', 'LangChain', 'CrewAI', 'Agentic AI'] },
  ],
  experience: [
    {
      role: 'R&D Engineer – Senior Software Developer',
      company: 'ABB · Bengaluru, India',
      period: 'Sep 2022 - Present',
      points: [
        'Built an automated L3 Support AI Agent integrating tickets from Email, Microsoft Teams and Salesforce.',
        'Implemented AI-driven resolution using Azure OpenAI, CrewAI and LangChain, with a Python FastAPI, SQLite and Microsoft Graph API backend and a React.js / TypeScript front end.',
        'Developed a web-based microservice for DriveSize sizing using .NET Core Web API, RabbitMQ and Azure Service Bus, with a React.js micro front end.',
        'Reverse-engineered legacy business logic and calculation modules; contributed to HLD, LLD, design patterns and architectural decisions.',
      ],
    },
    {
      role: 'Research and Development Engineer',
      company: 'Hitachi Energy · Bengaluru, India',
      period: 'Sep 2020 - Aug 2022',
      points: [
        'Maintained and enhanced PCM600 Protection and Control software without disrupting working modules.',
        'Supported both the ASP.NET web application and the desktop applications (WPF and Windows Forms).',
      ],
    },
    {
      role: 'Senior Engineer',
      company: 'L&T Technology Services',
      period: 'Aug 2016 - Sep 2020',
      points: ['Developed and maintained the ProView NXG desktop application using Python and HTML5.'],
    },
    {
      role: 'Executive Trainee',
      company: 'L&T Technology Services · Mysuru, India',
      period: 'Aug 2015 - Aug 2016',
      points: ['Worked on Python and HTML5 based software development.'],
    },
  ],
  education: [
    {
      degree: 'B.E. in Electronics and Communications',
      school: 'Canara Engineering College',
      period: '2011 - 2015',
    },
  ],
  certifications: [
    {
      name: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI, Stanford University',
      period: 'Jun 2024',
    },
    {
      name: 'AI/ML for Geo Data Analysis',
      issuer: 'ISRO - Indian Space Research Organisation',
      period: 'Aug 2024',
    },
  ],
  projects: [
    {
      name: 'Automated L3 Support AI Agent',
      description:
        'Agentic ticket-resolution system integrating Email, Teams and Salesforce, powered by Azure OpenAI, CrewAI, LangChain, FastAPI and React.',
      link: '',
    },
    {
      name: 'DriveSize Microservice',
      description:
        'Web-based sizing tool built with .NET Core Web API, RabbitMQ, Azure Service Bus and a React micro front end.',
      link: '',
    },
  ],
};

export default resume;
