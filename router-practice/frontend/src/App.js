import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'events',
          element: <EventsRoot />,
          children: [
            { index: true, element: <Events /> },
            {
              path: ':eventId',
              element: <EventDetail />,
            },
            { path: 'new', element: <NewEvent /> },
            {
              path: ':eventId/edit',
              element: <EditEvent />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;