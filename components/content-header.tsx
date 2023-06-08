import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./content-title";
import Categories from "./categories";
import Tags from "@/components/tags";

export default function ContentHeader({
  title,
  coverImage,
  date,
  author,
  categories,
  tags,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-lg flex items-center">
        <Date dateString={date} />
        {categories && <Categories categories={categories} />}
        {tags.length > 0 && <Tags tags={tags} />}
      </div>

      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} coverImage={coverImage} />
        </div>
      )}
    </>
  );
}
