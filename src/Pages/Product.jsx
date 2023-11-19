import React, { useContext } from 'react'
import { Shopcontent } from '../Context/Shopcontent'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../components/Breadcrum'
import { ProductDisplay } from '../components/ProductDisplay'
import { Descriptionboc } from '../components/Descriptionboc'
import { RelatedProduct } from '../components/RelatedProduct'

export const Product = () => {
  const {all_product}=useContext(Shopcontent)
  const {productId}=useParams();
  const product =all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <Descriptionboc/>
      <RelatedProduct/>
    </div>
  )
}
