const renderTags = (tags: string[]) => {
	return tags.map((tag) => (
		<span key={tag} className="w-fit px-1 text-sm py-0.5 text-white bg-tags">
			{tag}
		</span>
	))
}

export default renderTags
