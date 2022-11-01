import FormCustomer from '../../components/customers/FormCustomer';

export default function NewCustomer() {
  return (
    <>
      <h2 className='font-black text-4xl text-blue-900'>Add new Customer</h2>
      <p className='mt-3'>
        Fill in the following fields to register a customer
      </p>
      <FormCustomer />
    </>
  );
}
