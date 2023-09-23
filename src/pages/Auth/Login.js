import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate ,useLocation} from 'react-router-dom'
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth(); 
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`, 
        {email, password});
        if (res.data.success) {
            toast.success(res.data.message, {duration:5000});
            setAuth({
                ...auth,
                user: res.data.user,
                token: res.data.token
            });
            localStorage.setItem('auth', JSON.stringify(res.data));
            navigate(location.state || '/'); 
        } else {
            toast.error(res.data.message, {duration:5000});
        }
    } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
    }
  }

  return (
    <Layout title={'Register now'}>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h4 className='title'>Login Now!</h4>
                <div className="mb-3">
                    <input
                      type="email"
                      className="form-control" 
                      id="exampleInputEmail2" 
                      placeholder='Enter your email' 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <input
                     type="password" 
                     className="form-control" 
                     id="exampleInputPassword3" 
                     placeholder='Enter your password' 
                     value={password} 
                     onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
      </Layout>
  )
}

export default Login