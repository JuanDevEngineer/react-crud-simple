import FormCustomer from "../../components/customers/FormCustomer";

export default function EditCustomer() {
  return (
    <>
      <h2 className="font-black text-4xl text-blue-900">Update Customer</h2>
      <p className="mt-3">
        Fill in the following fields to register a customer
      </p>
      <FormCustomer />
    </>
  );
}
