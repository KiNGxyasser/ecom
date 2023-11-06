import React, { Component } from 'react';

class Item extends Component {
  state = {
    filterValue: 'a',
    filteredItems: this.props.products,
  };

  filterItems = (value) => {
    console.log(value)
    if(value === 'a'){
      return this.props.products
    }else {
      return Object.values(this.props.products).filter((i)=>(
        i.tagId === parseInt(value)
      ))
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
                  <option value="a" defaultValue>ALL</option>
                  <option value="0">Gaming laptops</option>
                  <option value="1">Gift cards</option>
                  <option value="2">Consoles</option>
                </select>
                  </div>
                <div className="d-flex flex-wrap container my-5">
                  <h4 className="display-1 m-4">ALL</h4>
                  <div className="d-flex flex-wrap container my-5">{listItems}</div>
                </div>
            </div> ;
  }
}

export default Item;
