import Link from "next/link";
import Image from 'next/image'
import { HomeIcon } from "@heroicons/react/20/solid";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";


export default function Header() {
  return (
    <div>
      <div className="mt-4 pb-4  justify-end flex">
        <Link className="flex justify-center  content-center items-center mr-5" href="https://github.com/a-ahandani/nextpress" >
          <CodeBracketSquareIcon className="h-5 w-5 mr-1 " />
          <p className=" text-xs">
            Source
          </p>
        </Link>
        <Link href="/" >
          <HomeIcon className="h-5 w-5  " />
        </Link>


      </div>
      <div className="md:mt-8 md:mb-20 mt-10 mb-12 lg:-ml-10 flex items-center text-center sm:text-left flex-col sm:flex-row">
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
            <Link href="/" >
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
    </div>
  );
}
