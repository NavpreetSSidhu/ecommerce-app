import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import DashBoard from './pages/user/DashBoard';
import PrivateRoute from './components/Routes/PrivateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/dashboard' element={<PrivateRoute/>}>
          <Route path='' element={<DashBoard/>}/>
        </Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
