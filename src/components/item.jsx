import React, { Component } from 'react';

class Item extends Component {
  state = {
    filterValue: 'All',
    filteredItems: this.props.products,
  };

  returnObjValue = (value)=>{
    return Object.values(this.props.products).filter((i)=>(
      i.tagId === parseInt(value)
    ))
  }
  
  returnObjValue = (value)=>{
      return Object.values(this.props.products).filter((i)=>(
        i.tagId === parseInt(value)
      ))
    }
  
  filterItems = (value) => {
    console.log(value)
    if(value === 'All'){
      return this.props.products
    }else {

      switch (value) {
        case "Gaming laptops":
          return Object.values(this.props.products).filter((i)=>(
            i.tagId === parseInt(0)
          ))
          
        case "Gift cards":
          return Object.values(this.props.products).filter((i)=>(
            i.tagId === parseInt(1)
          ))
            
        case "Consoles":
          return Object.values(this.props.products).filter((i)=>(
            i.tagId === parseInt(2)
          ))
              
        default:
            return this.props.products
          } 
        } 
      }

  onFilterChange = (event) => {
    const targetValue = event.currentTarget.value;
    this.setState({ filterValue: targetValue }, () => {
      const filteredItems = this.filterItems(this.state.filterValue);
      console.log(filteredItems)
      this.setState({ filteredItems });
    });

  };


  render() {

    const listItems = this.state.filteredItems.map((item) => (
      <div className='card m-2 align-items' key={item.id}>
        <img src={item.url} alt='pc item' className='card-img-top img-thumbnail' style={{ width: '18rem' }} />
        <div className='card-body align-items'>
          <h5 className='card-title'>{item.price} $</h5>
          <p className='card-text'>{item.title}</p>
          <button className='btn btn-outline-dark container-fluid' onClick={() => this.props.addToCart(item)}>Add to cart</button>
        </div>
      </div>
    ))

    return <div className='d-flex flex-row mb-3' >
                <div className="sticky-top" style={{height: '100px' }}>
                <select className="form-select" style={{marginTop: '100px'}} aria-label="Default select example" onChange={this.onFilterChange}>
                  <option value="All" defaultValue>ALL</option>
                  <option value="Gaming laptops">Gaming laptops</option>
                  <option value="Gift cards">Gift cards</option>
                  <option value="Consoles">Consoles</option>
                </select>
                  </div>
                <div className="d-flex flex-wrap container my-5">
                  <h4 className="display-1 m-4">{this.state.filterValue}</h4>
                  <div className="d-flex flex-wrap container my-5">{listItems}</div>
                </div>
            </div> ;
  }
}

export default Item;
