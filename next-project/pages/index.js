import Layout from '@/components/layout/Layout';
import MeetupList from '@/components/meetups/MeetupList';
import { useEffect } from 'react';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    adress: 'Some adress',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'Second meetup',
    image:
      'https://www.kunsthalle-muc.de/wp-content/uploads/2022/09/kunsthalle-muenchen-theatinerstrasse-aussen-theatinerkirche-2.jpg',
    adress: 'another adress',
    description: 'This is a second meetup',
  },
];

export default function HomePage() {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </>
  );
}
