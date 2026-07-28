import trailers from "./assets/bbq-trailers.webp";

export type Photo = {
  src: string;
  alt: string;
  /**
   * CSS object-position, used as the focal point when the photo is cropped.
   * Defaults to centre. e.g. "50% 35%" keeps the top third in frame.
   */
  focus?: string;
};

/**
 * Photo slots.
 *
 * To add new photography: drop the file in src/assets, import it at the top of
 * this file, and fill in the slot below. Nothing else needs to change — the
 * components read from here and switch to their full-bleed treatment
 * automatically once a slot is filled.
 *
 * See docs/image-brief.md for the shot list and specs.
 */

/** Wide, atmospheric shot behind the headline. 2400x1600 or wider, landscape. */
export const HERO_PHOTO: Photo | null = null;

/** Close-up of food on the grill, used beside the "on the grill" section. */
export const GRILL_PHOTO: Photo | null = null;

/**
 * Background-removed trailer render. Sits in the hero until HERO_PHOTO is filled
 * in. Transparent, so it needs no edge masking — it drops straight onto the page.
 */
export const TRAILER_PHOTO: Photo = {
  src: trailers,
  alt: "Two of Smith's mobile BBQ trailers, grills loaded and ready to serve",
};
