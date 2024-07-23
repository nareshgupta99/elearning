import React, { useEffect, useState } from 'react'
import { getAllOrders } from '../service/OrdersService';

function PurchasedHistory() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    getAllOrders().then((res) => {
      let { data } = res;
      console.log(data)
      setOrders(data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      <h3 className='m-5 fw-bold fst-italic'>  Purchase history </h3>
      <div className='purchase-table px-4'>
        <table class="table ">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col" style={{ color: "grey" }}>Date</th>
              <th scope="col" className='' style={{ color: "grey" }}>Total price</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order,index)=>(

              
              <tr>
                <th scope="row">{index+1}</th>
                <td>{order.purchaseDate}</td>
                <td>{order.toatalAmt}</td>
              </tr>
          )) }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PurchasedHistory