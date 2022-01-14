
import { Component } from 'react/cjs/react.production.min';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carts from '../components/Carts';
import * as messages from '../constants/Message';
import {actChangeMessage, actRemoveFromCart, actUpdateUpCart, actUpdateDownCart} from '../actions/index';

class CartContainer extends Component {
    render() {
        var result = <tr>
            <td>{messages.MSG_CART_EMPTY}</td>
        </tr>
        var {carts, onRemoveFromCart, onChangeMessage, onUpdateUpCart, onUpdateDownCart} = this.props;
        if(carts.length > 0) {
            result = <Carts carts = {carts} onRemoveFromCart = {onRemoveFromCart} onChangeMessage = {onChangeMessage} onUpdateUpCart = {onUpdateUpCart} onUpdateDownCart = {onUpdateDownCart}/>
        }
        return result;
    }
}

CartContainer.propTypes = {       //Ràng buộc kiểu của các biến trong mảng products ban đầu
    cart: PropTypes.arrayOf(PropTypes.shape({
        products: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    }))
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onRemoveFromCart: (cart) => {
            dispatch(actRemoveFromCart(cart, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateUpCart: (cart) => {
            dispatch(actUpdateUpCart(cart, 1));
        },
        onUpdateDownCart: (cart) => {
            dispatch(actUpdateDownCart(cart, 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
