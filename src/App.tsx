import "./App.css";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
// import Navbar from './components/navabr';
import SignupScreen from "./pages/auth/signUp";
import Login from "./pages/auth/login";
import LandingPage from "./pages/landing/landing";
import SearchList from "./pages/search/Search";

const Layout = () => {
  return (
    <div>
      {/* <Header />
      <HeaderBottom />
      <SpecialCase /> */}

      <ScrollRestoration />
      <Outlet />
      {/* <Footer />
      <FooterBottom /> */}
    </div>
  );
};

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
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<LandingPage />}></Route>
        <Route path="/search" element={<SearchList />}></Route>
      </Route>
      {/* ==================== Admin Navlink End here ===================== */}
      <Route path="/signup" element={<SignupScreen />}></Route>
      <Route path="/signin" element={<Login />}></Route>
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
