import styles from "./content-body.module.css";

export default function ContentBody({ content }) {
  return (
    <div className="font-sans max-w-4xl mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
