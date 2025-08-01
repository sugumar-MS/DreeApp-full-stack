import { Route,Routes } from 'react-router-dom'
import About from './pages/About'
import Collection from './pages/Collection'
import Home from './pages/Home'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import Verify from './pages/Verify'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer /> 
      <Navbar/> 
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/verify" element={<Verify/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
