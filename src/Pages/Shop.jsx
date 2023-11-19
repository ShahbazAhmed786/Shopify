import React from 'react'
import './Shop.css'
import {Hero} from '../components/Hero'
import { Popular } from '../components/Popular'
import {Offers} from '../components/Offers'
import { New_collection } from '../components/New_collection'
import { Newletter } from '../components/Newletter'
export const Shop = () => {
  return (
    <>
       <Hero/>
       <Popular/>
       <Offers/>
       <New_collection/>
       <Newletter/>   
      </>
  )
}
 
