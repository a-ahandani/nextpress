import { useTableOfContents, NodeType } from "ah-toc"
import { MinusSmallIcon } from "@heroicons/react/20/solid";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import { MutableRefObject } from "react";
import Link from "next/link";


const List = ({ list, parent }: { list: NodeType[], parent?: boolean }) => {
    return list?.[0] && <ul className={`${!parent ? "pl-6" : ""}`}>
        {list.map((node) => {
            return <li className=" border-b mb-1 pb-2 border-accent last:border-none ">
                <Link href={`#${node.id}`} className=" font-serif text-md flex hover:underline">
                    <MinusSmallIcon className="h-6 w-6 " />
                    {node.content}
                </Link>
                {node?.children && <List list={node.children} />}
            </li>
        })}
    </ul>

}


const TableOfContents = ({ contentRef }: { contentRef: MutableRefObject<undefined> }) => {
    const toc = useTableOfContents({ contentRef, options: {} })
    return toc?.children && <nav className=" bg-white p-6 pt-7 pb-7 relative">
        <h3 className=" font-serif capitalize text-xl pb-4">Table of contents</h3>
        <List list={toc.children} parent />
        <div className=" absolute  bottom-1 text-gray-500 right-2 text-xs flex content-center items-center ">
            <ListBulletIcon className=" w-4 mr-1" />
            <Link href="https://github.com/a-ahandani/ah-toc">TABLE OF CONTENTS GENERATOR</Link>
        </div>
    </nav>
}

export default TableOfContents