import React, { useState } from 'react'

   function ProductTable({products, showStockOnly, filterText}) {
    let currentCatgory = ""    
    const rows = []
  
    products.forEach(product => {
        if (showStockOnly && !product.stocked) {
            return
        }
        if (product.name.toUpperCase().indexOf(filterText.toUpperCase()) === -1) {
          return
        }

        if (product.category !== currentCatgory) {
            rows.push(
                <ProductCategoryRow stringCategory = {product.category} key = {product.category} />
            )
        }
        currentCatgory = product.category
        rows.push(
            <ProductRow product = {product} key={product.name} />
        )
    });
    
    if (rows.length === 0) {
      rows.push(
        <tr key={0}>
          <td> No records </td>
        </tr>
      )
    }

    return(
            <table>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Price </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
   }

   function ProductCategoryRow({stringCategory}) {
        return (
            <tr>
                <th>
                    {stringCategory}
                </th>
            </tr>
        )
   }
  
    function ProductRow({product}) {
        const name = product.stocked ? product.name :(
            <span style={{color: 'red'}}> {product.name} </span>
        )
        return (
            <tr>
                <td> {name} </td>
                <td> {product.price} </td>
            </tr>
        )
    }

  function SearchBar({showStockOnly, setshowStockOnly, filterText, setFilterText}) {
    
    return (
      <form>
        <input type="text" placeholder="Search..." onChange={(e) => setFilterText(() => {
          return e.target.value
        })} />
        <label>
          <input type="checkbox" onChange={() => setshowStockOnly((prevState) => {
            return !prevState
          })} />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }
  
  function FilterableProductTable({ products }) {
    const [showStockOnly, setshowStockOnly] = useState(false)
    const [filterText, setFilterText] = useState("")

    console.log(filterText);
    return (
      <div>
        <SearchBar
          showStockOnly = {showStockOnly}
          setshowStockOnly = {setshowStockOnly}
          filterText = {filterText}
          setFilterText = {setFilterText}
        />
        <ProductTable
          products={products} 
          showStockOnly = {showStockOnly}
          filterText = {filterText}
        />
      </div>
    );
  }
  
  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

  export default function Test2() {
    return <FilterableProductTable products={PRODUCTS} />;
  }