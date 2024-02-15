import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-slate-300 p-4'>
      <ul className='flex justify-evenly text-2xl font-bold'>
        <Link href='/'>Home</Link>

        <Link href='/api/auth/signin'>Sign In</Link>

        <Link href='/api/auth/signout'>Sign Out</Link>

        <Link href='/server'>Server</Link>

        <Link href='/client'>Client</Link>

        <Link href='/extra'>Extra</Link>
      </ul>
    </nav>
  );
}
