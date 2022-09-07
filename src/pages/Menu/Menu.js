import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetaliCard from '../../components/ProductDetaliCard';
import Tabs from '../../components/Tabs';
import { addToCart } from '../../stores/cart/cartSlice';
import { fetchProducts, selectAllProducts } from '../../stores/menu/productsSlice'

const Menu = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts)
  const [activeTab, setActiveTab] = useState('')
 const [activeTabIndex, setActiveTabIndex] = useState(0)

  useEffect(() => {
    dispatch(fetchProducts())

  }, [])

  const onAddProduct = (product) => {
    dispatch(addToCart(product))
  }
  console.log(activeTabIndex)
  const onTabSwitch = (newActiveTab) => {
    setActiveTab(newActiveTab);
    let categories = products.products.map((product) => product.name.name);
    let index = categories.findIndex(category=>newActiveTab === category )
    if(index > -1) {
      setActiveTabIndex(index);
    }
    else
    {
      setActiveTabIndex(0)
    }
  }
  console.log(products)
  return (


    <div className='bg-white'>
      {

        products.status !== 'fulfilled' ?
          <div>loading...</div> :
          <div className='menu=wrapper'>
            {
              products.products &&
              <Tabs list={products.products.map((product) => product.name.name)}
                activeTab={activeTab}
                onTabSwitch={onTabSwitch}
              />
            }
            <div className='flex flex-row mx-3'>
              {
                products.products && products.products[activeTabIndex].products.map((product, index) => {
                  return (
                    <ProductDetaliCard key={index} product={product} onAddProduct={onAddProduct}/>
                  )
                })
              }
            </div>
          </div>
      }
    </div>


  )
}

export default Menu
