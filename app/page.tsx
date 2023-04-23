import Courses from "./components/Courses";

export default function Home() {
  return (
    <div className='pt-[76px]'>
      {/* @ts-expect-error Async Server Component */}
      <Courses />
    </div>
  );
}
