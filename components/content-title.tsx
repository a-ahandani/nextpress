export default function ContentTitle({ children }) {
  return (
    <h1
      className="text-3xl mb-3 leading-snug font-serif "
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
