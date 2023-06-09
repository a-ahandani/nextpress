import Image from "next/image";
import Link from "next/link";

export default function Avatar({ author }) {
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null;

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Link href={"/pages/about"}>
          <Image
            src={author.node.avatar.url}
            layout="fill"
            className="rounded-full"
            alt={name}
          />
        </Link>
      </div>
      {/* <div className="text-xl font-sans">{name}</div> */}
    </div>
  );
}
