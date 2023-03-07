
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
