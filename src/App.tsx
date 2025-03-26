import './App.css';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
// import Footer from "./components/home/Footer/Footer";
// import FooterBottom from "./components/home/Footer/FooterBottom";
// import Header from "./components/home/Header/Header";
// import HeaderBottom from "./components/home/Header/HeaderBottom";
// import SpecialCase from "./components/SpecialCase/SpecialCase";
// import About from "./pages/About/About";
// import SignIn from "./pages/Account/SignIn";
import SignupScreen from './pages/auth/signUp';
// import Cart from "./pages/Cart/Cart";
// import Contact from "./pages/Contact/Contact";
// import Home from "./pages/Home/Home";
// import Journal from "./pages/Journal/Journal";
// import Offer from "./pages/Offer/Offer";
// import Payment from "./pages/payment/Payment";
// import ProductDetails from "./pages/ProductDetails/ProductDetails";
// import Shop from "./pages/Shop/Shop";
// Admin
// import Admin from "./pages/admin/admin";
// import Navbar from "./components/admin/navbar";
// import ProductPage from "./pages/admin/Product";
// import UserPage from "./pages/admin/User";
// import SalesPage from "./pages/admin/Sales";

// const Layout = () => {
//   return (
//     <div>
//       <Header />
//       <HeaderBottom />
//       <SpecialCase />
//       <ScrollRestoration />
//       <Outlet />
//       <Footer />
//       <FooterBottom />
//     </div>
//   );
// };

// const AdminLayout = () => {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//     </div>
//   );
// };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="/" element={<Layout />}> */}
        {/* ==================== Header Navlink Start here =================== */}
        {/* <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route> */}
        {/* ==================== Header Navlink End here ===================== */}
        {/* <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
      </Route> */}
      {/* ==================== Admin Navlink Start here =================== */}
      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />}></Route>
        <Route path="/admin/products" element={<ProductPage />} />
        <Route path="/admin/customers" element={<UserPage />} />
        <Route path="/admin/sales" element={<SalesPage />} />
      </Route> */}
      {/* ==================== Admin Navlink End here ===================== */}
      <Route path="/signup" element={<SignupScreen />}></Route>
      {/* <Route path="/signin" element={<SignIn />}></Route> */}
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
