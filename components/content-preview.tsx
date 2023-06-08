import Avatar from "./avatar";
import Date from "./date";
import Link from "next/link";

export default function PostPreview({ title, date, excerpt, author, slug }) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug font-serif">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      {date && (
        <div className="text-lg mb-4">
          <Date dateString={date} />
        </div>
      )}
      {excerpt && (
        <div
          className="text-lg leading-relaxed mb-4 font-sans"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      )}
      {author && <Avatar author={author} />}
    </div>
  );
}
