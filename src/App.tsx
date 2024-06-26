import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Layouts/Navbar';
import Customer from './Pages/Customers';
import Product from './Pages/Products';
import SalesOrderDetails from './Pages/SalesOrderDetails';
import SalesOrderHeader from './Pages/SalesOrderHeader';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Sales Order Details" element={<SalesOrderDetails />} />
          <Route path="/Sales Order Header" element={<SalesOrderHeader />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
