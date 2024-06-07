import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Page
import Dashboard from "./page/Dashboard";
import Inventory from "./page/Inventory";
import SalesReport from "./page/SalesReport";
import Customers from "./page/Customers";


import AppLayout from "./Components/layout/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Product from "./page/Product";

export default function App() {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
    <Routes>
      <Route element={
        <AppLayout/>
      }>
      <Route index element={<Navigate replace to="dashboard"/>}/>
      <Route path="dashboard" element ={<Dashboard/>}/>
            <Route path="salesreport" element={<SalesReport />} />
            <Route path="product" element={<Product/>} />
      <Route path="inventory" element={<Inventory/>}/>
      <Route path="customer" element={<Customers/>}/>
      </Route>
    </Routes>
      
    </BrowserRouter>
    </>
  )
}
