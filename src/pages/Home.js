import React from 'react';
import ProductsPage from './ProductsPage';

function HomePage() {

  const navigateToProductsPage = () => {
    window.location.href = '/ProductsPage'; // Replace '/ProductsPage' with the actual URL of your ProductsPage
  };
  return (
   
  <div class="home-body">
    <div class="home-head">
        <h1 class="brand-text1">Freazy</h1>
        <h1 class="brand-text2">Foot</h1>
        <img className='simg1'   src="s-img1.png" alt="Image 1"></img>
        <h2 class="slogan">Express Yourself from .......................... Sole to Soul</h2>
    </div>
    
    <div class="home-page">
      <div class='cont-1 smoke'>

        <div class="home-container">
            <img src="b1.png" alt="Image 1" onClick={navigateToProductsPage}></img>
        </div>

        <div class="home-container">
          <img src="b2.png" alt="Image 2" onClick={navigateToProductsPage}></img>
        </div>

        <div class="home-container">
          <img src="b5.png" alt="Image 3" onClick={navigateToProductsPage}></img>
        </div>

        <div class="home-container">
          <img src="b4.png" alt="Image 4" onClick={navigateToProductsPage}></img>
        </div>  
      </div>
  
      <div class='cont-2 smoke'>   

        <div class="home-container">
          <img src="b3.png" alt="Image 5" onClick={navigateToProductsPage}></img>
        </div>   

        <div class="home-container">
          <img src="b6.png" alt="Image 6" onClick={navigateToProductsPage}></img>
        </div>

        <div class="home-container">
          <img src="b7.png" alt="Image 7" onClick={navigateToProductsPage}></img>
        </div>

        <div class="home-container">
          <img src="b7.png" alt="Image 8" onClick={navigateToProductsPage}></img>
        </div>
      </div>  
    </div>
  </div> 
    
  );
}

export default HomePage;
