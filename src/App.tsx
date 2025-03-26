import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useUser } from './contexts/userContext';
import Dashboard from './pages/Dashboard'
import Contracts from './pages/Contracts'
import Proposals from './pages/Proposals'
import Profile from './pages/Profile'
import JobForm from './pages/JobForm'
import Offers from './pages/Offers'

function App() {
  const { isAuthenticated } = useUser(); 

  return (
    <Router>
      <Layout>
        <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/contracts" element={<Contracts />} />
              <Route path="/proposals" element={<Proposals />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/offers/create" element={<JobForm />} />
              <Route path="/offers/edit/:id" element={<JobForm />} />
              <Route path="/" element={<h1>Please log in to access the platform</h1>} />
            <Route path="/" element={<h1>Please log in to access the platform</h1>} /> 
        </Routes>  
      </Layout>
    </Router>
  );

}


export default App;
