import { Navigate, Outlet } from 'react-router-dom';

import Sidebar from '../components/ui/Sidebar';
import useAuth from '../hooks/useAuth';

export default function Layout() {
  const auth = useAuth(); // Assuming you have a useAuth hook to get the auth context

  return (
    <>
      {auth.isAuthenticated() ? (
        <div className="md:flex md:min-h-screen">
          <Sidebar />
          <div className="md:w-3/4 container p-10">
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
}
