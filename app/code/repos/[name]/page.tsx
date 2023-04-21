import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import { Suspense } from "react";

export default async function SingleRepo({
  params: { name },
}: {
  params: {
    name: string;
  };
}) {
  return (
    <div className='pt-[80px]'>
      <Suspense fallback={<div>Loading repository...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
}
