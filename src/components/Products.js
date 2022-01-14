
import { Component } from 'react/cjs/react.production.min';
import Product from './Product';


class Products extends Component {
    render() {
      var {products} = this.props;
      var {onAddToCart} = this.props;
      var {onChangeMessage} = this.props;
      var elmProducts = products.map((product, index) => {
          return <Product product = {product} key = {index} onAddToCart = {onAddToCart} onChangeMessage = {onChangeMessage}></Product>
      });
      return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                {elmProducts}
            </div>
        </section>
      );
    }
}

export default Products;
