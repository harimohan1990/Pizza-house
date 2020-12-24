import React, { Component } from "react";
import { connect } from "react-redux";
import '../components/common/headerfooter.css'
import { addToCart, add, subtract } from "../actions/action";
class ItemList extends Component {
  addToCart = (e, itemname) => {
    this.props.dispatch(addToCart(itemname));
  };

  add = (e, itemname) => {
    this.props.dispatch(add(itemname));
  };

  subtract = (e, itemname) => {
    this.props.dispatch(subtract(itemname));
  };
  render() {
    const { item } = this.props;
    const itemList = item.map((i,j) => {
      return (
        <div className="col-xs-4 col-12 col-md-3" data-cart-product key={j}>
          <div className="thumbnail">
            <div className="caption bg-secondary text-white ">
            <img src={i.img_url} alt="Girl in a jacket" width="200" height="100"/>
            <p>{i.name}</p>
            <p>{i.description}</p>
            <p>{i.rating}</p>
            <p>{i.price}</p>
            {

       i.size.map((index)=>{
         return(
          <select>
            <option>{index.items[0].size}</option>
            <option>{index.items[1].size}</option>
            <option>{index.items[2].size}</option>
          </select>
         )
       })
     
 
    
  

}
   {!i.cartCount ? (
                <button onClick={e => this.addToCart(e, i.itemname)}>
                  Add to cart
                </button>
              ) : (
                <div className="number">
                  <button onClick={e => this.subtract(e, i.itemname)}>-</button>
                  <button>{i.cartCount}</button>
                  <button onClick={e => this.add(e, i.itemname)}>+</button>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    });
    return <div>{itemList}</div>;
  }
}

const mapStateToProps = state => ({
  item: state.products.item,
  cart: state.products.cart,
  total: state.products.total
});

export default connect(mapStateToProps)(ItemList);
