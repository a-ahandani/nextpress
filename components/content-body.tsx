import styles from "./content-body.module.css";
import TableOfContents from '@/components/table-of-contents'
import { useRef } from "react";

export default function ContentBody({ content }) {

  const contentRef = useRef()

  return (

    <div className="font-sans  mx-auto">
      <TableOfContents contentRef={contentRef} />
      <div
        ref={contentRef}
        id="content"
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />

    </div>
  );
}
