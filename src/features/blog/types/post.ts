export type PostMetadata = {
  title: string;
  description: string;
  /**
   * Social/OG image URL for the post.
   * Use an absolute URL or a path under /public. Recommended size: 1200x630.
   */
  image?: string;
  /**
   * Category identifier/slug used for filtering (see getPostsByCategory).
   */
  category?: string;
  /**
   * Custom icon name or a Lucide icon name.
   * Used to visually represent the post in lists or navigation.
   */
  icon?: string;
  /**
   * Flag to show a "New" badge/highlight in the UI.
   */
  new?: boolean;
  /**
   * Post creation date as an ISO date string (e.g. YYYY-MM-DD). Used for sorting.
   */
  createdAt: string;
  /**
   * Last updated date as an ISO date string (e.g. YYYY-MM-DD).
   */
  updatedAt: string;
};

export type Post = {
  /** Parsed frontmatter metadata from the MDX file. */
  metadata: PostMetadata;
  /** Slug derived from the MDX filename (without extension). */
  slug: string;
  /** MDX content body without frontmatter. */
  content: string;
};
