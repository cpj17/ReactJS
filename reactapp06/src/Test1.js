import { React } from 'react'

   function ProductTable({products}) {
    let currentCatgory = ""    
    const rows = []
    products.forEach(product => {
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

  function SearchBar() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <label>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }
  
  function FilterableProductTable({ products }) {
    
    return (
      <div>
        <SearchBar />
        <ProductTable products={products} />
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

  export default function Test1() {
    return <FilterableProductTable products={PRODUCTS} />;
  }