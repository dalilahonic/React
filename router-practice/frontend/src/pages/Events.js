import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Some event',
  },
  { id: 'e2', title: 'Another event' },
];

export default function Events() {
  return (
    <>
      <ul>
        {DUMMY_EVENTS.map((e) => (
          <li key={e.id}>
            <Link to={e.id}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
