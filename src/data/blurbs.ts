export type Blurb = {
  label: string;
  /** plain text; wrap a run in *asterisks* to italicize it (titles, etc.) */
  body: string;
};

export const blurbs: Blurb[] = [
  {
    label: 'books',
    body: "Thrillers, surf books, and the ones that stick with you for a while. The James Reece series by Jack Carr, the Alex Rider books I grew up on, and plenty of Harlan Coben lately (I'll watch the shows too). For non-fiction it's Tim Ferriss and anything about the ocean: *Barbarian Days*, *Surf Is Where You Find It*, *Let My People Go Surfing*. Then the quieter ones: *The Alchemist*, *Klara and the Sun*, *The Midnight Library*, *The Life Impossible*.",
  },
  {
    label: 'movies',
    body: "Documentaries, comedies, thrillers, anything with real suspense to it. Classic Adam Sandler still holds up (*Happy Gilmore*, *Billy Madison*), and I'll take *Inception* or anything else that messes with your head.",
  },
  {
    label: 'television',
    body: "Comedies (*South Park*, *Silicon Valley*, *Nathan for You*), true crime docuseries, and *Ted Lasso* on repeat in this house. Sports talk most mornings, usually the *Pat McAfee Show*. Otherwise it's YouTube: Johnny Harris, Wendover, Fern, The Why Files, Discover Connection, Yes Theory, and an unreasonable amount of disc golf and surfing footage.",
  },
  {
    label: 'music',
    body: 'A little of basically everything, acoustic folk through heavy metal. Lately a lot of Dermot Kennedy and Noah Kahan. I still go back to Blink-182 and the older punk rock I grew up on, Dirty Heads and Jack Johnson near the water, and country sometimes like The White Buffalo or Ernest.',
  },
  {
    label: 'now building',
    body: 'Whatever problem is bugging me at the time. Right now that means posture, sleep, and geography trivia. I build it for myself first, then see if anyone else wants it.',
  },
];
