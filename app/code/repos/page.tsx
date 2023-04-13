import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/howooking/repos", {
    next: {
      revalidate: 60,
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 2000)); // 로딩 확인용

  const repos = await response.json();
  return repos;
}

export default async function CodeReposPage() {
  const repos = await fetchRepos();

  return (
    <div>
      <h2 className='bg-green-200 p-2 text-center text-2xl'>Repositories</h2>
      <ul>
        {repos.map((repo: any) => (
          <li key={repo.id} className='m-4 bg-blue-200 p-2'>
            <Link href={`/code/repos/${repo.name}`}>
              <h3 className='pb-4 text-xl font-bold'>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className='flex justify-between'>
                <div className='flex items-center'>
                  <FaStar />
                  {repo.stargazers_count}
                </div>
                <div className='flex items-center'>
                  <FaCodeBranch />
                  {repo.forks_count}
                </div>
                <div className='flex items-center'>
                  <FaEye />
                  {repo.watchers_count}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
