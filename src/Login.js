import React, { useState } from 'react'
import './styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = (e) => {
    e.preventDefault();
    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate('/')
        })
        .catch(error => alert(error.message))

  }
  const handleRegister = (e) => {
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
            if(auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
  }
  return (
    <div className='login'>
        <Link to='/'>
            <img 
                className='login_logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                alt="" 
            />
        </Link>
        <div className="login_container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input 
                    type='text'
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    // placeholder='e-mail'
                />

                <h5>Password</h5>
                <input 
                    type='password' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    // placeholder='password'
                />

                <button 
                    type='submit'
                    onClick={handleLogin}
                    className='login_singInButton'
                >
                    Sign In
                </button>
            </form>
            <p>
                By signing-in you agree to AMAZON CLONE PROJECT Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.
            </p>
            <button 
                onClick={handleRegister}
                className='login_registerButton'
            >
                Create your Amazon Account
            </button>
        </div>
    </div>
  )
}

export default Login