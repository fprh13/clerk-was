import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepos() {
  const username = 'fprh13';
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const username = 'fprh13';
  const repos = await fetchRepos();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        ✨ Github ID : {username}
        <br />➤ Clone,Fork 하실 때 Star 부탁 드립니다.
      </h2>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Back to ➤ MainPage
      </Link>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="bg-gray-100 m-4 p-4 rounded-md">
            <Link href={`/repos/${repo.name}`}>
              <h3 className="text-xl font-bold">{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div style={{ marginBottom: '100px' }}></div> {/* 여기에 여백을 추가 */}
    </div>
  );
};

export default ReposPage;
