import React from 'react'
import Product from "./Product"
import products from "./PracticeJSON"


function App() {
  const dynamicContent = products.map(each => <Product key={each.id} product={each.text} name={each.name} price={each.price} description={each.description} />)

  return (
    <div className="App">
      {dynamicContent}
        
    </div>
  );
}

export default App;
