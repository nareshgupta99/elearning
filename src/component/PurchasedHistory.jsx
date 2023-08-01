import React from 'react'

function PurchasedHistory() {
  return (
   <div>
  <h3 className='m-5 fw-bold fst-italic'>  Purchase history </h3>
  <div className='purchase-table px-4'>
  <table class="table ">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col" style={{color:"grey"}}>Date</th>
      <th scope="col" className='' style={{color:"grey"}}>Total price</th>
      <th scope="col" className='' style={{color:"grey"}}>Payment type</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  </div>
   </div>
  )
}

export default PurchasedHistory