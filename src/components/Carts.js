
import { Component } from 'react/cjs/react.production.min';
import CartItem from './CartItem';
import CartResult from './CartResult';

class Cart extends Component {
    render() {
      var {carts, onRemoveFromCart, onChangeMessage, onUpdateUpCart, onUpdateDownCart} = this.props;
      var elmCart = carts.map((cart, index) => {
          return <CartItem cart = {cart} key = {index} onRemoveFromCart = {onRemoveFromCart} onChangeMessage = {onChangeMessage} onUpdateUpCart = {onUpdateUpCart} onUpdateDownCart = {onUpdateDownCart}/>
      });
      return (
        <section className="section">
          <div className="table-responsive">
            <table className="table product-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Sản Phẩm</th>
                  <th>Giá</th>
                  <th>Số Lượng</th>
                  <th>Tổng Cộng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {elmCart}
                <CartResult carts = {carts}/>
              </tbody>
            </table>
          </div>
        </section>
      );
    }
}

export default Cart;
