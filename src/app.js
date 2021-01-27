import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Categories from './components/store-screens/categories';
import ProductsComp from './components/store-screens/productsComp';



function App() {
  return (
    <div className="App">
      <Header /> 
      <Categories />
      <ProductsComp /> 
      <Footer />
    </div>
  );
}

export default App;
