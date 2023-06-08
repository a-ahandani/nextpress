import { RectangleStackIcon } from "@heroicons/react/24/outline";

export default function Categories({ categories }) {
  return (
    <div className="max-w-4xl my-1  overflow-hidden">
      <p className="font-sans text-sm flex items-center">
        <RectangleStackIcon className="h-5 w-5 mr-2 " />
        {categories.nodes.length > 0 ? (
          categories.nodes.map((category, index) => (
            <span key={`category-${index}`} className="mr-4 hover:underline  text-sm">
              {category.name}
            </span>
          ))
        ) : (
          <span className="ml-1">{categories.nodes.name}</span>
        )}
      </p>
    </div>
  );
}
