import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer'; 
import Image from 'next/image';
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

  // "clerk-auth" 레포지토리만 필터링
  const clerkAuthRepo = repos.find(repo => repo.name === 'clerk-was');

  return (
    <div>
      <Header></Header>
      <h2 className="text-2xl font-bold text-center mb-4">
        ✨ Yeong-Mu's' NFT Site
        <br/>
        <br/>
        <br/>
        <Image className="text-2xl font-bold mb-1 py-10 px-8 fixed top-50 left-0 right-0 z-50"src="/images/me.png" alt="NFT" width={300} height={250} />
        "This is an NFT-related website.
        <br/>
        You can check out the structure of this site on GitHub below.
        <br/>
        Feel free to clone and fork, and if you do,
        <br/>
        please hit the 'star' button and follow us."
        <br/>
        <br/>
        <br/>
        "When you click on the GitHub ID at the bottom right,
        <br/>
        you can view my entire repository.
        <br/>
        Logged-in users can check out the newly released NFTs
        <br/>
        and learn how to create NFTs for free."
        <br/>
        <div style={{ marginBottom: '100px' }}></div> {/* 여기에 여백을 추가 */}
      </h2>
      <ul>
        {clerkAuthRepo && (
          <li key={clerkAuthRepo.id} className="bg-blue-400 m-4 p-4 rounded-md hover:text-white mr-">
            <Link href={`/repos/${clerkAuthRepo.name}`}>
              <h3 className="text-xl font-bold">{clerkAuthRepo.name}</h3>
              <p>{clerkAuthRepo.description}</p>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <FaStar /> {clerkAuthRepo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch /> {clerkAuthRepo.forks_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaEye /> {clerkAuthRepo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        )}
      </ul>
      <div style={{ marginBottom: '100px' }}></div> {/* 여기에 여백을 추가 */}
      <Footer />
    </div>
  );
};

export default ReposPage;
