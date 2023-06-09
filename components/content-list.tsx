import ContentPreview from "@/components/content-preview";

export default function ContentList({ posts, label }) {
  return (
    <section>
      <h2 className="font-serif mb-8 flex content-center items-center text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {label}
      </h2>
      <div className="grid grid-cols-1  md:gap-x-16 lg:gap-x-32 gap-y-10  mb-32">
        {posts.map((node) => (
          <ContentPreview
            key={node.slug}
            title={node.title}
            date={node.date}
            author={node.author}
            slug={node.uri}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
