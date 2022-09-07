import React from 'react'
import Tabs from '../../components/Tabs'
import Button from '../../components/elements/Button'
import {useSelector} from 'react-redux'
import {cartProducts} from '../../stores/cart/cartSlice'
import {ReactComponent as ArrowRightSvg} from '../../assets/icons/arrow-right-long-svgrepo-com.svg'
import useTabSwitch from '../../hooks/useTabSwitch'
import AddressForm from '../../components/AddressForm'
import ProductSummary from '../../components/ProductSummary'

function Cart() {
  const cart = useSelector(cartProducts);
  const tabs = ['Summary', 'Delivery', 'Payment']
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary')
  console.log(cart)
  if(!cart || cart.length === 0) {
    return (
      <div className='bg-white h-96  text-black flex  justify-center p-4'>
        <h1>Your cart is empty</h1>
      </div>
    )
  }
  console.log(currentTab)
  
  return (
    <div className='bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8'>
      <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab}/>
      <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
        <ProductSummary/>
        </div>
      <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
        Delivery
        <AddressForm onTabSwitch={handleTabSwitch}/>
        </div>
      <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
        Payment
      <AddressForm/>
        </div>
    </div>
  )
}

export default Cart
