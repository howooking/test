import Link from "next/link";

async function fetchRepoContents(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch("https://api.github.com/users/howooking/repos", {
    next: {
      revalidate: 60,
    },
  });
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }: { name: string }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.map((content: any) => content.name);

  return (
    <div className='mt-8 box-border rounded-lg border-2 border-blue-800 bg-blue-200 p-4 text-gray-700'>
      <h3 className='text-2xl font-bold'>Directories</h3>
      <ul>
        {dirs.map((dir: string) => (
          <li
            key={dir}
            className='mt-2 text-lg font-bold underline underline-offset-2'
          >
            <Link href={`/code/repos/${dir}`}>{dir}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RepoDirs;
