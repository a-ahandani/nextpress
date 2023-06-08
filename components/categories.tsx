export default function Categories({ categories }) {
  return (
    <span className="ml-1">
      under
      {categories.nodes.length > 0 ? (
        categories.nodes.map((category, index) => (
          <span key={index} className="ml-1">
            {category.name}
          </span>
        ))
      ) : (
        <span className="ml-1">{categories.nodes.name}</span>
      )}
    </span>
  );
}
