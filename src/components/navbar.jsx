import React, {Component} from 'react';
import Cart from './cart';

class Navbar extends Component {
    render(){
        const cartItemsLength = this.props.cart.length
        const totalPrice = Object.values(this.props.cart).reduce((total, item) => total + (item.quantity * item.price), 0)

    return(

        <nav className="navbar fixed-top bg-body-tertiary">
            <div className="container-fluid">
                <div className='d-flex'>
            <span className="navbar-brand mb-0 h1">Store</span>
            <ul className="navbar-nav">
                <li className="nav-item">
                <button className="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <span className="position-absolute top-100 translate-middle badge rounded-pill bg-danger">
                {cartItemsLength}
                </span>
                </button>
                </li>
            </ul>
                </div>
            
            <div className="offcanvas offcanvas-end" style={{ width: '520px' }} tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">                    <div className="d-grid gap-2">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Total : <span className='fw-bold'>{totalPrice} $</span></h5>
                    <small>you have {cartItemsLength} item(s)</small>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-success" type="button">Checkout</button>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
            <div className="offcanvas-body">
                <Cart cart={this.props.cart} handleIncrement={this.props.handleIncrement} handleDecrement={this.props.handleDecrement} handleDelete={this.props.handleDelete}/>
            </div>
            </div>
            </div>
        </nav>

    )}

}

export default Navbar;