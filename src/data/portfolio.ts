/**
 * Central portfolio data for Siva KK.
 * Preserve the original template's exported types and data structures.
 * Items marked for confirmation should be verified before public launch; no unverified metrics or credentials are claimed.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Siva K K',
  displayName: 'Siva KK',
  firstName: 'SIVA KK',
  seriesTag: 'THE BUILDER SERIES',
  originalLabel: 'A SIVA KK ORIGINAL',
  role: 'Founder & CEO @ TECHINS',
  tagline: ['BE EIE', 'R&D Strategist', 'Community Builder'],
  intro: 'I am Siva KK, a B.E. Electronics and Instrumentation Engineering student at SRM Valliammai Engineering College, and Founder & CEO of TECHINS. I am building an ecosystem that connects education, research, technology, and innovation so people can learn, investigate, build, and contribute. My work is rooted in community building, team coordination, event organization, project leadership, practical learning, systems thinking, experimentation, collaboration, and responsible innovation. I also lead RensolV and serve as Managing Director at ATTII VERSE. Software development is a capability I am actively learning and building alongside my core engineering and founder work.',
  location: 'Karur, Tamil Nadu, India',
  email: 'kksivaofficial@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/siva-k-k-founder25112006',
    github: 'https://github.com/kk-aihub',
    instagram: 'https://www.instagram.com/mr.k.k.siva?psln=MW5mOGgwZm83YXp6aQ%3D%3D&utm_source=qr',
    x: 'https://x.com/SivaKk56977367',
  },
  // Add a verified resume PDF URL when ready.
  resumePdf: '',
  portrait: {
    src: '/images/siva-kk-portrait.png',
    srcSet: '',
    alt: 'Portrait of Siva KK',
  },
  interests: ['Electronics & Instrumentation', 'IoT & Embedded Systems', 'Renewable Energy Monitoring', 'Research & Prototyping', 'Community Building', 'Technology Entrepreneurship', 'Software Development (learning)'],
};

export const education = [
  {
    school: 'SRM Valliammai Engineering College',
    place: 'Tamil Nadu, India',
    degree: 'B.E. — Electronics and Instrumentation Engineering (EIE)',
    period: 'Currently pursuing',
    score: 'Undergraduate studies in progress',
  },
  {
    school: 'KARUR SARASWATHY VIDHYALAYA',
    place: 'Karur, Tamil Nadu, India',
    degree: 'School education; Hindi studied and completed during school',
    period: 'School education',
    score: 'Hindi completed in school',
  },
];

/** User-provided TECHINS overview metrics. Confirm definitions before using them in formal investor or public reports. */
export const techinsImpact = [
  { value: '250+', label: 'Student community members' },
  { value: '12+', label: 'Internship opportunities facilitated' },
  { value: '5+', label: 'Projects supported / developed' },
  { value: '5+', label: 'Flagship innovation projects' },
  { value: 'Multiple', label: 'Technical research and paper presentations' },
  { value: '200+', label: 'Volunteer members' },
];

export const experience = [
  {
    company: 'TECHINS',
    role: 'Founder & CEO',
    place: 'Student-led EdTech initiative',
    period: 'Founded 25 November 2024',
    points: [
      'Building an applied-learning ecosystem to help students learn, understand, apply, and innovate through the FAI framework: Foundation → Application → Innovation.',
      'Leading community building, student learning initiatives, project activities, and operational development.',
      'Developing practical learning opportunities that connect academic concepts with real-world projects.',
    ],
  },
  {
    company: 'RensolV',
    role: 'CEO',
    place: 'Student startup — renewable energy and IoT',
    period: 'Dates not provided',
    points: [
      'Leading development of a Renewable Energy Monitoring System for Microgrids with an IoT-based monitoring focus.',
      'Work includes concept development, hardware prototyping, sensor monitoring, dashboard wireframes, and startup documentation.',
      'Prototype and validation are in progress; performance metrics are not yet verified.',
    ],
  },
  {
    company: 'ATTII VERSE',
    role: 'Managing Director',
    place: 'Cultural club / production initiative',
    period: 'Dates not provided',
    points: [
      'Contributes to leadership, community coordination, and creative/event initiatives.',
      'Co-founders include Tamilselvan, Rahul R.S, and Harish K.',
    ],
  },
  {
    company: 'Campus leadership & outreach',
    role: 'Student Leader, Event Coordinator & Campus Outreach Volunteer',
    place: 'College and student communities',
    period: 'Dates vary; verify individually',
    points: [
      'Served in student leadership and coordination roles, including class representative, Tamil Mandram coordinator, and college event coordination.',
      'Organized and supported student events, project reviews, outreach, and community activities.',
      'Participated in GeeksforGeeks Campus Mantri outreach; exact dates and official role wording should be confirmed.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'techins', title: 'TECHINS', year: '2024–Present', genre: 'EdTech • Research • Technology • Innovation',
    logline: 'An ecosystem connecting education, research, technology, and innovation to develop knowledge, capabilities, and practical solutions. TECHINS helps people learn, investigate, build, and contribute.',
    stack: ['Education', 'Research', 'Technology', 'Innovation', 'Community Development', 'Practical Learning'],
    build: ['Founded and lead an ecosystem connecting learning with practical application.', 'Coordinate community-building, teams, events, student initiatives, and project activities.', 'Promote practical learning, systems thinking, experimentation, collaboration, and responsible innovation.'],
    features: ['Education–research–technology–innovation ecosystem', 'Community building and coordination', 'Practical learning and project support', 'FAI: Foundation → Application → Innovation'],
    metrics: [{ value: '250+', label: 'Student community members' }, { value: '12+', label: 'Internship opportunities facilitated' }, { value: '5+', label: 'Projects supported / developed' }, { value: '5+', label: 'Flagship innovation projects' }, { value: 'Multiple', label: 'Technical research and paper presentations' }, { value: '200+', label: 'Volunteer members' }], palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' }, motif: 'flow',
  },
  {
    id: 'rensolv', title: 'RensolV — Renewable Energy Monitoring', year: 'In development', genre: 'IoT • Renewable Energy • Microgrids',
    logline: 'A renewable energy monitoring concept for microgrids using IoT-based sensing and monitoring.',
    stack: ['IoT', 'Sensors', 'Embedded Systems', 'Renewable Energy'],
    build: ['Developing the concept and hardware prototype.', 'Working on sensor monitoring, dashboard wireframes, and startup documentation.'],
    features: ['IoT-based monitoring concept', 'Sensor data monitoring', 'Dashboard wireframes', 'Prototype and validation work'],
    metrics: [], palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' }, motif: 'flow',
  },
  {
    id: 'desolenator', title: 'DESOLENATOR', year: 'Academic project', genre: 'Solar Energy • Water Purification',
    logline: 'A solar-powered water purification project exploring the use of solar energy in water treatment.',
    stack: ['Solar Energy', 'Water Purification', 'Engineering Design'], build: ['Project concept and development exploration.'],
    features: ['Solar-powered purification concept', 'Sustainable engineering focus'], metrics: [], palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' }, motif: 'flow',
  },
  {
    id: 'trioseivor', title: 'TRIOSEIVOR', year: 'In development', genre: 'Engineering Innovation',
    logline: 'An upgraded engineering project concept under development.', stack: ['Engineering Design', 'Concept Development'],
    build: ['Concept development and exploration; detailed implementation and technology stack need confirmation.'],
    features: ['Engineering innovation concept'], metrics: [], palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' }, motif: 'shield',
  },
  {
    id: 'saaid', title: 'SAAID — Smart Alcohol Access ID', year: 'Research / competition', genre: 'Identification • Access Control • Electronics',
    logline: 'A research-paper project exploring a smart identification and alcohol-access control concept.',
    stack: ['Identification Systems', 'Electronics', 'Access-Control Concept'],
    build: ['Developed the concept as a research paper and presented it at the Xploits event hosted by the SRM Valliammai Engineering College IT Department.', 'Won second prize; implementation details and exact event date should be added after verification.'],
    features: ['Smart identification/access-control concept', 'Research-paper presentation'], metrics: [{ value: '2nd Prize', label: 'Xploits — SRM VEC IT Department' }],
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' }, motif: 'shield',
  },
  {
    id: 'smart-attendance', title: 'Smart Attendance', year: 'Academic project', genre: 'Electronics • Smart Monitoring',
    logline: 'A smart attendance system explored as an electronics and monitoring project.', stack: ['Electronics', 'Smart Monitoring'],
    build: ['Project exploration and development; implementation details need confirmation.'], features: ['Smart attendance concept'], metrics: [], palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' }, motif: 'tenants',
  },
  {
    id: 'poseidon', title: 'POSEIDON', year: 'Project exploration', genre: 'Engineering Innovation',
    logline: 'An engineering innovation project in the user’s project portfolio; detailed description is to be confirmed.', stack: ['Engineering Design'],
    build: ['Concept and development exploration. Detailed scope, technologies, and status need confirmation.'], features: ['Project concept'], metrics: [], palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' }, motif: 'flow',
  },
  {
    id: 'kabadi-x', title: 'KABADI-X', year: 'Project development', genre: 'E-Waste • Sustainability',
    logline: 'An e-waste management solution focused on sustainability and responsible disposal.', stack: ['E-Waste Management', 'Sustainability', 'Engineering Innovation'],
    build: ['Developing the concept and solution approach; deployment and impact metrics are not yet verified.'], features: ['E-waste management concept', 'Sustainability focus'], metrics: [], palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' }, motif: 'flow',
  },
  {
    id: 'vision-aegis', title: 'VISION AEGIS', year: 'Details to confirm', genre: 'Technology Innovation',
    logline: 'A technology innovation project; specific problem statement and implementation details need confirmation.', stack: ['Technology Innovation'],
    build: ['Project name recorded; scope, technologies, and status need confirmation.'], features: ['Project concept'], metrics: [], palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' }, motif: 'shield',
  },
  {
    id: 'smart-charger', title: 'ESP32 Smart Charger', year: 'Prototype / testing', genre: 'Embedded Systems • Battery Monitoring',
    logline: 'An ESP32-based lead-acid battery charger prototype with an I²C LCD and relay integration.',
    stack: ['ESP32', 'I²C LCD (0x27)', 'PCF8574T', 'Single-Channel Relay', '12V Lead-Acid Battery'],
    build: ['Integrated and troubleshot the ESP32, LCD, relay, and battery-monitoring setup.', 'Prototype readings and power-supply behaviour require further validation before publishing performance claims.'],
    features: ['I²C LCD display', 'Relay integration', 'Battery voltage monitoring', 'Hardware troubleshooting'], metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' }, motif: 'flow',
  },
  {
    id: 'portfolio-website', title: 'Personal Portfolio Website', year: 'In development', genre: 'Web Development • Personal Branding',
    logline: 'A cinematic, streaming-platform-inspired portfolio being customized to present engineering projects, leadership, skills, and achievements.',
    stack: ['TypeScript', 'React', 'Vite', 'Node.js', 'npm', 'VS Code', 'GitHub'],
    build: ['Set up the existing GitHub portfolio project and installed its dependencies.', 'Customizing the data layer while preserving the original sections and cinematic interface.'],
    features: ['Cinematic portfolio presentation', 'Project and achievement showcases', 'Skills and journey sections', 'Professional contact links'], metrics: [], github: 'https://github.com/kk-aihub',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' }, motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  { id: 'ncsc-state', title: 'State Winner', org: 'National Children’s Science Congress (NCSC)', detail: 'State-level recognition reported by the user. Year and certificate link to be confirmed.', laurel: 'State Level' },
  { id: 'ncsc-district', title: 'District Winner', org: 'National Children’s Science Congress (NCSC)', detail: 'District-level recognition reported by the user. Year and certificate link to be confirmed.', laurel: 'District Level' },
  { id: 'sih-2025', title: 'Smart India Hackathon 2025', org: 'SRM VEC Internal Round • SensorSquad', detail: 'Participated in the internal round; exact award/result wording should be confirmed before presenting it as a win.', laurel: 'Hackathon' },
  { id: 'saaid-xploits', title: 'Second Prize', org: 'Xploits • SRM VEC IT Department', detail: 'SAAID research paper received second prize; prize amount reported as ₹750. Event date not provided.', laurel: 'Research Presentation' },
  { id: 'best-volunteer', title: 'Best Volunteer', org: 'Organization not specified', detail: 'Recognition reported by the user; organization, date, and evidence link need confirmation.', laurel: 'Volunteer Recognition' },
  { id: 'outstanding-volunteer', title: 'Outstanding Volunteer', org: 'Organization not specified', detail: 'Recognition reported by the user; organization, date, and evidence link need confirmation.', laurel: 'Volunteer Recognition' },
  { id: 'fabriquathon-2026', title: 'Fabriquathon 2K26', org: 'National-level 24-hour hardware hackathon', detail: 'Participated through TECHINS sponsorship/association; supported project reviews, interacted with participants and industry representatives, and spoke about TECHINS. Received a bouquet and shield from event staff/panel. Keep this as participation/engagement, not a competition win.', laurel: 'Event Participation' },
  { id: 'badminton-doubles', title: 'Badminton Doubles Winner', org: 'House of Mars • College Sports', detail: 'Doubles event winner; event date not provided.', laurel: 'Sports' },
  { id: 'national-conference', title: 'Research Paper Presentation', org: 'National Conference', detail: 'Participated with one research paper. Conference name, paper title, and date need confirmation.', laurel: 'Research' },
  { id: 'worldskills-2028', title: 'WorldSkills Competition 2028 Registration', org: 'Renewable Energy', detail: 'Registered for the individual Renewable Energy skill. Registration is confirmed; no later-stage qualification is claimed.', laurel: 'Registered' },
  { id: 'gfg-campus-mantri', title: 'Campus Mantri', org: 'GeeksforGeeks', detail: 'Six-month campus outreach role reported by the user; exact dates and official title need confirmation.', laurel: 'Campus Outreach' },
];

export type Certification = {
  issuer: string;
  name: string;
  link: string;
  date?: string;
};

export const certifications: Certification[] = [
  {
    issuer: 'UniAthena',
    name: 'Master ChatGPT',
    link: '',
    date: '15 Feb 2026',
  },
  {
    issuer: 'UniAthena',
    name: 'Basics of Data Science',
    link: '',
    date: '15 Feb 2026',
  },
  {
    issuer: 'UniAthena · Cambridge International Qualifications',
    name: 'Basics of Training & Leadership',
    link: '',
    date: '2 May 2026',
  },
  {
    issuer: 'UniAthena · Cambridge International Qualifications',
    name: 'Basics of Leadership & Human Behavior in Change Management',
    link: '',
    date: '2 May 2026',
  },
  {
    issuer: 'UniAthena · Cambridge International Qualifications',
    name: 'Basics of Behavioral Science – Know Your Employees',
    link: '',
    date: '22 Oct 2026',
  },
  {
    issuer: 'UniAthena · Cambridge International Qualifications',
    name: 'Basics in Human Resource Management',
    link: '',
    date: '22 Oct 2026',
  },
  {
    issuer: 'MongoDB · GeeksforGeeks',
    name: 'MongoDB Skill Badge: Overview – Core Concepts and Architecture',
    link: '',
    date: '24 Aug 2026',
  },
  {
    issuer: 'Learntube.ai',
    name: 'Leadership Skills Certification',
    link: '',
    date: '20 Oct 2025',
  },
  {
    issuer: 'SRM Valliammai Engineering College',
    name: 'Value Added Course – Smart Industrial Automation with PLC and IIoT',
    link: '',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  { id: 'domains', title: 'Engineering Domains', subtitle: 'Academic and project interests', skills: [
    { name: 'Instrumentation', mono: 'In' }, { name: 'IoT Systems', mono: 'Io' }, { name: 'Renewable Energy', mono: 'RE' }, { name: 'Sensor Systems', mono: 'Ss' }, { name: 'Electronics Prototyping', mono: 'Ep' }, { name: 'Full-Stack Development', mono: 'FS', note: 'Developing' },
  ] },
  { id: 'embedded', title: 'Embedded & Hardware', subtitle: 'Electronics prototyping and instrumentation', skills: [
    { name: 'ESP32', mono: '32' }, { name: 'Arduino', mono: 'Ar' }, { name: 'Raspberry Pi Pico', mono: 'RP' }, { name: 'Sensors', mono: 'Sn' }, { name: 'Relay Modules', mono: 'Ry' }, { name: 'I²C LCD / OLED', mono: 'LC' }, { name: 'Arduino IDE', mono: 'ID' },
  ] },
  { id: 'leadership', title: 'Leadership & Communication', subtitle: 'Experience through student initiatives', skills: [
    { name: 'Startup Leadership', mono: 'SL' }, { name: 'Community Building', mono: 'CB' }, { name: 'Event Coordination', mono: 'EC' }, { name: 'Public Speaking', mono: 'PS' }, { name: 'Student Outreach', mono: 'SO' }, { name: 'Project Reviews', mono: 'PR' }, { name: 'Teamwork', mono: 'Tw' },
  ] },
  { id: 'iot-ai', title: 'IoT, AI & Monitoring', subtitle: 'Tools used in project exploration', skills: [
    { name: 'ThingSpeak', mono: 'TS' }, { name: 'OpenCV', mono: 'CV' }, { name: 'TensorFlow Lite', mono: 'TL' }, { name: 'MIT App Inventor', mono: 'MA' },
  ] },
  { id: 'tools', title: 'Development Tools', subtitle: 'Building, analysis, and design tools', skills: [
    { name: 'VS Code', mono: 'VS' }, { name: 'GitHub', mono: 'GH' }, { name: 'Node.js', mono: 'No' }, { name: 'npm', mono: 'np' }, { name: 'MATLAB', mono: 'Mb' }, { name: 'Excel', mono: 'Xl' }, { name: 'Canva', mono: 'Ca' }, { name: 'Figma', mono: 'Fg' },
  ] },
  { id: 'programming', title: 'Programming & Web', subtitle: 'Foundations and active learning', skills: [
    { name: 'Python', mono: 'Py', note: 'Basic' }, { name: 'HTML', mono: 'Ht', note: 'Beginner' }, { name: 'JavaScript', mono: 'Js', note: 'Learning' },
  ] },
  { id: 'interests', title: 'Current Learning Goals', subtitle: 'Areas for continued development', skills: [
    { name: 'Full-Stack Development', mono: 'FS' }, { name: 'Software Engineering', mono: 'SE' }, { name: 'AI Applications', mono: 'AI' }, { name: 'Product Development', mono: 'PD' }, { name: 'Advanced IoT', mono: 'Io' },
  ] }
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Programming foundations; project-level proficiency to be verified'],
  HTML: ['Beginner web-development learning'],
  JavaScript: ['Personal portfolio website customization — learning'],
  ESP32: ['ESP32 Smart Charger prototype'],
  Arduino: ['Embedded project exploration'],
  'Raspberry Pi Pico': ['Hardware project exploration'],
  Sensors: ['RensolV renewable-energy monitoring concept', 'Embedded systems projects'],
  'Relay Modules': ['ESP32 Smart Charger prototype'],
  'I²C LCD / OLED': ['ESP32 Smart Charger prototype'],
  'Arduino IDE': ['ESP32 and Arduino project work'],
  ThingSpeak: ['IoT project exploration'],
  OpenCV: ['Computer-vision learning and project exploration'],
  'TensorFlow Lite': ['Edge AI learning and project exploration'],
  'MIT App Inventor': ['Application prototyping tool'],
  'VS Code': ['Personal portfolio development'],
  GitHub: ['Personal portfolio repository and project work'],
  'Node.js': ['Portfolio project tooling via Node.js/npm'],
  MATLAB: ['Engineering coursework/tool use'],
  Excel: ['Planning and data organization'],
  Canva: ['Design and event assets'],
  Figma: ['Dashboard wireframes and interface design exploration'],
  Instrumentation: ['Electronics and Instrumentation Engineering studies'],
  'Renewable Energy': ['RensolV microgrid monitoring concept', 'WorldSkills Renewable Energy registration'],
  'Startup Leadership': ['TECHINS', 'RensolV', 'ATTII VERSE'],
  'Community Building': ['TECHINS student community initiatives'],
  'Event Coordination': ['College events and student initiatives'],
  'Public Speaking': ['TECHINS talk at Fabriquathon 2K26'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };


export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: 'Early learning → Engineering',
    synopsis:
      'The beginning of a journey shaped by curiosity, engineering fundamentals, and the decision to learn by building—not just by studying.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Beginning',
        description:
          'Building the foundation for a future in technology through learning, exploration, and a growing interest in solving practical problems.',
        tags: ['Curiosity', 'Learning', 'Growth'],
        runtime: 'The beginning',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Engineer',
        description:
          'Pursuing Electronics and Instrumentation Engineering at SRM Valliammai Engineering College, connecting electronics, measurement, sensors, and control systems.',
        tags: ['EIE', 'Electronics', 'Instrumentation'],
        runtime: 'Currently pursuing',
        palette: ocean,
      },
      {
        code: 'S01 E03',
        title: 'Beyond the Classroom',
        description:
          'Exploring practical learning through embedded systems, microcontrollers, IoT, and hands-on engineering projects.',
        tags: ['ESP32', 'Arduino', 'IoT'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'The Entrepreneur',
    period: '2023 → Present',
    synopsis:
      'Turning an interest in learning and technology into initiatives, communities, and projects with a practical purpose.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The TECHINS Idea',
        description:
          'TECHINS began as an idea on 25 November 2023 and developed into a startup on 25 November 2024, focused on making learning practical and applicable.',
        tags: ['TECHINS', 'EdTech', 'Entrepreneurship'],
        runtime: '2023–2024 milestones',
        palette: jade,
      },
      {
        code: 'S02 E02',
        title: 'The FAI Framework',
        description:
          'Foundation → Application → Innovation: a learning approach that connects understanding concepts with applying them and developing new solutions.',
        tags: ['Foundation', 'Application', 'Innovation'],
        runtime: 'Ongoing',
        palette: amber,
      },
      {
        code: 'S02 E03',
        title: 'Building Communities',
        description:
          'Developing student learning initiatives, community activities, and collaborative project work through TECHINS.',
        tags: ['Leadership', 'Community', 'Collaboration'],
        runtime: 'Ongoing',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Ideas into Systems',
    period: 'Projects & experimentation',
    synopsis:
      'Exploring how engineering concepts can become prototypes, renewable-energy monitoring systems, sustainability solutions, and research work.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Microgrid Mission',
        description:
          'RensolV explores IoT-based renewable-energy monitoring for microgrids, bringing sensors, hardware concepts, and monitoring interfaces together.',
        tags: ['RensolV', 'IoT', 'Renewable Energy'],
        runtime: 'Concept / development',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Hardware Lab',
        description:
          'Developing an ESP32-based lead-acid battery charger prototype with an I²C LCD, PCF8574T interface, and relay integration.',
        tags: ['ESP32', 'Battery Monitoring', 'Embedded Systems'],
        runtime: 'Prototype / testing',
        palette: jade,
      },
      {
        code: 'S03 E03',
        title: 'Engineering for Impact',
        description:
          'DESOLENATOR explores solar-powered water purification, while KABADI-X explores e-waste management. SAAID represents the research and presentation side of the journey.',
        tags: ['DESOLENATOR', 'KABADI-X', 'SAAID'],
        runtime: 'Project development',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Recognition & The Next Chapter',
    period: 'Leadership → Future',
    synopsis:
      'A chapter of research recognition, student initiatives, competition participation, and continued development as an engineer and entrepreneur.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Research Story',
        description:
          'The SAAID research paper received second prize at Xploits, organised by the SRM VEC IT Department. A national conference paper is also part of the academic journey.',
        tags: ['SAAID', 'Research', 'Recognition'],
        runtime: 'Recognition',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Leadership Chapter',
        description:
          'Contributing to student communities and college events through coordination, TECHINS initiatives, and ATTII VERSE leadership.',
        tags: ['TECHINS', 'ATTII VERSE', 'Leadership'],
        runtime: 'Ongoing',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'What Comes Next',
        description:
          'Growing as an electronics and instrumentation engineer while exploring IoT, embedded systems, renewable energy, and software development. Registered in the Renewable Energy skill category for WorldSkills Competition 2028; registration does not imply qualification.',
        tags: ['Instrumentation', 'IoT', 'WorldSkills 2028'],
        runtime: 'In progress',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Founder & CEO', title: 'TECHINS', detail: 'EdTech • Foundation → Application → Innovation', palette: jade },
  { label: 'Renewable Energy', title: 'RensolV', detail: 'IoT-based microgrid monitoring concept', palette: ocean },
  { label: 'Engineering', title: 'Electronics & Instrumentation', detail: 'Undergraduate at SRM Valliammai Engineering College', palette: violet },
  { label: 'Research Recognition', title: 'SAAID', detail: 'Second prize at Xploits • SRM VEC IT Department', palette: crimson },
  { label: 'Embedded Project', title: 'ESP32 Smart Charger', detail: 'Battery monitoring, I²C LCD, and relay integration', palette: ocean },
  { label: 'Sustainability', title: 'DESOLENATOR & KABADI-X', detail: 'Solar water purification and e-waste management concepts', palette: jade },
  { label: 'Leadership', title: 'ATTII VERSE', detail: 'Managing Director', palette: amber },
  { label: 'Competition', title: 'WorldSkills 2028', detail: 'Registered in Renewable Energy; no later qualification claimed', palette: violet },
  { label: 'Community', title: 'Student Initiatives', detail: 'Event coordination, outreach, and project activities', palette: crimson },
  { label: 'Current Focus', title: 'Practical Engineering & Leadership', detail: 'Instrumentation, IoT, community building, and responsible innovation', palette: ocean },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'Introduction', title: 'Siva KK', lines: ['Electronics and Instrumentation Engineering student', 'Founder & CEO of TECHINS • CEO of RensolV • Managing Director at ATTII VERSE'], chips: ['Engineering', 'Entrepreneurship'] },
  { kicker: 'Mission', title: 'Connecting Knowledge to Action', lines: ['TECHINS connects education, research, technology, and innovation.', 'We help people learn, investigate, build, and contribute.', 'Foundation → Application → Innovation'], chips: ['EdTech', 'Research', 'Practical Innovation'] },
  { kicker: 'Engineering', title: 'From Sensors to Systems', lines: ['IoT, embedded systems, instrumentation, and renewable energy monitoring.', 'Building prototypes and learning through practical project work.'], chips: ['ESP32', 'IoT', 'Renewable Energy'] },
  { kicker: 'Projects', title: 'Practical Innovation', lines: ['RensolV — microgrid monitoring concept', 'SAAID — research paper recognised at Xploits', 'ESP32 Smart Charger — hardware prototype'], chips: ['IoT', 'Research', 'Embedded'] },
  { kicker: 'Leadership', title: 'Building Communities', lines: ['TECHINS • ATTII VERSE • student initiatives', 'Event coordination, project reviews, and student outreach.'], chips: ['Leadership', 'Community'] },
  { kicker: 'Achievements', title: 'Learning on Every Stage', lines: ['NCSC district/state recognition reported', 'Badminton doubles winner', 'Registered for WorldSkills 2028 Renewable Energy'], chips: ['Science', 'Sports', 'Renewable Energy'] },
  { kicker: 'Current mission', title: 'Build. Learn. Contribute.', lines: ['Growing as an electronics and instrumentation engineer while leading communities, exploring practical projects, and learning software development.'], chips: ['Instrumentation', 'IoT', 'Community Building'] },
];

export type ProfileId = 'Siva KK' | 'recruiter' | 'founder' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'Siva KK',
    name: 'Siva KK',
    blurb: 'The full story, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'founder',
    name: 'Founder',
    blurb: 'Startups, leadership & projects first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Engineering & entrepreneurship', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Projects • Engineering & innovation`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Selected projects, roles & focus areas', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Professional profile • Resume link to be added', palette: violet },
};
