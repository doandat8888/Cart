
import { Component } from 'react/cjs/react.production.min';

class Message extends Component {
    render() {
      var {message} = this.props;
      return (
        <h3>
          <span className="badge amber darken-2">{message}</span>
        </h3>
      );
    }
}

export default Message;
