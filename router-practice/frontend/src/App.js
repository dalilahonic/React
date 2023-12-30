import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import Events, {
  loader as eventsLoader,
} from './pages/Events';
import { loader2 as eventDetailLoader } from './pages/EventDetail';
import EventDetail from './pages/EventDetail';
import NewEvent, {
  action as NewEventAction,
} from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';
import Error from './pages/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'events',
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <Events />,
              loader: eventsLoader,
            },
            {
              path: ':eventId',
              id: 'event-detail',
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetail />,
                },
                {
                  path: 'edit',
                  element: <EditEvent />,
                },
              ],
            },
            {
              path: 'new',
              element: <NewEvent />,
              action: NewEventAction,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
