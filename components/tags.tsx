import Link from "next/link";

export default function Tags({ tags }) {
  return (
    <div className="max-w-4xl mx-auto overflow-hidden">
      <p className="mt-8 text-lg font-bold">
        Tagged:
        {tags.map((tag, index) => (
          <span key={`tag-${index}`} className="ml-4 font-normal text-sm">
            <Link href={`/tags/${tag.name}`}>
              {tag.name}
            </Link>
          </span>
        ))}
      </p>
    </div>
  );
}
