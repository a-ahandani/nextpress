export default function Tags({ tags }) {
  return (
    <div className="max-w-4xl mx-auto overflow-hidden">
      <p className="mt-8 text-lg font-bold">
        Tagged
        {tags.nodes.map((tag, index) => (
          <span key={index} className="ml-4 font-normal">
            {tag.name}
          </span>
        ))}
      </p>
    </div>
  );
}
