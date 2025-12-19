import { Routes, Route } from 'react-router-dom';
import Login from './componets/login.jsx';
import HomePage from './componets/homepage.jsx';
import Signup from './componets/signup.jsx';
import StockDashboard from './componets/Dashboard.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path="/dashboard" element={<StockDashboard />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
// import StockIn from "./componets/StockIn";

// export default function App() {
//   return (
//     <StockIn />
//   );
// } 

// import Spare_part from "./componets/spare_part.jsx";

// export default function App() {
//   return (
//     <Spare_part />
//   );
// }

// import StockOutForm from "./componets/StockOut";

// export default function App() {
//   return (
//     <StockOutForm />
//   );
// }   