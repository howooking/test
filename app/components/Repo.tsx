import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/howooking/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = await response.json();
  return repo;
}

export default async function Repo({ name }: { name: string }) {
  const repo = await fetchRepo(name);

  return (
    <div className='box-border rounded-lg border-2 border-blue-800 bg-blue-200 p-4 text-gray-700'>
      <Link href='/code/repos' className='rounded-lg bg-amber-400 p-2'>
        Back
      </Link>
      <h2 className='text-4xl font-bold'>{repo.name}</h2>
      <p>{repo.description}</p>
      <div>
        <div className='flex items-center gap-2'>
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className='flex items-center gap-2'>
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className='flex items-center gap-2'>
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </div>
  );
}
