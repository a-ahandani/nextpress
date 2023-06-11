import styles from "./content-body.module.css";
import Drawer from "@/components/drawer";
import TableOfContents from '@/components/table-of-contents'
import { useRef } from "react";

export default function ContentBody({ content }) {

  const contentRef = useRef()

  return (

    <div className="font-sans  mx-auto">

      <Drawer >
        <TableOfContents contentRef={contentRef} />
      </Drawer>
      <div
        ref={contentRef}
        id="content"
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />

    </div>
  );
}
