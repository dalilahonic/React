import { useParams } from 'react-router-dom';

export default function EventDetail() {
  const params = useParams();
  return (
    <>
      <div>EventDetail</div>
      <p>Event ID: {params.eventId}</p>
    </>
  );
}
