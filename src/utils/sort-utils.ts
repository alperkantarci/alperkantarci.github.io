import type { CollectionEntry } from "astro:content";

function byDate(
  a: CollectionEntry<"writings">,
  b: CollectionEntry<"writings">
) {
  if (a.data.createdAt < b.data.createdAt) {
    return 1;
  }
  if (a.data.createdAt > b.data.createdAt) {
    return -1;
  }
  return 0;
}

export default { byDate };
