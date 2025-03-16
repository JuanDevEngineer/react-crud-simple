import { useEffect, useState } from "react";
import useCustomer from "../../hooks/useCustomer";
import CustomerCell from "./CustomerCell";
import Spinner from "../ui/spinner/Spinner";

export default function ListCustomers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getCustomers, deleteCustomer } = useCustomer();

  useEffect(() => {
    setLoading(true);
    getCustomers()
      .then(({ data }) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    return () => {};
  }, []);

  if (loading) return <Spinner />;
  return (
    <>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Company</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Notes</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <CustomerCell
              key={customer.id}
              customer={customer}
              deleteCustomer={deleteCustomer}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
