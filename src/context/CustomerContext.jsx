import { createContext } from "react";
import useService from "../hooks/useService";

const CustomerContext = createContext({});

export function CustomerProvider({ children }) {
  const service = useService();

  const getCustomers = async () => {
    try {
      return await service.fetchService("/customers", "GET");
    } catch (e) {
      console.log(e);
    }
  };

  const createCustomer = async (data) => {
    try {
      const response = await service.fetchService("/customers", "POST", data);
      const status = response.status;
      if (status === 201) {
        console.log("customer create successful");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getCustomerById = async (id) => {
    try {
      return await service.fetchService(`/customers/${id}`, "GET");
    } catch (e) {
      console.log(e);
    }
  };

  const updateCustomer = async (id, data) => {
    try {
      const response = await service.fetchService(
        `/customers/${id}`,
        "PUT",
        data
      );
      const status = response.status;
      if (status === 200) {
        console.log("customer update successful");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const deleteCustomer = async (id) => {
    return service.fetchService(`/customers/${id}`, "DELETE");
  };

  return (
    <CustomerContext.Provider
      value={{
        createCustomer,
        getCustomerById,
        updateCustomer,
        getCustomers,
        deleteCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerContext;
