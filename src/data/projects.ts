export type ProjectStatus = 'live' | 'unreleased' | 'archive';

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  /** live/unreleased cards link out; archive cards only link when a url is set */
  url?: string;
  /** the longer copy on the Work page */
  description: string;
  /** the tighter one-liner used in the profile's top-projects rows */
  shortDescription?: string;
  /** 2-4 scannable points, shown in the /work/:slug detail overlay */
  bullets?: string[];
  /**
   * A short status aside in the overlay, set apart from the bullets — e.g.
   * flagging that an archived project is no longer maintained. Since the
   * status tag was dropped from the cards, this is what tells a visitor.
   */
  note?: string;
  /** tech chips in the detail overlay. Only list what the project actually used. */
  stack?: string[];
  /** overrides the overlay's "visit site" button label, e.g. for a beta opt-in */
  ctaLabel?: string;
  /** a second, quieter action beside the main CTA — e.g. step 2 of a beta opt-in */
  secondaryCta?: { label: string; url: string };
  /** 16:10 thumbnail. Omit to get the striped placeholder slot. */
  image?: string;
  imageFit?: 'cover' | 'contain';
  /** background behind a `contain` logo — the project's brand color */
  imageBg?: string;
  /** caption inside the placeholder slot when there is no image */
  placeholderLabel?: string;
};

export const projects: Project[] = [
  {
    slug: 'benji',
    title: 'Benji',
    status: 'live',
    url: 'https://benjisleeps.com',
    description:
      'Fixes your sleep by holding your bedtime routine: full alarms, a morning and dream journal, and app blocking until you wake up.',
    shortDescription: 'Bedtime-routine tracker with full alarms and app blocking until morning',
    bullets: [
      "Sticking to a bedtime routine is the thing that actually gets you to sleep faster. Benji's job is making yours stick.",
      'You journal at both ends of the night: dreams when you wake up, and how the morning actually went.',
      "Your apps stay blocked until morning, so your phone can't be the reason you're up.",
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'RevenueCat', 'LocalStorage'],
    image: '/link-icons/benji.webp',
    imageFit: 'cover',
  },
  {
    slug: 'geogolf',
    title: 'GeoGolf',
    status: 'live',
    url: 'https://playgeo.golf',
    description:
      'Play golf around the globe. Three holes, hit a ball city to city, test your geography.',
    shortDescription: 'Golf the globe. Three holes, city to city, geography under pressure',
    bullets: [
      "A new set of three holes goes up every day. Everyone plays the same ones, and there's a leaderboard and a streak counter.",
      "You tee off from one city and try to reach another. Pick a club and how hard to swing it. The driver goes up to 3,000 miles, the putter is for when you're nearly there.",
      'Land near a city and the game pulls up a short Wikipedia blurb about it.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Vercel',
      'Neon',
      'Drizzle',
      'react-globe.gl',
      'TopoJSON',
    ],
    image: '/link-icons/geogolf.webp',
    imageFit: 'cover',
  },
  {
    slug: 'vertebro',
    title: 'Vertebro',
    status: 'unreleased',
    // Step 1 gets you onto the tester list; step 2 is Google's opt-in page, which
    // only works once you are on it. Swap the mailto for the Google Group join URL
    // when the group exists — then testers need nothing from Kyle at all.
    url: 'mailto:kyle@kylebanta.com?subject=Vertebro%20Android%20test',
    ctaLabel: 'ask to join the test',
    secondaryCta: {
      label: 'already a tester? opt in →',
      url: 'https://play.google.com/apps/testing/com.kylebanta.vertebro',
    },
    description:
      'A posture coach that reads your posture from two photos and builds you a daily corrective routine. In closed testing on Google Play, iPhone coming soon.',
    shortDescription: 'Posture coach with on-device analysis, in closed testing on Android',
    bullets: [
      "The successor to Posture Pomodoro. Same posture analysis underneath, but the pomodoro timer is gone and it's a coach now.",
      'Take a front and side photo and it scores your posture out of 100, along with eight specific measurements like forward head and shoulder balance.',
      "It all runs on your phone. There's no account and no server, so your photos never leave the device.",
      'From there it gives you corrective exercises to work through and tracks whether your score actually moves.',
      "It's in closed testing on Google Play right now and I'm looking for more Android testers. iPhone is coming next.",
    ],
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'TensorFlow Lite',
      'MoveNet',
      'RevenueCat',
      'PostHog',
    ],
    image: '/assets/images/vertebro-logo.png',
    imageFit: 'contain',
    // matches the icon's own background so its rounded corners blend in
    imageBg: '#1e1e1e',
  },
  {
    slug: 'glotshop',
    title: 'GlotShop',
    status: 'unreleased',
    description:
      "An LLM translation app for Shopify stores that writes through Shopify's own translation API, so it stays SEO-safe. In planning, with the approach proven by a spike.",
    bullets: [
      "Shopify's free translation tool only auto-translates two languages, uses plain machine translation, and overwrites your manual fixes every time you re-run it. The paid alternatives charge by the word and tend to break your SEO.",
      'GlotShop translates every language you publish, keeps a glossary so brand terms and tone stay put, and locks the translations you have approved so a re-run cannot clobber them.',
      'It writes through Shopify’s own translation API rather than hacking the storefront, which is what keeps localized URLs and hreflang working properly.',
      'Still in planning. I ran a spike against a real store that translated all 13 resource types end to end — products, collections, pages, menus, theme sections — into French and German, so the approach is proven even though the app is not built yet.',
    ],
    stack: [
      'React Router 7',
      'TypeScript',
      'Polaris',
      'Prisma',
      'PostgreSQL',
      'pg-boss',
      'Gemini',
      'Docker',
    ],
    image: '/link-icons/glotshop.webp',
    imageFit: 'cover',
  },
  {
    slug: 'custom-storybook',
    title: 'CustomStorybook.ai',
    status: 'live',
    url: 'https://customstorybook.ai',
    description:
      'Chat with an AI storycrafter and it writes and illustrates a custom children’s book for you, start to finish.',
    bullets: [
      'You describe the story you want in plain language and it takes it from there, writing the text and illustrating the pages.',
      'The whole thing starts from a chat box rather than a form, so a kid can drive it as easily as an adult.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Supabase', 'OpenAI'],
    image: '/link-icons/custom-storybook.webp',
    imageFit: 'cover',
  },
  {
    slug: 'posture-pomodoro',
    title: 'Posture Pomodoro',
    status: 'live',
    url: 'https://posturepomodoro.com',
    description:
      "Don't let desk work keep your back and neck stiff. AI posture readings from two photos, plus guided corrective movement through the day.",
    shortDescription: 'AI posture readings plus guided movement breaks, on web, desktop and mobile',
    bullets: [
      'You take two photos and it reads your posture from them. No wearable, nothing to set up.',
      'Through the day it prompts you with corrective movements instead of just telling you to sit up straight.',
      'Works on web, desktop and mobile.',
    ],
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Supabase',
      'Kotlin',
      'Swift',
      'Next.js',
      'OpenRouter',
    ],
    image: '/link-icons/posture-pomodoro.webp',
    imageFit: 'cover',
  },
  {
    slug: 'dewey',
    title: 'Dewey',
    status: 'archive',
    url: 'https://withdewey.com',
    description:
      'AI accountability buddy. A task manager on OpenAI, Firebase and Twilio that chases you down about your own to-do list.',
    bullets: [
      "You tell Dewey what you're trying to get done and it checks in with you every day over text.",
      'The point is that it comes to you. A to-do list you have to remember to open is a to-do list you ignore.',
    ],
    note: 'No longer active, but the site is still up.',
    stack: ['OpenAI', 'Firebase', 'Twilio'],
    image: '/link-icons/dewey.webp',
    imageFit: 'cover',
  },
  {
    slug: 'sizzle-fi',
    title: 'Sizzle.Fi',
    status: 'archive',
    description:
      'A DeFi portfolio aggregator. Connect a wallet and see every position and P&L across protocols in one place, and act on them without hopping between apps.',
    bullets: [
      'Connect your wallet and it showed every position you held across DeFi protocols in one dashboard, with the P&L on each.',
      "You could act on them from there too. I wrote the contracts that handled swapping, supplying to Aave and managing Uniswap liquidity, so you never left for another app.",
      'This was a company, not a side project. A few friends and I built it until the funding ran out.',
    ],
    note: 'Shut down when we ran out of funding.',
    stack: [
      'React',
      'TypeScript',
      'NestJS',
      'Solidity',
      'Hardhat',
      'ethers.js',
      'wagmi',
      'Uniswap SDK',
      'Aave',
      'CoinGecko',
    ],
    image: '/link-icons/sizzle.webp',
    imageFit: 'cover',
  },
  {
    slug: 'perkl',
    title: 'Perkl',
    status: 'archive',
    description:
      'A podcast player with social audio built into it: record your own snippets, clip moments out of shows, and leave audio comments. Shipped on iOS and Android, since shut down.',
    bullets: [
      'A full podcast player first, with the social features layered on top rather than bolted beside them.',
      'You could record and post your own audio snippets, and clip a moment out of a podcast to share.',
      "Comments were audio too, on podcasts and on other people's posts.",
      "I started it before Clubhouse existed. It didn't survive the wave that came after.",
    ],
    note: 'Shut down around 2022-2023. The apps and the site are gone.',
    stack: ['Flutter', 'Firebase'],
    image: '/assets/images/logo.png',
    imageFit: 'contain',
    imageBg: '#5b21b6',
  },
  {
    slug: 'the-company-app',
    title: 'The Company App',
    status: 'archive',
    description:
      'A small-group social app. Topic rooms capped at eight people, to test whether conversation gets better when the group stays small. Released, then shut down.',
    bullets: [
      'Rooms formed around a topic, and every room was capped at eight people. If one filled up, another room opened on the same topic.',
      'Inside a room it worked like a group chat.',
      'The cap was the whole experiment: whether conversation gets more natural and less performative in a small group, instead of the huge open forums the rest of the internet runs on.',
    ],
    note: 'Released, but it never really took off. Shut down and no longer available.',
    stack: ['Flutter', 'Firebase'],
    image: '/assets/images/icon.png',
    imageFit: 'contain',
    imageBg: '#000000',
  },
  {
    slug: 'trygger',
    title: 'Trygger',
    status: 'archive',
    description:
      'Real-time data monitoring on Node.js, React and Supabase, firing automated alerts on blockchain events.',
    bullets: [
      'You set the conditions you cared about on-chain and Trygger watched for them, then alerted you when they hit.',
      'The hard part was never the alerting. It was indexing enough blockchain data, fast enough, to notice in the first place.',
      'That is also what killed it: the indexing cost more to run than the product was making.',
    ],
    note: 'Launched, but it never took off. Shut down.',
    stack: ['Node.js', 'React', 'Supabase'],
    image: '/link-icons/trygger.webp',
    imageFit: 'contain',
    // the wordmark ships on its own yellow field; matching it hides the letterbox
    imageBg: '#ffff00',
  },
  {
    slug: 'toprank-trivia',
    title: 'TopRank Trivia',
    status: 'archive',
    description:
      'A trivia ladder game. Everyone answered the same questions and climbed a leaderboard to become the top ranked player. Shipped on iOS and Android, since pulled.',
    bullets: [
      'Everyone played the same set of questions, so the leaderboard was an actual comparison rather than a matter of who drew easier ones.',
      'You climbed a ladder instead of just chasing a score, and the goal was to end up the Top Ranked player.',
      'It shipped to both stores but never pulled in enough players to keep the ladders full, which is what a game like this lives on.',
    ],
    note: 'Removed from the App Store and Google Play. Not available any more.',
    stack: ['Flutter', 'Firebase', 'Cloud Functions'],
    image: '/link-icons/toprank-trivia.webp',
    imageFit: 'cover',
  },
  {
    slug: 'speedy-scribble',
    title: 'Speedy Scribble',
    status: 'archive',
    description:
      'An early AI tweet writer. Point it at a Twitter account, it learns how that person writes, and it drafts new tweets in the same voice.',
    bullets: [
      "You gave it a Twitter account, yours or someone else's, and it pulled their tweets to work out how they write.",
      'Then it drafted new tweets in that voice, so you could keep posting as yourself without staring at an empty box.',
      'I built it on the OpenAI API as soon as they opened it up, which is the only reason it was possible at the time.',
    ],
    note: 'An old experiment. Not running any more.',
    stack: ['React', 'TypeScript', 'Chakra UI', 'Express', 'OpenAI', 'Twitter API'],
    image: '/link-icons/speedyscribble.webp',
    imageFit: 'cover',
  },
  {
    slug: 'trax',
    title: 'Trax',
    status: 'archive',
    description:
      "A strength and conditioning app for coaches. Build a program for the team, track every athlete's lift and run numbers, and tune the program per player.",
    bullets: [
      'Coaches built a program for a whole team, then adjusted it per athlete rather than running everyone through the same block.',
      'It kept every lift and run number, so the next block could be built off what the athlete actually did instead of what the plan assumed.',
      'This was 2014, which meant jQuery and hand-rolled AJAX over a Postgres database.',
    ],
    note: 'From 2014. None of it is still running.',
    stack: ['JavaScript', 'jQuery', 'AJAX', 'PostgreSQL'],
    image: '/link-icons/trax.webp',
    imageFit: 'cover',
  },
  {
    slug: 'attic-audio',
    title: 'AtticAudio',
    status: 'archive',
    description:
      'A music platform for independent artists, along the lines of SoundCloud. The first thing I ever built, back in 2010.',
    bullets: [
      'Independent artists could put their music up and get it in front of people, in the same spirit as SoundCloud.',
      'It was 2010, so it was PHP and jQuery, and I was working out how to build a website at all while I built it.',
      'First thing I ever shipped.',
    ],
    note: 'From 2010. No code or screenshots survive.',
    stack: ['PHP', 'JavaScript', 'jQuery'],
    image: '/link-icons/atticaudio.webp',
    imageFit: 'cover',
  },
  // ks:add-link — `npm run add-link` inserts new projects directly above this line
];

/** The four rows in the profile's "kyle's top projects" card, in order. */
export const topProjectSlugs = ['benji', 'geogolf', 'vertebro', 'posture-pomodoro'];

export const topProjects = topProjectSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is Project => Boolean(p));

export function projectBySlug(slug: string | undefined) {
  return slug ? projects.find((p) => p.slug === slug) : undefined;
}

/** A description still carrying the placeholder arrow renders in mono, like the design. */
export function isPlaceholderCopy(description: string) {
  return description.trim().startsWith('↳');
}
