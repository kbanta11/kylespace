export type ContactLink = {
  /** the bold label on the left of the row */
  label: string;
  /** the mono destination on the right */
  value: string;
  href: string;
  external?: boolean;
  /** shown on the Contact page's "elsewhere" card — omit to hide it there */
  elsewhereLabel?: string;
};

export const profile = {
  name: 'Kyle Banta',
  subtitle: 'full-stack software engineer · oceanside, ca',
  avatar: '/assets/images/headshot-2026.jpg',
  status: 'online now',
  mood: 'Build sh*t. fast.',
  email: 'kyle@kylebanta.com',
  linkedin: 'https://linkedin.com/in/kylebanta',
};

export const aboutMe = {
  lead: "What's up ya'll, I'm Kyle. Welcome to my... space.",
  paragraphs: [
    "I live in Oceanside with my fiancée Tori and our dog Cassidy. Most weekends are some mix of getting worked by waves I had no business paddling into, playing a round of disc golf, driving somewhere with no cell service, and hiking a few miles further than I planned to.",
    "During the week I'm a senior software engineer at Gladly, on the AI Commerce team. The path here makes very little sense on paper. I have a degree in actuarial science, spent four years building data pipelines, wrote Rails and blockchain code at Kongregate, then cofounded a DeFi startup called Sizzle.fi. Ten years in, the throughline is pretty simple. I like pulling things apart to see how they work, and I like building things from scratch even more. Watching an idea go from something in my head to something people actually use has never gotten old.",
    "Nights and weekends I'm usually building something of my own. Posture Pomodoro started after about ten years of sitting badly at a desk. Benji came from losing too many nights to my phone, so it locks the apps up until morning and hands them back when I wake up. GeoGolf is the fun one. I love geography games and I'll happily lose an hour watching people play them on YouTube Shorts, so I built one where you golf city to city across the planet. There are a couple more in the works.",
    "Other things worth knowing: I'll watch any MMA card that's on, I've been a Titans fan long enough that it says more about my character than my judgment, and I go through podcasts faster than I can find new ones. If you're building something interesting, or you just want to argue about the Titans, my inbox is open.",
  ],
};

export const contactLinks: ContactLink[] = [
  {
    label: 'email me',
    value: 'kyle@kylebanta.com',
    href: 'mailto:kyle@kylebanta.com',
  },
  {
    label: 'check out my GitHub',
    value: '@kbanta11',
    href: 'https://github.com/kbanta11',
    external: true,
    elsewhereLabel: 'GitHub',
  },
  {
    label: 'view my LinkedIn',
    value: 'in/kylebanta',
    href: 'https://linkedin.com/in/kylebanta',
    external: true,
  },
  {
    label: 'find me on X',
    value: '@kbanta11',
    href: 'https://twitter.com/kbanta11',
    external: true,
    elsewhereLabel: 'X',
  },
];

/** The three rows on the Contact page's "elsewhere" card. */
export const elsewhereLinks = contactLinks.filter((link) => link.elsewhereLabel);
