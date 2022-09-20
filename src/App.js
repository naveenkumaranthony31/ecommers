import "./css/sb-admin-2.css";
import Dashboard from "./Dashboard";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Products from "./product/Products";
import Create from "./Create";
import Login from "./login";
import Portal from "./portal";
import Userview from "./Userview"; 
import EditUser from "./EditUser"; 



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Users" element={<Users />} />
          <Route path="Users/:id" element={<Userview />} />
          <Route path="Users/EditUser/:id" element={<EditUser />} />
          <Route path="Products" element={<Products />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
