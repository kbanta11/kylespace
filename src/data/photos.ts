export type Photo = {
  /** leave undefined to render the striped placeholder slot */
  src?: string;
  caption: string;
  alt?: string;
};

/**
 * Hides /photos everywhere — the nav tab and the route both read this. The page
 * itself stays built; flip this to true once the slots below hold real images.
 */
export const showPhotos = false;

/** PLACEHOLDER — drop real images in and the slots fill themselves. */
export const photos: Photo[] = [
  { caption: 'surf trip, landscape' },
  { caption: 'the van, interior' },
  { caption: 'trailhead, portrait' },
  { caption: 'desk / build setup' },
  { caption: 'titans game day' },
  { caption: 'whatever you want here' },
];
