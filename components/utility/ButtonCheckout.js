import React from "react";
import { STATE_CHECKOUT, STATE_AVAILABLE } from "../../utils/constants";

class ButtonCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { available: this.props.available, bookId: this.props.bookId };

    this.handleClick = this.handleClick.bind(this);
  }
  async handleClick(e) {
    e.preventDefault();
    let apiState = this.state.available ? STATE_CHECKOUT : STATE_AVAILABLE;
    fetch(`/api/books/setState/${this.props.bookId}?state=${apiState}`).then(
      (res) => {
        if (res.status == 400) {
          alert(`Sorry, the book's status is already ${apiState}`);
        } else if (res.status == 404) {
          alert("That book could not be found.");
        } else {
          this.setState({ available: !this.state.available });
        }
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.available !== prevProps.available)
      this.setState({ available: this.props.available });
  }

  render() {
    if (this.state.available)
      return (
        <a
          onClick={this.handleClick}
          className="px-2 py-1 bg-yellow-600 text-white font-bold rounded cursor-pointer"
        >
          Check Out
        </a>
      );
    else
      return (
        <a
          onClick={this.handleClick}
          className="px-2 py-1 bg-green-500 text-white font-bold rounded cursor-pointer"
        >
          Return
        </a>
      );
  }
}

export default ButtonCheckout;
