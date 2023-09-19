import Repo from '@/components/Repo';
import Link from 'next/link';
import Header from '@/components/Header';
import { Suspense } from 'react';

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="flex flex-col justify-start items-start max-w-lg">
      <Header></Header>
      <Link
        href="/repos"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Go to Repositories List
      </Link>

      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Back to ➤ MainPage 
      </Link>

      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      {/* <Suspense fallback={<div>Loading directories...</div>}> */}
      {/* <Repo name={name} /> */}
      {/* </Suspense> */}
    </div>
  );
};

export default RepoPage;
