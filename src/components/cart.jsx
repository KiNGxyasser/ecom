import React, { Component } from "react";


class Cart extends Component{
    render(){

        const cartItems = Object.values(this.props.cart).map((item)=>(
    <div className="card mb-3" style={{ maxWidth: '540px' }} key={item.id}>
      <div className="row g-0">
        <div className="col-md-4">
        <img src={item.url} alt='pc item' className='img-fluid rounded-start m-1' style={{ width: '14rem' }} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div>
            <h5 className="card-title m-1">{item.price * item.quantity} $</h5>
            <p className="card-text m-1">{item.title}</p>
            <p className="card-text">
            <button className='btn btn-outline-primary me-1' onClick={() => this.props.handleDecrement(item)} disabled={item.quantity < 2}>-</button>
            <span>{item.quantity}</span>
            <button className='btn btn-outline-primary m-1' onClick={() => this.props.handleIncrement(item)}>+</button>
            <button className='btn btn-outline-danger m-1' onClick={() => this.props.handleDelete(item)}>Delete</button>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        ))
    return(
            <>{cartItems}</>
        )
    }

}

export default Cart;