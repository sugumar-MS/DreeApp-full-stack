import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
       amount: order.amount,
       currency: order.currency,
       name: 'Order Payment',
       description: 'Order Payment',
       order_id: order.id,
       receipt: order.receipt,
       handler: async (response) => {
        console.log(response)
        try {

          const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay',response,{headers:{token}})
          if(data.success){
            navigate('/orders')
            setCartItems({})
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message)
        }
       }
    }
    const zrp = new window.Razorpay(options)
    zrp.open()
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      
      let orderData= {
        address: formData,
        items: orderItems,
        amount:getCartAmount() + delivery_fee
      }

      switch (method) {
        //API Calls for COD
        
        case 'cod':
           const res = await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
          //  console.log(res.data.success);
           
           if(res.data.success){
            setCartItems({})
            navigate('/orders')
           } else {
            toast.error(res.data.message)
           }
           break;

        case 'stripe':   
            const responseStripe = await axios.post(backendUrl + '/api/order/stripe',orderData,{headers:{token}})
            if (responseStripe.data.success) {
              const {session_url} = responseStripe.data
              window.location.replace(session_url)
            } else {
              toast.error(responseStripe.data.message)
            }

        break;

        case 'razorpay':

           const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, {headers:{token}})
           if(responseRazorpay.data.success){
            initPay(responseRazorpay.data.order);
            
           }

           break;

        default:
          break;

      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex min-h-[80vh] flex-col justify-between gap-4 border-t pt-5 sm:flex-row sm:pt-14"
    >
      {/* ------- Left Side -------*/}
      <div className="flex w-full flex-col gap-4 sm:max-w-[360px] md:max-w-[450px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            value={formData.firstName}
            name='firstName'
            required
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="First name"
          />
          <input
            onChange={onChangeHandler}
            name='lastName'
            value={formData.lastName}
            required
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          onChange={onChangeHandler}
          value={formData.email}
          name='email'
          required
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="text"
          placeholder="Email address"
        />
        <input
          onChange={onChangeHandler}
          name='street'
          value={formData.street}
          required
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name='city'
            value={formData.city}
            required
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="City"
          />
          <input
            onChange={onChangeHandler}
            name='state'
            value={formData.state}
            required
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name='zipcode'
            value={formData.zipcode}
            required
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="Zipcode"
          />
          <input
            onChange={onChangeHandler}
            name='country'
            value={formData.country}
            required
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
            type="text"
            placeholder="Country"
          />
        </div>

        <input
          onChange={onChangeHandler}
          name='phone'
          value={formData.phone}
          required
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/*----- Right Side -----*/}
      <div className="mt-8">
        <div className="mt-8 sm:min-w-38 md:min-w-40 lg:min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* ------- Payment Method Selection ------- */}
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <div
              onClick={() => setMethod('stripe')}
              className="flex cursor-pointer items-center gap-3 border p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border ${method === 'stripe' ? 'bg-green-400' : ''}`}
              ></p>
              <assets.stripe_logo className="mx-4 h-6 w-15 text-blue-700" />
            </div>
            <div
              onClick={() => setMethod('razorpay')}
              className="flex cursor-pointer items-center gap-3 border p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border ${method === 'razorpay' ? 'bg-green-400' : ''}`}
              ></p>
              <p className="mx-4 flex h-6 w-25 items-baseline text-black">
                <assets.SiRazorpay />
                Razorpay
              </p>
            </div>
            <div
              onClick={() => setMethod('cod')}
              className="flex cursor-pointer items-center gap-3 border p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border ${method === 'cod' ? 'bg-green-400' : ''}`}
              ></p>
              <p className="flex h-6 items-center text-sm text-gray-500">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="mt-8 w-full text-end">
            <button
              onClick={() => navigate('/orders')}
              className="bg-black px-16 py-3 text-sm text-white"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
