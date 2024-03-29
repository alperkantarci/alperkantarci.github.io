function byDate(a: any, b: any) {
  const aDate = new Date(a.slug || a.createdAt || a.frontmatter?.createdAt);
  const bDate = new Date(b.slug || b.createdAt || b.frontmatter?.createdAt);

  if (aDate < bDate) {
    return 1;
  }
  if (aDate > bDate) {
    return -1;
  }
  return 0;
}

export default { byDate };
