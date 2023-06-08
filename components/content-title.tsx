export default function ContentTitle({ children }) {
  return (
    <h1
      className="font-serif text-2xl md:text-5xl sm:text-3xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 "
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
