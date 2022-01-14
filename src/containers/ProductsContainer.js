
import { Component } from 'react/cjs/react.production.min';
import { connect } from 'react-redux';
import Products from '../components/Products';
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMessage} from '../actions/index';

class ProductsContainer extends Component {
    render() {
      var {products, onAddToCart, onChangeMessage} = this.props;
      return (
          <Products 
              products = {products}
              onAddToCart = {onAddToCart}
              onChangeMessage = {onChangeMessage}
          />
      );
    }
}

ProductsContainer.propTypes = {       //Ràng buộc kiểu của các biến trong mảng products ban đầu
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1)); //Mỗi lần chỉ mua 1 sp
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
