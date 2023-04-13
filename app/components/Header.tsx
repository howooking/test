import Link from "next/link";

export default function Header() {
  return (
    <header className='bg-red-100 py-5'>
      <div className='container mx-auto flex justify-between'>
        <div>
          <Link href='/' className='text-3xl font-bold'>
            Howooking
          </Link>
        </div>
        <ul className='flex items-center gap-5'>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/about/team'>Our Team</Link>
          </li>
          <li>
            <Link href='/code/repos'>Code</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
