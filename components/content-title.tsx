export default function ContentTitle({ children }) {
  return (
    <h1
      className="font-serif mb-8 text-6xl md:text-6xl font-bold tracking-tighter leading-tight"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
