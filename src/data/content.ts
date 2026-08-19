// ---------------------------------------------------------------------------
// Central content file — edit EVERYTHING (name, links, projects, skills, etc.)
// in one place. Components import their data from here.
// ---------------------------------------------------------------------------

export interface Project {
  name: string;
  tagline: string;
  highlights: string[];
  tags: string[];
  url?: string;
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
  github: 'https://github.com/marwaattefsaleh',
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
  { value: '18', label: 'Shipped Apps' },
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
    name: 'Couryah',
    tagline: 'Multi-vertical on-demand e-commerce platform',
    tags: ['SwiftUI', 'E-commerce', 'Multi-Vendor', 'Web & Mobile'],
    url: 'https://enozom.com/our_work/couryah/',
    highlights: [
      'On-demand platform for food, groceries, medicine, and gifts.',
      'Home delivery and in-store pickup from multiple vendors.',
      'Actively mentored a junior developer on this codebase.',
    ],
  },
  {
    name: 'Friday',
    tagline: 'Farmhouse booking platform',
    tags: ['SwiftUI', 'Booking', 'Dual-App Ecosystem', 'Web & Mobile'],
    url: 'https://enozom.com/Our_Work/friday/',
    highlights: [
      'Customer-facing booking app plus partner app for farm owners.',
      'Property listing and reservation management for farm owners.',
      'Actively mentored a junior developer on this dual-app ecosystem.',
    ],
  },
  {
    name: 'Yalla Catering',
    tagline: 'Corporate catering marketplace in Saudi Arabia',
    tags: ['SwiftUI', 'Marketplace', 'Catering', 'App Store'],
    url: 'https://apps.apple.com/ae/app/yalla-catering/id1564072471',
    highlights: [
      'Connects users with corporate catering and meal prep providers.',
      'Event planner integration for large-scale catering orders.',
      'Mentored junior engineers.',
    ],
  },
  {
    name: 'Airvoy',
    tagline: 'Peer-to-peer package transportation and logistics',
    tags: ['SwiftUI', 'Logistics', 'P2P', 'QR Code'],
    highlights: [
      'Connects travelers with packages for cross-border delivery.',
      'Dynamic document and ticket uploads with weight verification.',
      'Airport checkpoint location alerts and secure QR-code handshakes.',
    ],
  },
  {
    name: 'Muri',
    tagline: 'Transportation platform for employee and student commutes',
    tags: ['SwiftUI', 'Transportation', 'Dual-App', 'Saudi Arabia'],
    url: 'https://muri.sa/landing#downloadapp',
    highlights: [
      'Passenger and driver apps for optimized daily routes.',
      'Secure, cost-effective commute solutions in Saudi Arabia.',
      'Highly tailored mobile interfaces for both user types.',
    ],
  },
  {
    name: 'Day Off',
    tagline: 'Employee PTO and leave tracker',
    tags: ['Swift', 'VIPER', 'Push Notifications', 'App Store'],
    url: 'https://enozom.com/Our_Work/Day-Off-Leave-Tracker/',
    highlights: [
      'Multi-level approval workflows.',
      'Customizable leave policies, accrual and carry-over rules.',
      'Dynamic company-wide calendar view.',
      'Push notifications for approvals, rejections, and announcements.',
    ],
  },
  {
    name: 'Texas Chicken',
    tagline: 'Fast-food ordering and delivery app',
    tags: ['SwiftUI', 'MVVM', 'Apple Pay', 'Deep Linking'],
    url: 'https://apps.apple.com/eg/app/texas-chicken/id1438764129',
    highlights: [
      'End-to-end ordering for dine-in, takeaway, drive-thru, and delivery.',
      'Contactless payment integrations and localized restaurant discovery.',
      'Dynamic coupon and rewards management with favorite-order profiles.',
    ],
  },
  {
    name: 'Zad',
    tagline: 'Food delivery platform with restaurant discovery',
    tags: ['Swift', 'MVVM', 'Delivery', 'Real-time Tracking'],
    highlights: [
      'Restaurant discovery, online ordering, and delivery tracking.',
      'Led iOS feature development and contributed to architecture.',
      'Improved app performance and mentored mid-level engineers.',
    ],
  },
  {
    name: 'Tilawati',
    tagline: 'Quran memorization and recitation platform',
    tags: ['Swift', 'Audio Recording', 'Subscription', 'Sheikh Review'],
    highlights: [
      'Subscription-based Quran memorization connecting students with Sheikhs.',
      'Student experience: play verses, record recitation, submit for review.',
      'Sheikh experience: listen to submissions, annotate verses for correction.',
      'Interactive verse-level feedback to improve memorization and recitation.',
      'Supported subscription-based access to Sheikh-led services.',
    ],
  },
  {
    name: 'Masterz',
    tagline: 'Peer-to-peer educational platform',
    tags: ['SwiftUI', 'Cross-Platform', 'Education', 'Dual-Role'],
    url: 'https://enozom.com/Our_Work/Masterz/',
    highlights: [
      'Connects instructors ("Masters") and students across domains.',
      'Supports dual user states: student and multi-subject instructor.',
      'Handled dual-platform implementation across iOS and Android.',
    ],
  },
  {
    name: 'Arab Art Sale',
    tagline: 'Global e-commerce marketplace for artists',
    tags: ['SwiftUI', 'E-commerce', 'Gallery', 'Cross-Platform'],
    url: 'https://enozom.com/Our_Work/arab-art-sale/',
    highlights: [
      'Showcase, curate, and monetize artwork globally.',
      'Robust digital catalog rendering and transaction mechanics.',
      'Handled dual-platform implementation across iOS and Android.',
    ],
  },
  {
    name: 'Mjlsi',
    tagline: 'Board meeting governance and management system',
    tags: ['Swift', 'Socket.IO', 'Zoom SDK', 'Cryptography'],
    url: 'https://apps.apple.com/ae/app/mjlsi/id1494153877',
    highlights: [
      'Full meeting lifecycle: agendas, presentations, voting, and minutes.',
      'Secure digital signatures via custom cryptographic libraries.',
      'Embedded Zoom SDK for in-app video conferencing.',
    ],
  },
  {
    name: 'Empolis',
    tagline: 'Enterprise knowledge intelligence suite',
    tags: ['Swift', 'GenAI', 'Offline Sync', 'QR Scanner'],
    url: 'https://apps.apple.com/us/app/empolis-industrial-knowledge/id1376571362',
    highlights: [
      'GDPR-compliant multi-source data centralization.',
      'Offline sync, voice-to-text, and AI digital assistant (Empolis Buddy).',
      'QR code scanner for contextual machine diagnostics.',
    ],
  },
  {
    name: 'Arabsat',
    tagline: 'Telecommunications utility platform',
    tags: ['Swift', 'Real-time Telemetry', 'Satellite'],
    url: 'https://www.arabsat.com/',
    highlights: [
      'Satellite asset databases and channel frequency configurations.',
      'Signal coverage calculators and device sensor calibration.',
      'Precise satellite dish alignment workflows.',
    ],
  },
  {
    name: 'Insta+',
    tagline: 'Secure fintech payment confirmation app',
    tags: ['Swift', 'MVVM', 'Cryptography', 'Share Extension'],
    url: 'https://apps.apple.com/eg/app/insta/id6502846983',
    highlights: [
      'iOS System Share Extension for instant app-to-app routing.',
      'Real-time transaction confirmation pipelines.',
      'Cryptographic OTP verification for multi-factor security.',
    ],
  },
  {
    name: 'Mhmmi',
    tagline: 'Enterprise team collaboration and task management',
    tags: ['Swift', 'VIPER', 'Collaboration', 'Kanban'],
    url: 'https://apps.apple.com/ae/app/%D9%85%D9%87%D8%A7%D9%85%D9%8A/id1503704937',
    highlights: [
      'Dynamic kanban workflow boards with real-time in-app chat.',
      'Collaborative file-sharing across team members.',
      'Built and deployed entirely from scratch to store release.',
    ],
  },
  {
    name: 'Mal3abak',
    tagline: 'Sports facility marketplace for instant booking',
    tags: ['SwiftUI', 'Marketplace', 'Map', 'Cross-Platform'],
    url: 'https://enozom.com/Our_Work/mal3abak/',
    highlights: [
      'Connects players with nearby football fields for instant booking.',
      'Localized discovery map features and real-time scheduling.',
      'Contributed to both iOS and Android codebases.',
    ],
  },
  {
    name: 'Ship Hub',
    tagline: 'Global B2B maritime logistics network',
    tags: ['SwiftUI', 'Logistics', 'B2B', 'Cross-Platform'],
    url: 'https://enozom.com/Our_Work/shiphub/',
    highlights: [
      'Digitizes marine business processes for ship owners and managers.',
      'Connects port agencies and technical service providers globally.',
      'Contributed to both iOS and Android codebases.',
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
