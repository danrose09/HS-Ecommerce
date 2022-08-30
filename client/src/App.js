import { Routes, Route } from "react-router-dom";
import AccountScreen from "./screens/AccountScreen";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import CollectionsScreen from "./screens/CollectionsScreen";
import NewArrivalsScreen from "./screens/NewArrivalsScreen";
import ProductScreen from "./screens/ProductScreen";
import PaymentScreen from "./screens/PaymentScreen";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/signin" element={<SignInScreen />}></Route>
          <Route path="/signup" element={<SignUpScreen />}></Route>
          <Route path="/account" element={<AccountScreen />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
          <Route path="/collections" element={<CollectionsScreen />}></Route>
          <Route path="/new-arrivals" element={<NewArrivalsScreen />}></Route>
          <Route path="/product/:id" element={<ProductScreen />}></Route>
          <Route path="/payment" element={<PaymentScreen />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
