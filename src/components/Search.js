import React, { useState, useEffect } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: 0, priceTo: Infinity });

  const [dataProduct, setDataProduct] = useState([]);

  const [columns, setColumns] = useState({
    id: false,
    name: false,
    department: false,
    price: false,
    currency: false,
  });

  const onPriceInputChange = (name, value) => {
    // TODO: implement price change handler
    console.log(value);
    if(name === 'priceTo' && value === '') {
      value = Infinity
    }
    setPrice({ ...price, [name]: value });

  }
  const onCheckboxClick = (name, checked) => {
    setColumns({...columns, [name]: checked});
    // TODO: implement checkbox click handler
  }
  const priceFrom = price.priceFrom;
  const priceTo = parseFloat(price.priceTo);

  const filterProducts = (data) => {
    // TODO: implement handler for filtering products by price range
    setDataProduct(data.filter((product) => priceFrom <= product.price && priceTo >= product.price));
  }

  useEffect(() => {
    const requestOption = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch("http://localhost:3001/products", requestOption)
      .then((response) => response.json())
      .then((data) => filterProducts(data));
  })

  return (
    <div className="Products">
      <FilterForm
        priceFrom={priceFrom}
        priceTo={priceTo}
        onPriceInputChange={onPriceInputChange} />

      <ToggleColumns
        onCheckBoxClick={onCheckboxClick}
        columns={columns} />

      <ProductList
        products={dataProduct}
        columns={columns} />
    </div>
  );
}

export default Search;
