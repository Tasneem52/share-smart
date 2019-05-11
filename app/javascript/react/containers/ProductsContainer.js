import React, { Component } from 'react';
//import ProductTile from '../components/ProductTile'

class ProductsContainer extends Component {

 constructor(props){
   super(props);
   this.state = {
     productSelected: null,
   }
 }

 render() {
   console.log('In Product render::');

   return (
     <div className="products">
       <div>Groups Show page info comes here.</div>
       <div>Products Tiles below that</div>
     </div>
   );
 }
}

export default ProductsContainer;
