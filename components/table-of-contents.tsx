import { useTableOfContents, NodeType } from "ah-toc"
import { MinusSmallIcon } from "@heroicons/react/20/solid";
import { MutableRefObject } from "react";


const List = ({ list, parent }: { list: NodeType[], parent?: boolean }) => {
    return list?.[0] && <ul className={`${!parent ? "pl-6" : ""}`}>
        {list.map((node) => {
            return <li>
                <a href={`#${node.id}`} className=" font-serif  text-md flex">
                    <MinusSmallIcon className="h-6 w-6 " />
                    {node.content}
                </a>
                {node?.children && <List list={node.children} />}
            </li>
        })}
    </ul>

}


const TableOfContents = ({ contentRef }: { contentRef: MutableRefObject<undefined> }) => {
    const toc = useTableOfContents({ contentRef, options: {} })
    return toc?.children && <nav className="  ">
        <h3 className=" font-serif capitalize text-xl pb-4">Table of contents</h3>
        <List list={toc.children} parent />
    </nav>
}

export default TableOfContents