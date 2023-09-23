import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate() 

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`, 
        {name, email, password, phone, address});
        if (res.data.success) {
            toast.success(res.data.message, {duration:5000});
            navigate('/login'); 
        } else {
            toast.error(res.data.message, {duration:5000});
        }
    } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
    }
  }

  return (
    <Layout title={'Register - Ecommerce App'}>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h4 className='title'>Register Now!</h4>
                <div className="mb-3">
                    <input
                     type="text" 
                     className="form-control" 
                     id="exampleInputEmail1" 
                     placeholder='Enter your name' 
                     value={name} 
                     onChange={(e) => setName(e.target.value)} required/>
                </div>
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
                <div className="mb-3">
                    <input
                     type="text" 
                     className="form-control" 
                     id="exampleInputEmail4" 
                     placeholder='Enter your number' 
                     value={phone} 
                     onChange={(e) => setPhone(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <input
                     type="text" 
                     className="form-control" 
                     id="exampleInputEmail5" 
                     placeholder='Enter your address'
                     value={address} 
                     onChange={(e) => setAddress(e.target.value)} required/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    </Layout>
  )
}

export default Register;