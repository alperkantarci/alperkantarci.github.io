import { useEffect, useState } from 'preact/hooks';

type Props = {
  newsId: number;
};

type Details = {
  title: string;
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: Date;
  type: string;
  url: string;
};

const HackerNews = ({ newsId }: Props) => {
  const [details, setDetails] = useState<Details>();

  const getDetails = async (newsId: number) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);
    const details = await response.json();
    setDetails(details);
  };

  useEffect(() => {
    getDetails(newsId);
  }, []);

  return (
    <a href={details?.url} target="_blank" className={'flex flex-col gap-4 border-2 border-teal-950 rounded-xl p-4'}>
      <p className={'font-bold'}>{details?.title}</p>
      <p className={'text-base text-zinc-500'}>
        <span className={'text-teal-200'}>{details?.score}</span> points by <span className={'text-teal-200'}>{details?.by}</span>
      </p>
    </a>
  );
};

export default HackerNews;
