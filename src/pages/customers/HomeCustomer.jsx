import ListCustomers from "../../components/customers/ListCustomers";

export default function HomeCustomer() {
  return (
    <>
      <h2 className="font-black text-4xl text-blue-900">Customers</h2>
      <p className="mt-3">
        Fill in the following fields to register a customer
      </p>
      <ListCustomers />
    </>
  );
}
