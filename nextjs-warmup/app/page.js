import Link from 'next/link'
import Counter from './components/Counter'
import ServerMessage from './components/ServerMessage';

export default function Home() {
  return (
    <div>
      <h1>Welcome page</h1>
      <Link href="/about">About me</Link>

      <Counter />
      <ServerMessage/>
    </div>
  );
}
