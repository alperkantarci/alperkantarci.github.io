import { useEffect, useState } from 'preact/hooks';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

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
    console.log({details});
    details.time = new Date(Number(`${details.time}000`));
    setDetails(details);
  };

  useEffect(() => {
    getDetails(newsId);
  }, []);

  return (
    <a href={details?.url} target="_blank" className={'flex flex-col gap-4 border-2 border-teal-950 rounded-xl p-4 visited:text-teal-400'}>
      <p className={'font-bold'}>{details?.title}</p>
      <p className={'text-base text-zinc-500'}>
        <span className={'text-teal-200'}>{details?.score}</span> points by <span className={'text-teal-200'}>{details?.by}</span>
        <span>
          {' '}
          • <span className="text-teal-200">{dayjs(details?.time).fromNow()}</span>
        </span>
      </p>
    </a>
  );
};

export default HackerNews;
