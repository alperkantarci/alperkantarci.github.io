import { useEffect, useState } from 'preact/hooks';
import Story from './Story';

enum StoryFilter {
  TopStories = 'topstories',
  NewStories = 'newstories',
}

const initialPage = 1;

const StoryList = () => {
  const [newsIds, setNewsIds] = useState<number[]>([]);
  const [filteredNewsIds, setFilteredNewsIds] = useState<number[]>([]);
  const [storyFilter, setStoryFilter] = useState<StoryFilter>(StoryFilter.TopStories);
  const [totalPages, setTotalPages] = useState<number>(1);
  let [page, setPage] = useState<number>(initialPage);
  const [limit, setLimit] = useState<number>(20);

  useEffect(() => {
    getNews();
  }, [storyFilter]);

  useEffect(() => {
    const mainEL = document.querySelector('main');
    mainEL?.scrollTo({ top: 0 });
  }, [filteredNewsIds]);

  const getNews = async () => {
    setPage((page = initialPage));

    const response = await fetch(`https://hacker-news.firebaseio.com/v0/${storyFilter}.json?print=pretty`);
    const ids = await response.json();

    setNewsIds(ids);
    setFilteredNewsIds(ids.slice((page - 1) * limit, limit));
    setTotalPages(Math.abs(ids.length / limit));
  };

  const nextPage = () => {
    const start = page * limit;
    const end = start + limit;
    setFilteredNewsIds(newsIds.slice(start, end));
    setPage((page += 1));
  };

  const previousPage = () => {
    setPage((page -= 1));
    const start = (page - 1) * limit;
    const end = page === 1 ? limit : start + limit;
    setFilteredNewsIds(newsIds.slice(start, end));
  };

  return (
    <>
      <div
        className={
          'flex mb-2 justify-between items-center gap-4 text-sm font-bold sticky bg-zinc-950 bg-opacity-60 -top-8 backdrop-blur-xl py-3 -mx-5 px-5 rounded-lg'
        }
      >
        <ul className={'hidden sm:flex gap-3'}>
          <li>
            <button
              className={`px-4 py-3 rounded-lg border-2 border-teal-950 ${storyFilter === StoryFilter.TopStories ? 'bg-teal-900' : ''}`}
              onClick={() => setStoryFilter(StoryFilter.TopStories)}
            >
              Top
            </button>
          </li>
          <li>
            <button
              className={`px-4 py-3 rounded-lg border-2 border-teal-950 ${storyFilter === StoryFilter.NewStories ? 'bg-teal-900' : ''}`}
              onClick={() => setStoryFilter(StoryFilter.NewStories)}
            >
              New
            </button>
          </li>
        </ul>

        <ul className={'flex flex-wrap gap-3 items-center w-full justify-between sm:w-auto'}>
          <li className={'px-4 py-3'}>
            {page} / {totalPages}
          </li>
          <li className={'-order-1 sm:order-none'}>
            <button
              className={'px-4 py-3 rounded-lg border-2 border-teal-950 disabled:text-zinc-600'}
              onClick={previousPage}
              disabled={page === 1}
            >
              Prev
            </button>
          </li>
          <li>
            <button
              className={'px-4 py-3 rounded-lg border-2 border-teal-950 disabled:text-zinc-600'}
              onClick={nextPage}
              disabled={page === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </div>

      <div className={'flex flex-col gap-4 text-xl text-zinc-200'}>
        {filteredNewsIds.map((newsId) => {
          return <Story key={newsId} newsId={newsId}></Story>;
        })}
      </div>
    </>
  );
};

export default StoryList;
