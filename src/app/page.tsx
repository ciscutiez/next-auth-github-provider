import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/option';
import UserCard from './components/UserCard';
import Navbar from './components/Navbar';

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <main>
      {session ? (
        <UserCard user={session?.user} pagetype={'Home'} />
      ) : (
        <h1 className='text-5xl'>You cant proceed any further</h1>
      )}
    </main>
  );
}
