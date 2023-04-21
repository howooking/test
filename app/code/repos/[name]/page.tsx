import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";

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
      {/* @ts-expect-error Async Server Component */}
      <RepoDirs name={name} />
    </div>
  );
}
