import Link from "next/link";
import { TagIcon } from "@heroicons/react/24/outline";


export default function Tags({ tags }) {
  return (
    <div className="max-w-4xl my-1  overflow-hidden">
      <p className="font-sans text-sm flex items-center">
        <TagIcon className="h-5 w-5 mr-2 " />
        {tags.map((tag, index) => (
          <span key={`tag-${index}`} className="mr-4 hover:underline  text-sm">
            <Link href={`/tags/${tag.name}`}>
              {tag.name}
            </Link>
          </span>
        ))}
      </p>
    </div>
  );
}
