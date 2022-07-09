import React from 'react'

export const FilterForm = (props) => {

  const onePriceInputChange = (e) => {
    // TODO: implement handler
    props.onPriceInputChange(e.target.name, e.target.value);
  }

  // TODO: bind handlers and props
  return (
    <div>
      <label htmlFor="priceFrom">Price From: {props.priceFrom}</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        placeholder="Price from..."
        onChange={onePriceInputChange}
      />
      <label htmlFor="priceTo">Price To: {props.priceTo === Infinity ? '': props.priceTo}</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        placeholder="Price to..."
        onChange={onePriceInputChange}
      />
    </div>
  )
}
