import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Layouts/Navbar';
import Customer from './Pages/Customers';
import Product from './Pages/Products';
import SalesOrderDetails from './Pages/SalesOrderDetails';
import SalesOrderHeader from './Pages/SalesOrderHeader';
import { lazy, Suspense } from 'react';
import Loader from './Shared/Loader';

const AppSnackbar = lazy(() => import('./Shared/AppSnackbar'))

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Suspense fallback={<Loader fixed overlay styles={{ text: { color: '#fff' } }} />}>
    </Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Sales Order Details" element={<SalesOrderDetails />} />
          <Route path="/Sales Order Header" element={<SalesOrderHeader />} />
        </Routes>
      </BrowserRouter>

      <AppSnackbar />
    </div>
  );
}

export default App;
