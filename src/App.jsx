import { AuthProvider } from "./context/AuthContext";
import { CustomerProvider } from "./context/CustomerContext";
import AppRouter from "./AppRouter";

function App() {
  return (
    <AuthProvider>
      <CustomerProvider>
        <AppRouter />
      </CustomerProvider>
    </AuthProvider>
  );
}

export default App;
