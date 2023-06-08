import ContentPreview from "@/components/content-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="font-serif mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Posts
      </h2>
      <div className="grid grid-cols-1  md:gap-x-16 lg:gap-x-32 gap-y-10  mb-32">
        {posts.map(({ node }) => (
          <ContentPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
