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

export default async function SingleRepo({
  params: { name }, // 이런식의 destruction
}: {
  params: {
    name: string;
  };
}) {
  const repo = await fetchRepo(name);
  return (
    <div className='pt-[80px]'>
      <div className='box-border border-2 border-blue-800 bg-blue-200 p-2'>
        <Link href='/code/repos' className='rounded-lg bg-amber-400 p-2'>
          Back
        </Link>
        <h2 className='text-4xl font-bold'>{repo.name}</h2>
        <p>{repo.description}</p>
        <div className='card-stats'>
          <div className='card-stat'>
            <FaStar />
            <span>{repo.stargazers_count}</span>
          </div>
          <div className='card-stat'>
            <FaCodeBranch />
            <span>{repo.forks_count}</span>
          </div>
          <div className='card-stat'>
            <FaEye />
            <span>{repo.watchers_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
