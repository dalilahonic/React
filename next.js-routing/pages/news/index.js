import Link from 'next/link';

export default function News() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/newsjs'>NextJs</Link>
        </li>
        <li>Something else</li>
      </ul>
    </>
  );
}
