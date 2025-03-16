import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import LayoutAuth from "./layout/LayoutAuth";

import LoginScreen from "./pages/auth/LoginScreen";
import RegisterScreen from "./pages/auth/RegisterScreen";

import HomeCustomer from "./pages/customers/HomeCustomer";
import ShowCustomer from "./pages/customers/ShowCustomer";
import NewCustomer from "./pages/customers/NewCustomer";
import EditCustomer from "./pages/customers/EditCustomer";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutAuth />}>
            <Route index element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Route>

          <Route path="/customers" element={<Layout />}>
            <Route index element={<HomeCustomer />} />
            <Route path="new" element={<NewCustomer />} />
            <Route path="show/:customerId" element={<ShowCustomer />} />
            <Route path="update/:customerId" element={<EditCustomer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
