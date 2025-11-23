/** Render product tags as styled badge elements */
const renderTags = (tags: string[]) => {
  return tags.map((tag) => (
    <span key={tag} className="bg-tags px-1 py-0.5 w-fit text-white text-sm">
      {tag}
    </span>
  ));
};

export default renderTags;
