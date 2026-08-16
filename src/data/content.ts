// ---------------------------------------------------------------------------
// Central content file — edit EVERYTHING (name, links, projects, skills, etc.)
// in one place. Components import their data from here.
// ---------------------------------------------------------------------------

export interface Project {
  name: string;
  tagline: string;
  highlights: string[];
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export interface SkillGroup {
  title: string;
  emoji: string;
  accent: string; // tailwind color token used for pill backgrounds
  skills: string[];
}

// ---------------------------------------------------------------------------
// Site-wide info & socials
// ---------------------------------------------------------------------------
export const site = {
  name: 'Marwa Attef',
  fullName: 'Marwa Attef Saleh',
  firstName: 'Marwa',
  title: 'Senior iOS Engineer',
  headline: 'Senior iOS Engineer',
  // TODO: Replace these placeholders with Marwa's real profile URLs.
  linkedin: 'https://www.linkedin.com/in/marwa-attef-0a6297146/',
  github: 'https://github.com/marwa-attef',
  email: 'marwa.attef.saleh@gmail.com',
  phone: '+20 112 331 4004',
  phoneHref: '+201123314004',
  // TODO: Swap in a real PDF resume. A placeholder file lives at public/resume.pdf
  resumeUrl: '/resume.pdf',
};

export const seo = {
  title: `${site.name} — ${site.title}`,
  description:
    'Senior iOS Engineer crafting delightful Swift & SwiftUI apps. 7+ years of experience, MVVM & VIPER architecture, and a passion for mentoring junior developers.',
};

// Rotating roles shown in the hero headline
export const roles = [
  'Swift Developer',
  'SwiftUI Enthusiast',
  'Mobile App Architect',
  'Mentor & Builder',
];

export const aboutParagraphs = [
  `Hi there! I'm Marwa — a mobile developer with ${`7+`} years of experience, and I've spent most of that time in love with native iOS. I specialize in Swift and SwiftUI, and I care deeply about building apps that feel effortless to use and are a joy to maintain.`,
  `Right now I work as a Senior iOS Developer at Enozom in Alexandria, Egypt, where I've been since February 2020. Before that, I built iOS and Android apps there too. I'm a big believer in solid architecture — MVVM, VIPER, clean modularization — because great structure is what lets a team move fast without breaking things. I also love mentoring junior developers and watching them grow into confident engineers.`,
  `When I'm not writing Swift, I'm probably mentoring someone through their first pull request, sketching out a new idea, or enjoying a cup of coffee ☕✨`,
];

export const stats = [
  { value: '7+', label: 'Years of Experience' },
  { value: '6', label: 'Shipped Apps' },
  { value: 'MVVM & VIPER', label: 'Proven Architectures' },
  { value: 'Mentor', label: 'to Junior Devs' },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Senior iOS Developer',
    company: 'Enozom',
    location: 'Alexandria, Egypt',
    period: 'Feb 2020 – Present',
    current: true,
    bullets: [
      'Translated design plans into full iOS app frameworks, delegating project components to the right team members.',
      'Ensured high-quality products through thorough testing and debugging.',
      'Collaborated with cross-functional teams to design, develop, and launch innovative iOS applications.',
      'Mentored junior developers, strengthening their skills and the team culture.',
      'Delivered successful product releases on schedule with smooth deployments and end-user adoption.',
    ],
  },
  {
    role: 'Mobile Developer',
    company: 'Enozom',
    location: 'Alexandria, Egypt',
    period: 'Sep 2017 – Feb 2020',
    bullets: [
      'Designed and built intuitive mobile applications for iOS and Android.',
      'Partnered closely with UX/UI designers to turn wireframes into functional, consistent prototypes across platforms.',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'Insta+',
    tagline: 'A secure, real-time payment confirmation app',
    tags: ['Swift', 'MVVM', 'Socket.IO', 'Cryptography', 'App Store'],
    highlights: [
      'Built from scratch with a scalable MVVM architecture.',
      'End-to-end encrypted data transmission via asymmetric cryptography.',
      'Share Extension for app-to-app payment confirmations.',
      'Real-time OTP verification via Socket.IO.',
      'Launched on the App Store meeting Apple\'s compliance standards.',
    ],
  },
  {
    name: 'Empolis Service Express',
    tagline: 'Modernizing a legacy field-service app',
    tags: ['Swift', 'MVVM', 'SiriKit', 'GenAI', 'Widgets'],
    highlights: [
      'Refactored from Objective-C to Swift.',
      'MVVM + modularization via a shared framework.',
      'SiriKit voice-command integration.',
      'GenAI-powered intelligent responses and recommendations.',
      'Home-screen widget for quick access.',
    ],
  },
  {
    name: 'Day Off',
    tagline: 'A leave management platform for teams',
    tags: ['Swift', 'VIPER', 'Push Notifications'],
    highlights: [
      'VIPER architecture for modularity and scalability.',
      'Multi-level approval workflows.',
      'Customizable leave policies, accrual and carry-over rules.',
      'Dynamic company-wide calendar view.',
      'Push notifications for approvals, rejections, and announcements.',
    ],
  },
  {
    name: 'Mjlsi',
    tagline: 'Secure digital meetings and approvals',
    tags: ['Swift', 'Socket.IO', 'Zoom SDK', 'Cryptography'],
    highlights: [
      'Digital signatures via custom cryptographic libraries.',
      'Real-time presentation sharing via Socket.IO.',
      'Structured meeting-approval workflow.',
      'Embedded Zoom SDK for in-app video conferencing.',
    ],
  },
  {
    name: 'Mhammi',
    tagline: 'Task management, built for teams',
    tags: ['Swift', 'VIPER', 'Collaboration'],
    highlights: [
      'Built from the ground up with VIPER architecture.',
      'Collaborative task assignment and tracking.',
      'Real-time dashboard for team transparency.',
    ],
  },
  {
    name: 'Texas Chicken',
    tagline: 'A modern SwiftUI ordering experience',
    tags: ['SwiftUI', 'MVVM', 'Apple Pay', 'Deep Linking'],
    highlights: [
      'Built with SwiftUI + MVVM.',
      'Apple Pay integration for seamless transactions.',
      'Deep linking for improved navigation and engagement.',
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: 'Languages',
    emoji: '💬',
    accent: 'bg-blush-100 dark:bg-blush-300/20',
    skills: ['Swift', 'Objective-C'],
  },
  {
    title: 'UI Frameworks',
    emoji: '🎨',
    accent: 'bg-lavender-100 dark:bg-lavender-300/20',
    skills: ['SwiftUI', 'UIKit'],
  },
  {
    title: 'Architecture',
    emoji: '🏗️',
    accent: 'bg-peach-100 dark:bg-peach-300/20',
    skills: ['MVVM', 'VIPER', 'Modularization'],
  },
  {
    title: 'Integrations & Tools',
    emoji: '🔌',
    accent: 'bg-sunny-100 dark:bg-sunny-300/20',
    skills: ['SiriKit', 'Zoom SDK', 'Apple Pay', 'Socket.IO', 'Push Notifications', 'Deep Linking'],
  },
  {
    title: 'Practices',
    emoji: '🤝',
    accent: 'bg-mint-100 dark:bg-mint-300/20',
    skills: ['Agile', 'Code Review', 'Testing & Debugging', 'Mentoring', 'Cross-functional Collaboration'],
  },
  {
    title: 'AI & Emerging',
    emoji: '✨',
    accent: 'bg-coral-500/10 dark:bg-coral-400/15',
    skills: ['Generative AI Integration'],
  },
];

export const education = [
  {
    degree: 'Web and Mobile Development',
    school: 'Information Technology Institute (ITI)',
    location: 'Alexandria, Egypt',
    year: '2017',
  },
  {
    degree: 'Communications and Electronics Engineering',
    school: 'Faculty of Engineering',
    location: 'Alexandria, Egypt',
    year: '2016',
  },
];
