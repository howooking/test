import Repo from "@/app/components/Repo";

export default async function SingleRepo({
  params: { name },
}: {
  params: {
    name: string;
  };
}) {
  return (
    <div className='pt-[80px]'>
      {/* @ts-expect-error Async Server Component */}
      <Repo name={name} />
    </div>
  );
}
