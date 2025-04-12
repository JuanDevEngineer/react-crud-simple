import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function LayoutAuth() {
  const auth = useAuth(); // Assuming you have a useAuth hook to get the auth context
  return (
    <>
      {auth?.isAuthenticated() ? (
        <Navigate to="/customers" replace={true} />
      ) : (
        <div className="w-full min-h-screen">
          <Outlet />
        </div>
      )}
    </>
  );
}
