import Link from "next/link";

export default function Header() {
  return (
    <h2 className="font-serif text-2xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        AHANDANI.
      </Link>
    </h2>
  );
}
