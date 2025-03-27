import './App.css';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  ScrollRestoration,
  Route,
} from "react-router-dom";
import SignupScreen from './pages/auth/signUp';
import Login from './pages/auth/login';
import LandingPage from './pages/landing/landing';
import DashboardLayout from './components/Layout/Dashboard';
import Dashboard from './pages/Dashboard';
import Contracts from './pages/Contracts';
import Proposals from './pages/Proposals';
import Profile from './pages/Profile';
import JobForm from './pages/JobForm';
import Offers from './pages/Offers';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/signin" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <DashboardLayout>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/proposals" element={<Proposals />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/offers/create" element={<JobForm />} />
            <Route path="/offers/edit/:id" element={<JobForm />} />
          </DashboardLayout>
        }
      />
    </>
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
