import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import initialState from './store/productStore';  
// import Categories from './components/categories';
import ProductsComp from './components/productsComp';


function App() {
  return (
    <div className="App">
      <Header /> 
      <Footer />
      <ProductsComp /> 
    </div>
  );
}

export default App;
