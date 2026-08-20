export type Top8Person = {
  name: string;
  /** shown in the tile when there is no image */
  initials: string;
  note: string;
  image?: string;
};

/**
 * Ranked, MySpace style. Tom sits at #1 because on MySpace he was everyone's
 * first friend whether you asked for him or not.
 */
export const top8: Top8Person[] = [
  {
    name: 'Tom from MySpace',
    initials: 'TOM',
    note: 'your first friend, by default',
    image: '/assets/images/tom-myspace.jpg',
  },
  // No photo on purpose. Nobody knows what Satoshi looks like, so the tile
  // stays a question mark.
  { name: 'Satoshi Nakamoto', initials: '?', note: 'nobody knows who they are' },
  {
    name: 'Kelly Slater',
    initials: 'KS',
    note: 'the GOAT',
    image: '/assets/images/kelly-slater.jpg',
  },
  {
    name: 'Teddy Roosevelt',
    initials: 'TR',
    note: 'would out-hike me',
    image: '/assets/images/teddy-roosevelt.jpg',
  },
  {
    name: 'Ben Franklin',
    initials: 'BF',
    note: 'the original side project guy',
    image: '/assets/images/ben-franklin.jpg',
  },
  {
    name: 'Joe Rogan',
    initials: 'JR',
    note: 'has met everyone else',
    image: '/assets/images/joe-rogan.jpg',
  },
  {
    name: 'Neil Armstrong',
    initials: 'NA',
    note: 'one small step, then quiet',
    image: '/assets/images/neil-armstrong.jpg',
  },
  {
    name: 'Derrick Henry',
    initials: 'DH',
    note: 'titan up',
    image: '/assets/images/derrick-henry.jpg',
  },
];

/** The card's header strip. Says what the list is, so no intro copy is needed. */
export const top8Title = 'top 8 people i want to meet';

/** Flip to false to drop the Top 8 card from the profile. */
export const showTop8 = true;
