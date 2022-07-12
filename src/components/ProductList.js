import React from 'react'

export const ProductList = (props) => {
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows
  return (
    <div id="product-list">
      <header>
        <strong>Product List ({props.products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {props.columns.id === true ? '': <th>Id</th>}
            {props.columns.name === true ? '':<th>Name</th>}
            {props.columns.department === true ? '':<th>Department</th>}
            {props.columns.currency === true ? '':<th>Currency</th>}
            {props.columns.price === true ? '':<th>Price</th>}
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              {props.columns.id === true ? !product.id: <th>{product.id}</th>}
              {props.columns.name === true ? !product.name:<th>{product.name}</th>}
              {props.columns.department === true ? !product.department:<th>{product.department}</th>}
              {props.columns.currency === true ? !product.currency:<th>{product.currency}</th>}
              {props.columns.price === true ? !product.price:<th>{product.price}</th>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
