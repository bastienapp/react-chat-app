import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";
import { render } from "@testing-library/react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <div className="name">{this.props.name}</div>
          <div
            className="status"
            onClick={(event) => {
              this.setState({
                online: !this.state.online,
              });
            }}
          >
            <span
              className={this.state.online ? "status-online" : "status-offline"}
            />
            <span className="status-text">
              {this.state.online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

export default Contact;
