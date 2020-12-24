import React, { Component } from "react";

import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import ItemList from "../Containers/itemList";
import CartList from "../Containers/cartList.js";
import Total from "../Containers/total.js";

import { fetchProducts } from "../actions/fetchData";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (
      <div className="container-sm col-12 container-md container-lg container-xl overflow-hidden">
        <div className="container-sm container-md container-lg container-xl overflow-hidden">
        <Header/>
        </div>
      <div>
        <ItemList />
        <hr />
        <CartList />
        <hr />
        <Total />
        </div>
        <br/>
          <div>
            
          <Footer/>
          </div>
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.products.item,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(Main);
