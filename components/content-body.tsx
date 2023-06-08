import styles from "./content-body.module.css";

export default function ContentBody({ content }) {
  return (
    <div className="font-sans  mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
