import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Header from './components/Header';
//import Message from './components/Message';
import MessageContainer from './containers/MessageContainer';
//import Cart from './components/Carts';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';

class App extends Component {
    render() {
      return (
          <div>
              <Header />
              <main id="mainContainer">
                  <div className="container">
                     
                      <ProductsContainer />
                      
                      <MessageContainer />
                      
                      <CartContainer />
                  </div>
              </main>
              
              <Footer />
          </div>
      )
    }
}

export default App;
