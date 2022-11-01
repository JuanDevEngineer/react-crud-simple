import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/ui/spinner/Spinner';
import useCustomer from '../../hooks/useCustomer';

export default function ShowCustomer() {
  const [showCustomer, setShowCustomer] = useState({});
  const [loading, setLoading] = useState(false);
  const { customerId } = useParams();
  const { getCustomerById } = useCustomer();

  useEffect(() => {
    setLoading(true);
    getCustomerById(customerId)
      .then(({ data }) => {
        setShowCustomer(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    return () => {
      setShowCustomer({});
    };
  }, []);

  if (loading) return <Spinner />;
  return (
    <>
      <h2 className='font-black text-4xl text-blue-900'>Show customer</h2>
      <p className='mt-3'>
        Fill in the following fields to register a customer
      </p>

      <p className='text-2xl text-gray-500 mt-10'>
        <span className='text-gray-800 uppercase font-bold'>customer: </span>
        {showCustomer.name}
      </p>
      <p className='text-2xl text-gray-500'>
        <span className='text-gray-800 uppercase font-bold'>company: </span>
        {showCustomer.company}
      </p>
      <p className='text-2xl text-gray-500'>
        <span className='text-gray-800 uppercase font-bold'>email: </span>
        {showCustomer.email}
      </p>
      <p className='text-2xl text-gray-500'>
        <span className='text-gray-800 uppercase font-bold'>phone: </span>
        {showCustomer.phone}
      </p>
      <p className='text-2xl text-gray-500'>
        <span className='text-gray-800 uppercase font-bold'>note: </span>
        {showCustomer.note ? showCustomer.note : 'don`t have!'}
      </p>
    </>
  );
}
