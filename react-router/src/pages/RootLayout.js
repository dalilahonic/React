import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainHeader';

export default function RootLayout() {
  return (
    <>
      {/* <h1>Layout</h1> */}
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
