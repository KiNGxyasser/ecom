import React, {Component} from 'react';
import Navbar from "./components/navbar";
import Item from "./components/item";

class App extends Component {
  state = {
    products: [
      { id: 0, price: 1000, url: 'OMEN 2.jpg', quantity: 0 ,title: "HP Omen", tagId:0, },
      { id: 1, price: 900, url: 'hp-pavilion-gaming-15.png', quantity: 0 ,title: "HP Pavilion gaming", tagId:0, },
      { id: 2, price: 850, url: 'MSI-Katana.jpg', quantity: 0 ,title: "MSI Katana", tagId:0, },
      { id: 3, price: 1100, url: 'asus ROG.jpg', quantity: 0 ,title: "ASUS Rog", tagId:0, },

      { id: 4, price: 6, url: 'psstore.png', quantity: 0 ,title: "PSN 5$", tagId:1, },
      { id: 5, price: 10, url: 'psstore.png', quantity: 0 ,title: "PSN 10$", tagId:1, },
      { id: 6, price: 25, url: 'psstore.png', quantity: 0 ,title: "PSN 25$", tagId:1, },
      { id: 7, price: 100, url: 'psstore.png', quantity: 0 ,title: "PSN 100$", tagId:1, },
      
      { id: 8, price: 1200, url: 'msi-stealth.png', quantity: 0 ,title: "MSI stealth", tagId:0, },
      { id: 9, price: 1000, url: 'asus-tuf-a1.png', quantity: 0 ,title: "ASUS tuf", tagId:0, },
      { id: 10, price: 200, url: 'switch.png', quantity: 0 ,title: "NINTENDO switch", tagId:2, },
      { id: 11, price: 500, url: 'xbox-x.png', quantity: 0 ,title: "XBOX series x", tagId:2, },

      { id: 12, price: 250, url: 'PS4.jpg', quantity: 0 ,title: "SONY PS4 Slim", tagId:2, },
      { id: 13, price: 300, url: 'Steam-Deck-Valve.png', quantity: 0 ,title: "VALVE Steam deck", tagId:2, },

      { id: 14, price: 6, url: 'steam.png', quantity: 0 ,title: "Steam 5$", tagId:1, },
      { id: 15, price: 10, url: 'steam.png', quantity: 0 ,title: "Steam 10$", tagId:1, },
      { id: 16, price: 25, url: 'steam.png', quantity: 0 ,title: "Steam 25$", tagId:1, },
      { id: 17, price: 100, url: 'steam.png', quantity: 0 ,title: "Steam 100$", tagId:1, },


    ],
    cart: []
  };

  addToCart = (item) => {
    const index = item.id;
    const cartIndex = this.state.cart.findIndex((p) => p.id === item.id);

    if(cartIndex === -1){
      const tempCart = [...this.state.cart , this.state.products[index]];
      const cartLenght = tempCart.length
      tempCart[cartLenght-1].quantity = 1;
      this.setState({ cart: tempCart });
      console.log(tempCart)
      console.log(this.state.cart)

    }else{
      const tempCart = [...this.state.cart]
      tempCart[cartIndex].quantity += 1;
      this.setState({ cart: tempCart }); 
      console.log(this.state.cart)
    }
  }

  handleIncrement = (item) => {
    const tempCart = this.state.cart.map((i)=>
      i.id === item.id ? {...item, quantity: item.quantity + 1} : i
    )
    this.setState({cart: tempCart});
    console.log(this.state.cart)
  }

  handleDecrement = (item) => {
    const tempCart = this.state.cart.map((i)=>
    i.id === item.id ? {...item, quantity: item.quantity - 1} : i
  )
  this.setState({cart: tempCart});
  console.log(this.state.cart)
  }

  handleDelete = (item) => {
    const tempCart = this.state.cart.filter((i)=>
    i.id !== item.id
  )
  this.setState({cart: tempCart});
  console.log(this.state.cart)
  }

render(){
  return (
    <div className="App">
      <Navbar cart={this.state.cart} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} handleDelete={this.handleDelete}/>
      <div className="container d-flex">
      <Item addToCart={this.addToCart} products={this.state.products} cart={this.state.cart} /*addToCart={this.addToCart}*//> 
      </div>
    </div>
  );
}}

export default App;
