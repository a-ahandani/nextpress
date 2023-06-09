import Link from "next/link";
import Image from 'next/image'

export default function Header() {
  return (
    <div className="md:mt-16 md:mb-20 mt-10 mb-12 lg:-ml-12 flex items-center text-center sm:text-left flex-col sm:flex-row">
      <Link href="/pages/about" >
        <Image
          src="/profile.jpeg"
          width={100}
          height={100}
          alt="Ahmad Esmaeilzadeh Ahandani"
          className=" rounded-full w-24 h-24"
        />
      </Link>
      <div className="p-6">

        <h2 className=" font-serif text-2xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight ">
          <Link href="/pages/about" >
            AHANDANI.
          </Link>
        </h2>
        <h4 className="  font-sans text-xs   ">
          <Link href="/">
            SOFTWARE DEVELOPER
          </Link>
        </h4>
      </div>

    </div>
  );
}
