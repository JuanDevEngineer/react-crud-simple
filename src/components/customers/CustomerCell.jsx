import { useNavigate } from 'react-router-dom';
import useCustomer from '../../hooks/useCustomer';

export default function CustomerCell({ customer, deleteCustomer }) {
  const navigate = useNavigate();
  return (
    <tr className='border-b hover:bg-gray-50' key={customer.id}>
      <td className='p-3'>{customer.name}</td>
      <td className='p-3'>{customer.company}</td>
      <td className='p-3 text-gray-800 font-bold'>{customer.email}</td>
      <td className='p-3 text-gray-800 font-bold'>{customer.phone}</td>
      <td className='p-3'>{customer.note}</td>
      <td className='p-3'>
        <button
          type='button'
          className='bg-yellow-600 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs'
          onClick={() => navigate(`/customers/show/${customer.id}`)}
        >
          Show
        </button>
        <button
          type='button'
          className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2'
          onClick={() => navigate(`/customers/update/${customer.id}`)}
        >
          Edit
        </button>
        <button
          type='button'
          className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2'
          onClick={() => {
            const result = confirm('Sure delete!');
            if (result) {
              deleteCustomer(customer.id);
              location.reload();
            }
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
