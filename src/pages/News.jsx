import NewsCard from "../components/News/NewsCard";
import Heading from "../components/common/Heading";
import news from "../data/news.json";

const News = () => {
  news.sort((a, b) => {
    const dateA = new Date(a.datePosted);
    const dateB = new Date(b.datePosted);
    return dateB - dateA;
  });

  return (
    <div className="w-full p-4 md:w-3/4 m-auto">
      <Heading text="The Latest School News" />

      <section className="mt-14 flex flex-col gap-7">
        {news.map(({ datePosted, description }, index) => (
          <NewsCard
            key={index}
            datePosted={datePosted}
            description={description}
          />
        ))}
      </section>
    </div>
  );
};

export default News;
