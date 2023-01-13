import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "./pages/Home/home";
import { Customer } from "./pages/Customer/customer";
import { NavbarItem } from "./component/navbar";
import { Transfer } from "./pages/Transfer/transfer";

function App() {

  return (
    <div>
      <Router>
        <NavbarItem />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/all-customer" element={<Customer /> } />
          <Route path="/transaction-history" element={<Transfer /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

