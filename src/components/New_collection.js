import React from 'react'
import './New_collection.css'
import new_collection from '../images/new_collections'
import {Item} from './Item'
export const New_collection = () => {
  return (
    <div>
      <div className="new-collection">
        <h1>New Collection</h1>
        <hr />
        <div className="collection">
          {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

          })}
        </div>
      </div>
    </div>
  )
}
