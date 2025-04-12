import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="md:w-1/4 bg-blue-900 px-5 py-10">
      <h2 className="text-4xl font-black text-center text-white fixed">
        CRM - Customers
      </h2>
      <nav className="mt-14 fixed">
        <Link
          to="/customers"
          className={`${
            location.pathname === '/customers' ? 'text-blue-300' : 'text-white'
          } 
				  text-white text-2xl block mt-2 hover:text-blue-300`}
        >
          Customers
        </Link>
        <Link
          to="/customers/new"
          className={`${
            location.pathname === '/customers/new'
              ? 'text-blue-300'
              : 'text-white'
          }
				  text-white text-2xl block mt-2 hover:text-blue-300`}
        >
          New Customers
        </Link>
      </nav>
    </div>
  );
}
