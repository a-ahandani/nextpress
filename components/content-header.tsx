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
  tags
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {author?.node && <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>}
      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} coverImage={coverImage} />
        </div>
      )}
      <div className="max-w-4xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          <div className=" mb-8">
            <Date dateString={date} />
          </div>
          {categories && <Categories categories={categories} />}
          {tags.length > 0 && <Tags tags={tags} />}

        </div>
      </div>
    </>
  );
}
