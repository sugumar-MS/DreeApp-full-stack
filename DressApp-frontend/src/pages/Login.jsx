import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(StoreContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === 'Sign up') {
        const res = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password,
        });
        
        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem('token', res.data.token);
        } else toast.error(res.data.message);
      } else {
        const res = await axios.post(backendUrl + '/api/user/login', {
          email,
          password,
        });
        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem('token', res.data.token);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="m-auto mt-14 flex w-[90%] flex-col items-center gap-4 text-gray-800 sm:max-w-96"
    >
      <div className="mt-10 mb-2 inline-flex items-center gap-2">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="h-[1.5px] w-8 border-none bg-gray-800" />
      </div>
      {currentState === 'Login' ? ('') : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full border border-gray-800 px-3 py-2"
          placeholder="Name"
          required
          autoComplete="name"
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full border border-gray-800 px-3 py-2"
        placeholder="Email"
        required
        autoComplete="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full border border-gray-800 px-3 py-2"
        placeholder="Password"
        required
        autoComplete="current-password"
        
      />
      <div className="mt-[-8px] flex w-full justify-between text-sm">
        <p>Forgot your password</p>
        {currentState === 'Login' ? (
          <p
            onClick={() => setCurrentState('Sign up')}
            className="cursor-pointer"
          >
            Create an account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState('Login')}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button
        type="submit"
        className="mt-4 rounded bg-black px-9 py-2 font-light text-white"
      >
        {currentState === 'Sign up' ? 'Sign Up' : 'Sign In'}
      </button>
    </form>
  );
};

export default Login;
