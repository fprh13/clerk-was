import Link from 'next/link';

async function fetchRepoContents(name) {
  const username = 'fprh13';
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}/contents`
  );
  const contents = await response.json();

  return contents;
}

const RepoDirs = async ({ name }) => {
  const username = 'fprh13';
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === 'dir');

  return (
    <div className="mt-2">
      <h3 className="text-xl font-bold">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link
              className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 flex items-center"
              href={`https://github.com/${username}/${name}/tree/master/${dir.path}`}
            >
              📁 {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
